import fs from "fs";
import path from "path";

const API = "https://overfast-api.tekrop.fr";

const heroesDir = path.join("public", "heroes");
const abilitiesDir = path.join("public", "abilities");

fs.mkdirSync(heroesDir, { recursive: true });
fs.mkdirSync(abilitiesDir, { recursive: true });


function cleanName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}


async function downloadImage(url, filePath) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  fs.writeFileSync(filePath, buffer);
}


async function main() {
  console.log("Getting heroes...");

  const response = await fetch(`${API}/heroes`);

  if (!response.ok) {
    throw new Error("Could not fetch heroes");
  }

  const heroes = await response.json();

  console.log(`Found ${heroes.length} heroes.`);


  for (const hero of heroes) {

    const heroKey = hero.key;
    const heroName = hero.name;

    console.log(`\nDownloading ${heroName}...`);

    const heroResponse =
      await fetch(`${API}/heroes/${heroKey}`);

    const heroData = await heroResponse.json();


    // -------------------------
    // HERO IMAGE
    // -------------------------

    if (heroData.portrait) {

      const heroFile =
        path.join(
          heroesDir,
          `${heroName}_Hero.png`
        );

      await downloadImage(
        heroData.portrait,
        heroFile
      );

      console.log("  ✓ Hero image");
    }


    // -------------------------
    // ABILITIES
    // -------------------------

    const heroAbilityDir =
      path.join(
        abilitiesDir,
        cleanName(heroName)
      );

    fs.mkdirSync(
      heroAbilityDir,
      { recursive: true }
    );


    for (const ability of heroData.abilities ?? []) {

      if (!ability.icon) continue;

      const abilityName =
        cleanName(ability.name);

      const filePath =
        path.join(
          heroAbilityDir,
          `${abilityName}.png`
        );

      await downloadImage(
        ability.icon,
        filePath
      );

      console.log(
        `  ✓ ${ability.name}`
      );
    }
  }

  console.log("\nDONE!");
}


main().catch((error) => {
  console.error(error);
  process.exit(1);
});
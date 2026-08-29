import fs from "fs";
import path from "path";

const root = process.cwd();

const abilitiesDir = path.join(root, "public", "abilities");
const ultsDir = path.join(root, "public", "ults");

// ======================================================
// CURRENT OVERWATCH ULTIMATES
// ======================================================

const ultMap = {
  ana: ["nano-boost.png"],

  anran: [
    "vermillion-ascent.png",
    "vermillion-revival.png",
  ],

  ashe: ["b-o-b.png"],

  baptiste: ["amplification-matrix.png"],

  bastion: ["configuration-artillery.png"],

  brigitte: ["rally.png"],

  cassidy: ["deadeye.png"],

  // D.Mon has different ultimate states
  dmon: [
    "limit-break.png",
    "call-mech.png",
  ],

  // D.Va also has different ultimate states
  "d.va": [
    "self-destruct.png",
    "call-mech.png",
  ],

  domina: ["panopticon.png"],

  doomfist: ["meteor-strike.png"],

  echo: ["duplicate.png"],

  emre: ["override-protocol.png"],

  freja: ["bola-shot.png"],

  genji: ["dragonblade.png"],

  hanzo: ["dragonstrike.png"],

  hazard: ["downpour.png"],

  illari: ["captive-sun.png"],

  "jetpack-cat": ["catnapper.png"],

  "junker-queen": ["rampage.png"],

  junkrat: ["rip-tire.png"],

  juno: ["orbital-ray.png"],

  kiriko: ["kitsune-rush.png"],

  lifeweaver: ["tree-of-life.png"],

  lucio: ["sound-barrier.png"],

  mauga: ["cage-fight.png"],

  mei: ["blizzard.png"],

  mercy: ["valkyrie.png"],

  mizuki: ["kekkai-sanctuary.png"],

  moira: ["coalescence.png"],

  orisa: ["terra-surge.png"],

  pharah: ["barrage.png"],

  ramattra: ["annihilation.png"],

  reaper: ["death-blossom.png"],

  reinhardt: ["earthshatter.png"],

  roadhog: ["whole-hog.png"],

  shion: ["satsuriku-spree.png"],

  sierra: ["trailblazer.png"],

  sigma: ["gravitic-flux.png"],

  sojourn: ["overclock.png"],

  "soldier-76": ["tactical-visor.png"],

  sombra: ["emp.png"],

  symmetra: ["photon-barrier.png"],

  torbjorn: ["molten-core.png"],

  tracer: ["pulse-bomb.png"],

  vendetta: ["sundering-blade.png"],

  venture: ["tectonic-shock.png"],

  widowmaker: ["infra-sight.png"],

  winston: ["primal-rage.png"],

  "wrecking-ball": ["minefield.png"],

  wuyang: ["tidal-blast.png"],

  zarya: ["graviton-surge.png"],

  zenyatta: ["transcendence.png"],
};

// ======================================================
// DRY RUN
// ======================================================
//
// true  = only show what will happen
// false = actually move/delete files
//

const DRY_RUN = false;

// ======================================================

function exists(file) {
  return fs.existsSync(file);
}

console.log("");
console.log("======================================");
console.log("      OVERWATCH ULT ORGANIZER");
console.log("======================================");
console.log("");

for (const [hero, ultFiles] of Object.entries(ultMap)) {
  const heroAbilitiesDir = path.join(
    abilitiesDir,
    hero
  );

  const heroUltsDir = path.join(
    ultsDir,
    hero
  );

  console.log(`\n${hero}`);
  console.log("--------------------------------------");

  if (!exists(heroAbilitiesDir)) {
    console.log("⚠️ abilities folder not found");
    continue;
  }

  // --------------------------------------------------
  // Check requested ult files
  // --------------------------------------------------

  for (const ultFile of ultFiles) {
    const source = path.join(
      heroAbilitiesDir,
      ultFile
    );

    if (exists(source)) {
      console.log(`✅ Ult found: ${ultFile}`);
    } else {
      console.log(`❌ MISSING: ${ultFile}`);
    }
  }

  // --------------------------------------------------
  // Show what is currently inside ults/
  // --------------------------------------------------

  if (exists(heroUltsDir)) {
    const currentUltFiles = fs
      .readdirSync(heroUltsDir)
      .filter((file) => {
        const filePath = path.join(
          heroUltsDir,
          file
        );

        return fs.statSync(filePath).isFile();
      });

    for (const file of currentUltFiles) {
      if (!ultFiles.includes(file)) {
        console.log(
          `🗑️ Will remove from ults: ${file}`
        );
      }
    }
  }

  // --------------------------------------------------
  // DRY RUN
  // --------------------------------------------------

  if (DRY_RUN) {
    continue;
  }

  // --------------------------------------------------
  // Create ults/<hero>
  // --------------------------------------------------

  fs.mkdirSync(heroUltsDir, {
    recursive: true,
  });

  // --------------------------------------------------
  // Remove incorrect files from ults/<hero>
  // --------------------------------------------------

  const currentFiles = fs
    .readdirSync(heroUltsDir)
    .filter((file) => {
      const filePath = path.join(
        heroUltsDir,
        file
      );

      return fs.statSync(filePath).isFile();
    });

  for (const file of currentFiles) {
    if (!ultFiles.includes(file)) {
      fs.unlinkSync(
        path.join(heroUltsDir, file)
      );
    }
  }

  // --------------------------------------------------
  // Move the correct ult files
  // --------------------------------------------------

  for (const ultFile of ultFiles) {
    const source = path.join(
      heroAbilitiesDir,
      ultFile
    );

    const destination = path.join(
      heroUltsDir,
      ultFile
    );

    if (!exists(source)) {
      continue;
    }

    fs.copyFileSync(
      source,
      destination
    );

    fs.unlinkSync(source);

    console.log(
      `📦 Moved: ${ultFile}`
    );
  }
}

console.log("");
console.log("======================================");

if (DRY_RUN) {
  console.log(
    "DRY RUN: NOTHING WAS CHANGED."
  );

  console.log("");
  console.log(
    "If everything looks correct,"
  );

  console.log(
    "change DRY_RUN to false and run again."
  );
} else {
  console.log("DONE.");
}

console.log("======================================");
console.log("");
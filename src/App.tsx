import { useState } from "react";
import { toPng } from "html-to-image";

import { heroes } from "./data/heroes";

// ============================================================
// TYPES
// ============================================================

type KillEventType = "normal" | "melee" | "ability" | "ultimate";

type HeroSelectorProps = {
  value: string;
  onChange: (hero: string) => void;
};

// ============================================================
// HERO SELECTOR
// ============================================================

function HeroSelector({ value, onChange }: HeroSelectorProps) {
  const [open, setOpen] = useState(false);

  const selectedHero = heroes.find((hero) => hero.name === value);

  return (
    <div className="hero-selector">
      {/* Selected Hero */}

      <button
        type="button"
        className="hero-selector-button"
        onClick={() => setOpen(!open)}
      >
        {selectedHero && (
          <img
            src={selectedHero.icon}
            alt={selectedHero.name}
            className="hero-selector-icon"
          />
        )}

        <span className="hero-selector-name">{selectedHero?.name}</span>

        <span className="hero-selector-arrow">{open ? "▲" : "▼"}</span>
      </button>

      {/* Hero List */}

      {open && (
        <div className="hero-selector-menu">
          {heroes.map((hero) => (
            <button
              type="button"
              key={hero.name}
              className={
                hero.name === value ? "hero-option selected" : "hero-option"
              }
              onClick={() => {
                onChange(hero.name);
                setOpen(false);
              }}
            >
              <img
                src={hero.icon}
                alt={hero.name}
                className="hero-option-icon"
              />

              <span>{hero.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// APP
// ============================================================

function App() {
  // ==========================================================
  // STATE
  // ==========================================================

  const [killerHero, setKillerHero] = useState("Tracer");

  const [victimHero, setVictimHero] = useState("Roadhog");

  const [killerName, setKillerName] = useState("Issam");

  const [victimName, setVictimName] = useState("Brain");

  const [killEvent, setKillEvent] = useState<KillEventType>("normal");

  const [headshot, setHeadshot] = useState(false);
  const [killStreak, setKillStreak] = useState(1);

const killStreakIcon =
  killStreak >= 6
    ? "/abilities/streak-6.png"
    : killStreak >= 2
      ? `/abilities/streak-${killStreak}.png`
      : null;
  const [selectedAbility, setSelectedAbility] = useState("");

  const [selectedUlt, setSelectedUlt] = useState("");

  // ==========================================================
  // HERO DATA
  // ==========================================================

  const selectedKiller = heroes.find((hero) => hero.name === killerHero);

  const selectedVictim = heroes.find((hero) => hero.name === victimHero);

  // ==========================================================
  // KILL FEED ABILITIES / ULTIMATES
  // ==========================================================

  const killFeedAbilities =
    selectedKiller?.abilities.filter((ability) => ability.killFeed) ?? [];

  const killFeedUlts = selectedKiller?.ults.filter((ult) => ult.killFeed) ?? [];

  // ==========================================================
  // AUTOMATICALLY SELECT FIRST ABILITY / ULT
  // ==========================================================

  const handleKillerHeroChange = (hero: string) => {
    setKillerHero(hero);

    const newHero = heroes.find((h) => h.name === hero);

    const abilities =
      newHero?.abilities.filter((ability) => ability.killFeed) ?? [];

    const ults = newHero?.ults.filter((ult) => ult.killFeed) ?? [];

    setSelectedAbility(abilities[0]?.name ?? "");

    setSelectedUlt(ults[0]?.name ?? "");
  };


  // ==========================================================
  // SELECTED EVENT DATA
  // ==========================================================

  const selectedAbilityData = selectedKiller?.abilities.find(
    (ability) => ability.name === selectedAbility,
  );

  const selectedUltData = selectedKiller?.ults.find(
    (ult) => ult.name === selectedUlt,
  );

  // ==========================================================
  // EXPORT PNG
  // ==========================================================

  const exportPNG = async () => {
    const killFeed = document.querySelector(".kill-feed") as HTMLElement | null;

    if (!killFeed) {
      console.error("Kill feed not found");

      return;
    }

    try {
      const dataUrl = await toPng(killFeed, {
        pixelRatio: 3,
        backgroundColor: "transparent",
      });

      const link = document.createElement("a");

      link.download = "overwatch-killfeed.png";

      link.href = dataUrl;

      link.click();
    } catch (error) {
      console.error("Failed to export PNG:", error);
    }
  };

  // ==========================================================
  // PREVIEW
  // ==========================================================

  const renderKillFeed = () => {
    return (
      <div className="preview">
        <div className="kill-feed">
            {/* KILL STREAK */}

 
          {/* KILLER */}

<div className="player-section killer-section">

  {killStreakIcon && (
    <img
      src={killStreakIcon}
      alt="Kill Streak"
      className="kill-streak-icon"
    />
  )}

  <span className="player-name">
    {killerName}
  </span>

  <div className="hero-box">

    <img
      src={selectedKiller?.icon}
      alt={killerHero}
      className="hero-icon"
    />

  </div>

</div>

          {/* KILL ICON */}

          <div className={`kill-icon ${killEvent === "ultimate" ? "ultimate-active" : ""}`}>
            {/* ABILITY */}

            {killEvent === "ability" && selectedAbilityData && (
              <img
                src={selectedAbilityData.icon}
                alt={selectedAbilityData.name}
                className="kill-event-extra"
              />
            )}

            {/* ULTIMATE */}

            {killEvent === "ultimate" && selectedUltData && (
  <div className="ultimate-kill-icon">
    <div className="ultimate-disc">
      <img
        src={selectedUltData.icon}
        alt={selectedUltData.name}
      />
    </div>
  </div>
)}
            {/* MELEE */}

            {killEvent === "melee" && (
              <img
                src="/abilities/melee.png"
                alt="Melee"
                className="kill-event-extra"
              />
            )}

            {/* HEADSHOT */}

            {headshot && (
              <img
                src="/abilities/headshot.png"
                alt="Headshot"
                className="kill-event-extra"
              />
            )}

            {/* ARROW */}

            <img src="/abilities/arrow.png" alt="Kill" className="kill-arrow" />
          </div>

          {/* VICTIM */}

          <div className="player-section victim-section">
            <div className="hero-box">
              <img
                src={selectedVictim?.icon}
                alt={victimHero}
                className="hero-icon"
              />
            </div>

            <span className="player-name">{victimName}</span>
          </div>
        </div>
      </div>
    );
  };

  // ==========================================================
  // EDITOR
  // ==========================================================

const renderEditor = () => {
  return (
    <section className="editor-section">

      <div className="section-title editor-title">
        EDIT KILLFEED
      </div>

      <div className="editor-grid">

        {/* =========================
            KILLER
        ========================= */}

        <div className="editor-column killer-column">

          <h3>KILLER</h3>

          <input
            type="text"
            value={killerName}
            onChange={(e) =>
              setKillerName(e.target.value)
            }
            className="text-input"
          />

          <h3>HERO</h3>

          <HeroSelector
            value={killerHero}
            onChange={handleKillerHeroChange}
          />

        </div>


        {/* =========================
            KILL ICON / STREAK
        ========================= */}

        <div className="editor-column event-column">

          {/* KILL STREAK */}

          <div className="event-title">
            KILL STREAK
          </div>

          <div className="streak-selector">

            {[1, 2, 3, 4, 5, 6].map(
              (streak) => (

                <button
                  key={streak}
                  type="button"
                  className={
                    killStreak === streak
                      ? "streak-button active"
                      : "streak-button"
                  }
                  onClick={() =>
                    setKillStreak(streak)
                  }
                >
                  {streak === 6
                    ? "6+"
                    : streak}
                </button>

              )
            )}

          </div>


          {/* KILL ICON */}

          <div className="event-title">
            KILL ICON
          </div>

          <div className="event-tabs">

            <button
              type="button"
              className={
                killEvent === "normal"
                  ? "event-tab active"
                  : "event-tab"
              }
              onClick={() =>
                setKillEvent("normal")
              }
            >
              NORMAL
            </button>


            <button
              type="button"
              className={
                killEvent === "melee"
                  ? "event-tab active"
                  : "event-tab"
              }
              onClick={() =>
                setKillEvent("melee")
              }
            >
              MELEE
            </button>


            <button
              type="button"
              className={
                killEvent === "ability"
                  ? "event-tab active"
                  : "event-tab"
              }
              onClick={() => {
                setKillEvent("ability");

                setSelectedAbility(
                  killFeedAbilities[0]?.name ?? ""
                );
              }}
            >
              ABILITY
            </button>


            <button
              type="button"
              className={
                killEvent === "ultimate"
                  ? "event-tab active"
                  : "event-tab"
              }
              onClick={() => {
                setKillEvent("ultimate");

                setSelectedUlt(
                  killFeedUlts[0]?.name ?? ""
                );
              }}
            >
              ULTIMATE
            </button>

          </div>


          {/* ABILITY SELECT */}

          {killEvent === "ability" && (
            <div className="event-select">

              <label>
                ABILITY
              </label>

              <select
                value={selectedAbility}
                onChange={(e) =>
                  setSelectedAbility(
                    e.target.value
                  )
                }
                className="select-input"
              >

                {killFeedAbilities.map(
                  (ability) => (
                    <option
                      key={ability.name}
                      value={ability.name}
                    >
                      {ability.name}
                    </option>
                  )
                )}

              </select>

            </div>
          )}


          {/* ULTIMATE SELECT */}

          {killEvent === "ultimate" && (
            <div className="event-select">

              <label>
                ULTIMATE
              </label>

              <select
                value={selectedUlt}
                onChange={(e) =>
                  setSelectedUlt(
                    e.target.value
                  )
                }
                className="select-input"
              >

                {killFeedUlts.map(
                  (ult) => (
                    <option
                      key={ult.name}
                      value={ult.name}
                    >
                      {ult.name}
                    </option>
                  )
                )}

              </select>

            </div>
          )}


          {/* HEADSHOT */}

          <div className="checkbox-row">

            <label className="checkbox-option">

              <input
                type="checkbox"
                checked={headshot}
                onChange={(e) =>
                  setHeadshot(
                    e.target.checked
                  )
                }
              />

              <span>
                HEADSHOT
              </span>

            </label>

          </div>

        </div>


        {/* =========================
            VICTIM
        ========================= */}

        <div className="editor-column victim-column">

          <h3>VICTIM</h3>

          <input
            type="text"
            value={victimName}
            onChange={(e) =>
              setVictimName(e.target.value)
            }
            className="text-input"
          />

          <h3>HERO</h3>

          <HeroSelector
            value={victimHero}
            onChange={setVictimHero}
          />

        </div>

      </div>

    </section>
  );
};

  // ==========================================================
  // FOOTER
  // ==========================================================

  const renderFooter = () => {
    return (
      <footer className="footer">
        <div className="footer-line">
          Game, assets &amp; data from <strong>OVERWATCH</strong>
          {" · "}
          <a href="https://overwatch.blizzard.com/en-us/" target="_blank" rel="noreferrer">
            Overwatch
          </a>
          {" · "}
          <a href="https://overwatch.fandom.com/wiki/Overwatch_Wiki" target="_blank" rel="noreferrer">
            Overwatch Wiki
          </a>
        </div>

        <div className="footer-line">
          Font <strong>Jost</strong>
          {" · "}
<a
  href="https://github.com/Issam-8/overwatch-killfeed-generator"
  target="_blank"
  rel="noreferrer"
>
  Source on GitHub
</a>
        </div>

        <div className="footer-disclaimer">
          Not affiliated with or endorsed by Blizzard Entertainment.
        </div>
        <div className="footer-socials">

  <a
    href="https://x.com/IssamEam2"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
    𝕏
  </a>

  <a
    href="https://ko-fi.com/iss4m8"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
    ☕ Support
  </a>

</div>
      </footer>
    );
  };

  // ==========================================================
  // MAIN UI
  // ==========================================================

  return (
    <div className="app">
      {/* HEADER */}

      <header className="header">
        <div className="brand">
          <div className="brand-mark">
  <img
    src="/logo.png"
    alt="Killfeed"
  />
</div>

          <div>
            <div className="brand-title">KILLFEED</div>

            <div className="brand-subtitle">OVERWATCH GENERATOR</div>
          </div>
        </div>

        <button className="export-button" onClick={exportPNG}>
          EXPORT PNG
        </button>
      </header>

      {/* PREVIEW */}

      <section className="preview-section preview-sticky">
        <div className="section-title">PREVIEW</div>

        {renderKillFeed()}
      </section>

      {/* EDITOR */}

      {renderEditor()}

      {/* FOOTER */}

      {renderFooter()}
    </div>
  );
}

export default App;

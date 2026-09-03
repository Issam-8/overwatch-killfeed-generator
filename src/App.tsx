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

const [assistCount, setAssistCount] = useState(0);

const [assistHero1, setAssistHero1] = useState("");

const [assistHero2, setAssistHero2] = useState("");
const [assistHero3, setAssistHero3] = useState("");
const [assistHero4, setAssistHero4] = useState("");

  const [killEvent, setKillEvent] = useState<KillEventType>("normal");

  const [headshot, setHeadshot] = useState(false);
  const [killStreak, setKillStreak] = useState(1);

const [killerColor, setKillerColor] = useState("#238da3");
const [killerHeroColor, setKillerHeroColor] = useState("#176477");

const [victimColor, setVictimColor] = useState("#aa1f3d");
const [victimHeroColor, setVictimHeroColor] = useState("#74142a");

const [colorStyle, setColorStyle] = useState("style1");
const applyColorStyle = (style: string) => {
  setColorStyle(style);

  // STYLE 1 — CLASSIC
  if (style === "style1") {
    setKillerColor("#238da3");
    setKillerHeroColor("#176477");

    setVictimColor("#aa1f3d");
    setVictimHeroColor("#74142a");
  }



  // STYLE 3 — PURPLE / PINK
  if (style === "style3") {
    setKillerColor("#7446c7");
    setKillerHeroColor("#4a2d82");

    setVictimColor("#d43f7a");
    setVictimHeroColor("#8f2852");
  }

  // STYLE 4 — GOLD / CRIMSON
  if (style === "style4") {
    setKillerColor("#d69e2e");
    setKillerHeroColor("#91681f");

    setVictimColor("#b8324a");
    setVictimHeroColor("#7a2131");
  }

  // STYLE 5 — ICE / FIRE
  if (style === "style5") {
    setKillerColor("#32b8c6");
    setKillerHeroColor("#217b85");

    setVictimColor("#e94b35");
    setVictimHeroColor("#9e3325");
  }

  // STYLE 6 — CYBER
  if (style === "style6") {
    setKillerColor("#00bfa5");
    setKillerHeroColor("#007d6d");

    setVictimColor("#ff4fa3");
    setVictimHeroColor("#a8326b");
  }
};
const reverseColors = () => {
  const currentKillerColor = killerColor;
  const currentKillerHeroColor = killerHeroColor;

  setKillerColor(victimColor);
  setKillerHeroColor(victimHeroColor);

  setVictimColor(currentKillerColor);
  setVictimHeroColor(currentKillerHeroColor);
};

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
const selectedAssist1 = heroes.find(
  (hero) => hero.name === assistHero1
);

const selectedAssist2 = heroes.find(
  (hero) => hero.name === assistHero2
);

const selectedAssist3 = heroes.find(
  (hero) => hero.name === assistHero3
);

const selectedAssist4 = heroes.find(
  (hero) => hero.name === assistHero4
);

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

{/* KILLER + ASSISTS */}
<div
  className="killer-group"
  style={{ backgroundColor: killerColor }}
>
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

    <div
      className="hero-box"
      style={{ backgroundColor: killerHeroColor }}
    >
      <img
        src={selectedKiller?.icon}
        alt={killerHero}
        className="hero-icon"
      />
    </div>
  </div>

  {/* ASSISTS */}
  {assistCount >= 1 && selectedAssist1 && (
    <div
      className="assist-hero-box"
      style={{ backgroundColor: killerHeroColor }}
    >
      <img
        src={selectedAssist1.icon}
        alt={selectedAssist1.name}
        className="assist-hero-icon"
      />
    </div>
  )}

  {assistCount >= 2 && selectedAssist2 && (
    <div
      className="assist-hero-box"
      style={{ backgroundColor: killerHeroColor }}
    >
      <img
        src={selectedAssist2.icon}
        alt={selectedAssist2.name}
        className="assist-hero-icon"
      />
    </div>
  )}
  {/* ASSIST 3 */}
{assistCount >= 3 && selectedAssist3 && (
  <div
    className="assist-hero-box"
    style={{ backgroundColor: killerHeroColor }}
  >
    <img
      src={selectedAssist3.icon}
      alt={selectedAssist3.name}
      className="assist-hero-icon"
    />
  </div>
)}

{/* ASSIST 4 */}
{assistCount >= 4 && selectedAssist4 && (
  <div
    className="assist-hero-box"
    style={{ backgroundColor: killerHeroColor }}
  >
    <img
      src={selectedAssist4.icon}
      alt={selectedAssist4.name}
      className="assist-hero-icon"
    />
  </div>
)}
</div>

{/* KILL ICON */}
        {/* KILL ICON */}
        <div
          className={`kill-icon ${
            killEvent === "ultimate" ? "ultimate-active" : ""
          }`}
        >
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
          <img
            src="/abilities/arrow.png"
            alt="Kill"
            className="kill-arrow"
          />
        </div>

        {/* VICTIM */}
        <div
          className="player-section victim-section"
          style={{ backgroundColor: victimHeroColor }}
        >
          <div className="hero-box" style={{ backgroundColor: victimColor }}>
            <img
              src={selectedVictim?.icon}
              alt={victimHero}
              className="hero-icon"
            />
          </div>

          <span className="player-name">
            {victimName}
          </span>
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
      <div className="section-title editor-title">EDIT KILLFEED</div>

      {/* MAIN EDITOR CARDS */}
      <div className="editor-cards">
        {/* =========================
            PLAYERS CARD
        ========================= */}
        <div className="editor-card players-card">
          <div className="editor-card-title">PLAYERS</div>

          {/* KILLER */}
          <div className="editor-group">
            <h3>KILLER</h3>

            <input
              type="text"
              value={killerName}
              onChange={(e) => setKillerName(e.target.value)}
              className="text-input"
            />

            <h3>HERO</h3>

            <HeroSelector
              value={killerHero}
              onChange={handleKillerHeroChange}
            />
          </div>

          {/* ASSISTS */}
          <div className="editor-group assists-group">
            <h3>ASSISTS</h3>

<div className="assist-count-controls">
  {[0, 1, 2, 3, 4].map((count) => (
    <button
      key={count}
      type="button"
      className={assistCount === count ? "active" : ""}
      onClick={() => setAssistCount(count)}
    >
      {count}
    </button>
  ))}
</div>

            {/* ASSIST 1 */}
            {assistCount >= 1 && (
              <div className="assist-editor">
                <h3>ASSIST 1 HERO</h3>

                <HeroSelector
                  value={assistHero1}
                  onChange={setAssistHero1}
                />
              </div>
            )}

            {/* ASSIST 2 */}
            {assistCount >= 2 && (
              <div className="assist-editor">
                <h3>ASSIST 2 HERO</h3>

                <HeroSelector
                  value={assistHero2}
                  onChange={setAssistHero2}
                />
              </div>
            )}
{/* ASSIST 3 */}
{assistCount >= 3 && (
  <div className="assist-editor">
    <h3>ASSIST 3 HERO</h3>

    <HeroSelector
      value={assistHero3}
      onChange={setAssistHero3}
    />
  </div>
)}

{/* ASSIST 4 */}
{assistCount >= 4 && (
  <div className="assist-editor">
    <h3>ASSIST 4 HERO</h3>

    <HeroSelector
      value={assistHero4}
      onChange={setAssistHero4}
    />
  </div>
)}

          </div>

          {/* VICTIM */}
          <div className="editor-group victim-group">
            <h3>VICTIM</h3>

            <input
              type="text"
              value={victimName}
              onChange={(e) => setVictimName(e.target.value)}
              className="text-input"
            />

            <h3>HERO</h3>

            <HeroSelector
              value={victimHero}
              onChange={setVictimHero}
            />
          </div>
        </div>

        {/* =========================
            KILL CARD
        ========================= */}
        <div className="editor-card kill-card">
          <div className="editor-card-title">KILL</div>

          {/* KILL STREAK */}
          <div className="kill-setting-group">
            <div className="event-title">KILL STREAK</div>

            <div className="streak-selector">
              {[1, 2, 3, 4, 5, 6].map((streak) => (
                <button
                  key={streak}
                  type="button"
                  className={
                    killStreak === streak
                      ? "streak-button active"
                      : "streak-button"
                  }
                  onClick={() => setKillStreak(streak)}
                >
                  {streak === 6 ? "6+" : streak}
                </button>
              ))}
            </div>
          </div>

          {/* KILL ICON */}
          <div className="kill-setting-group">
            <div className="event-title">KILL ICON</div>

            <div className="event-tabs">
              <button
                type="button"
                className={
                  killEvent === "normal"
                    ? "event-tab active"
                    : "event-tab"
                }
                onClick={() => setKillEvent("normal")}
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
                onClick={() => setKillEvent("melee")}
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
          </div>

          {/* ABILITY SELECT */}
          {killEvent === "ability" && (
            <div className="event-select">
              <label>ABILITY</label>

              <select
                value={selectedAbility}
                onChange={(e) =>
                  setSelectedAbility(e.target.value)
                }
                className="select-input"
              >
                {killFeedAbilities.map((ability) => (
                  <option
                    key={ability.name}
                    value={ability.name}
                  >
                    {ability.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ULTIMATE SELECT */}
          {killEvent === "ultimate" && (
            <div className="event-select">
              <label>ULTIMATE</label>

              <select
                value={selectedUlt}
                onChange={(e) =>
                  setSelectedUlt(e.target.value)
                }
                className="select-input"
              >
                {killFeedUlts.map((ult) => (
                  <option
                    key={ult.name}
                    value={ult.name}
                  >
                    {ult.name}
                  </option>
                ))}
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
                  setHeadshot(e.target.checked)
                }
              />

              <span>HEADSHOT</span>
            </label>
          </div>
        </div>
      </div>

{/* =========================
    COLORS
========================= */}
<div className="colors-section">
  <div className="event-title">COLOR STYLE</div>
  <div className="colors-header">
  <div className="event-title">COLOR STYLE</div>

  <button
    type="button"
    className="reverse-colors-button"
    onClick={reverseColors}
  >
    ↔ REVERSE
  </button>
</div>

  <div className="color-style-grid">

    {/* STYLE 1 */}
    <button
      type="button"
      className={
        colorStyle === "style1"
          ? "color-style-card active"
          : "color-style-card"
      }
      onClick={() => applyColorStyle("style1")}
    >
      <div className="style-preview">
        <span
          className="style-color killer-preview"
          style={{ backgroundColor: "#238da3" }}
        />

        <span
          className="style-color victim-preview"
          style={{ backgroundColor: "#aa1f3d" }}
        />
      </div>

      <span className="style-name">
        STYLE 1
      </span>

      <span className="style-description">
        CLASSIC
      </span>
    </button>

    {/* STYLE 2 */}
<button
  type="button"
  className={
    colorStyle === "style3"
      ? "color-style-card active"
      : "color-style-card"
  }
  onClick={() => applyColorStyle("style3")}
>
  <div className="style-preview">
    <span
      className="style-color"
      style={{ backgroundColor: "#7446c7" }}
    />

    <span
      className="style-color"
      style={{ backgroundColor: "#d43f7a" }}
    />
  </div>

  <span className="style-name">
    STYLE 2
  </span>

  <span className="style-description">
    PURPLE / PINK
  </span>
</button>


{/* STYLE 3 */}
<button
  type="button"
  className={
    colorStyle === "style4"
      ? "color-style-card active"
      : "color-style-card"
  }
  onClick={() => applyColorStyle("style4")}
>
  <div className="style-preview">
    <span
      className="style-color"
      style={{ backgroundColor: "#d69e2e" }}
    />

    <span
      className="style-color"
      style={{ backgroundColor: "#b8324a" }}
    />
  </div>

  <span className="style-name">
    STYLE 3
  </span>

  <span className="style-description">
    GOLD / CRIMSON
  </span>
</button>


{/* STYLE 5 */}
<button
  type="button"
  className={
    colorStyle === "style5"
      ? "color-style-card active"
      : "color-style-card"
  }
  onClick={() => applyColorStyle("style5")}
>
  <div className="style-preview">
    <span
      className="style-color"
      style={{ backgroundColor: "#32b8c6" }}
    />

    <span
      className="style-color"
      style={{ backgroundColor: "#e94b35" }}
    />
  </div>

  <span className="style-name">
    STYLE 5
  </span>

  <span className="style-description">
    ICE / FIRE
  </span>
</button>


{/* STYLE 6 */}
<button
  type="button"
  className={
    colorStyle === "style6"
      ? "color-style-card active"
      : "color-style-card"
  }
  onClick={() => applyColorStyle("style6")}
>
  <div className="style-preview">
    <span
      className="style-color"
      style={{ backgroundColor: "#00bfa5" }}
    />

    <span
      className="style-color"
      style={{ backgroundColor: "#ff4fa3" }}
    />
  </div>

  <span className="style-name">
    STYLE 6
  </span>

  <span className="style-description">
    CYBER
  </span>
</button>

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
          <a
            href="https://overwatch.blizzard.com/en-us/"
            target="_blank"
            rel="noreferrer"
          >
            Overwatch
          </a>
          {" · "}
          <a
            href="https://overwatch.fandom.com/wiki/Overwatch_Wiki"
            target="_blank"
            rel="noreferrer"
          >
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
            <img src="/logo.png" alt="Killfeed" />
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

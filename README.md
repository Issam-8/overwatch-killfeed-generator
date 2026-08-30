# KILLFEED — Overwatch Generator

A web-based Overwatch-inspired Kill Feed Generator that allows users to create and export custom kill feed visuals.

## 🎮 About

KILLFEED is a fan-made tool created to make it easy to generate custom Overwatch-style kill feed graphics.

Choose a hero, enter player names, select the type of elimination, add abilities or ultimates, enable headshots, choose a kill streak, and instantly see the result in the live preview.

The generated kill feed can then be exported as a PNG image.

## ✨ Features

### Heroes

- Select the killer hero
- Select the victim hero
- Hero icons are displayed directly in the interface
- Hero-specific abilities and ultimates are available when supported

### Player Names

- Customize the killer name
- Customize the victim name
- Names are displayed in uppercase in the kill feed preview

### Elimination Types

The generator supports different elimination types:

- Normal
- Melee
- Ability
- Ultimate

Each type can display its corresponding icon in the kill feed.

### Abilities

When an ability-based elimination is selected, the available kill-feed abilities for the selected hero can be chosen from the editor.

### Ultimates

When an ultimate elimination is selected, the available kill-feed ultimates for the selected hero can be selected.

### Headshots

A headshot indicator can be enabled independently and displayed in the kill feed.

### Kill Streaks

The generator supports kill streak indicators:

| Kill Streak | Display |
|-------------|---------|
| 1 | No streak icon |
| 2 | 2 Kill Streak |
| 3 | 3 Kill Streak |
| 4 | 4 Kill Streak |
| 5 | 5 Kill Streak |
| 6+ | 6 Kill Streak |

The 6 Kill Streak icon is used for any streak of 6 or higher.

### Live Preview

The kill feed is displayed in real time while editing.

Changes to:

- Killer name
- Killer hero
- Victim name
- Victim hero
- Elimination type
- Ability
- Ultimate
- Headshot
- Kill streak

are reflected in the preview.

### PNG Export

The generated kill feed can be exported as a PNG image directly from the application.

The project uses `html-to-image` to generate the exported image.

## 🖥️ Interface

The application is divided into several sections:

### Preview

The live Kill Feed preview is displayed at the top of the application.

### Editor

The editor allows you to customize the kill feed.

The editor is organized into:

- Killer
- Kill Icon
- Kill Streak
- Victim

### Killer

Customize:

- Player name
- Hero

### Kill Icon

Choose between:

- Normal
- Melee
- Ability
- Ultimate

Depending on the selected type, the corresponding ability or ultimate selector is displayed.

### Victim

Customize:

- Player name
- Hero

## 🛠️ Built With

This project was built using:

- React
- TypeScript
- Vite
- CSS
- html-to-image

## 📂 Project Structure

```text
overwatch-killfeed/
│
├── public/
│   │
│   ├── abilities/
│   │   ├── arrow.png
│   │   ├── headshot.png
│   │   ├── streak-2.png
│   │   ├── streak-3.png
│   │   ├── streak-4.png
│   │   ├── streak-5.png
│   │   └── streak-6.png
│   │
│   ├── alts/
│   │
│   ├── heroes/
│   │
│   └── fonts/
│
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── ...
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
└── README.md

## 🔗 Connect & Support

Have feedback, suggestions, or ideas for the project?  
I'd love to hear them.

- 🐦 **X:** [@IssamEam2](https://x.com/IssamEam2)
- ☕ **Ko-fi:** [Support the project](https://ko-fi.com/iss4m8)
- 🌐 **Website:** [owkillfeed.iss4m.online](https://owkillfeed.iss4m.online)

Your feedback helps shape future updates and improvements.

Thank you for supporting the project! ❤️
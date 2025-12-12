# Changelog: T4 Gear Tiers & Russian Language Support v1.5

**Release Date:** December 12, 2025

Version 1.5 introduces support for the new **T4 Gear Tier System**, including all four T4 tiers (T4-0 through T4-3) with complete material data, and adds **Russian language** support to the platform.

---

### ✨ Major Features & Improvements

-   **T4 Gear Tier System**

    -   Added complete T4 tier progression data for all 6 Chief Gear pieces
    -   Includes all four T4 tiers: **T4-0**, **T4-1**, **T4-2**, and **T4-3**
    -   Each tier contains 5 upgrade levels with accurate material requirements sourced from the official wiki
    -   Updated gear simulator to support up to **level 62** (previously capped at 42)
    -   T4-0: 24,000 Hardened Alloy, 300 Polishing Solution, 50 Design Plans, 8 Lunar Amber per level
    -   T4-1: 28,000 Hardened Alloy, 330 Polishing Solution, 55 Design Plans, 8 Lunar Amber per level
    -   T4-2: 32,000 Hardened Alloy, 360 Polishing Solution, 60 Design Plans, 8 Lunar Amber per level
    -   T4-3: 36,000 Hardened Alloy, 390 Polishing Solution, 65 Design Plans, 8 Lunar Amber per level

-   **Internationalization (i18n) Expansion**
    -   Added **Russian language** support with complete translations across all pages and simulators
    -   Added level translations for T4 tiers in all languages (English, Indonesian, Japanese, Russian)
    -   Level 43-62 translations now display as "Legendary T4-0" through "Legendary T4-3 (4-⭐)" instead of generic level numbers
    -   Updated language selector dropdown in all HTML files to include **Русский** option

---

### 🔧 Technical Updates

-   Created comprehensive Russian translation file (`assets/data/ru.json`) with 168 translation keys
-   Updated all three HTML files (`index.html`, `gears-simulator.html`, `charms-simulator.html`) with Russian language option

---

### 📊 Data Updates

-   **gears.json**: Expanded from 3,639 to 5,318 lines with T4 tier data for all 6 gear pieces
-   **Translation files**: Added 20 new level translation keys (levels 43-62) to all language files

---

# Changelog: Interactive Modals & UX Overhaul v1.4

**Release Date:** June 23, 2025

Version 1.4 is a significant user experience (UX) and quality-of-life update, focusing on a complete overhaul of the modal system and introducing highly interactive components for setting levels in both simulators.

---

### ✨ Major Features & Improvements

-   **Interactive Level Selector**

    -   Replaced standard number inputs in the "Set Start Levels" modal with a fully custom, interactive dropdown component for both **Gear and Charm simulators**.
    -   Dropdown options now display the corresponding **Gear or Charm icon**, making level selection more intuitive and visual.
    -   The new dropdowns are "smart" and will **automatically open** if there is not enough space below, preventing the list from being cut off.

-   **UI/UX Enhancements**

    -   Scrollbars within all modals are now **custom-styled** to match the application's dark theme, creating a more polished and unified look.
    -   Alert/notification modals have an **improved layout** with better spacing for visual consistency.

-   **Internationalization (i18n) Expansion**
    -   Added comprehensive translations for all 42 gear rarity levels.
    -   Added new keys and translations for gear slot names (`Cap`, `Coat`, etc.) across all supported languages.

---

### 🐞 Critical Bug Fixes & Optimizations

-   **[FATAL] Fixed Background Scrolling Bug**

    -   Resolved a critical UX bug where the main page body could still be scrolled when a modal was active. The background is now correctly "locked" by applying an `overflow: hidden` class to the `<body>` element.

-   **Complete Modal System Overhaul**
    -   Fixed a major layout issue where modal content (headers or buttons) could be pushed off-screen. Modals are now always perfectly centered, with **internal content scrolling** independently.
    -   All modal open/close events were refactored to use a centralized JavaScript function (`showModal`/`hideModal`), ensuring consistent behavior and preventing bugs.

---

# Changelog: Charm Simulator, Visual Overhaul & Multilingual Update v1.3

**Release Date:** June 21, 2025

Version 1.3 is a major update introducing the all-new **Charm Simulator**, a complete **visual overhaul**, **multilingual support**, and numerous bug fixes and UX improvements.

---

### ✨ Major Features

-   **Charm Simulator**

    -   New simulation tool for planning upgrades across 18 Charm Paths (6 Gear Types × 3 Paths each).
    -   Dynamic material cost calculation per level from `charms.json`.
    -   Independent system for adding, tracking, and resetting Charm-specific materials.
    -   "Set Level" feature via modal to configure levels of all 18 paths individually.
    -   Added real-time level display (`Lv. X`) under each Charm slot.

-   **Multilingual Support**

    -   Real-time language switching: English (`en`), Indonesian (`id`), Japanese (`ja`).
    -   Built-in global translation engine (`i18n.js`) for all scripts.
    -   Language preference is saved in `localStorage` for returning users.

-   **UI Overhaul & Landing Page**
    -   Rebuilt homepage as a landing page with Features and Profile Card sections.
    -   Clear call-to-action buttons leading directly to the simulator.

---

### 🛠️ Improvements & Bug Fixes

-   **UI/UX Enhancements**

    -   Improved text color logic for materials (Green = sufficient, Red = lacking, Gray = inactive).

-   **Mobile Responsiveness**
    -   Fixed oversized gear preview images on small devices.

---

# Changelog: Chief Gear Simulator v1.2

**Release Date:** June 7, 2025

---

Version 1.2 is a major update focusing on a complete visual overhaul, critical bug fixes, and an overall improvement in user experience on both desktop and mobile.

## ✨ New Features & Visual Enhancements

### 🎨 Complete UI Overhaul

-   Replaced the old color theme with a modern, clean, and professional **Violet & Indigo** palette.
-   Introduced a **gradient effect** on key elements like titles and buttons for a premium look.
-   Implemented the **Poppins** font from Google Fonts for improved typography across the site.

### 🏠 Completely New Homepage

-   Restructured the homepage from a single block of text into a structured **landing page** with several sections: Hero, Features, and a Donation Card.
-   Removed the main navigation header and replaced it with a minimalist design (logo only at the top) for a more focused experience.
-   Added a clear **call-to-action button** within the description card to direct users straight to the simulator.

### 🌟 Interactive Icon Animations

-   Added hover animations to the feature icons on the homepage.
-   The gear icon (`fa-cogs`) now features **counter-rotating gears** for a realistic mechanical effect, implemented using a custom SVG.
-   The shield icon (`fa-shield-alt`) now emits a subtle "aura" or _glow_ effect.

### 🔄 Improved User Flow

-   The simulator page now includes a clear "**Back to Home**" button, replacing the header navigation for a more intuitive flow.
-   Reorganized the positioning of action buttons (⚙️, 🔄, 🧹) for a cleaner layout and easier access.

---

## 🚀 Bug Fixes & Optimizations

-   **[FATAL] Fixed Zero-Material Upgrade Bug:** Corrected a critical bug where users could upgrade gear even with zero required materials. The material validation logic has been restored to the stable, original version.

-   **[FATAL] Fixed Gear Preview Position Bug:**

    -   Completely removed the unstable JavaScript-based positioning method (`updateGearPreviewPosition`) that caused the preview to jump or be misplaced.
    -   Replaced it with a **pure CSS method** (`position` + `transform`) that guarantees a perfectly centered and stable preview on all devices.

-   **Fixed "Set Start Levels" Modal Sync Bug:** Resolved an issue where the modal did not display the most recent gear levels after an upgrade.

-   **Fixed Modals Not Appearing Bug:** Corrected a JavaScript logic error where some modals would not appear. This was fixed by restoring the modal's inner HTML content.

-   **Comprehensive Mobile Responsive Fixes:**

    -   Adjusted font sizes, padding, and margins across the simulator page for a clean layout on small screens.
    -   Ensured the gear layout no longer touches the screen edges.
    -   Corrected the size of the preview image, which was previously too large on mobile devices.

-   **Other Improvements:**
    -   Fixed the spacing between star icons (⭐) on the gear display.
    -   Ensured all sound effects (click, upgrade) are working correctly again.
    -   Created a single, self-contained `gears.css` file to handle all styling for the simulator page, avoiding conflicts.

// ============================================================
// config.js — the only file you need to edit
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // PROFILE
  // ----------------------------------------------------------
  skipEntryScreen: true,          // ОТКЛЮЧАЕТ стартовый экран со звездой (сайт откроется сразу)
  profileName:   "i6w9",      // name shown on the card
  nameTooltip:   "wtff",         // tooltip on hover over the name
  nameEffect:    "noise",         // "noise" = TV interference | "none" = plain text
  statusText:    "^_^ ?? ^_^ ??", // text below the name (typewriter effect)
  tabTitle:      "@it6was9",      // animated browser tab title
  entrySymbol:   "⛧",            // symbol shown on the entry screen

  // ----------------------------------------------------------
  // FILES — place them in assets/ with these exact names
  // ----------------------------------------------------------
  avatar:              "assets/avatar.png",
  backgroundVideo:     "assets/background.mp4",
  customCursor:        "assets/cursor.png",
  customCursorHotspot: "0 0",    // "0 0" = tip of the cursor (top-left corner)

  // ----------------------------------------------------------
  // AVATAR
  // ----------------------------------------------------------
  avatarSize:       "118px",
  // animated Discord-style decoration — leave "" to disable
  avatarDecoration: "",

  // ----------------------------------------------------------
  // BADGES / ROLES
  // Add, remove or reorder. "icon" = path inside assets/badges/
  // ----------------------------------------------------------
  badges: [
    { icon: "assets/badges/owner.png",    label: "Owner"    },
  ],
  badgeSize:                "18px",
  badgeContainerBackground: "rgba(255, 255, 255, 0.04)", // Стильный полупрозрачный серый фон
  badgeContainerBorder:     "1px solid rgba(255, 255, 255, 0.1)", // Тонкая серая обводка (1px смотрится изящнее)

  // ----------------------------------------------------------
  // DISCORD (static — no API, edit manually)
  // ----------------------------------------------------------
  discordUsername: "tearmyveins",
  discordStatus:   "сидел под прокси в пять утра",
  discordAvatar:   "assets/discord-avatar.jpg",
  discordAvatarSize:   "74px",
  discordAvatarBorder: "2px solid rgba(255, 255, 255, 0.2)",
  // status: "online" | "idle" | "dnd" | "offline"
  discordPresenceStatus: "idle",

  // ----------------------------------------------------------
  // SOCIAL LINKS
  // Add, remove or reorder. "icon" = path inside assets/icons/
  // ----------------------------------------------------------
  socialLinks: [
    { name: "Telegram", url: "https://t.me/kiriokoo",         icon: "assets/icons/instagram.png" },
  ],
  iconSize:         "105px",
  iconBorderRadius: "8px",
  iconGlowColor:    "#ffffff",

  // ----------------------------------------------------------
  // CARD
  // ----------------------------------------------------------
  cardMaxWidth:        "35rem",
  cardBorderRadius:    "24px",     // Изменено на аккуратные современные углы вместо круглых 85px
  cardBackground:      "rgba(255, 255, 255, 0.05)",
  cardBorder:          "none",
  cardRevealDelay:     300,        // ms between entry click and card appearance
  cardTiltIntensity:   2,         // Уменьшаем силу наклона до минимума (было 5)
  cardTiltPerspective: "3000px",  // Делаем 3D-искажение очень мягким и далеким (было 1500px)


  // ----------------------------------------------------------
  // DISCORD BOX (presence box inside the card)
  // ----------------------------------------------------------
  discordBoxBackground: "rgba(255, 255, 255, 0.04)", // Приятный полупрозрачный серый фон
  discordBoxRadius:     "14px",                      // Оставляем аккуратные углы
  discordBoxBorder:     "1px solid rgba(255, 255, 255, 0.1)", // Тонкая серая обводка (1px смотрится изящнее)

  // ----------------------------------------------------------
  // COLORS / STYLE
  // ----------------------------------------------------------
  usernameGlow: "0 0 16.5px #ffffff", // name glow ("none" to disable)

  // ----------------------------------------------------------
  // BACKGROUND PARTICLES
  // ----------------------------------------------------------
  particleColor: "#aaaaaa",
  particleCount:            70,
  particleFallDuration:     10,    // seconds to cross the screen top to bottom
  particleSwayDuration:     3,     // seconds per horizontal sway cycle
  particleSwayAmount:       80,    // pixels of horizontal sway
  particleParallaxStrength: 0.08,  // mouse parallax strength (0 = disabled)

  // ----------------------------------------------------------
  // CURSOR TRAIL
  // ----------------------------------------------------------
  shootingStarColors:     ["#ffffff", "#cccccc", "#aaaaaa"],
  shootingStarSize:         3,
  shootingStarMaxParticles: 4,     // particles spawned per mouse movement
  shootingStarFadeFrames:   30,    // frames until each particle fades out
  shootingStarGlow:         8,     // glow intensity around each sparkle

};

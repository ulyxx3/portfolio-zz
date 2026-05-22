/* =====================================================
   DATA.JS — Portfolio ULYXX3
   Toutes les données du site (projets, socials, skills)
   Chargé avant script.js dans toutes les pages HTML.

   Pour modifier les données :
   - Ajouter un projet : ajouter un objet dans le tableau projets
   - Ajouter un réseau : ajouter une ligne dans socials
   - Ajouter un skill  : ajouter une chaîne dans skills
===================================================== */

// ─── PROJETS ──────────────────────────────────────────
// Mis à jour depuis l'API GitHub (Ulyxx3, StreamMusicViewer, BUT-MMI)
//
// Chaque projet a les propriétés :
//   nom        {string}  — titre affiché
//   desc       {string}  — description courte
//   tech       {Array}   — langages/outils utilisés
//   completion {number}  — % de complétion (0-100)
//   url        {string}  — lien GitHub du projet
//   org        {string}  — filtre : "personnel" | "stream" | "mmi"
//   stars      {number}  — nombre d'étoiles GitHub
//   site       {string}  — (optionnel) lien vers le site live
//   fork       {boolean} — (optionnel) true si c'est un fork

var projets = [

  // ── Personnel · @Ulyxx3 ───────────────────────────
  {
    nom: "VERSUSITE",
    desc: "Site pour créer des versus entre choses que tu aimes et décider ton préféré de tous les temps",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 95,
    url: "https://github.com/Ulyxx3/VersuSite",
    org: "personnel",
    stars: 6,
    site: "https://ulyxx3.github.io/VersuSite/"
  },
  {
    nom: "OFFSHADES",
    desc: "Pack de shaders Minecraft mixant Photon, Complementary et Iteration",
    tech: ["GLSL"],
    completion: 60,
    url: "https://github.com/Ulyxx3/OffShades",
    org: "personnel",
    stars: 6
  },
  {
    nom: "ANTMAP",
    desc: "GPS utilisant l'algorithme ACO (Ant Colony Optimization) pour trouver le meilleur chemin",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/Ulyxx3/antmap",
    org: "personnel",
    stars: 1
  },
  {
    nom: "PORTFOLIO (P3 Edition)",
    desc: "Portfolio thème Persona 3 — React, Framer Motion, CSS",
    tech: ["JavaScript", "React", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/portfolio",
    org: "personnel",
    stars: 5,
    site: "https://ulyxx3.github.io/portfolio/"
  },
  {
    nom: "RUSTHIA",
    desc: "Reimplementation du jeu de rythme Rhythia en Rust",
    tech: ["Rust"],
    completion: 30,
    url: "https://github.com/Ulyxx3/Rusthia",
    org: "personnel",
    stars: 1
  },
  {
    nom: "LG-DISCORD",
    desc: "Loups-Garous de Thiercelieux sur Discord avec un bot maître du jeu",
    tech: ["Python"],
    completion: 75,
    url: "https://github.com/Ulyxx3/lg-discord",
    org: "personnel",
    stars: 1
  },
  {
    nom: "ULYXX3.GITHUB.IO",
    desc: "Portfolio R.E.P.O. — Next.js, TypeScript, Framer Motion",
    tech: ["TypeScript", "React"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ulyxx3.github.io",
    org: "personnel",
    stars: 0,
    site: "https://ulyxx3.github.io/"
  },
  {
    nom: "ANI-CLI-FR",
    desc: "Fork de ani-cli pour regarder des animes en VF/VOSTFR depuis le terminal (5 ★)",
    tech: ["Shell", "Python"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ani-cli-fr",
    org: "personnel",
    stars: 5,
    fork: true
  },
  {
    nom: "DLFR",
    desc: "Fonctions Google Spreadsheets pour la Demonlist française (Geometry Dash)",
    tech: ["JavaScript"],
    completion: 100,
    url: "https://github.com/Ulyxx3/DLFR",
    org: "personnel",
    stars: 0
  },
  {
    nom: "BOUSSOLED",
    desc: "Application web de boussole interactive",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/Boussoled",
    org: "personnel",
    stars: 0,
    site: "https://ulyxx3.github.io/Boussoled/"
  },
  {
    nom: "CLIENT RHYTHIA",
    desc: "Fork du client du jeu de rythme Rhythia (aim-based), contribué en C# / Godot",
    tech: ["C#", "Godot"],
    completion: 50,
    url: "https://github.com/Ulyxx3/Client",
    org: "personnel",
    stars: 1,
    fork: true
  },

  // ── StreamMusicViewer ─────────────────────────────
  {
    nom: "OSMV",
    desc: "Extension OBS 'Now Playing' en Rust — musique en cours sur Windows & Linux (3 ★)",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/OSMV",
    org: "stream",
    stars: 3,
    site: "https://streammusicviewer.github.io/site/"
  },
  {
    nom: "OSMV-LITE",
    desc: "Extension OBS 'Now Playing' légère en C++ via Windows Media Control (5 ★)",
    tech: ["C++"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/OSMV-lite",
    org: "stream",
    stars: 5,
    site: "https://streammusicviewer.github.io/site/"
  },
  {
    nom: "SMV SITE",
    desc: "Site vitrine de l'organisation StreamMusicViewer",
    tech: ["HTML", "CSS", "JavaScript"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/site",
    org: "stream",
    stars: 2,
    site: "https://streammusicviewer.github.io/site/"
  },

  // ── BUT-MMI ───────────────────────────────────────
  {
    nom: "POKEDEXIA",
    desc: "Pokédex interactif et soigné — SAE-105 BUT MMI (2 ★)",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/BUT-MMI/Pokedexia",
    org: "mmi",
    stars: 2,
    site: "https://but-mmi.github.io/Pokedexia/"
  },
  {
    nom: "DARK PATTERNS",
    desc: "Site parodique sur les dark patterns UX — SAE BUT MMI (2 ★)",
    tech: ["PHP", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/BUT-MMI/DarkPatterns",
    org: "mmi",
    stars: 2,
    site: "https://ulyxx3.github.io/DarkPatterns/"
  },
  {
    nom: "SAE_203",
    desc: "Projet SAE 203 — application PHP avec base de données MySQL",
    tech: ["PHP", "MySQL"],
    completion: 100,
    url: "https://github.com/BUT-MMI/SAE_203",
    org: "mmi",
    stars: 1
  }

];

// ─── RÉSEAUX SOCIAUX ──────────────────────────────────
// Propriétés : nom, handle, icone (caractère unicode), url

var socials = [
  { nom: "GitHub",    handle: "@Ulyxx3",   icone: "⌨", url: "https://github.com/Ulyxx3" },
  { nom: "YouTube",   handle: "@Ulyxx3",   icone: "▶", url: "https://youtube.com/@Ulyxx3" },
  { nom: "Twitter/X", handle: "@Ulyxx3",   icone: "✕", url: "https://twitter.com/Ulyxx3" },
  { nom: "Instagram", handle: "@ulyxx3",   icone: "◈", url: "https://instagram.com/ulyxx3" },
  { nom: "Pinterest", handle: "@ulyxx3",   icone: "⌘", url: "https://pinterest.com/ulyxx3" },
  { nom: "TikTok",    handle: "@ulyxx3",   icone: "◉", url: "https://tiktok.com/@ulyxx3" },
  { nom: "Twitch",    handle: "@ulyxx3_tv",icone: "◈", url: "https://twitch.tv/ulyxx3_tv" },
  { nom: "Discord",   handle: "La Zone",   icone: "◇", url: "https://discord.gg/spbY6W6" },
  { nom: "Bluesky",   handle: "@ulyxx3",   icone: "☁", url: "https://bsky.app/profile/ulyx.bsky.social" },
  { nom: "Spotify",   handle: "ulyxx3",    icone: "♪", url: "https://open.spotify.com/user/dgf8lor4hfrja7en32jytw2n3" },
  { nom: "Ko-fi",     handle: "ulyxx3",    icone: "☕", url: "https://ko-fi.com/ulyxx3" },
  { nom: "Backloggd", handle: "@ulyxx3",   icone: "◈", url: "https://backloggd.com/u/Ulyxx3/" }
];

// ─── COMPÉTENCES ──────────────────────────────────────
var skills = [
  "HTML", "CSS", "JavaScript", "PHP", "SQL", "Rust",
  "Python", "Shell", "React", "Godot", "GLSL",
  "Premiere", "After Effects", "Illustrator", "Clip Studio"
];

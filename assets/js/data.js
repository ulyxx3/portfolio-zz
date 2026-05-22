/* =====================================================
   DATA.JS — Portfolio ULYXX3
   Toutes les données du site
===================================================== */

// PROJETS
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
//   image      {string}  — nom du fichier image dans assets/img

var projets = [

  // Personnel
  {
    nom: "VERSUSITE",
    desc: "Site pour créer des versus entre choses que tu aimes et décider ton préféré de tous les temps",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 95,
    url: "https://github.com/Ulyxx3/VersuSite",
    org: "personnel",
    stars: 6,
    site: "https://ulyxx3.github.io/VersuSite/",
    image: "VersuSite.png"
  },
  {
    nom: "OFFSHADES",
    desc: "Pack de shaders Minecraft mixant Photon, Complementary et Iteration",
    tech: ["GLSL"],
    completion: 60,
    url: "https://github.com/Ulyxx3/OffShades",
    org: "personnel",
    stars: 6,
    image: "photon-shader.webp"
  },
  {
    nom: "ANTMAP",
    desc: "GPS utilisant l'algorithme ACO (Ant Colony Optimization) pour trouver le meilleur chemin",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/Ulyxx3/antmap",
    org: "personnel",
    stars: 1,
    image: "antmap.png"
  },
  {
    nom: "PORTFOLIO (R.E.P.O.)",
    desc: "Portfolio Theme REPO — React, Framer Motion, CSS",
    tech: ["JavaScript", "React", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/portfolio",
    org: "personnel",
    stars: 5,
    site: "https://ulyxx3.github.io/portfolio/",
    image: "portfolio_REPO.png"
  },
  {
    nom: "RUSTHIA",
    desc: "Reimplementation du jeu de rythme Rhythia en Rust",
    tech: ["Rust"],
    completion: 30,
    url: "https://github.com/Ulyxx3/Rusthia",
    org: "personnel",
    stars: 1,
    image: "Rusthia.png"
  },
  {
    nom: "LG-DISCORD",
    desc: "Loups-Garous de Thiercelieux sur Discord avec un bot maître du jeu",
    tech: ["Python"],
    completion: 75,
    url: "https://github.com/Ulyxx3/lg-discord",
    org: "personnel",
    stars: 1,
    image: "LG.png"
  },
  {
    nom: "ULYXX3.GITHUB.IO",
    desc: "Portfolio Theme Futuriste + Inspiration Persona 3 Reload — Next.js, TypeScript, Framer Motion",
    tech: ["TypeScript", "React"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ulyxx3.github.io",
    org: "personnel",
    stars: 0,
    site: "https://ulyxx3.github.io/",
    image: "ulyxx3-github-io.png"
  },
  {
    nom: "ANI-CLI-FR",
    desc: "Fork de ani-cli pour regarder des animes en VF/VOSTFR depuis le terminal",
    tech: ["Shell", "Python"],
    completion: 100,
    url: "https://github.com/Ulyxx3/ani-cli-fr",
    org: "personnel",
    stars: 5,
    fork: true,
    image: "ani-cli.png"
  },
  {
    nom: "DLFR",
    desc: "Fonctions Google Spreadsheets pour la Demonlist française (Geometry Dash)",
    tech: ["Apps Script", "Google Sheets"],
    completion: 100,
    url: "https://github.com/Ulyxx3/DLFR",
    org: "personnel",
    stars: 0,
    image: "demonlist.png"
  },
  {
    nom: "BOUSSOLED",
    desc: "Application web de boussole interactive",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/Ulyxx3/Boussoled",
    org: "personnel",
    stars: 0,
    site: "https://ulyxx3.github.io/Boussoled/",
    image: "Boussoled.png"
  },
  {
    nom: "CLIENT RHYTHIA",
    desc: "Fork du client du jeu de rythme Rhythia (aim-based), contribué en C# / Godot",
    tech: ["C#", "Godot"],
    completion: 50,
    url: "https://github.com/Ulyxx3/Client",
    org: "personnel",
    stars: 1,
    fork: true,
    image: "rhythia.jpg"
  },

  // StreamMusicViewer
  {
    nom: "OSMV",
    desc: "Extension OBS 'Now Playing' en Rust — musique en cours sur Windows & Linux",
    tech: ["Rust"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/OSMV",
    org: "stream",
    stars: 3,
    site: "https://streammusicviewer.github.io/site/",
    image: "OSMV.png"
  },
  {
    nom: "OSMV-LITE",
    desc: "Extension OBS 'Now Playing' légère en C++ via Windows Media Control",
    tech: ["C++"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/OSMV-lite",
    org: "stream",
    stars: 5,
    site: "https://streammusicviewer.github.io/site/",
    image: "OSMV-lite.png"
  },
  {
    nom: "OSMV SITE",
    desc: "Site vitrine de l'organisation StreamMusicViewer",
    tech: ["HTML", "CSS", "JavaScript"],
    completion: 100,
    url: "https://github.com/StreamMusicViewer/site",
    org: "stream",
    stars: 2,
    site: "https://streammusicviewer.github.io/site/",
    image: "OSMV-site.png"
  },

  // BUT-MMI
  {
    nom: "POKEDEXIA",
    desc: "Pokédex interactif et soigné — SAE-105 BUT MMI",
    tech: ["JavaScript", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/BUT-MMI/Pokedexia",
    org: "mmi",
    stars: 2,
    site: "https://but-mmi.github.io/Pokedexia/",
    image: "Pokedexia.png"
  },
  {
    nom: "DARK PATTERNS",
    desc: "Site parodique sur les dark patterns UX — SAE BUT MMI",
    tech: ["PHP", "HTML", "CSS"],
    completion: 100,
    url: "https://github.com/BUT-MMI/DarkPatterns",
    org: "mmi",
    stars: 2,
    site: "https://ulyxx3.github.io/DarkPatterns/",
    image: "DarkPatterns.png"
  },
  {
    nom: "SAE_203",
    desc: "Projet SAE 203 — application PHP avec base de données MySQL",
    tech: ["PHP", "MySQL"],
    completion: 100,
    url: "https://github.com/BUT-MMI/SAE_203",
    org: "mmi",
    stars: 1,
    image: "CroustiMovies.png"
  }
];

// CRÉATIONS
// Chaque création a les propriétés :
//   titre      {string}  — titre affiché
//   cat        {string}  — catégorie et date (ex: "2D Animation · 2026")
//   desc       {string}  — description courte
//   tags       {Array}   — outils/tags utilisés
//   meta       {string}  — info méta en bas de carte (ex: "BUT-MMI · 2026")
//   ytId       {string}  — ID de la vidéo YouTube (ex: "_ZD-fT-YSIE")
//   featured   {boolean} — true si affiché en vedette sur l'accueil
var creations = [
  {
    titre: "Animation 2D — BUT MMI 1",
    titreCourt: "Animation 2D — MMI1",
    cat: "2D Animation · 2026",
    desc: "Projet d'animation 2D réalisé en première année de BUT MMI. Exploration des fondamentaux du mouvement et de l'animation image par image.",
    tags: ["Clip Studio Paint", "Projet académique"],
    meta: "BUT-MMI · 2026",
    ytId: "_ZD-fT-YSIE",
    featured: true
  },
  {
    titre: "L'espace et le Temps",
    cat: "Animation · Concours · 2024",
    desc: "Animation réalisée pour le Concours des Beaux-Arts d'Aix-en-Provence sur le thème « L'espace et le temps ».",
    tags: ["Adobe Animate", "After Effects"],
    meta: "Beaux-Arts Aix · 2024",
    ytId: "aa9eG3QiZ28",
    featured: true
  },
  {
    titre: "Animation 2D — L1 Arts Plastiques",
    cat: "2D Animation · 2025",
    desc: "Projet d'animation réalisé en première année de Licence Arts Plastiques. Techniques mixtes combinant dessin traditionnel et composition numérique.",
    tags: ["Adobe Animate", "After Effects"],
    meta: "L1 Arts · 2025",
    ytId: "7kaqRD_RNAw",
    featured: false
  },
  {
    titre: "Vidéo Dystopique — VFX",
    titreCourt: "Vidéo Dystopique",
    cat: "VFX · Montage · 2025",
    desc: "Vidéo dystopique sur le thème de la surveillance de masse. Effets visuels numériques et montage narratif immersif.",
    tags: ["Premiere Pro", "After Effects"],
    meta: "L1 Arts · 2025",
    ytId: "4luvSpc8-rc",
    featured: true
  }
];

// RÉSEAUX SOCIAUX

var socials = [
  { nom: "GitHub", handle: "@Ulyxx3", icone: "⌨", url: "https://github.com/Ulyxx3" },
  { nom: "YouTube", handle: "@Ulyxx3", icone: "▶", url: "https://youtube.com/@Ulyxx3" },
  { nom: "Twitter/X", handle: "@Ulyxx3", icone: "✕", url: "https://twitter.com/Ulyxx3" },
  { nom: "Instagram", handle: "@ulyxx3", icone: "◈", url: "https://instagram.com/ulyxx3" },
  { nom: "Pinterest", handle: "@ulyxx3", icone: "⌘", url: "https://pinterest.com/ulyxx3" },
  { nom: "TikTok", handle: "@ulyxx3", icone: "◉", url: "https://tiktok.com/@ulyxx3" },
  { nom: "Twitch", handle: "@ulyxx3_tv", icone: "◈", url: "https://twitch.tv/ulyxx3_tv" },
  { nom: "Discord", handle: "La Zone", icone: "◇", url: "https://discord.gg/spbY6W6" },
  { nom: "Bluesky", handle: "@ulyxx3", icone: "☁", url: "https://bsky.app/profile/ulyx.bsky.social" },
  { nom: "Spotify", handle: "ulyxx3", icone: "♪", url: "https://open.spotify.com/user/dgf8lor4hfrja7en32jytw2n3" },
  { nom: "Ko-fi", handle: "ulyxx3", icone: "☕", url: "https://ko-fi.com/ulyxx3" },
  { nom: "Backloggd", handle: "@ulyxx3", icone: "◈", url: "https://backloggd.com/u/Ulyxx3/" }
];

// COMPÉTENCES
var skills = [
  "HTML", "CSS", "JavaScript", "PHP", "SQL", "Rust",
  "Python", "Shell", "React", "Godot", "GLSL",
  "Premiere", "After Effects", "Illustrator", "Clip Studio"
];

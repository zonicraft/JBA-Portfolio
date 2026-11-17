// =====================================================================
//  JBA PORTFOLIO — CONTENT
//  Everything on the site is driven from this file. Edit text here,
//  drop new images in /assets, and add a fourth game by copying a block.
//  Lines marked TODO are placeholder copy — replace with the real thing.
// =====================================================================
window.JBA = {
  series: {
    name: "Jorge's Bizarre Adventures",
    short: "JBA",
    tagline: "A reality-altering machine. A few questionable friends. Zero rules.",
    // TODO: one or two sentences about the whole series, in your voice
    about:
      "Jorge and his friends set out on an adventure to get their hands on a reality-altering machine. Once reality became negotiable, things got weird — and the adventures kept coming."
  },

  // shown top-to-bottom sorted by "order"
  games: [
    {
      id: "jba",
      order: "01",
      title: "JBA",
      subtitle: "The Original Adventure",
      status: "Playable",
      platform: "Windows · Android",
      genre: "Visual novel",
      year: "2023",
      developed: "2018 – 2023",
      pitch: "Hunt down a reality-altering machine — and pick one of 15 endings.",
      description:
        "A visual novel following Jorge and his friends on a chaotic quest for a machine that can alter reality. Tipped off by a mysterious info dealer, the gang dives into a story full of bad decisions, absurd detours and rivals, with the FBI on their tail. Every choice pushes the adventure somewhere new, and there are 15 endings to find. Available in Portuguese and English.",
      features: [
        "15 different endings to unlock",
        "Unlockable gallery, character profiles and a music room",
        "Boss fights and mini-games between story scenes",
        "Controller support, on PC and Android",
        "Portuguese and English"
      ],
      endings: 15,
      engine: "Ren'Py",
      version: "English release 1.2",
      landing: { jorge: true, align: "left" },
      colors: { a: "#19e3d0", b: "#ffd23f", ink: "#06262b" },
      logo: "assets/jba/jba_logo.png",
      banner: "assets/jba/game_menu.jpg",
      character: "assets/jba/jorge_4.png",
      icon: "assets/jba/window_icon.png",
      screenshots: [
        { src: "assets/jba/screens/mucanico.jpg" },
        { src: "assets/jba/screens/chadsdontlookatexplosions.jpg" },
        { src: "assets/jba/screens/carrinhakebab.jpg" },
        { src: "assets/jba/screens/acelerador.jpg" }
      ],
      crew: [
        { name: "Jorge", role: "Our hero", text: "A young man with a melancholy life that he is fed up with.", img: "assets/jba/crew/jorge_4.png", bg: "assets/jba/crew/bg/ruaepica.jpg" },
        { name: "Tiago", role: "Kebab maker", text: "Young kebab creator and seller, with extensive universal knowledge.", img: "assets/jba/crew/chartiago.png", bg: "assets/jba/crew/bg/cavetiago.jpg" },
        { name: "Moreira", role: "Margem Sul's second in command", text: "Second in command of all illegal activity on the Margem Sul, usually found in Ginjal enjoying life.", img: "assets/jba/crew/charmoreira.png", bg: "assets/jba/crew/bg/ginjal.jpg" },
        { name: "Nuno", role: "Former streamer", text: "Left streaming to live isolated in a village, growing potatoes and hunting, before joining Jorge.", img: "assets/jba/crew/charnuno.png", bg: "assets/jba/crew/bg/aldeia.jpg" },
        { name: "Gardete", role: "FBI general", text: "General of the FBI's Alpha squad, in charge of the efforts to capture Jorge.", img: "assets/jba/crew/policiadoido.png", bg: "assets/jba/crew/bg/salafbi.jpg" }
      ],
      links: [
        { label: "Play on itch.io", href: "https://zonicraft.itch.io/jba" },
        { label: "VNDB page", href: "https://vndb.org/v43381", secondary: true }
      ]
    },
    {
      id: "origins",
      order: "03",
      title: "JBA: Origins",
      subtitle: "The Roots of the Future",
      status: "Coming soon",
      platform: "Minecraft Java 1.20.1 · Forge",
      genre: "RPG modpack",
      year: "In development",
      developed: "2024 – TBD",
      pitch: "An RPG modpack where you uncover the secrets of a new world while searching for Nuno.",
      description:
        "An RPG modpack for Minecraft Java. Uncover the secrets of a brand-new world alongside Jorge and his friends as they search for Nuno. Find powerful weapons and armor, then keep improving them until nothing can stop you. Still in development, and coming soon.",
      features: [
        "Modpack for Minecraft Java 1.20.1 on Forge",
        "Almost 300 mods",
        "A custom adventure map",
        "Hundreds of quests",
        "Over 70 bosses",
        "Powerful weapons and armor to find and upgrade"
      ],
      landing: { jorge: false, align: "left" },
      colors: { a: "#a259ff", b: "#7dff6b", ink: "#170a2b" },
      logo: "assets/jba origins/jba_origins_logo.png",
      banner: "assets/jba origins/cover image.png",
      character: null,                // no big Jorge on this page
      icon: "assets/jba origins/jba_origins_icon.png",
      crew: [
        { name: "Jorge", role: "Expedition leader", text: "Leads the search for Nuno across a new world full of secrets, getting stronger gear at every step.", img: "assets/jba origins/crew/jorge.png", bg: "assets/jba origins/crew/bg.jpg", full: true },
        { name: "Tiago", role: "Kebab maker", text: "Our walking encyclopedia, who joins the search for Nuno with his extensive universal knowledge.", img: "assets/jba origins/crew/tiago.png", bg: "assets/jba origins/crew/bg.jpg", full: true },
        { name: "Moreira", role: "Second in command", text: "Second in command of the gang, always ready for a fight when the search for Nuno gets dangerous.", img: "assets/jba origins/crew/moreira.png", bg: "assets/jba origins/crew/bg.jpg", full: true },
        { name: "Gardete", role: "FBI general", text: "Brings his FBI general know-how to the search for Nuno.", img: "assets/jba origins/crew/gardete.png", bg: "assets/jba origins/crew/bg.jpg", full: true }
      ],
      links: [
        { label: "View on CurseForge", href: "https://www.curseforge.com/minecraft/modpacks/jba-origins" }
      ]
    },
    {
      id: "pokemon",
      order: "02",
      title: "Pokémon JBA Version",
      subtitle: "Gotta catch all of them",
      status: "Playable",
      platform: "Browser · Windows · Linux · Android",
      genre: "Monster-collecting RPG",
      year: "2026",
      developed: "2021 – 2026",
      pitch: "A FireRed-inspired adventure where the monsters are anime characters.",
      description:
        "A fan-made, FireRed-inspired adventure with an original story and an original map. Instead of Pokémon you collect anime characters, with over 800 of them to find. Play it in your browser, on Windows, Linux or Android, in Portuguese or English. You can also read it in book form.",
      features: [
        "Inspired by Pokémon FireRed",
        "Anime characters instead of Pokémon, over 800 of them",
        "Original story and map",
        "Playable in the browser, on Windows, Linux and Android",
        "Portuguese and English",
        "Also readable in book form"
      ],
      crew: [
        { name: "Jorge", role: "Trainer", text: "Sets out from Pallet Town with a Pokédex and a few Poké Balls, and gets dragged into one bizarre detour after another on the road to the gyms.", sprite: "assets/jba pokemon/crew/jorge.png", bg: "assets/jba pokemon/crew/bg.png" },
        { name: "Gardete", role: "Rival", text: "Picks his partner right after Jorge, challenges him to battles along the way, and keeps turning up at the worst possible moments.", sprite: "assets/jba pokemon/crew/gardete.png", bg: "assets/jba pokemon/crew/bg.png" },
        { name: "Geso", role: "Professor", text: "Hands out the first Pokédex and Poké Balls from his lab, and always has a parcel that needs delivering.", sprite: "assets/jba pokemon/crew/geso.png", bg: "assets/jba pokemon/crew/bg.png" },
        { name: "Moreira", role: "Friend and ally", text: "Helps Geso with his research, waits for Jorge at the end of Viridian Forest, and shows up later with his troops when things get serious.", sprite: "assets/jba pokemon/crew/moreira.png", bg: "assets/jba pokemon/crew/bg.png" },
        { name: "Tiago", role: "Old friend", text: "Sends Jorge off with a delivery for Geso and a promise to stop by the Poké Mart before heading north.", sprite: "assets/jba pokemon/crew/tiago.png", bg: "assets/jba pokemon/crew/bg.png" },
        { name: "Nuno", role: "Eccentric ally", text: "Lives in a house with a weird machine that changes his form, loves his potatoes, and takes Jorge to the Sevii Islands on his boat.", sprite: "assets/jba pokemon/crew/nuno.png", bg: "assets/jba pokemon/crew/bg.png" }
      ],
      landing: { jorge: true, align: "right" },
      colors: { a: "#ffcb05", b: "#3b6fd8", ink: "#0d1b3d" },
      logo: "assets/jba pokemon/menu_logo.png",
      banner: "assets/jba pokemon/menu_bg.jpg",
      character: "assets/jba pokemon/menu_char.png",
      icon: "assets/jba pokemon/icon-512.png",
      links: [
        { label: "Play now", href: "https://zonicraft.github.io/JBA-PK/" },
        { label: "Read the book (Português)", href: "https://drive.google.com/file/d/1_Yac-RwT4q4cfgxAz9JpgjsHh7_ZFm82/view?usp=sharing", secondary: true },
        { label: "Read the book (English)", href: "https://drive.google.com/file/d/1wf56hsoG0pBAwASKji2ZmPKVjY8FMX-M/view?usp=sharing", secondary: true },
        { label: "View on GitHub", href: "https://github.com/zonicraft/JBA-PK", secondary: true }
      ]
    }
  ],

  // Story order of the games (not release order).
  chronology: [
    { id: "jba", note: "Where it all begins: the original adventure." },
    { id: "pokemon", note: "Takes place right before the ending of the original game." },
    { id: "origins", note: "The sequel to JBA, set in a brand-new world." }
  ],
  endingFlag: { after: "pokemon", label: "End of JBA" },

  // (older placeholder chapters, no longer shown) TODO: rewrite in your own words.
  story: [
    { tag: "Chapter 1", title: "The machine", text: "Jorge and his friends hear about a machine that can alter reality — and decide they simply have to have it." },
    { tag: "Chapter 2", title: "The adventure", text: "Across cities and worlds, they chase it down. Nothing goes to plan. Nobody expected it to." },
    { tag: "Chapter 3", title: "Reality, edited", text: "Once the machine works, the rules stop applying — and the bizarre adventures really begin." }
  ],

  // Characters. TODO: add names/roles for the rest of the gang.
  cast: [
    { name: "Jorge", role: "Our hero", img: "assets/jba/jorge_4.png" },
    { name: "Jorge (blocky)", role: "Origins edition", img: "assets/jba origins/jorge.png" },
    { name: "Jorge (Trainer)", role: "Pokémon edition", img: "assets/jba pokemon/menu_char.png" }
  ]
};

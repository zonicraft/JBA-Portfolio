# JBA Portfolio

The official portfolio site for **Jorge's Bizarre Adventures (JBA)**, a series about Jorge and his friends, a reality-altering machine, and the bizarre adventures that follow.

It's a static website (plain HTML, CSS and JavaScript, no build step) that shows the three games of the series, their info, their crews and how they fit together in the story.

## The games

| Game | Type | Platforms | Status |
| --- | --- | --- | --- |
| **JBA** | Visual novel with 15 endings (2018 - 2023) | Windows, Android | Playable |
| **Pokémon JBA Version** | FireRed-inspired monster-collecting RPG (2021 - 2026) | Browser, Windows, Linux, Android | Playable |
| **JBA: Origins** | RPG modpack, *The Roots of the Future* (2024 - TBD) | Minecraft Java 1.20.1, Forge | Coming soon |

Story order: Pokémon JBA Version takes place right before the ending of JBA, and JBA: Origins is the sequel.

## What's on the site

- **Landing page** (`index.html`): the three games stacked as full-width sections, quick-jump dots, a "What is JBA?" video and the series timeline.
- **Game pages** (`game.html?g=jba`, `?g=pokemon`, `?g=origins`): details for each game, its crew, screenshots, links, and the other adventures.
- Each game page has a **crew section** where you pick a character and the text and artwork slide across.
- The JBA page has a **screenshot gallery** with a sliding viewer (arrow buttons, keyboard arrows, swipe).

## Run it locally

Open `index.html` in a browser. Everything works that way, except the embedded YouTube player, which YouTube blocks for pages opened from a file. In that case the page shows the video's thumbnail and opens YouTube when you click it.

To preview with the working player, serve the folder over http, for example:

```
python -m http.server 8000
```

then open <http://localhost:8000>.

## Edit the content

All text lives in **`data.js`**, so you rarely need to touch the other files.

- `series`: the name, tagline and intro text.
- `games`: one block per game (title, status, platforms, genre, year, `developed` dates, description, features, colors, images, links, `crew`, `screenshots`).
- `chronology` and `endingFlag`: the order and notes of the timeline.
- Per-game `landing: { jorge, align }`: whether Jorge appears on the landing panel, and which side the text sits on.

To **add a game**, copy one block in `games`, change its values and add its images to `assets/`.

## Project structure

```
index.html     landing page
game.html      template for every game page
data.js        all the content
script.js      landing page (game panels, dots, timeline, video)
game.js        game pages (crew showcase, screenshots, lightbox)
styles.css     all the styling
assets/        logos, artwork, screenshots, crew art
```

## Publish with GitHub Pages

1. Put the files at the top level of the repository (`index.html` next to `data.js` and the `assets` folder).
2. In the repository, go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
3. The site goes live at `https://<username>.github.io/<repository>/`.

File names are case-sensitive on GitHub Pages, so keep them exactly as they are.

## Links

- JBA: <https://zonicraft.itch.io/jba>
- Pokémon JBA Version: <https://zonicraft.github.io/JBA-PK/> ([source](https://github.com/zonicraft/JBA-PK))
- JBA: Origins: <https://www.curseforge.com/minecraft/modpacks/jba-origins>

## Notes

This is an unofficial, non-commercial fan project. Pokémon is owned by Nintendo, Game Freak and The Pokémon Company, and the project is not affiliated with them.

(() => {
  const D = window.JBA;
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  /* ---------- static content ---------- */
  $("tagline").textContent = D.series.tagline;
  $("about").textContent = D.series.about;
  $("year").textContent = new Date().getFullYear();

  // "What is JBA?" video: real player when hosted (http/https), thumbnail link when opened as a local file
  (function () {
    const box = $("videoBox"); if (!box) return;
    const id = box.dataset.id, url = "https://www.youtube.com/watch?v=" + id;
    if (location.protocol === "http:" || location.protocol === "https:") {
      box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="What is JBA?" loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
      box.innerHTML = `<a class="video-poster" href="${url}" target="_blank" rel="noopener" aria-label="Watch the video on YouTube">
        <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt=""><span class="play"></span></a>`;
    }
  })();

  // spine runs only from the first dot to the last dot
  const fitSpine = () => {
    const sp = $("timeline"), dots = sp.querySelectorAll(".sp-dot"); if (dots.length < 2) return;
    const c = d => d.parentElement.offsetTop + d.offsetTop + d.offsetHeight / 2;
    sp.style.setProperty("--sp-top", c(dots[0]) + "px");
    sp.style.setProperty("--sp-bot", (sp.offsetHeight - c(dots[dots.length - 1])) + "px");
  };
  // series timeline (center spine), in story order; cards alternate left / right
  $("timeline").innerHTML = D.chronology.map((c, i) => {
    const g = D.games.find(x => x.id === c.id);
    const side = i % 2 === 0 ? "left" : "right";
    const card = `<a class="tl-card" href="game.html?g=${g.id}">
        ${c.tag ? `<span class="tl-tag">${c.tag}</span>` : ""}
        <img src="${g.logo}" alt="${g.title}">
        <p>${c.note}</p>
        <span class="tl-go">View game →</span>
      </a>`;
    const flag = D.endingFlag && D.endingFlag.after === c.id
      ? `<li class="sp-flag" aria-hidden="true"><span>${D.endingFlag.label}</span></li>` : "";
    return `<li class="sp-item ${side} rv" style="--pa:${g.colors.a};--pb:${g.colors.b}">
      <div class="sp-side">${card}</div><span class="sp-link"></span><span class="sp-dot"></span><div class="sp-empty"></div>
    </li>` + flag;
  }).join("");
  fitSpine(); addEventListener("load", fitSpine); addEventListener("resize", fitSpine);

  /* ---------- stacked game panels ---------- */
  const games = [...D.games].sort((a, b) => a.order.localeCompare(b.order));
  const stack = $("games");
  stack.innerHTML = games.map(g => `
    <article class="panel ${g.landing.align === "right" ? "right" : ""}" id="g-${g.id}" style="--pa:${g.colors.a};--pb:${g.colors.b}">
      <div class="panel-bg" style="background-image:url('${g.banner}')"></div>
      <div class="panel-shade"></div>
      ${g.landing.jorge ? `<img class="panel-char" src="${g.character}" alt="Jorge">` : ""}
      <div class="panel-copy">
        <div class="chips"><span class="chip status">${g.status}</span><span class="chip">${g.platform}</span><span class="chip">${g.genre}</span><span class="chip">${g.year}</span></div>
        <img class="panel-logo" src="${g.logo}" alt="${g.title} logo">
        <p class="sub">${g.subtitle}</p>
        <p class="desc">${g.description}</p>
        ${g.developed ? `<p class="devline"><b>Development</b> ${g.developed}</p>` : ""}
        <ul class="feat">${g.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <div class="links"><a href="game.html?g=${g.id}">View game</a></div>
      </div>
    </article>`).join("");
  const panels = [...stack.querySelectorAll(".panel")];

  // quick-jump dots, shown only while the games section is on screen
  const dots = document.createElement("div");
  dots.className = "dots"; dots.setAttribute("aria-label", "Jump to a game");
  dots.innerHTML = games.map(g => `<a href="#g-${g.id}" title="${g.title}" aria-label="${g.title}" style="--pa:${g.colors.a}"></a>`).join("");
  document.body.appendChild(dots);
  const dotEls = [...dots.children];

  function updatePanels() {
    const vh = innerHeight;
    let active = -1;
    panels.forEach((p, i) => {
      const r = p.getBoundingClientRect();
      if (r.top < vh * .5 && r.bottom > vh * .5) active = i;
      if (!p.classList.contains("live") && r.top < vh * .75) p.classList.add("live");
    });
    dotEls.forEach((d, i) => d.classList.toggle("on", i === active));
    dots.classList.toggle("show", active !== -1);
  }
  addEventListener("scroll", updatePanels, { passive: true });

  /* ---------- nav solidify ---------- */
  const nav = $("nav");
  /* ---------- hero parallax + cursor tilt ---------- */
  const heroBg = $("heroBg");
  function onScroll() {
    const y = scrollY;
    nav.classList.toggle("solid", y > 40);
    if (!reduce && y < innerHeight * 1.2) heroBg.style.transform = `translate3d(0,${y * .25}px,0) scale(1.05)`;
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll(); updatePanels();

  /* ---------- periodic reality glitch on the title ---------- */
  const h1 = document.querySelector(".glitch");
  if (!reduce) {
    const pulse = () => {
      h1.classList.add("warp");
      setTimeout(() => h1.classList.remove("warp"), 480);
      setTimeout(pulse, 3200 + Math.random() * 3500);
    };
    setTimeout(pulse, 1800);
    h1.addEventListener("mouseenter", () => { h1.classList.add("warp"); setTimeout(() => h1.classList.remove("warp"), 480); });
  }

  /* ---------- reveal on scroll ---------- */
  document.querySelectorAll("h2,.eyebrow,.about").forEach(el => el.classList.add("rv"));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const sibs = [...e.target.parentElement.children].filter(c => c.classList.contains("rv"));
      e.target.style.transitionDelay = Math.max(0, sibs.indexOf(e.target)) * 90 + "ms";
      e.target.classList.add("in"); io.unobserve(e.target);
    }
  }), { threshold: .15 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));

})();

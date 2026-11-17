(() => {
  const D = window.JBA, root = document.documentElement;
  const games = [...D.games].sort((a, b) => a.order.localeCompare(b.order));
  const id = new URLSearchParams(location.search).get("g");
  const g = games.find(x => x.id === id) || games[0];

  root.style.setProperty("--a", g.colors.a);
  root.style.setProperty("--b", g.colors.b);
  root.style.setProperty("--ink", g.colors.ink);
  const brandIcon = document.querySelector(".brand img");
  if (brandIcon && g.icon) { brandIcon.src = g.icon; brandIcon.alt = g.title + " icon"; }
  document.title = "JBA";
  document.getElementById("year").textContent = new Date().getFullYear();

  const others = games.filter(x => x.id !== g.id);
  document.getElementById("game").innerHTML = `
    <article class="panel solo live" style="--pa:${g.colors.a};--pb:${g.colors.b}">
      <div class="panel-bg" style="background-image:url('${g.banner}')"></div>
      <div class="panel-shade"></div>
      <span class="panel-num">${g.order}</span>
      ${g.character ? `<img class="panel-char" src="${g.character}" alt="Jorge">` : ""}
      <div class="panel-copy">
        <div class="chips"><span class="chip status">${g.status}</span><span class="chip">${g.platform}</span><span class="chip">${g.genre}</span><span class="chip">${g.year}</span></div>
        <img class="panel-logo" src="${g.logo}" alt="${g.title} logo">
        <p class="sub">${g.subtitle}</p>
        <p class="desc">${g.description}</p>
        ${g.developed ? `<p class="devline"><b>Development</b> ${g.developed}</p>` : ""}
        <ul class="feat">${g.features.map(f => `<li>${f}</li>`).join("")}</ul>
        <div class="links">${g.links.map(l => `<a class="${l.secondary ? "alt" : ""}" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>
      </div>
    </article>
    ${g.crew ? `<section class="crew wrap" id="crew" style="--pa:${g.colors.a}">
      <p class="eyebrow">The crew</p>
      <div class="cs">
        <div class="cs-text">
          <div class="cs-view"><div class="cs-track" id="csText">${g.crew.map((c, k) => `
            <div class="cs-slide"><h3>${c.name}</h3><em>${c.role}</em><p>${c.text}</p></div>`).join("")}</div></div>
          <div class="cs-nav">
            <button class="cs-arrow" id="csPrev" aria-label="Previous character">‹</button>
            <div class="cs-tabs" id="csTabs">${g.crew.map((c, k) => `<button class="cs-tab" data-k="${k}">${c.name}</button>`).join("")}</div>
            <button class="cs-arrow" id="csNext" aria-label="Next character">›</button>
          </div>
        </div>
        <div class="cs-stage">
          <div class="cs-view"><div class="cs-track" id="csChars">${g.crew.map(c => `<div class="cs-slide" style="background-image:url('${c.bg}')">${c.sprite ? `<div class="sprite" role="img" aria-label="${c.name}" style="background-image:url('${c.sprite}')"></div>` : `<img class="${c.full ? "full" : ""}" src="${c.img}" alt="${c.name}">`}</div>`).join("")}</div></div>
        </div>
      </div>
    </section>` : ""}
    ${g.video ? `<section class="gvideo wrap" style="--pa:${g.colors.a}">
      <p class="eyebrow">Video</p>
      <div class="video" id="gVideo" data-id="${g.video}"></div>
      <p class="video-link"><a href="https://www.youtube.com/watch?v=${g.video}" target="_blank" rel="noopener">Watch on YouTube ↗</a></p>
    </section>` : ""}
    ${g.screenshots ? `<section class="shots wrap" style="--pa:${g.colors.a}">
      <p class="eyebrow">Screenshots</p>
      <div class="shots-grid">${g.screenshots.map((s, i) => `
        <button class="shot" data-i="${i}"><img src="${s.src}" alt="${g.title} screenshot ${i + 1}" loading="lazy"></button>`).join("")}</div>
    </section>` : ""}
    <section class="more wrap">
      <p class="eyebrow">More adventures</p>
      <div class="more-grid">${others.map(o => `
        <a class="more-card" data-g="${o.id}" href="game.html?g=${o.id}" style="--pa:${o.colors.a}">
          <div class="mc-bg" style="background-image:url('${o.banner}')"></div>
          <img src="${o.logo}" alt="${o.title}">
        </a>`).join("")}</div>
    </section>`;

  // crew showcase: one character at a time, text on the left, character on the right
  if (g.crew) {
    const n = g.crew.length;
    const tText = document.getElementById("csText"), tChars = document.getElementById("csChars");
    const tabs = [...document.querySelectorAll(".cs-tab")];
    const textSlides = [...tText.children];
    let k = 0;
    const show = x => {
      k = (x + n) % n;
      tText.style.transform = `translateX(${-k * 100}%)`;
      tChars.style.transform = `translateX(${-k * 100}%)`;
      tabs.forEach((t, j) => t.classList.toggle("on", j === k));
      textSlides.forEach((s, j) => s.classList.toggle("on", j === k));
    };
    tabs.forEach((t, j) => t.addEventListener("click", () => show(j)));
    document.getElementById("csPrev").onclick = () => show(k - 1);
    document.getElementById("csNext").onclick = () => show(k + 1);
    const stage = document.querySelector(".cs");
    let sx = null;
    stage.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    stage.addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 50) show(k + (dx < 0 ? 1 : -1)); });
    show(0);
  }

  // lightbox: images sit side by side in a strip that slides to the next one
  if (g.screenshots) {
    const n = g.screenshots.length;
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = `<button class="lb-x" aria-label="Close">×</button>
      <button class="lb-p" aria-label="Previous">‹</button>
      <div class="lb-view"><div class="lb-track">${g.screenshots.map((s, k) => `<div class="lb-slide"><img src="${s.src}" alt="${g.title} screenshot ${k + 1}"></div>`).join("")}</div></div>
      <button class="lb-n" aria-label="Next">›</button>
      <div class="lb-dots">${g.screenshots.map(() => "<i></i>").join("")}</div>`;
    document.body.appendChild(lb);
    const track = lb.querySelector(".lb-track"), dots = [...lb.querySelectorAll(".lb-dots i")];
    let i = 0;
    const go = (k, instant) => {
      i = (k + n) % n;
      if (instant) track.style.transition = "none";
      track.style.transform = `translateX(${-i * 100}%)`;
      if (instant) { void track.offsetWidth; track.style.transition = ""; }
      dots.forEach((d, x) => d.classList.toggle("on", x === i));
    };
    const open = k => { go(k, true); lb.classList.add("open"); };
    const close = () => lb.classList.remove("open");
    document.querySelectorAll(".shot").forEach(b => b.addEventListener("click", () => open(+b.dataset.i)));
    dots.forEach((d, x) => d.addEventListener("click", () => go(x)));
    lb.querySelector(".lb-x").onclick = close;
    lb.querySelector(".lb-p").onclick = () => go(i - 1);
    lb.querySelector(".lb-n").onclick = () => go(i + 1);
    lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("lb-slide") || e.target.classList.contains("lb-view")) close(); });
    addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(i - 1);
      if (e.key === "ArrowRight") go(i + 1);
    });
    let sx = null;
    lb.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    lb.addEventListener("touchend", e => { if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); });
  }
})();

(function () {
  const box = document.getElementById("gVideo"); if (!box) return;
  const id = box.dataset.id, url = "https://www.youtube.com/watch?v=" + id;
  if (location.protocol === "http:" || location.protocol === "https:") {
    box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Video" loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    box.innerHTML = `<a class="video-poster" href="${url}" target="_blank" rel="noopener" aria-label="Watch the video on YouTube">
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt=""><span class="play"></span></a>`;
  }
})();

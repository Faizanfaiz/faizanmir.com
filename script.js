/* =========================================================
   Faizan Mir — Personal Portfolio
   Press rendering · mobile nav · scroll reveal · niceties
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------- Press data ---------------------------- */
  const pressArticles = [
    {
      source: "techSPARK",
      label: "Feature",
      headline: "The Founder Spotlight: Faizan Mir",
      date: "May 2026",
      url: "https://techspark.co/blog/2026/05/15/the-founder-spotlight-faizan-mir/",
      image: "press-techspark.png",
      focus: "center 38%",
      summary: "An in-depth interview on the entrepreneurial journey behind Nearhuman and building deep-tech in the South West.",
    },
    {
      source: "UK StartUp Awards",
      label: "Award",
      headline: "Finalist — Innovative StartUp of the Year 2026",
      date: "Apr 2026",
      url: "https://www.linkedin.com/posts/nearhuman_ukstartupawards-ukstartupawards2026-ideasfest-activity-7446927010695716864-On9r",
      image: "press-uk-startup-awards.png",
      focus: "center",
      summary: "Nearhuman named a finalist for Innovative StartUp of the Year at the UK StartUp Awards 2026.",
    },
    {
      source: "BAPO Conference",
      label: "Research",
      headline: "AI-assisted rehabilitation interface accepted at the BAPO Conference",
      date: "2026",
      url: "https://www.linkedin.com/posts/yassin-elsalamouny-b26a1221b_rehabilitationengineering-assistivetechnology-share-7457911250405138433-u4NS/",
      image: "",
      logo: "bapo-logo-orig.jpg",
      summary: "Voice-driven, offline AI assistive-device research with UWE Bristol and the NHS Bristol Centre for Enablement.",
    },
    {
      source: "Envestors",
      label: "Award",
      headline: "Shortlisted for Best B2B Business — Innovator Awards",
      date: "Jan 2026",
      url: "https://www.linkedin.com/posts/faizanfaiiz_innovatorfoundervisa-startupecosystem-highgrowthbusinesses-activity-7417172505913880577-oVzK",
      image: "press-envestors.jpg",
      focus: "left",
      summary: "Nearhuman shortlisted for Best B2B Business at the Envestors Innovator Awards.",
    },
    {
      source: "Free Press Kashmir",
      label: "Feature",
      headline: "Meet the Two Kashmiri Geeks Who Break Things and Make Robots",
      date: "Sep 2018",
      url: "https://freepresskashmir.news/2018/09/25/meet-the-two-kashmiri-geeks-who-break-things-and-make-robots/amp/",
      image: "Article3.jpg",
      focus: "top",
      summary: "Build, break, learn, repeat — the early days of making robots.",
    },
    {
      source: "Kashmir Life",
      label: "Feature",
      headline: "J&K Qualifies for World Skills India National Competition",
      date: "2018",
      url: "https://kashmirlife.net/jk-qualifies-for-world-skills-india-national-competition-176531/",
      image: "Article4.jpg",
      focus: "bottom",
      summary: "Competition coverage putting the technical work in public view.",
    },
    {
      source: "IndiaSkills / NSDC",
      label: "Recognition",
      headline: "Medallion of Excellence — National Robotics Competition",
      date: "2018",
      url: "https://www.facebook.com/IndiaSkills/photos/a.944683662231482/2465346493498517/?type=3",
      image: "Article2.jpg",
      summary: "Recognition for robotics and engineering performance at the national level.",
    },
    {
      source: "The Wire",
      label: "Feature",
      headline: "Embattled Lanes of Kashmir: Self-Taught Inventors",
      date: "Sep 2018",
      url: "https://m.thewire.in/article/livewire/embattled-lanes-kashmir-self-taught-inventors",
      image: "press-thewire.jpg",
      focus: "center",
      summary: "A feature on self-taught inventors and the instinct to build.",
    },
  ];

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  const pressGrid = document.getElementById("pressGrid");
  if (pressGrid) {
    const fragment = document.createDocumentFragment();

    pressArticles.forEach((article, index) => {
      const card = document.createElement("a");
      card.className = "press-card reveal" + (index === 0 ? " featured" : "");
      card.href = article.url;
      card.target = "_blank";
      card.rel = "noopener";
      card.style.setProperty("--delay", `${index * 0.06}s`);
      card.setAttribute("aria-label", `${article.source}: ${article.headline}`);

      // `focus` accepts a keyword or a raw CSS object-position (e.g. "center 20%").
      const objectPos = !article.focus
        ? "center"
        : ({
            top: "center top",
            bottom: "center bottom",
            left: "left center",
            right: "right center",
            center: "center",
          }[article.focus] || article.focus);

      let media;
      if (article.image) {
        media = `<div class="press-media"><img src="${encodeURI(article.image)}" alt="${escapeHtml(article.headline)}" loading="lazy" style="object-position:${objectPos}"></div>`;
      } else if (article.logo) {
        media = `<div class="press-logo"><img src="${encodeURI(article.logo)}" alt="${escapeHtml(article.source)} logo" loading="lazy"></div>`;
      } else {
        media = `<div class="press-placeholder" data-variant="${index % 3}"><span>${escapeHtml(article.label || "Press")}</span><strong>${escapeHtml(article.source)}</strong></div>`;
      }

      card.innerHTML = `
        ${media}
        <div class="press-body">
          <div class="press-meta">
            <span>${escapeHtml(article.source)}</span>
            <span>${escapeHtml(article.date)}</span>
          </div>
          <h3>${escapeHtml(article.headline)}</h3>
          <p>${escapeHtml(article.summary)}</p>
          <span class="press-link">Read coverage <span aria-hidden="true">→</span></span>
        </div>`;

      fragment.appendChild(card);
    });

    pressGrid.appendChild(fragment);
  }

  /* ---------------------------- Mobile nav ---------------------------- */
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");

  if (menuToggle && nav) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", closeNav)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------------------------- Header on scroll ---------------------------- */
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------- Scroll reveal ---------------------------- */
  const reveals = document.querySelectorAll(".reveal");
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  }

  /* ---------------------------- Footer year ---------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/* =========================================================
   Radial Hub — progressive enhancement.
   On wide viewports the scrolling page becomes a hub: a
   weapon-wheel of section nodes around the portrait. Click a
   node to glide that section into a focus panel. Falls back
   to the normal page on mobile / no-JS / narrow screens.
   ========================================================= */
(function () {
  "use strict";

  const hub = document.getElementById("hub");
  if (!hub) return;

  const nodes = Array.from(document.querySelectorAll(".hub-node"));
  const homeBtn = document.getElementById("hubHome");
  const closeBtn = document.getElementById("hubClose");
  const PANEL_IDS = ["about", "ventures", "experience", "press", "contact"];
  const panels = {};
  PANEL_IDS.forEach((id) => (panels[id] = document.getElementById(id)));

  const stage = document.getElementById("hubStage");
  const hubSub = document.getElementById("hubSub");
  const defaultSub = hubSub ? hubSub.innerHTML : "";
  const DESCRIPTIONS = {
    about: "The story — and what I work with",
    ventures: "Companies I've built and led",
    experience: "Research roles & engineering work",
    press: "Coverage, awards & recognition",
    contact: "Let's build something real",
  };
  const mq = window.matchMedia("(min-width: 1024px)");
  let active = false;
  let hoverIdx = null;
  let activeIdx = null;

  // On the home screen, hovering a node previews where it leads.
  function setReadout(idx) {
    if (!hubSub) return;
    if (idx == null || document.body.classList.contains("hub-open")) {
      hubSub.innerHTML = defaultSub;
    } else {
      hubSub.textContent = DESCRIPTIONS[nodes[idx].dataset.panel] || "";
    }
  }

  // Aim the rotating selector at the hovered node, or the active node when a
  // panel is open, or hide it on the home screen.
  function updateAim() {
    if (!stage) return;
    const idx =
      hoverIdx != null
        ? hoverIdx
        : document.body.classList.contains("hub-open")
        ? activeIdx
        : null;
    if (idx == null) {
      stage.classList.remove("is-aiming");
    } else {
      stage.style.setProperty("--aim", idx * 72 + "deg");
      stage.classList.add("is-aiming");
    }
  }

  const clearActive = () => {
    PANEL_IDS.forEach((id) => panels[id] && panels[id].classList.remove("is-active"));
    nodes.forEach((n) => {
      n.classList.remove("is-active");
      n.removeAttribute("aria-current");
    });
  };

  function openPanel(id, push) {
    if (!panels[id]) return;
    clearActive();
    document.body.classList.add("hub-open");
    panels[id].classList.add("is-active");
    panels[id].scrollTop = 0;
    const node = nodes.find((n) => n.dataset.panel === id);
    if (node) {
      node.classList.add("is-active");
      node.setAttribute("aria-current", "true");
      activeIdx = nodes.indexOf(node);
    }
    updateAim();
    if (push !== false && location.hash !== "#" + id) {
      history.pushState({ panel: id }, "", "#" + id);
    }
    panels[id].setAttribute("tabindex", "-1");
    panels[id].focus({ preventScroll: true });
  }

  function goHome(push) {
    clearActive();
    document.body.classList.remove("hub-open");
    activeIdx = null;
    updateAim();
    setReadout(hoverIdx);
    if (push !== false && location.hash) {
      history.pushState({ panel: null }, "", location.pathname + location.search);
    }
  }

  function syncFromHash(push) {
    const id = location.hash.replace("#", "");
    if (panels[id]) openPanel(id, push);
    else goHome(push);
  }

  function activate() {
    if (active) return;
    active = true;
    document.body.classList.add("hub-on");
    hub.setAttribute("aria-hidden", "false");
    syncFromHash(false);
  }

  function deactivate() {
    if (!active) return;
    active = false;
    clearActive();
    hoverIdx = null;
    activeIdx = null;
    if (stage) stage.classList.remove("is-aiming");
    document.body.classList.remove("hub-on", "hub-open");
    hub.setAttribute("aria-hidden", "true");
  }

  // Node clicks (intercept only while the hub is active; otherwise let the
  // anchor jump to the section on the normal scrolling page).
  nodes.forEach((node, i) => {
    node.addEventListener("click", (e) => {
      if (!active) return;
      e.preventDefault();
      const id = node.dataset.panel;
      if (node.classList.contains("is-active")) goHome();
      else openPanel(id);
    });
    const enter = () => {
      if (!active) return;
      hoverIdx = i;
      updateAim();
      setReadout(i);
    };
    const leave = () => {
      if (!active) return;
      hoverIdx = null;
      updateAim();
      setReadout(null);
    };
    node.addEventListener("mouseenter", enter);
    node.addEventListener("mouseleave", leave);
    node.addEventListener("focus", enter);
    node.addEventListener("blur", leave);
  });

  if (homeBtn) homeBtn.addEventListener("click", () => active && goHome());
  if (closeBtn) closeBtn.addEventListener("click", () => goHome());

  document.addEventListener("keydown", (e) => {
    if (!active) return;
    if (e.key === "Escape" && document.body.classList.contains("hub-open")) {
      goHome();
      if (homeBtn) homeBtn.focus();
      return;
    }
    if (/^[1-5]$/.test(e.key) && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const target = nodes[Number(e.key) - 1];
      if (target && document.activeElement.tagName !== "INPUT") {
        openPanel(target.dataset.panel);
      }
    }
  });

  window.addEventListener("popstate", () => {
    if (active) syncFromHash(false);
  });

  const onChange = () => (mq.matches ? activate() : deactivate());
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange); // older Safari
  onChange();
})();

/* ENZABLOCK — site interactions */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var header = document.querySelector(".site-header");
  var navLinks = document.querySelector(".nav-links");
  var toggle = document.querySelector(".nav-toggle");
  var toTop = document.querySelector(".to-top");

  // Header background + back-to-top visibility on scroll
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 30);
    if (toTop) toTop.classList.toggle("show", y > 800);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile navigation
  function closeMenu() {
    navLinks.classList.remove("open");
    header.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Reveal on scroll + coverage bars
  var revealEls = document.querySelectorAll(".reveal");
  var bars = document.querySelectorAll(".bar i[data-w]");
  function fillBar(b) { b.style.width = Math.min(100, parseFloat(b.dataset.w)) + "%"; }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        en.target.querySelectorAll(".bar i[data-w]").forEach(fillBar);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });

    // Active nav link
    var sections = document.querySelectorAll("main section[id]");
    var linkMap = {};
    navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) {
      linkMap[a.getAttribute("href").slice(1)] = a;
    });
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = linkMap[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIo.observe(s); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    bars.forEach(fillBar);
  }

  // Block requirement calculator
  var calc = document.querySelector("[data-calc]");
  if (calc) {
    var species = calc.querySelector("[name=species]");
    var herd = calc.querySelector("[name=herd]");
    var days = calc.querySelector("[name=days]");
    var outDaily = calc.querySelector("[data-out=daily]");
    var outBlocks = calc.querySelector("[data-out=blocks]");
    var outLast = calc.querySelector("[data-out=last]");
    var locale = document.documentElement.lang === "hu" ? "hu-HU" : "tr-TR";
    var BLOCK_KG = 12.5;

    function fmt(n, d) {
      return n.toLocaleString(locale, { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
    }
    function update() {
      var range = species.value.split("-").map(Number); // grams/day min-max
      var n = Math.max(0, parseInt(herd.value, 10) || 0);
      var d = Math.max(0, parseInt(days.value, 10) || 0);
      var minKg = (range[0] * n) / 1000;
      var maxKg = (range[1] * n) / 1000;
      outDaily.textContent = fmt(minKg, 1) + "–" + fmt(maxKg, 1) + " kg";
      outBlocks.textContent = fmt(Math.ceil((minKg * d) / BLOCK_KG)) + "–" + fmt(Math.ceil((maxKg * d) / BLOCK_KG));
      outLast.textContent = n > 0 ? fmt(BLOCK_KG / maxKg, 1) + "–" + fmt(BLOCK_KG / minKg, 1) : "–";
    }
    [species, herd, days].forEach(function (el) { el.addEventListener("input", update); });
    update();
  }

  // Contact form → opens the visitor's e-mail client with a prefilled message
  var form = document.querySelector("[data-contact]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = new FormData(form);
      var labels = JSON.parse(form.dataset.labels);
      var body = [
        labels.name + ": " + f.get("name"),
        labels.company + ": " + (f.get("company") || "-"),
        labels.country + ": " + (f.get("country") || "-"),
        labels.email + ": " + f.get("email"),
        labels.phone + ": " + (f.get("phone") || "-"),
        labels.topic + ": " + f.get("topic"),
        "",
        f.get("message")
      ].join("\n");
      var subject = "ENZABLOCK — " + f.get("topic") + " — " + f.get("name");
      window.location.href = "mailto:info@enzablock.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var msg = form.querySelector(".form-msg");
      if (msg) msg.textContent = form.dataset.sent;
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();

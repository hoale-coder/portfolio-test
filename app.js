/* Dựng trang từ window.PORTFOLIO_DATA (data/portfolio-data.js). Không cần server, không phụ thuộc thư viện. */
(function () {
  "use strict";
  var D = window.PORTFOLIO_DATA;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!D) {
    $("#main").innerHTML = '<div class="container" style="padding:80px 24px"><h1>Không tải được dữ liệu</h1><p>Kiểm tra file data/portfolio-data.js.</p></div>';
    return;
  }

  /* ---------- Helpers ---------- */
  // h("div", {class:"x", text:"..."}, child, child) — dựng DOM an toàn (không dùng innerHTML với dữ liệu).
  function h(tag, props) {
    var el = document.createElement(tag);
    var kids = Array.prototype.slice.call(arguments, 2);
    for (var k in (props || {})) {
      var v = props[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k === "html") el.innerHTML = v; // chỉ dùng cho SVG icon nội bộ
      else el.setAttribute(k, v === true ? "" : v);
    }
    kids.forEach(function append(c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) return c.forEach(append);
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }
  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 20h16"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.8h-4v-5.14c0-1.23-.02-2.8-1.7-2.8-1.7 0-1.97 1.33-1.97 2.7v5.24h-4z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.2 15.04l-.3-.18-3.1.82.83-3.03-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 4.1c-.2 0-.5.07-.75.35-.25.28-.97.95-.97 2.3s1 2.7 1.13 2.88c.14.18 1.95 3.1 4.8 4.22 2.37.93 2.85.75 3.37.7.5-.05 1.65-.67 1.88-1.33.23-.65.23-1.2.16-1.33-.07-.12-.25-.2-.53-.33-.28-.14-1.65-.82-1.9-.9-.26-.1-.45-.14-.63.13-.18.28-.72.9-.88 1.1-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48h-.53z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m0 0 6-6m-6 6 6 6"/></svg>'
  };
  function icon(name) { return h("span", { html: ICONS[name], "aria-hidden": "true", style: "display:contents" }); }
  function btn(cls, label, opts) {
    opts = opts || {};
    var attrs = { class: "btn " + cls, href: opts.href };
    if (opts.href) { attrs.href = opts.href; if (opts.external) { attrs.target = "_blank"; attrs.rel = "noopener"; } if (opts.download) attrs.download = ""; }
    var el = h(opts.href ? "a" : "button", attrs, opts.icon ? icon(opts.icon) : null, label);
    if (!opts.href) el.type = "button";
    if (opts.onclick) el.addEventListener("click", opts.onclick);
    return el;
  }
  function head(id, eyebrow, title, lead) {
    return h("div", { class: "section-head reveal" },
      h("div", { class: "eyebrow", text: eyebrow }),
      h("h2", { id: id, text: title }),
      lead ? h("p", { text: lead }) : null);
  }
  function chips(list, cls) { return h("ul", { class: "chips" }, list.map(function (t) { return h("li", { class: "chip " + (cls || ""), text: t }); })); }
  function bullets(list, cls) { return h("ul", { class: cls || "bullets" }, list.map(function (t) { return h("li", { text: t }); })); }
  function statNum(s, withUnit) {
    return h("div", { class: "num", "data-count": /^\d+\+?$/.test(s.value) ? s.value : null },
      s.value, withUnit && s.unit ? h("small", { text: s.unit }) : null);
  }
  var mailto = "mailto:" + D.profile.email + "?subject=" + encodeURIComponent("Trao đổi cơ hội hợp tác");

  /* ---------- Toast + copy ---------- */
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  function copyText(text) {
    function fallback() {
      var ta = h("textarea", { "aria-hidden": "true", style: "position:fixed;opacity:0;top:0" });
      ta.value = text; document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove(); return ok;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("Đã sao chép email"); }, function () { toast(fallback() ? "Đã sao chép email" : "Không sao chép được. Hãy chọn và copy thủ công."); });
    } else toast(fallback() ? "Đã sao chép email" : "Không sao chép được. Hãy chọn và copy thủ công.");
  }

  /* ---------- Sections ---------- */
  function renderHero() {
    var p = D.profile;
    var stats = D.heroStats.map(function (id) { return D.impactStats.filter(function (s) { return s.id === id; })[0]; }).filter(Boolean);
    $("#hero-root").append(
      h("div", { class: "hero-grid" },
        h("div", { class: "reveal" },
          h("div", { class: "eyebrow", text: p.role }),
          h("h1", { id: "hero-title", text: p.name }),
          h("p", { class: "hero-lead", text: p.headline }),
          h("p", { class: "hero-intro", text: p.intro }),
          h("div", { class: "hero-cta" },
            btn("btn-primary", "Liên hệ", { icon: "chat", onclick: openContact }),
            btn("btn-ghost", "Tải CV (PDF)", { href: p.cv, icon: "download", download: true }),
            btn("btn-ghost", "Xem dự án", { href: "#projects", icon: "arrow" })),
          h("div", { class: "hero-stats" }, stats.map(function (s) {
            return h("div", { class: "hero-stat" }, statNum(s, true), h("div", { class: "lbl", text: s.label }));
          }))),
        h("div", { class: "hero-photo reveal" },
          h("img", { src: p.photo, alt: p.photoAlt, width: "900", height: "1125", fetchpriority: "high" }),
          h("div", { class: "hero-badge" },
            h("div", { class: "k", text: "Nguyên tắc số 1" }),
            h("div", { class: "v", text: "“" + p.tagline + "”" })))));
  }

  function renderImpact() {
    $("#impact-root").append(
      head("impact-title", "Kết quả nổi bật", "Con số nói thay cho lời giới thiệu", "Kết quả đo được từ các dự án vận hành và chuyển đổi số."),
      h("div", { class: "impact-grid reveal" }, D.impactStats.map(function (s) {
        return h("div", { class: "impact-item" }, statNum(s, true), h("div", { class: "lbl", text: s.label }), h("div", { class: "ctx", text: s.context }));
      })));
  }

  function renderAbout() {
    var p = D.profile;
    $("#about-root").append(
      head("about-title", "Về tôi", "Bắt đầu từ vấn đề, không bắt đầu từ công nghệ"),
      h("div", { class: "about-grid" },
        h("div", { class: "about-text reveal" },
          p.summary.map(function (t) { return h("p", { text: t }); }),
          h("div", { class: "about-approach" }, h("p", { text: D.approach })),
          h("div", { class: "about-sub", text: "Chủ đề quan tâm" }),
          chips(D.topics),
          h("p", { class: "beyond", text: D.beyondWork })),
        h("div", { class: "principles reveal" }, D.principles.map(function (pr, i) {
          return h("div", { class: "principle" },
            h("div", { class: "n", text: "0" + (i + 1) }),
            h("div", {}, h("h3", { text: pr.title }), h("p", { text: pr.text })));
        }))));
  }

  function renderProjects() {
    $("#projects-root").append(
      head("projects-title", "Dự án", "Bốn dự án, bốn bài toán vận hành", "Mỗi dự án trình bày theo cách tôi làm việc: bối cảnh, vấn đề, vai trò, giải pháp và kết quả."),
      h("div", { class: "projects-grid" }, D.projects.map(function (pr) {
        var link = h("a", { href: "#project-" + pr.id, text: pr.title, "data-project": pr.id });
        return h("article", { class: "card reveal" },
          h("div", { class: "card-media" }, h("img", { src: pr.image, alt: pr.imageAlt, loading: "lazy", width: "1200", height: "900" })),
          h("div", { class: "card-body" },
            h("div", { class: "card-meta", text: pr.period + "  ·  " + pr.role }),
            h("h3", {}, link),
            h("p", { class: "card-sum", text: pr.summary }),
            h("div", { class: "card-result" }, h("span", { class: "badge", text: pr.highlight }), h("span", { class: "more", text: "Xem case study →" }))));
      })));
  }

  function renderExperience() {
    $("#experience-root").append(
      head("experience-title", "Kinh nghiệm", "9 năm đi từ dữ liệu vận hành đến chuyển đổi số"),
      h("div", { class: "timeline" }, D.experience.map(function (e) {
        return h("article", { class: "tl-item reveal" },
          h("div", { class: "tl-head" }, h("h3", { text: e.title }), h("span", { class: "tl-period", text: e.period })),
          h("div", { class: "tl-co", text: e.company + "  ·  " + e.type }),
          h("p", { class: "tl-intro", text: e.intro }),
          bullets(e.highlights, "tl-list"),
          e.scope ? h("p", { class: "tl-scope", text: e.scope }) : null);
      })));
  }

  function renderSkills() {
    $("#skills-root").append(
      head("skills-title", "Kỹ năng & công cụ", "Bộ kỹ năng cho vận hành, dữ liệu và thay đổi"),
      h("div", { class: "skills-grid" }, D.skills.map(function (g) {
        return h("div", { class: "skill-card reveal" }, h("h3", { text: g.group }), chips(g.items));
      })));
  }

  function renderTestimonials() {
    $("#testimonials-root").append(
      head("testimonials-title", "Nhận xét", "Đồng nghiệp nói gì về cách làm việc"),
      h("div", { class: "testi-grid" }, D.testimonials.map(function (t) {
        return h("figure", { class: "quote reveal" },
          h("blockquote", { text: t.quote }),
          h("figcaption", {}, h("div", { class: "who", text: t.name }), h("div", { class: "what", text: t.title + ", " + t.company })));
      })));
  }

  function renderEducation() {
    var e = D.education;
    $("#education-root").append(
      head("education-title", "Học vấn & chứng chỉ", "Nền tảng học thuật và chứng chỉ chuyên môn"),
      h("div", { class: "edu-grid" },
        h("div", { class: "panel reveal" },
          h("h3", { text: "Học vấn" }),
          h("div", { class: "edu-degree", text: e.degree }),
          h("div", { class: "edu-sub", text: e.school + "  ·  " + e.period }),
          h("div", { class: "edu-sub", text: "Chuyên ngành: " + e.major }),
          h("div", { style: "margin-top:16px" }, chips(e.courses))),
        h("div", { class: "panel reveal" },
          h("h3", { text: "Chứng chỉ" }),
          h("ul", { class: "cert-list" }, D.certifications.map(function (c) {
            return h("li", {}, h("span", { text: c.name }), h("span", { class: "yr", text: c.year }));
          })))));
  }

  function renderContact() {
    var p = D.profile;
    var rows = [
      h("div", { class: "row" }, h("div", { class: "k", text: "Email" }), h("div", { class: "v" }, h("a", { href: mailto, text: p.email }))),
      h("div", { class: "row" }, h("div", { class: "k", text: "LinkedIn" }), h("div", { class: "v" }, h("a", { href: p.linkedin, target: "_blank", rel: "noopener", text: "Xem hồ sơ LinkedIn" }))),
      h("div", { class: "row" }, h("div", { class: "k", text: "Khu vực" }), h("div", { class: "v", text: p.location }))
    ];
    if (p.showPhone) rows.splice(2, 0, h("div", { class: "row" }, h("div", { class: "k", text: "Điện thoại" }), h("div", { class: "v" }, h("a", { href: "tel:" + p.phone.replace(/\s/g, ""), text: p.phone }))));
    $("#contact-root").append(
      h("div", { class: "contact-grid" },
        h("div", { class: "reveal" },
          h("div", { class: "eyebrow", text: "Liên hệ" }),
          h("h2", { id: "contact-title", text: "Cùng trao đổi về bài toán của bạn" }),
          h("p", { text: D.contactNote }),
          chips(D.opportunities, "chip-light")),
        h("div", { class: "contact-card reveal" },
          rows,
          h("div", { class: "contact-actions" },
            btn("btn-primary", "Chọn cách liên hệ", { icon: "chat", onclick: openContact }),
            btn("btn-light", "Gửi email", { href: mailto, icon: "mail" }),
            btn("btn-light", "Sao chép email", { icon: "copy", onclick: function () { copyText(p.email); } }),
            btn("btn-light", "LinkedIn", { href: p.linkedin, icon: "linkedin", external: true }),
            btn("btn-light", "Tải CV", { href: p.cv, icon: "download", download: true })))));
  }

  function renderFooter() {
    $("#footer-root").append(
      h("div", { class: "footer-row" },
        h("div", { class: "footer-note" },
          h("div", { text: "© " + new Date().getFullYear() + " " + D.profile.name }),
          h("p", { style: "margin-top:8px", text: D.footerNote })),
        h("a", { class: "to-top", href: "#top", text: "Lên đầu trang ↑" })));
  }

  /* ---------- Case study dialog ---------- */
  var dlg = $("#case-dialog");
  var currentId = null;
  function projectIndex(id) { for (var i = 0; i < D.projects.length; i++) if (D.projects[i].id === id) return i; return -1; }

  function section(title, content) { return h("div", { class: "case-sec" }, h("h3", { text: title }), content); }

  function buildCase(pr) {
    var i = projectIndex(pr.id), prev = D.projects[i - 1], next = D.projects[i + 1];
    var close = h("button", { class: "icon-btn case-close", type: "button", "aria-label": "Đóng" });
    close.innerHTML = ICONS.close; close.addEventListener("click", function () { dlg.close(); });
    var nav = h("div", { class: "case-nav" },
      prev ? btn("btn-ghost btn-sm", prev.title, { icon: "back", onclick: function () { showProject(prev.id, true); } }) : h("span"),
      next ? btn("btn-ghost btn-sm", next.title, { icon: "arrow", onclick: function () { showProject(next.id, true); } }) : h("span"));
    var flow = pr.steps && pr.steps.length ? h("ol", { class: "flow" }, pr.steps.map(function (s) { return h("li", { text: s }); })) : null;

    return [
      close,
      h("figure", { class: "case-hero" },
        h("img", { src: pr.image, alt: pr.imageAlt }),
        h("figcaption", { text: "Hình minh hoạ" })),
      h("div", { class: "case-body" },
        h("div", { class: "case-meta" }, h("strong", { text: pr.role }), h("span", { text: "·" }), h("span", { text: pr.period }), h("span", { text: "·" }), h("span", { text: pr.company })),
        h("h2", { id: "case-title", text: pr.title }),
        h("p", { class: "case-lede", text: pr.summary }),
        h("div", { style: "margin-top:22px" }, h("span", { class: "badge", text: "Kết quả chính: " + pr.highlight })),
        section("Bối cảnh", h("p", { text: pr.context })),
        h("div", { class: "case-sec two-col", style: "margin-top:34px" },
          h("div", {}, h("h3", { text: "Vấn đề" }), bullets(pr.problems)),
          h("div", {}, h("h3", { text: "Vai trò của tôi" }), bullets(pr.myRole))),
        section("Giải pháp", h("div", {}, h("p", { text: pr.solution }), flow)),
        section("Kết quả", bullets(pr.results)),
        section("Kỹ năng sử dụng", chips(pr.skills)),
        nav)
    ];
  }

  function showProject(id, keepOpen) {
    var pr = D.projects[projectIndex(id)];
    if (!pr) return;
    currentId = id;
    dlg.textContent = "";
    buildCase(pr).forEach(function (n) { dlg.appendChild(n); });
    dlg.scrollTop = 0;
    if (!dlg.open) dlg.showModal();
    syncLock();
    try { history.replaceState(null, "", "#project-" + id); } catch (e) {}
  }
  function syncLock() { document.body.classList.toggle("modal-open", dlg.open || cdlg.open); }
  dlg.addEventListener("close", function () {
    syncLock();
    currentId = null;
    try { history.replaceState(null, "", "#projects"); } catch (e) {}
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); }); // bấm nền mờ để đóng

  /* ---------- Hộp chọn cách liên hệ: Zalo, WhatsApp, Gọi ---------- */
  var cdlg = $("#contact-dialog");
  function buildContact() {
    var p = D.profile;
    var zaloNum = (p.zalo || p.phone).replace(/\D/g, "");
    var waNum = (p.whatsapp || p.phone).replace(/\D/g, "");
    var tel = p.phone.replace(/[^\d+]/g, "");
    function channel(cls, ico, name, desc, href, external) {
      return h("a", { class: "ch", href: href, target: external ? "_blank" : null, rel: external ? "noopener" : null },
        h("span", { class: "ch-ico " + cls, "aria-hidden": "true" }, ico),
        h("span", { class: "ch-txt" }, h("span", { class: "ch-name", text: name }), h("br"), h("span", { class: "ch-desc", text: desc })),
        h("span", { class: "ch-arrow", html: ICONS.arrow, "aria-hidden": "true" }));
    }
    var close = h("button", { class: "icon-btn pick-close", type: "button", "aria-label": "Đóng" });
    close.innerHTML = ICONS.close; close.addEventListener("click", function () { cdlg.close(); });
    cdlg.textContent = "";
    [
      close,
      h("h2", { id: "pick-title", text: "Chọn cách liên hệ" }),
      h("p", { class: "pick-sub", text: "Chọn kênh thuận tiện nhất với bạn." }),
      h("div", { class: "pick-list" },
        channel("ch-zalo", "Zalo", "Zalo", "Nhắn tin qua Zalo", "https://zalo.me/" + zaloNum, true),
        channel("ch-wa", h("span", { html: ICONS.whatsapp, style: "display:contents" }), "WhatsApp", "Nhắn tin qua WhatsApp", "https://wa.me/" + waNum, true),
        channel("ch-call", h("span", { html: ICONS.phone, style: "display:contents" }), "Gọi điện", "Gọi trực tiếp " + p.phone, "tel:" + tel, false))
    ].forEach(function (n) { cdlg.appendChild(n); });
  }
  function openContact() {
    var links = $("#nav-links"); if (links) links.classList.remove("open");
    buildContact();
    if (!cdlg.open) cdlg.showModal();
    syncLock();
  }
  cdlg.addEventListener("close", syncLock);
  cdlg.addEventListener("click", function (e) { if (e.target === cdlg) cdlg.close(); });
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-open-contact]");
    if (t) openContact();
  });

  function openFromHash() {
    var m = /^#project-(.+)$/.exec(location.hash);
    if (m && projectIndex(m[1]) > -1) showProject(m[1]);
  }

  /* ---------- Interactions ---------- */
  function setupNav() {
    var header = $(".site-header"), links = $("#nav-links"), menuBtn = $("#menu-btn");
    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    menuBtn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    });
    $$("a", links).forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && links.classList.contains("open")) { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.focus(); } });

    // Đánh dấu mục đang xem
    if ("IntersectionObserver" in window) {
      var map = {};
      $$("[data-nav]").forEach(function (a) { map[a.getAttribute("data-nav")] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          $$("[data-nav]").forEach(function (a) { a.classList.remove("active"); a.removeAttribute("aria-current"); });
          var a = map[en.target.id]; // hero, impact, education... không có mục menu: bỏ đánh dấu
          if (a) { a.classList.add("active"); a.setAttribute("aria-current", "true"); }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      ["hero", "impact", "about", "projects", "experience", "skills", "testimonials", "education", "contact"].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  function setupTheme() {
    $("#theme-btn").addEventListener("click", function () {
      var root = document.documentElement, cur = root.getAttribute("data-theme");
      if (!cur) cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  function animateCount(el) {
    var raw = el.getAttribute("data-count"), plus = /\+$/.test(raw), end = parseInt(raw, 10);
    var unit = el.querySelector("small"), t0 = null, dur = 1100;
    function setVal(n) { el.firstChild.nodeValue = n + (plus && n === end ? "+" : ""); }
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) requestAnimationFrame(step); else setVal(end);
    }
    if (unit) { requestAnimationFrame(step); } else requestAnimationFrame(step);
  }

  function setupReveal() {
    var els = $$(".reveal"), counters = $$("[data-count]");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        $$("[data-count]", en.target).forEach(animateCount);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
    // dự phòng: nếu có phần tử không được quan sát, vẫn hiển thị sau 2,5s
    setTimeout(function () { els.forEach(function (e) { e.classList.add("in"); }); }, 2500);
  }

  /* ---------- Init ---------- */
  renderHero(); renderImpact(); renderAbout(); renderProjects(); renderExperience();
  renderSkills(); renderTestimonials(); renderEducation(); renderContact(); renderFooter();
  setupNav(); setupTheme(); setupReveal();

  $("#projects-root").addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-project]");
    if (!a) return;
    e.preventDefault(); showProject(a.getAttribute("data-project"));
  });
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();

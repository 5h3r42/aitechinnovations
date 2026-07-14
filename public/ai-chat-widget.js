(function () {
  "use strict";

  var ENDPOINT = "https://ai-platform-topaz-nine.vercel.app/api/public/ai-receptionist/messages";
  var BUSINESS_SLUG = "aitech-innovations";
  var VERSION = "aitech-web-1.0.0";
  var TOKEN_KEY = "aitech_ai_chat_token_v1";
  var CHAT_STARTED_KEY = "aitech_ai_chat_started_v1";
  var CHAT_LEAD_KEY = "aitech_ai_chat_lead_v1";
  var BOOKING_REQUEST_KEY = "aitech_ai_booking_request_v1";

  if (window.__aitechAiChatLoaded) return;
  window.__aitechAiChatLoaded = true;

  var host = document.createElement("div");
  host.id = "aitech-ai-chat";
  document.body.appendChild(host);
  var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;

  root.innerHTML = `
    <style>
      :host { all: initial; }
      *, *::before, *::after { box-sizing: border-box; }
      .chat { --navy:#101b35; --blue:#1769e0; --line:#dce4ef; --muted:#64748b; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color:#12213d; }
      .launcher { position:fixed; z-index:2147483000; right:20px; bottom:20px; display:flex; align-items:center; gap:9px; min-height:52px; border:0; border-radius:999px; padding:0 18px 0 15px; background:var(--navy); color:#fff; box-shadow:0 16px 42px rgba(15,27,53,.24); cursor:pointer; font:700 14px/1 inherit; transition:transform .18s ease, box-shadow .18s ease; }
      .launcher:hover { transform:translateY(-2px); box-shadow:0 20px 46px rgba(15,27,53,.3); }
      .launcher:focus-visible, button:focus-visible, textarea:focus-visible, input:focus-visible { outline:3px solid rgba(23,105,224,.28); outline-offset:2px; }
      .launcher svg { width:22px; height:22px; }
      .panel { position:fixed; z-index:2147483001; right:20px; bottom:84px; width:min(372px, calc(100vw - 24px)); height:min(620px, calc(100svh - 108px)); display:grid; grid-template-rows:auto 1fr auto; overflow:hidden; border:1px solid rgba(16,27,53,.12); border-radius:18px; background:#fff; box-shadow:0 28px 80px rgba(15,27,53,.25); opacity:0; transform:translateY(12px) scale(.985); transform-origin:bottom right; pointer-events:none; visibility:hidden; transition:opacity .18s ease, transform .18s ease, visibility .18s; }
      .panel.open { opacity:1; transform:none; pointer-events:auto; visibility:visible; }
      .head { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:17px 18px; background:var(--navy); color:#fff; }
      .brand { display:flex; align-items:center; gap:10px; min-width:0; }
      .mark { display:grid; place-items:center; width:34px; height:34px; border-radius:10px; background:#fff; color:var(--blue); font-weight:900; letter-spacing:-.04em; }
      .title { margin:0; font-size:15px; font-weight:800; }
      .subtitle { margin:2px 0 0; color:#bac8df; font-size:11px; }
      .close { display:grid; place-items:center; width:36px; height:36px; border:0; border-radius:10px; background:rgba(255,255,255,.09); color:#fff; cursor:pointer; font-size:22px; }
      .messages { overflow:auto; padding:18px; background:linear-gradient(#f8fafc,#fff 50%); scroll-behavior:smooth; }
      .message { width:fit-content; max-width:88%; margin:0 0 12px; padding:11px 13px; border-radius:14px 14px 14px 4px; background:#eef3f9; color:#1d2c46; font-size:13px; line-height:1.5; overflow-wrap:anywhere; animation:arrive .2s ease both; }
      .message.user { margin-left:auto; border-radius:14px 14px 4px 14px; background:var(--blue); color:#fff; }
      .message.error { background:#fff1f2; color:#9f1239; }
      .message.status { border:1px solid #bfdbfe; background:#eff6ff; color:#1e40af; }
      .typing { display:inline-flex; gap:4px; align-items:center; min-height:18px; }
      .typing i { width:5px; height:5px; border-radius:50%; background:#789; animation:pulse 1s infinite alternate; }
      .typing i:nth-child(2) { animation-delay:.15s; } .typing i:nth-child(3) { animation-delay:.3s; }
      .composer { border-top:1px solid var(--line); background:#fff; padding:12px; }
      .details { margin:0 0 10px; border:1px solid var(--line); border-radius:12px; background:#fbfdff; }
      .details summary { cursor:pointer; list-style:none; padding:10px 12px; color:#334155; font-size:12px; font-weight:750; }
      .details summary::-webkit-details-marker { display:none; }
      .details summary::after { content:"+"; float:right; color:var(--blue); }
      .details[open] summary::after { content:"−"; }
      .why { display:none; margin:0; padding:0 12px 9px; color:var(--muted); font-size:11px; line-height:1.45; }
      .details.requested .why { display:block; }
      .fields { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:0 10px 10px; }
      .fields input { width:100%; min-height:38px; border:1px solid var(--line); border-radius:8px; padding:8px 9px; color:#14213a; background:#fff; font:12px inherit; }
      .fields .wide { grid-column:1 / -1; }
      .booking { display:none; grid-column:1 / -1; grid-template-columns:1fr 1fr; gap:8px; padding-top:2px; }
      .booking.show { display:grid; }
      .confirm { grid-column:1 / -1; display:flex; align-items:flex-start; gap:7px; color:#475569; font-size:11px; line-height:1.4; }
      .confirm input { width:15px; min-height:15px; margin-top:1px; }
      .honeypot { position:absolute!important; left:-10000px!important; width:1px!important; height:1px!important; overflow:hidden!important; }
      .sendrow { display:flex; align-items:flex-end; gap:8px; }
      textarea { flex:1; min-height:44px; max-height:104px; resize:none; border:1px solid var(--line); border-radius:12px; padding:11px 12px; color:#14213a; background:#fff; font:13px/1.45 inherit; }
      .send { display:grid; place-items:center; flex:0 0 44px; width:44px; height:44px; border:0; border-radius:12px; background:var(--blue); color:#fff; cursor:pointer; }
      .send:disabled, textarea:disabled { cursor:not-allowed; opacity:.55; }
      .privacy { margin:9px 2px 0; color:var(--muted); font-size:9.5px; line-height:1.45; }
      @keyframes arrive { from { opacity:0; transform:translateY(4px); } }
      @keyframes pulse { to { opacity:.25; transform:translateY(-2px); } }
      @media (max-width: 480px) { .launcher { right:12px; bottom:12px; } .panel { right:12px; bottom:76px; height:min(610px, calc(100svh - 92px)); } }
      @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration:.01ms!important; transition-duration:.01ms!important; scroll-behavior:auto!important; } }
    </style>
    <div class="chat">
      <button class="launcher" type="button" aria-controls="aitech-chat-panel" aria-expanded="false" aria-label="Open website assistant">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16v12H8l-4 4V4Zm4 5h8v2H8V9Zm0-3h8v2H8V6Zm0 6h5v2H8v-2Z"/></svg>
        <span>Ask AITech</span>
      </button>
      <section class="panel" id="aitech-chat-panel" aria-label="AITech website assistant" aria-hidden="true">
        <header class="head">
          <div class="brand"><span class="mark">AI</span><div><p class="title">AITech Assistant</p><p class="subtitle">Website, content & automation</p></div></div>
          <button class="close" type="button" aria-label="Close website assistant">×</button>
        </header>
        <div class="messages" role="log" aria-live="polite" aria-relevant="additions"></div>
        <form class="composer">
          <details class="details">
            <summary>Optional contact details</summary>
            <p class="why">Share these only if you would like the team to follow up about your request.</p>
            <div class="fields">
              <input name="name" autocomplete="name" maxlength="120" placeholder="Name" aria-label="Name">
              <input name="company" autocomplete="organization" maxlength="160" placeholder="Company" aria-label="Company">
              <input class="wide" name="email" type="email" autocomplete="email" maxlength="180" placeholder="Email" aria-label="Email">
              <input class="wide" name="phone" type="tel" autocomplete="tel" maxlength="40" placeholder="Phone (optional)" aria-label="Phone">
              <input class="wide" name="requirement" maxlength="1000" placeholder="Brief requirement" aria-label="Brief requirement">
              <div class="booking">
                <input name="preferredDate" type="date" aria-label="Preferred date">
                <input name="preferredTime" type="time" aria-label="Preferred time">
                <label class="confirm"><input name="confirmed" type="checkbox"> Send this as a booking request for team review. Availability is not confirmed.</label>
              </div>
              <label class="honeypot" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
            </div>
          </details>
          <div class="sendrow">
            <textarea name="message" maxlength="1200" rows="1" placeholder="Ask about a service…" aria-label="Message" required></textarea>
            <button class="send" type="submit" aria-label="Send message"><svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m3 3 18 9-18 9 3-8 9-1-9-1-3-8Z"/></svg></button>
          </div>
          <p class="privacy">Messages may be stored and AI-generated replies may be reviewed. Contact details are optional until needed. Please do not share sensitive information.</p>
        </form>
      </section>
    </div>`;

  var launcher = root.querySelector(".launcher");
  var panel = root.querySelector(".panel");
  var closeButton = root.querySelector(".close");
  var messages = root.querySelector(".messages");
  var form = root.querySelector("form");
  var textarea = root.querySelector("textarea");
  var sendButton = root.querySelector(".send");
  var details = root.querySelector(".details");
  var bookingFields = root.querySelector(".booking");
  var busy = false;
  var handedOver = false;

  function addMessage(text, kind) {
    var bubble = document.createElement("div");
    bubble.className = "message" + (kind ? " " + kind : "");
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  function setOpen(open) {
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    launcher.setAttribute("aria-expanded", String(open));
    if (open) window.setTimeout(function () { textarea.focus(); }, 80);
    else launcher.focus();
  }

  function getToken() {
    try { return sessionStorage.getItem(TOKEN_KEY) || ""; } catch { return ""; }
  }

  function saveToken(token) {
    if (!token) return;
    try { sessionStorage.setItem(TOKEN_KEY, token); } catch {}
  }

  function marketingAttribution() {
    try {
      return window.aitechAnalytics && typeof window.aitechAnalytics.getAttribution === "function"
        ? window.aitechAnalytics.getAttribution()
        : null;
    } catch { return null; }
  }

  function trackOnce(storageKey, eventName, parameters) {
    try {
      if (sessionStorage.getItem(storageKey)) return false;
      if (!window.aitechAnalytics || typeof window.aitechAnalytics.trackEvent !== "function") return false;
      if (!window.aitechAnalytics.trackEvent(eventName, parameters)) return false;
      sessionStorage.setItem(storageKey, "true");
      return true;
    } catch { return false; }
  }

  function contactValue(name) {
    var field = form.elements.namedItem(name);
    return field && "value" in field ? field.value.trim() : "";
  }

  function setBusy(value) {
    busy = value;
    textarea.disabled = value || handedOver;
    sendButton.disabled = value || handedOver;
  }

  async function sendMessage(event) {
    event.preventDefault();
    var message = textarea.value.trim();
    if (!message || busy || handedOver) return;
    trackOnce(CHAT_STARTED_KEY, "chat_started", {
      business_slug: BUSINESS_SLUG,
      widget_version: VERSION,
      lead_source: "ai_receptionist"
    });
    addMessage(message, "user");
    textarea.value = "";
    setBusy(true);
    var typing = addMessage("", "");
    typing.innerHTML = '<span class="typing" aria-label="Assistant is responding"><i></i><i></i><i></i></span>';

    var payload = {
      businessSlug: BUSINESS_SLUG,
      conversationToken: getToken() || undefined,
      message: message,
      widgetVersion: VERSION,
      pageUrl: window.location.href,
      attribution: marketingAttribution(),
      website: contactValue("website"),
      contact: {
        name: contactValue("name") || undefined,
        email: contactValue("email") || undefined,
        phone: contactValue("phone") || undefined,
        company: contactValue("company") || undefined,
        requirement: contactValue("requirement") || undefined
      },
      booking: {
        preferredDate: contactValue("preferredDate") || undefined,
        preferredTime: contactValue("preferredTime") || undefined,
        confirmed: Boolean(form.elements.namedItem("confirmed").checked)
      }
    };

    try {
      var response = await fetch(ENDPOINT + "?businessSlug=" + encodeURIComponent(BUSINESS_SLUG), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      var data = await response.json();
      typing.remove();
      if (!response.ok || data.status === "error") throw new Error(data.message || "Chat is unavailable right now.");
      saveToken(data.conversationToken);
      addMessage(data.responseText, data.shouldEscalate ? "status" : "");

      if (data.leadOutcome === "created") {
        trackOnce(CHAT_LEAD_KEY, "chat_qualified_lead", {
          business_slug: BUSINESS_SLUG,
          widget_version: VERSION,
          lead_source: "ai_receptionist",
          lead_type: "qualified_enquiry"
        });
      }
      if (data.bookingOutcome === "accepted") {
        trackOnce(BOOKING_REQUEST_KEY, "booking_request", {
          business_slug: BUSINESS_SLUG,
          widget_version: VERSION,
          lead_source: "ai_receptionist",
          lead_type: "booking_review"
        });
      }

      if (data.intent === "booking_request") {
        bookingFields.classList.add("show");
        details.open = true;
      }
      if ((data.missingLeadFields || []).length || (data.missingBookingFields || []).length) {
        details.classList.add("requested");
        details.open = true;
      }
      if (data.shouldEscalate || data.handoverStatus === "awaiting_human") {
        handedOver = true;
        textarea.placeholder = "The team will review this conversation";
      }
    } catch (error) {
      typing.remove();
      addMessage(error && error.message ? error.message : "Chat is unavailable right now. Please try again later.", "error");
    } finally {
      setBusy(false);
    }
  }

  launcher.addEventListener("click", function () { setOpen(!panel.classList.contains("open")); });
  closeButton.addEventListener("click", function () { setOpen(false); });
  form.addEventListener("submit", sendMessage);
  textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
  });
  textarea.addEventListener("input", function () {
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 104) + "px";
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && panel.classList.contains("open")) setOpen(false);
  });

  addMessage("Hi — how can we help with your website, content or automation?");
})();

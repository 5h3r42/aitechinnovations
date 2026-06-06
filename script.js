const CONTACT_SETTINGS = {
  email: "support@aitechinnovations.com",
  whatsappNumber: "447882111810",
  bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kmaaQThmrdewMfPksmL8AuJR67EUDytKmyhAuakCNeIRyHNRMQ8-gQc82hxmjMc2fl8jPZCr",
};
const WHATSAPP_QUOTE_MESSAGE = "Hi AITech Innovations, I'd like a website quote.";
const WHATSAPP_QUOTE_ENCODED_MESSAGE = "Hi%20AITech%20Innovations,%20I'd%20like%20a%20website%20quote.";
const CHATBOT_API_ENDPOINT = "api/chatbot.php";

const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwsi2ZxS5UzS-Cioi5Ll-1IHSiU3LJGoc6HdVK_J2h3_YhWMDhKP0wUdcyCXtj5qYn0/exec";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_SETTINGS.email}`;

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const header = document.querySelector("[data-header]");
const quoteForm = document.querySelector("[data-quote-form]");
const formStatus = document.querySelector("[data-form-status]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const emailLinks = document.querySelectorAll("[data-email-link]");
const bookingLinks = document.querySelectorAll("[data-booking-link]");
const currentYearElements = document.querySelectorAll("[data-current-year]");
const chatbotPanel = document.querySelector("[data-chatbot-panel]");
const chatbotOpenButton = document.querySelector("[data-chatbot-open]");
const chatbotCloseButton = document.querySelector("[data-chatbot-close]");
const chatbotForm = document.querySelector("[data-chatbot-form]");
const chatbotInput = document.querySelector("[data-chatbot-input]");
const chatbotMessages = document.querySelector("[data-chatbot-messages]");
const chatbotWhatsappLink = document.querySelector("[data-chatbot-whatsapp]");
const chatbotBookingLink = document.querySelector("[data-chatbot-booking]");
const chatbotWidget = document.querySelector("[data-chatbot]");
const previewModal = document.querySelector("[data-preview-modal]");
const previewDialog = document.querySelector("[data-preview-dialog]");
const previewTriggers = document.querySelectorAll("[data-preview-trigger]");
const previewPanels = document.querySelectorAll("[data-preview-panel]");
let activePreviewTrigger = null;
let previewCloseTimer = null;
const trackedInteractionEvents = new WeakSet();
const chatbotConversation = [];
const chatbotLeadSteps = [
  { key: "name", prompt: "What is your name?" },
  { key: "email", prompt: "What email address should we use?" },
  { key: "business", prompt: "What is your business name?" },
  { key: "automation", prompt: "What would you like to automate?" },
];
let chatbotCloseTimer = null;
let chatbotMessageCount = 0;
let chatbotLeadPromptShown = false;
let chatbotLeadActive = false;
let chatbotLeadStepIndex = 0;
let chatbotLeadData = {};

function isAnalyticsDebugMode() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || new URLSearchParams(window.location.search).has("debug_analytics");
}

function trackAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return false;

  const eventParameters = { ...parameters };
  if (isAnalyticsDebugMode()) {
    eventParameters.debug_mode = true;
  }

  window.gtag("event", eventName, eventParameters);
  return true;
}

function getAnalyticsLocation(element) {
  if (!(element instanceof Element)) return "";

  const labelledElement = element.closest("[data-analytics-location]");
  if (labelledElement) {
    return labelledElement.getAttribute("data-analytics-location") || "";
  }

  if (element.closest(".hero")) return "hero";
  if (element.closest("#pricing")) return "pricing";
  if (element.closest(".contact-section")) return "contact";
  if (element.closest(".mobile-contact-bar")) return "sticky";
  if (element.closest(".site-footer")) return "footer";
  return "";
}

function trackInteractionOnce(event, eventName, parameters = {}) {
  if (trackedInteractionEvents.has(event)) return false;
  trackedInteractionEvents.add(event);
  return trackAnalyticsEvent(eventName, parameters);
}

function isWhatsAppLink(link) {
  return link.hasAttribute("data-whatsapp-link") || link.href.includes("wa.me/");
}

function isEmailLink(link) {
  return link.href.startsWith("mailto:");
}

function isBookingLink(link) {
  return link.hasAttribute("data-booking-link") || link.href.includes("calendar.google.com/calendar");
}

function trackLinkClick(link, event) {
  if (isBookingLink(link)) {
    trackInteractionOnce(event, "calendar_booking_click", { location: getAnalyticsLocation(link) || "booking" });
    return;
  }

  if (isWhatsAppLink(link)) {
    trackInteractionOnce(event, "whatsapp_click", { location: getAnalyticsLocation(link) || "contact" });
    return;
  }

  if (isEmailLink(link)) {
    trackInteractionOnce(event, "email_click");
    return;
  }

  if (link.hasAttribute("data-analytics-cta")) {
    const ctaType = link.getAttribute("data-analytics-cta");
    const eventName = ctaType === "pricing" ? "pricing_cta_click" : "quote_cta_click";
    trackInteractionOnce(event, eventName, { location: getAnalyticsLocation(link) || "hero" });
  }
}

function buildWhatsAppUrl(message) {
  if (!CONTACT_SETTINGS.whatsappNumber) return "";
  const encodedMessage = message === WHATSAPP_QUOTE_MESSAGE ? WHATSAPP_QUOTE_ENCODED_MESSAGE : encodeURIComponent(message);
  return `https://wa.me/${CONTACT_SETTINGS.whatsappNumber}?text=${encodedMessage}`;
}

function buildEmailUrl(subject, message = "") {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (message) query.push(`body=${encodeURIComponent(message)}`);
  return `mailto:${CONTACT_SETTINGS.email}?${query.join("&")}`;
}

function setChatbotActions() {
  const auditMessage = "Hi AITech Innovations, I'd like to request a free AI audit.";
  const whatsappUrl = buildWhatsAppUrl(auditMessage);

  if (chatbotWhatsappLink && whatsappUrl) {
    chatbotWhatsappLink.setAttribute("href", whatsappUrl);
  }

  if (chatbotBookingLink && CONTACT_SETTINGS.bookingUrl) {
    chatbotBookingLink.setAttribute("href", CONTACT_SETTINGS.bookingUrl);
  }
}

function appendChatbotMessage(role, text) {
  if (!chatbotMessages) return null;

  const message = document.createElement("div");
  message.className = `chatbot-message ${role}`;
  message.textContent = text;
  chatbotMessages.append(message);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  return message;
}

function openChatbot() {
  if (!chatbotPanel || !chatbotOpenButton) return;

  window.clearTimeout(chatbotCloseTimer);
  chatbotPanel.removeAttribute("hidden");
  chatbotOpenButton.setAttribute("aria-expanded", "true");

  window.requestAnimationFrame(() => {
    chatbotPanel.classList.add("is-open");
    chatbotInput?.focus({ preventScroll: true });
  });

  trackAnalyticsEvent("chatbot_open");
  trackAnalyticsEvent("chatbot_opened");
}

function closeChatbot() {
  if (!chatbotPanel || !chatbotOpenButton) return;

  chatbotPanel.classList.remove("is-open");
  chatbotOpenButton.setAttribute("aria-expanded", "false");
  chatbotCloseTimer = window.setTimeout(() => {
    chatbotPanel.setAttribute("hidden", "");
    chatbotOpenButton.focus({ preventScroll: true });
  }, 180);
}

function shouldStartLeadFromMessage(message) {
  return chatbotLeadPromptShown && /^(yes|yeah|yep|sure|ok|okay|audit|free audit|ai audit|request audit)/i.test(message);
}

function offerChatbotLead() {
  if (chatbotLeadPromptShown || chatbotLeadActive || chatbotMessageCount < 2) return;
  chatbotLeadPromptShown = true;
  appendChatbotMessage("bot", "Would you like to request a free AI audit?");
}

function startChatbotLeadCapture() {
  if (chatbotLeadActive) return;

  chatbotLeadActive = true;
  chatbotLeadPromptShown = true;
  chatbotLeadStepIndex = 0;
  chatbotLeadData = {};
  trackAnalyticsEvent("chatbot_lead_started");
  appendChatbotMessage("bot", chatbotLeadSteps[chatbotLeadStepIndex].prompt);
}

async function submitChatbotLead() {
  const message = [
    "Hi AITech Innovations, I would like to request a free AI audit.",
    "",
    `Name: ${chatbotLeadData.name || ""}`,
    `Business: ${chatbotLeadData.business || ""}`,
    `Email: ${chatbotLeadData.email || ""}`,
    "",
    `Automation request: ${chatbotLeadData.automation || ""}`,
  ].join("\n");
  const subject = `AI audit chatbot lead - ${chatbotLeadData.business || chatbotLeadData.name || "New lead"}`;
  const sheetPayload = {
    name: chatbotLeadData.name || "",
    email: chatbotLeadData.email || "",
    website: "",
    businessType: chatbotLeadData.business || "",
    mainGoal: "AI audit chatbot lead",
    notes: [`Automation request: ${chatbotLeadData.automation || "-"}`, "Source: website chatbot"].join("\n"),
  };

  try {
    if (!GOOGLE_SHEETS_ENDPOINT) throw new Error("Google Sheets endpoint is not configured");

    await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(sheetPayload),
    });

    trackAnalyticsEvent("chatbot_lead_submitted");
    return true;
  } catch {
    const payload = new FormData();
    payload.append("_subject", subject);
    payload.append("_template", "table");
    payload.append("_captcha", "false");
    payload.append("Source", "Website chatbot");
    payload.append("Lead type", "AI audit chatbot lead");
    payload.append("Name", chatbotLeadData.name || "");
    payload.append("Business", chatbotLeadData.business || "");
    payload.append("Email", chatbotLeadData.email || "");
    payload.append("Automation request", chatbotLeadData.automation || "");
    payload.append("Full message", message);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Form service failed");

      trackAnalyticsEvent("chatbot_lead_submitted");
      return true;
    } catch {
      const whatsappUrl = buildWhatsAppUrl(message);
      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = buildEmailUrl(subject, message);
      }
      return false;
    }
  }
}

async function handleChatbotLeadMessage(message) {
  const currentStep = chatbotLeadSteps[chatbotLeadStepIndex];

  if (currentStep.key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message)) {
    appendChatbotMessage("bot", "Please enter a valid email address so we can follow up.");
    return;
  }

  chatbotLeadData[currentStep.key] = message;
  chatbotLeadStepIndex += 1;

  if (chatbotLeadStepIndex < chatbotLeadSteps.length) {
    appendChatbotMessage("bot", chatbotLeadSteps[chatbotLeadStepIndex].prompt);
    return;
  }

  chatbotLeadActive = false;
  const statusMessage = appendChatbotMessage("status", "Sending your AI audit request...");
  const submitted = await submitChatbotLead();
  statusMessage?.remove();

  if (submitted) {
    appendChatbotMessage("bot", "Thanks. Your free AI audit request has been sent. You can also use WhatsApp or book a call if you would like to speak sooner.");
  } else {
    appendChatbotMessage("bot", "The direct form route was unavailable, so I opened a WhatsApp or email handoff with your audit details.");
  }
}

async function sendChatbotMessage(message) {
  const statusMessage = appendChatbotMessage("status", "AITech Assistant is typing...");

  try {
    const response = await fetch(CHATBOT_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: chatbotConversation.slice(-8),
      }),
    });

    if (!response.ok) throw new Error("Chatbot API failed");

    const data = await response.json();
    const reply = String(data.reply || "").trim();
    appendChatbotMessage("bot", reply || "I am not sure from the current knowledge base. Please request a free AI Audit or contact the team.");
    chatbotConversation.push({ role: "assistant", content: reply });
  } catch {
    appendChatbotMessage("bot", "I could not reach the assistant just now. Please request a free AI Audit, use WhatsApp, or book a call and the team will help.");
  } finally {
    statusMessage?.remove();
    offerChatbotLead();
  }
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

function hideUnavailableLink(link) {
  link.setAttribute("hidden", "");
  link.setAttribute("aria-hidden", "true");
}

function showAvailableLink(link) {
  link.removeAttribute("hidden");
  link.removeAttribute("aria-hidden");
}

function hydrateContactLinks() {
  const defaultMessage = WHATSAPP_QUOTE_MESSAGE;

  emailLinks.forEach((link) => {
    link.textContent = CONTACT_SETTINGS.email;
    link.setAttribute("href", buildEmailUrl("Website project enquiry", defaultMessage));
  });

  whatsappLinks.forEach((link) => {
    const whatsappUrl = buildWhatsAppUrl(defaultMessage);
    if (whatsappUrl) {
      showAvailableLink(link);
      link.setAttribute("href", whatsappUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  bookingLinks.forEach((link) => {
    if (!CONTACT_SETTINGS.bookingUrl) {
      hideUnavailableLink(link);
      return;
    }
    showAvailableLink(link);
    link.setAttribute("href", CONTACT_SETTINGS.bookingUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  currentYearElements.forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("is-open", !expanded);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

window.addEventListener(
  "scroll",
  () => {
    setHeaderState();
  },
  { passive: true },
);
setHeaderState();
hydrateContactLinks();
setChatbotActions();

chatbotOpenButton?.addEventListener("click", openChatbot);
chatbotCloseButton?.addEventListener("click", closeChatbot);
chatbotWhatsappLink?.addEventListener("click", () => {
  trackAnalyticsEvent("chatbot_whatsapp_clicked");
});
chatbotBookingLink?.addEventListener("click", () => {
  trackAnalyticsEvent("chatbot_booking_clicked");
});

chatbotForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!(chatbotInput instanceof HTMLInputElement)) return;

  const message = chatbotInput.value.trim();
  if (!message) return;

  chatbotInput.value = "";
  appendChatbotMessage("user", message);
  chatbotConversation.push({ role: "user", content: message });
  chatbotMessageCount += 1;
  trackAnalyticsEvent("chatbot_message_sent");

  if (chatbotLeadActive) {
    await handleChatbotLeadMessage(message);
    return;
  }

  if (shouldStartLeadFromMessage(message)) {
    startChatbotLeadCapture();
    return;
  }

  await sendChatbotMessage(message);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function setActivePreview(previewName) {
  previewPanels.forEach((panel) => {
    const isActive = panel.getAttribute("data-preview-panel") === previewName;
    panel.toggleAttribute("hidden", !isActive);
  });
}

function openPreview(previewName, trigger) {
  if (!previewModal || !previewDialog) return;

  window.clearTimeout(previewCloseTimer);
  activePreviewTrigger = trigger;
  setActivePreview(previewName);
  previewModal.removeAttribute("hidden");
  document.body.classList.add("preview-open");
  previewDialog.scrollTop = 0;

  window.requestAnimationFrame(() => {
    previewModal.classList.add("is-open");
    previewDialog.focus({ preventScroll: true });
  });
}

function closePreview() {
  if (!previewModal || !previewDialog || previewModal.hasAttribute("hidden")) return;

  previewModal.classList.remove("is-open");
  document.body.classList.remove("preview-open");
  previewCloseTimer = window.setTimeout(() => {
    previewModal.setAttribute("hidden", "");
    activePreviewTrigger?.focus({ preventScroll: true });
    activePreviewTrigger = null;
  }, 180);
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const link = event.target.closest("a");
  if (link instanceof HTMLAnchorElement) {
    trackLinkClick(link, event);
  }

  const trigger = event.target.closest("[data-preview-trigger]");
  if (!(trigger instanceof HTMLElement)) return;

  const previewName = trigger.getAttribute("data-preview-trigger");
  trackInteractionOnce(event, "portfolio_preview_opened", { project: previewName });
  openPreview(previewName, trigger);
});

previewModal?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const closeTarget = event.target.closest("[data-preview-close]");
  if (!closeTarget) return;
  closePreview();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && previewModal && !previewModal.hasAttribute("hidden")) {
    closePreview();
  }

  if (event.key === "Escape" && chatbotPanel && !chatbotPanel.hasAttribute("hidden")) {
    closeChatbot();
  }
});

quoteForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);

  if (String(data.get("_honey") || "").trim()) {
    quoteForm.reset();
    return;
  }

  const message = [
    "Hi AITech Innovations, I would like a website quote.",
    "",
    `Name: ${data.get("name") || ""}`,
    `Business: ${data.get("business") || ""}`,
    `Email: ${data.get("email") || ""}`,
    `Phone / WhatsApp: ${data.get("phone") || ""}`,
    `Current website: ${data.get("website") || ""}`,
    `Business type: ${data.get("type") || ""}`,
    `Package: ${data.get("package") || ""}`,
    `Budget: ${data.get("budget") || ""}`,
    "",
    `Project notes: ${data.get("notes") || ""}`,
  ].join("\n");

  const whatsappUrl = buildWhatsAppUrl(message);
  const subject = `Website quote enquiry - ${data.get("business") || data.get("name") || "New lead"}`;
  const sheetPayload = {
    name: data.get("name") || "",
    email: data.get("email") || "",
    website: data.get("website") || "",
    businessType: data.get("type") || data.get("business") || "",
    mainGoal: data.get("package") || data.get("budget") || "Website enquiry",
    notes: [
      `Business name: ${data.get("business") || "-"}`,
      `Phone / WhatsApp: ${data.get("phone") || "-"}`,
      `Budget: ${data.get("budget") || "-"}`,
      "",
      `Message: ${data.get("notes") || "-"}`,
    ].join("\n"),
  };

  const submitButton = quoteForm.querySelector("button[type='submit']");
  let leadEventTracked = false;
  const trackLeadOnce = () => {
    if (leadEventTracked) return;
    leadEventTracked = true;
    trackAnalyticsEvent("form_submit", { method: "website_form" });
    trackAnalyticsEvent("generate_lead", { method: "website_form" });
  };

  submitButton.disabled = true;
  formStatus.textContent = "Sending your enquiry...";

  const payload = new FormData();
  payload.append("_subject", subject);
  payload.append("_template", "table");
  payload.append("_captcha", "false");
  payload.append("_honey", data.get("_honey") || "");
  payload.append("Name", data.get("name") || "");
  payload.append("Business", data.get("business") || "");
  payload.append("Email", data.get("email") || "");
  payload.append("Phone / WhatsApp", data.get("phone") || "");
  payload.append("Current website", data.get("website") || "");
  payload.append("Business type", data.get("type") || "");
  payload.append("Package", data.get("package") || "");
  payload.append("Budget", data.get("budget") || "");
  payload.append("Project notes", data.get("notes") || "");
  payload.append("Full message", message);

  try {
    if (!GOOGLE_SHEETS_ENDPOINT) throw new Error("Google Sheets endpoint is not configured");

    await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(sheetPayload),
    });

    quoteForm.reset();
    formStatus.textContent = "Thanks. Your enquiry has been sent.";
    trackLeadOnce();
  } catch {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Form service failed");

      quoteForm.reset();
      formStatus.textContent = "Thanks. Your enquiry has been sent.";
      trackLeadOnce();
    } catch {
      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        formStatus.textContent = "Email sending was unavailable, so your enquiry opened in WhatsApp.";
      } else {
        window.location.href = buildEmailUrl(subject, message);
        formStatus.textContent = "Email sending was unavailable, so your enquiry opened in your email app.";
      }
    }
  } finally {
    submitButton.disabled = false;
  }
});

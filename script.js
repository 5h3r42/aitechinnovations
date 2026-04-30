const CONTACT_SETTINGS = {
  email: "support@aitechinnovations.com",
  whatsappNumber: "",
  phoneNumber: "",
  bookingUrl: "",
};

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
const phoneLinks = document.querySelectorAll("[data-phone-link]");
const bookingLinks = document.querySelectorAll("[data-booking-link]");
const currentYearElements = document.querySelectorAll("[data-current-year]");

function buildWhatsAppUrl(message) {
  if (!CONTACT_SETTINGS.whatsappNumber) return "";
  return `https://wa.me/${CONTACT_SETTINGS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildEmailUrl(subject, message = "") {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (message) query.push(`body=${encodeURIComponent(message)}`);
  return `mailto:${CONTACT_SETTINGS.email}?${query.join("&")}`;
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
  const defaultMessage = "Hi AITech Innovations, I would like to ask about a website project.";

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
      link.setAttribute("rel", "noopener");
    } else {
      link.setAttribute("href", buildEmailUrl("Website project enquiry", defaultMessage));
      if (link.dataset.optional === "true") hideUnavailableLink(link);
    }
  });

  phoneLinks.forEach((link) => {
    if (!CONTACT_SETTINGS.phoneNumber) {
      hideUnavailableLink(link);
      return;
    }
    showAvailableLink(link);
    link.setAttribute("href", `tel:${CONTACT_SETTINGS.phoneNumber.replace(/\s+/g, "")}`);
  });

  bookingLinks.forEach((link) => {
    if (!CONTACT_SETTINGS.bookingUrl) {
      hideUnavailableLink(link);
      return;
    }
    showAvailableLink(link);
    link.setAttribute("href", CONTACT_SETTINGS.bookingUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
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

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
hydrateContactLinks();

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
    } catch {
      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank", "noopener");
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

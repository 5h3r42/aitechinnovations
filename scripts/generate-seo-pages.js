const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://www.aitechinnovations.com";
const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kmaaQThmrdewMfPksmL8AuJR67EUDytKmyhAuakCNeIRyHNRMQ8-gQc82hxmjMc2fl8jPZCr";
const WHATSAPP_URL =
  "https://wa.me/447882111810?text=Hi%20AITech%20Innovations,%20I'd%20like%20to%20book%20a%20free%20strategy%20call.";

const services = [
  {
    slug: "ai-automation-services",
    title: "AI Automation Services for Small Businesses | AITech Innovations",
    description:
      "Practical AI automation services for UK small businesses. Reduce repetitive admin, improve follow-up and connect everyday tools without unnecessary complexity.",
    eyebrow: "AI automation services",
    h1: "Practical AI automation services for small businesses",
    intro:
      "We identify repetitive work, design a reliable workflow and connect the tools your team already uses. The result is less manual admin and a clearer route from enquiry to completed task.",
    problemTitle: "Manual work grows faster than the team",
    problemIntro:
      "Small businesses often rely on inboxes, spreadsheets and individual memory to keep work moving. That can function at low volume, but it becomes fragile as enquiries and customer expectations increase.",
    problems: [
      ["Repeated data entry", "The same customer details are copied between forms, email, calendars and spreadsheets, increasing errors and wasting time."],
      ["Slow follow-up", "New enquiries wait for someone to notice, qualify and reply, so strong opportunities can go cold."],
      ["No clear ownership", "Tasks are hidden across personal inboxes and informal notes, making it difficult to see what needs attention."],
    ],
    solutionTitle: "Automation designed around a real business process",
    solution:
      "We map the current process first, remove unnecessary steps and automate only the parts that benefit from consistency. A typical project may connect a website form to a CRM, send an immediate acknowledgement, create a task, notify the right person and schedule follow-up if no action is taken.",
    benefits: [
      "Respond to enquiries more quickly without monitoring every channel manually.",
      "Reduce avoidable mistakes caused by copying information between systems.",
      "Give staff a consistent process that is easier to follow and improve.",
      "Create a clearer record of customer activity and outstanding actions.",
      "Free up time for sales, delivery and customer relationships.",
    ],
    useCases: [
      ["Enquiry routing", "Send leads to the correct person based on service, location or urgency."],
      ["Document workflows", "Create standard documents, request missing details and notify staff when files are ready."],
      ["Customer follow-up", "Trigger useful reminders after quotes, appointments or completed work."],
      ["Internal task creation", "Turn approved forms or emails into assigned tasks with due dates and context."],
    ],
    faqs: [
      ["What can an AI automation service automate?", "Common opportunities include enquiry handling, CRM updates, appointment reminders, document preparation, follow-up messages and internal task routing."],
      ["Do we need to replace our current software?", "Usually not. We first assess whether your existing website, email, calendar, CRM and forms can be connected safely."],
      ["Will automation remove human control?", "No. Important decisions, sensitive messages and exceptions can remain with your team while routine steps are automated."],
      ["How do you choose the first workflow?", "We prioritise a repeated process with clear inputs, measurable time cost and a low-risk path to improvement."],
    ],
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development for Business Websites | AITech Innovations",
    description:
      "AI chatbot development for small-business websites. Answer common questions, qualify enquiries and hand useful conversations to your team.",
    eyebrow: "AI chatbot development",
    h1: "AI chatbots that answer questions and qualify enquiries",
    intro:
      "We build focused website chatbots that use approved business information, guide visitors to the right next step and capture useful lead details when your team is unavailable.",
    problemTitle: "Website visitors leave when answers are hard to find",
    problemIntro:
      "Prospects often arrive outside office hours or before they are ready to call. If service details, pricing guidance or next steps are unclear, they may leave without making contact.",
    problems: [
      ["Repeated questions", "Staff spend time answering the same availability, process and pricing questions across email, phone and messaging."],
      ["Unqualified enquiries", "Basic context is missing, so the first conversation starts with information gathering rather than useful advice."],
      ["After-hours gaps", "Visitors can be ready to enquire when nobody is available to respond immediately."],
    ],
    solutionTitle: "A controlled chatbot built from your approved knowledge",
    solution:
      "We define what the assistant can answer, prepare a concise knowledge base and create clear hand-off routes for questions that need a person. The chatbot can collect a name, business email and project need, then direct the visitor to booking, WhatsApp or an enquiry form.",
    benefits: [
      "Give visitors useful answers at any time without pretending the chatbot is human.",
      "Collect consistent lead information before a sales conversation begins.",
      "Direct urgent, specialist or sensitive questions to the right human route.",
      "Learn which questions repeatedly block prospects from making an enquiry.",
      "Keep approved answers easier to update than scattered scripts and inbox replies.",
    ],
    useCases: [
      ["Service guidance", "Help visitors choose the most relevant service before they contact the business."],
      ["Lead qualification", "Ask a short set of useful questions and submit the answers to the team."],
      ["Booking support", "Explain appointment options and provide the correct calendar link."],
      ["FAQ support", "Answer approved questions about coverage, process, pricing ranges and next steps."],
    ],
    faqs: [
      ["Can an AI chatbot answer anything?", "It should not. We set boundaries, use approved source material and provide a human hand-off for unsupported or sensitive questions."],
      ["Can the chatbot capture leads?", "Yes. It can collect relevant contact and project details, subject to clear privacy wording and your chosen delivery workflow."],
      ["Does it work without an expensive AI subscription?", "Many common questions can use scripted answers, with AI reserved for suitable unmatched questions where needed."],
      ["How is chatbot performance measured?", "Useful measures include conversations started, qualified leads, booking clicks, unanswered questions and human hand-offs."],
    ],
  },
  {
    slug: "ai-lead-generation-automation",
    title: "AI Lead Generation Automation Services | AITech Innovations",
    description:
      "AI lead generation automation for service businesses. Capture, qualify, route and follow up website enquiries with a clear, measurable workflow.",
    eyebrow: "Lead generation automation",
    h1: "Turn more enquiries into organised sales opportunities",
    intro:
      "We connect landing pages, forms, chat, calendars and CRM tools so new leads receive a quick response and your team gets the information needed to follow up properly.",
    problemTitle: "Lead generation fails after the form is submitted",
    problemIntro:
      "Buying more traffic does not fix a weak enquiry process. Leads are often lost because the response is slow, the details are incomplete or nobody knows who should take the next action.",
    problems: [
      ["Delayed response", "High-intent prospects may contact several providers and choose the first credible business that replies."],
      ["Poor qualification", "Generic forms do not collect enough context to judge fit, urgency or the correct service."],
      ["Inconsistent follow-up", "Promising enquiries disappear when reminders depend on an individual remembering to send them."],
    ],
    solutionTitle: "One connected path from visitor to follow-up",
    solution:
      "We design the landing page and lead questions around the sales decision, then route each submission into an organised workflow. Leads can receive an immediate acknowledgement, be scored by agreed criteria, enter the correct pipeline and trigger a timed follow-up task.",
    benefits: [
      "Improve response speed without sending generic sales messages to every lead.",
      "Collect the details needed to prioritise strong-fit opportunities.",
      "Keep lead sources and next actions visible in one place.",
      "Reduce missed follow-ups with reminders and ownership rules.",
      "Measure which pages and offers generate useful enquiries, not just clicks.",
    ],
    useCases: [
      ["Quote requests", "Capture service, location, timescale and budget details before assigning the lead."],
      ["Consultation funnels", "Move qualified visitors from a focused page into a suitable booking calendar."],
      ["Lead nurturing", "Send a short, relevant sequence when a prospect is interested but not ready to book."],
      ["Source tracking", "Record the campaign and landing page that produced each enquiry."],
    ],
    faqs: [
      ["Is lead generation automation the same as sending cold messages?", "No. Our focus is organising inbound and permission-based leads, not creating high-volume unsolicited outreach."],
      ["Can leads be scored automatically?", "Yes, when the scoring rules are transparent and based on useful factors such as service fit, location, urgency and budget range."],
      ["Which tools can be connected?", "Typical projects connect website forms, email, calendars, spreadsheets and common CRM platforms."],
      ["How do we avoid robotic follow-up?", "Automate timing, routing and simple acknowledgements while keeping important sales conversations personal."],
    ],
  },
  {
    slug: "crm-automation-services",
    title: "CRM Automation Services for Small Businesses | AITech Innovations",
    description:
      "CRM automation services that organise enquiries, update records, assign follow-ups and give small-business teams a clearer sales pipeline.",
    eyebrow: "CRM automation services",
    h1: "CRM automation that keeps customer follow-up organised",
    intro:
      "We turn a CRM from a passive contact list into a practical workflow for capturing enquiries, assigning ownership and showing the next action for every opportunity.",
    problemTitle: "A CRM cannot help when records are incomplete",
    problemIntro:
      "Many teams buy CRM software but continue working from inboxes and spreadsheets. Data becomes inconsistent, staff stop trusting the pipeline and reporting no longer reflects what is really happening.",
    problems: [
      ["Missing records", "Enquiries from forms, calls and messages are not consistently added to the system."],
      ["Stale pipeline stages", "Opportunities remain in the wrong stage because updates depend on manual housekeeping."],
      ["Unclear next actions", "A contact may exist in the CRM without an owner, due date or meaningful follow-up task."],
    ],
    solutionTitle: "Simple CRM rules that support the way your team sells",
    solution:
      "We define the minimum data your team needs, connect lead sources and create rules for ownership, stages and reminders. Automations can create records, prevent duplicates, schedule tasks and notify managers when an opportunity has no next action.",
    benefits: [
      "Create cleaner customer records with less repetitive entry.",
      "Make ownership and follow-up dates visible across the team.",
      "Reduce duplicate contacts and inconsistent naming.",
      "Build reports from a process staff can realistically maintain.",
      "Give new team members a clearer sales workflow to follow.",
    ],
    useCases: [
      ["Website-to-CRM capture", "Create or update a contact and opportunity when a qualified form is submitted."],
      ["Task assignment", "Assign follow-up based on territory, service type or account ownership."],
      ["Pipeline hygiene", "Flag opportunities that have no activity or next step after an agreed period."],
      ["Customer handover", "Move won work into onboarding with the correct notes, documents and internal tasks."],
    ],
    faqs: [
      ["Can you automate our existing CRM?", "Often yes. We first review its integration options, data quality and the way your team currently uses it."],
      ["Do we need a complex CRM?", "No. A smaller system with clear fields and consistent use is usually more valuable than a large platform nobody maintains."],
      ["Can automation fix bad CRM data?", "It can prevent new problems and support a structured clean-up, but existing records still need agreed rules and careful review."],
      ["What should we automate first?", "Start with reliable lead capture and one visible next action for every qualified opportunity."],
    ],
  },
  {
    slug: "appointment-booking-automation",
    title: "Appointment Booking Automation Services | AITech Innovations",
    description:
      "Appointment booking automation for service businesses. Reduce scheduling admin, missed appointments and manual reminders with a clearer booking workflow.",
    eyebrow: "Booking automation",
    h1: "Appointment booking automation that reduces scheduling admin",
    intro:
      "We create booking flows that show suitable availability, collect the right information and trigger confirmations, reminders and internal follow-up without endless email exchanges.",
    problemTitle: "Manual scheduling creates avoidable friction",
    problemIntro:
      "Back-and-forth messages slow down bookings and interrupt staff throughout the day. Missing details, timezone confusion and inconsistent reminders can also lead to wasted appointments.",
    problems: [
      ["Too many messages", "Simple appointments require several emails or calls before both sides agree on a time."],
      ["Wrong appointment type", "Customers book the wrong duration or team member because the available options are unclear."],
      ["Missed appointments", "Confirmations and reminders are sent inconsistently, especially during busy periods."],
    ],
    solutionTitle: "A booking journey matched to the service",
    solution:
      "We define appointment types, availability rules and the information required before a slot is confirmed. The workflow can send calendar invitations, reminders, preparation details and an internal notification, then update the CRM or follow-up list after the meeting.",
    benefits: [
      "Let suitable customers book without waiting for office hours.",
      "Protect staff calendars with buffers, notice periods and appointment rules.",
      "Collect useful context before the call or visit begins.",
      "Reduce no-shows through consistent confirmations and reminders.",
      "Connect bookings to lead tracking and post-appointment follow-up.",
    ],
    useCases: [
      ["Consultation calls", "Offer selected discovery call times after a prospect completes qualification questions."],
      ["Clinic appointments", "Route visitors to the right appointment type and send preparation information."],
      ["Site visits", "Collect address and project details before showing suitable survey availability."],
      ["Review meetings", "Trigger recurring or milestone-based bookings for existing customers."],
    ],
    faqs: [
      ["Can booking automation use our current calendar?", "Usually yes. Common calendar platforms support availability checks, invitations and reminders."],
      ["Can we approve a booking before it is confirmed?", "Yes. Higher-value or complex appointments can use a request-and-approve workflow instead of instant confirmation."],
      ["How do we prevent unsuitable bookings?", "Use clear appointment descriptions, qualification questions, notice rules and separate calendars for different services."],
      ["Can reminders be customised?", "Yes. Timing and content can reflect the appointment type, preparation needed and your cancellation policy."],
    ],
  },
];

const posts = [
  {
    slug: "how-small-businesses-use-ai",
    title: "How Small Businesses Use AI in 2026 | AITech Innovations",
    description:
      "Practical examples of how small businesses use AI for enquiries, admin, customer service, documents and follow-up without replacing human judgement.",
    h1: "How small businesses use AI in practical day-to-day work",
    intro:
      "The most useful small-business AI projects are rarely dramatic. They remove a repeated delay, organise information or help a person complete a routine task more consistently.",
    sections: [
      ["Start with a business bottleneck, not an AI tool", ["A useful project begins with a repeated process that costs time or loses opportunities. Examples include copying website enquiries into a spreadsheet, answering the same customer questions, preparing standard documents or chasing missing booking details.", "Choosing the tool first often creates a demonstration rather than a dependable workflow. Define the input, the expected result, the exceptions and the person responsible before deciding where AI is appropriate."]],
      ["Common ways small businesses use AI", ["Customer-service teams use controlled chatbots to answer approved questions and collect enquiry details. Sales teams summarise call notes, organise lead information and draft follow-up messages for review. Operations teams extract information from standard documents, classify requests and create internal tasks.", "Marketing teams can use AI to produce first drafts and repurpose source material, but accurate claims, brand tone and final approval should remain with the business."]],
      ["Where automation adds the real value", ["AI output becomes more useful when it is connected to a clear next step. A qualified enquiry can create a CRM record, a booking can trigger preparation instructions, and a completed meeting can create a follow-up task.", "This is why a workflow review matters. The goal is not more generated text. The goal is a faster, more reliable process with clear human oversight."]],
      ["Keep risk proportionate", ["Sensitive customer decisions, legal or financial advice, complaints and unusual cases should have clear human review. Businesses should also limit the personal data sent to third-party tools and keep approved source information current.", "A small pilot with measurable time saved is a better starting point than attempting to automate an entire department at once."]],
    ],
    related: ["ai-automation-services", "ai-chatbot-development", "free-ai-audit"],
  },
  {
    slug: "what-is-ai-workflow-automation",
    title: "What Is AI Workflow Automation? | AITech Innovations",
    description:
      "Learn what AI workflow automation means, how it differs from basic automation and where small businesses can use it safely and effectively.",
    h1: "What is AI workflow automation?",
    intro:
      "AI workflow automation combines predictable business rules with AI-assisted steps such as classifying text, extracting information or drafting a response. It is useful when a process contains both routine actions and unstructured information.",
    sections: [
      ["How a workflow is structured", ["A workflow starts with a trigger, such as a form submission, new email, booked appointment or uploaded document. It then applies rules, creates or updates records and sends the result to the next person or system.", "An AI step may interpret the message, identify the service requested or summarise a document. The surrounding automation still controls what happens next and where human approval is required."]],
      ["AI automation versus basic automation", ["Basic automation works best when inputs are already structured: if a form field equals a value, assign a task to a specific team. AI can help when the input is less consistent, such as a free-text enquiry that needs to be categorised.", "The two approaches should work together. Deterministic rules are easier to test and should handle predictable decisions. AI should be used only where it solves a genuine interpretation problem."]],
      ["A small-business example", ["A website enquiry arrives with a free-text project description. AI creates a short summary and suggests a service category. Rules then check location and budget, create the CRM record, assign an owner and send an acknowledgement.", "If the message includes a complaint or sensitive topic, the workflow can stop automatic replies and alert a manager. This exception handling is part of a production-ready design."]],
      ["How to assess a workflow", ["Measure the current volume, time per task, error rate and delay before changing anything. Confirm that the source data is available and that the team agrees on the desired result.", "The best first workflow is frequent enough to matter, stable enough to describe and low-risk enough to test with real oversight."]],
    ],
    related: ["ai-automation-services", "crm-automation-services", "free-ai-audit"],
  },
  {
    slug: "ai-chatbots-for-customer-service",
    title: "AI Chatbots for Customer Service: A Practical Guide | AITech Innovations",
    description:
      "A practical guide to AI chatbots for customer service, including suitable use cases, human hand-off, knowledge bases, privacy and measurement.",
    h1: "AI chatbots for customer service: where they help and where they do not",
    intro:
      "A customer-service chatbot can improve response speed for common questions, but only when its scope, source information and human hand-off are designed carefully.",
    sections: [
      ["Choose a narrow, useful role", ["A small-business chatbot should focus on questions it can answer reliably: service coverage, opening hours, process, pricing ranges, appointment options and the information needed for an enquiry.", "It should clearly identify itself as an automated assistant and avoid presenting general information as professional advice."]],
      ["Build from approved information", ["Reliable answers depend on a concise, maintained knowledge base. Website copy, service details, policies and contact routes should agree with each other before they are used by the assistant.", "The chatbot also needs a defined response when information is missing. A confident invented answer is worse than a clear hand-off to the team."]],
      ["Design the human hand-off", ["Visitors should be able to reach email, WhatsApp, a booking calendar or an enquiry form without fighting the chatbot. Urgent, sensitive or unusual questions should trigger a direct hand-off rather than more automated questioning.", "When a lead is captured, the team needs the conversation context and a clear next action. Otherwise the chatbot has only moved the admin problem elsewhere."]],
      ["Measure useful outcomes", ["Conversation count alone does not show value. Track qualified leads, booking clicks, resolved common questions, unanswered topics and the rate of successful hand-offs.", "Review transcripts carefully without sending personal contact details into analytics. Recurring unanswered questions can improve both the chatbot knowledge and the website itself."]],
      ["Plan maintenance before launch", ["A chatbot is not a one-off installation. Service details, prices, coverage areas, booking links and policies change, so someone must own regular knowledge reviews and approve important updates.", "Test the assistant with real customer wording, spelling variations and questions that should be refused or handed over. Keep a short launch checklist for answer accuracy, contact routes, lead delivery, analytics and mobile usability."]],
    ],
    related: ["ai-chatbot-development", "appointment-booking-automation", "free-ai-audit"],
  },
];

function escapeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function analyticsHead() {
  return `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LTL4JXMYP2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LTL4JXMYP2');
    </script>
    <script>
      (function(c,l,a,r,i){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        function loadClarity(){
          var t=l.createElement(r),y=l.getElementsByTagName(r)[0];
          t.async=1;t.src="https://www.clarity.ms/tag/"+i;y.parentNode.insertBefore(t,y);
        }
        if(l.readyState==="complete"){c.setTimeout(loadClarity,1000);}
        else{c.addEventListener("load",function(){c.setTimeout(loadClarity,1000);},{once:true});}
      })(window, document, "clarity", "script", "x1bt97hjsh");
    </script>`;
}

function pageHead({ title, description, canonical, schema = "" }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${SITE_URL}${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${SITE_URL}${canonical}" />
    ${analyticsHead()}
    <link rel="icon" href="/assets/logo.webp" />
    <link rel="stylesheet" href="/styles.css?v=20260611-growth-systems" />
    ${schema}
  </head>`;
}

function header() {
  return `<header class="site-header" data-header>
      <a class="brand" href="/" aria-label="AITech Innovations home"><img src="/assets/logo.webp" alt="" width="34" height="34" /><span>AITech Innovations</span></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
      <nav class="site-nav" id="site-nav" data-nav>
        <a href="/website-content-services">Websites & Content</a>
        <a href="/ads-setup-services">Ads Setup</a>
        <a href="/ai-automation-services">Automation</a>
        <a href="/blog">Blog</a>
        <a class="nav-cta" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="header">Free Strategy Call</a>
      </nav>
    </header>`;
}

function footer() {
  return `<footer class="site-footer">
      <div class="container footer-grid">
        <div><a class="brand footer-brand" href="/"><img src="/assets/logo.webp" alt="" width="30" height="30" /><span>AITech Innovations</span></a><p>Digital growth systems for UK service businesses that need more enquiries and a better way to handle them.</p><p>Registered in England & Wales.<br />Company No: 15076403.<br />VAT No: GB498138444.</p></div>
        <div><h3>Services</h3><a href="/website-content-services">Websites & content</a><a href="/ads-setup-services">Ads & lead generation</a><a href="/ai-automation-services">Automation</a><a href="/ai-chatbot-development">AI chatbots</a><a href="/crm-automation-services">CRM automation</a></div>
        <div><h3>Resources</h3><a href="/free-strategy-call">Free strategy call</a><a href="/free-ai-audit">Automation audit</a><a href="/blog">Insights</a><a href="/about.html">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
      </div>
      <div class="container footer-bottom"><span>© <span data-current-year>2026</span> AITech Innovations Ltd.</span><a href="#" data-email-link data-analytics-location="footer">support@aitechinnovations.com</a></div>
    </footer>
    <div class="mobile-contact-bar" aria-label="Quick contact options"><a href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="mobile_bar">Strategy call</a><a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="strategy" data-analytics-location="mobile_bar">WhatsApp</a></div>
    <script src="/script.js?v=20260611-growth-systems"></script>`;
}

function relatedLinks(currentSlug) {
  return services
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3)
    .map((item) => `<a class="card seo-link-card" href="/${item.slug}"><h3>${item.eyebrow}</h3><p>${item.description}</p><span>Explore service</span></a>`)
    .join("\n");
}

function servicePage(service) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    url: `${SITE_URL}/${service.slug}`,
    provider: { "@type": "Organization", name: "AITech Innovations", url: `${SITE_URL}/` },
    areaServed: "United Kingdom",
  };
  const schema = `<script type="application/ld+json">${escapeJson({ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] })}</script>`;

  return `${pageHead({ title: service.title, description: service.description, canonical: `/${service.slug}`, schema })}
  <body>
    ${header()}
    <main>
      <section class="hero section-pad seo-hero"><div class="container seo-hero-grid"><div class="reveal"><p class="eyebrow">${service.eyebrow}</p><h1>${service.h1}</h1><p class="hero-text">${service.intro}</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="hero">Book a Free Strategy Call</a><a class="button secondary" href="#use-cases">View use cases</a></div></div><aside class="seo-summary reveal"><strong>Start with one useful workflow</strong><p>We review the current process, identify the repeated delay and recommend a practical first automation.</p><a href="/blog/what-is-ai-workflow-automation">Read: What is AI workflow automation?</a></aside></div></section>

      <section class="section-pad"><div class="container"><div class="section-heading"><p class="eyebrow">The problem</p><h2>${service.problemTitle}</h2><p>${service.problemIntro}</p></div><div class="card-grid seo-three-grid">${service.problems.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>

      <section class="section-pad muted"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">The solution</p><h2>${service.solutionTitle}</h2></div><div class="seo-long-copy"><p>${service.solution}</p><p>Every workflow includes clear ownership, exception handling and a way for staff to step in. We test the process before it becomes part of everyday work.</p></div></div></section>

      <section class="section-pad"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">Benefits</p><h2>What a well-designed workflow improves</h2></div><ul class="seo-check-list">${service.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}</ul></div></section>

      <section class="section-pad muted" id="use-cases"><div class="container"><div class="section-heading center"><p class="eyebrow">Use cases</p><h2>Where this service can be applied</h2></div><div class="card-grid seo-four-grid">${service.useCases.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>

      <section class="section-pad faq-section"><div class="container"><div class="section-heading center"><p class="eyebrow">FAQ</p><h2>Questions about ${service.eyebrow.toLowerCase()}</h2></div><div class="faq-list">${service.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div></div></section>

      <section class="section-pad muted"><div class="container"><div class="section-heading center"><p class="eyebrow">Related services</p><h2>Build a connected enquiry and follow-up system</h2></div><div class="card-grid seo-three-grid">${relatedLinks(service.slug)}</div></div></section>

      <section class="section-pad seo-cta"><div class="container narrow"><h2>Find the first automation worth implementing</h2><p>Use a free strategy call to review the current process, its cost and the safest practical next step.</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="service_cta">Book a Free Strategy Call</a><a class="button secondary" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="automation" data-analytics-location="service_cta">Ask on WhatsApp</a></div></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

function blogPost(post) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.description,
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: "AITech Innovations" },
    publisher: { "@type": "Organization", name: "AITech Innovations", logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/logo.webp` } },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  const schema = `<script type="application/ld+json">${escapeJson(articleSchema)}</script>`;
  const related = post.related
    .map((slug) => {
      if (slug === "free-ai-audit") return `<a class="card seo-link-card" href="/free-ai-audit"><h3>Free AI Automation Audit</h3><p>Review one workflow and identify a practical first improvement.</p><span>Request an audit</span></a>`;
      const service = services.find((item) => item.slug === slug);
      return `<a class="card seo-link-card" href="/${service.slug}"><h3>${service.eyebrow}</h3><p>${service.description}</p><span>Explore service</span></a>`;
    })
    .join("");

  return `${pageHead({ title: post.title, description: post.description, canonical: `/blog/${post.slug}`, schema })}
  <body>
    ${header()}
    <main>
      <article class="article-page">
        <header class="hero section-pad"><div class="container narrow"><p class="eyebrow">AI automation guide</p><h1>${post.h1}</h1><p class="hero-text">${post.intro}</p><p class="article-meta">Published 11 June 2026 · AITech Innovations</p></div></header>
        <div class="container narrow article-body">${post.sections.map(([heading, paragraphs]) => `<section><h2>${heading}</h2>${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("")}</div>
      </article>
      <section class="section-pad muted"><div class="container"><div class="section-heading center"><p class="eyebrow">Next steps</p><h2>Related automation guidance and services</h2></div><div class="card-grid seo-three-grid">${related}</div></div></section>
      <section class="section-pad seo-cta"><div class="container narrow"><h2>Apply this to your own enquiry process</h2><p>Book a free strategy call to discuss your website, content, advertising or automation priorities.</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="article_cta">Book a Free Strategy Call</a><a class="button secondary" href="/blog">Read more guides</a></div></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

function blogIndex() {
  const title = "AI Automation Blog for Small Businesses | AITech Innovations";
  const description = "Practical guides to AI automation, chatbots, CRM workflows and appointment systems for UK small businesses.";
  return `${pageHead({ title, description, canonical: "/blog" })}
  <body>
    ${header()}
    <main>
      <section class="hero section-pad"><div class="container narrow"><p class="eyebrow">Digital growth insights</p><h1>Practical guidance for growing a service business online</h1><p class="hero-text">Clear explanations of websites, content, advertising, automation, chatbots and lead workflows for owners who want useful improvements without unnecessary jargon.</p><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="blog_hero">Book a Free Strategy Call</a></div></section>
      <section class="section-pad"><div class="container"><div class="card-grid blog-grid">${posts.map((post) => `<article class="card blog-card"><p class="eyebrow">Guide</p><h2><a href="/blog/${post.slug}">${post.h1}</a></h2><p>${post.description}</p><a class="text-link" href="/blog/${post.slug}">Read article</a></article>`).join("")}</div></div></section>
      <section class="section-pad muted"><div class="container"><div class="section-heading center"><p class="eyebrow">Services</p><h2>Put the guidance into practice</h2></div><div class="card-grid seo-three-grid">${services.slice(0, 3).map((service) => `<a class="card seo-link-card" href="/${service.slug}"><h3>${service.eyebrow}</h3><p>${service.description}</p><span>Explore service</span></a>`).join("")}</div></div></section>
      <section class="section-pad seo-cta"><div class="container narrow"><h2>Not sure what to improve first?</h2><p>Use the free strategy call to identify whether your website, content, advertising or follow-up system is the current bottleneck.</p><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="blog_cta">Book a Free Strategy Call</a></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

function auditPage() {
  const title = "Free AI Automation Audit for Small Businesses | AITech Innovations";
  const description = "Request a free 30-minute AI automation audit. Identify repetitive admin, weak enquiry follow-up and one practical workflow to improve.";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ["What happens during the free AI audit?", "We review one or two repeated processes, identify delays and discuss a realistic first improvement."],
      ["Do I need to buy software?", "No. The audit starts with your current tools and only recommends software when there is a clear need."],
      ["Is there an obligation to proceed?", "No. You will receive practical next steps and can decide whether to implement them."],
    ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  };
  return `${pageHead({ title, description, canonical: "/free-ai-audit", schema: `<script type="application/ld+json">${escapeJson(faqSchema)}</script>` })}
  <body>
    ${header()}
    <main>
      <section class="hero section-pad"><div class="container seo-hero-grid"><div><p class="eyebrow">Automation-focused strategy call</p><h1>Find one practical AI automation opportunity</h1><p class="hero-text">We review where repetitive admin, slow follow-up or disconnected tools are costing time, then outline a sensible first workflow with clear human control.</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="audit_hero">Book a Free Strategy Call</a><a class="button secondary" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="automation" data-analytics-location="audit_hero">Ask on WhatsApp</a></div></div><aside class="seo-summary"><strong>Useful preparation</strong><p>Bring one repeated task, the tools involved and an estimate of how often it happens. No technical preparation is required.</p></aside></div></section>
      <section class="section-pad"><div class="container"><div class="section-heading center"><p class="eyebrow">What we review</p><h2>A focused look at the current workflow</h2></div><div class="card-grid seo-three-grid"><article class="card"><h3>Where time is lost</h3><p>Repeated data entry, inbox handling, scheduling, document preparation or follow-up delays.</p></article><article class="card"><h3>What can be connected</h3><p>Your website, forms, email, calendar, CRM, spreadsheets and existing customer tools.</p></article><article class="card"><h3>What should stay human</h3><p>Important decisions, sensitive conversations, unusual cases and final approval points.</p></article></div></div></section>
      <section class="section-pad muted"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">What you receive</p><h2>Clear next steps, not a generic AI presentation</h2></div><ul class="seo-check-list"><li>A short map of the current process and its main bottleneck.</li><li>A recommended first workflow based on value, effort and risk.</li><li>The likely tools or integrations involved.</li><li>Key exceptions, privacy points and human review stages.</li><li>A practical implementation option if you want help building it.</li></ul></div></section>
      <section class="section-pad faq-section"><div class="container"><div class="section-heading center"><p class="eyebrow">FAQ</p><h2>About the free AI audit</h2></div><div class="faq-list"><details><summary>What happens during the free AI audit?</summary><p>We review one or two repeated processes, identify delays and discuss a realistic first improvement.</p></details><details><summary>Do I need to buy software?</summary><p>No. The audit starts with your current tools and only recommends software when there is a clear need.</p></details><details><summary>Is there an obligation to proceed?</summary><p>No. You will receive practical next steps and can decide whether to implement them.</p></details></div></div></section>
      <section class="section-pad seo-cta"><div class="container narrow"><h2>Discuss your automation opportunity</h2><p>Use the free strategy call and select Automation & Chatbots as your service interest.</p><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="audit_cta">Book a Free Strategy Call</a></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

function pillarPage(config) {
  const schema = `<script type="application/ld+json">${escapeJson({
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.h1,
    description: config.description,
    url: `${SITE_URL}/${config.slug}`,
    provider: { "@type": "Organization", name: "AITech Innovations", url: `${SITE_URL}/` },
    areaServed: "United Kingdom",
  })}</script>`;
  return `${pageHead({ title: config.title, description: config.description, canonical: `/${config.slug}`, schema })}
  <body>
    ${header()}
    <main>
      <section class="hero section-pad"><div class="container seo-hero-grid"><div><p class="eyebrow">${config.eyebrow}</p><h1>${config.h1}</h1><p class="hero-text">${config.intro}</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="hero">Book a Free Strategy Call</a><a class="button secondary" href="#deliverables">View deliverables</a></div></div><aside class="seo-summary"><strong>${config.summaryTitle}</strong><p>${config.summary}</p><p class="price">${config.price}</p></aside></div></section>
      <section class="section-pad"><div class="container"><div class="section-heading center"><p class="eyebrow">Problems solved</p><h2>${config.problemHeading}</h2></div><div class="problem-grid">${config.problems.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>
      <section class="section-pad muted" id="deliverables"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">Solution</p><h2>${config.deliverablesHeading}</h2><p>${config.deliverablesIntro}</p></div><ul class="seo-check-list">${config.deliverables.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>
      <section class="section-pad"><div class="container"><div class="section-heading center"><p class="eyebrow">Benefits</p><h2>${config.benefitsHeading}</h2></div><div class="card-grid seo-three-grid">${config.benefits.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>
      <section class="section-pad muted"><div class="container"><div class="section-heading center"><p class="eyebrow">Use cases</p><h2>${config.useCasesHeading}</h2></div><div class="card-grid seo-four-grid">${config.useCases.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>
      <section class="section-pad"><div class="container"><div class="section-heading center"><p class="eyebrow">How it works</p><h2>A clear, founder-led delivery process</h2></div><div class="card-grid seo-four-grid">${config.process.map(([title, copy]) => `<article class="card"><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>
      <section class="section-pad muted"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">Important scope</p><h2>${config.scopeHeading}</h2></div><div class="seo-long-copy"><p>${config.scope}</p><p>Any additional work is itemised before the project begins, so the scope and ongoing costs remain clear.</p></div></div></section>
      <section class="section-pad faq-section"><div class="container"><div class="section-heading center"><p class="eyebrow">FAQ</p><h2>Questions about ${config.eyebrow.toLowerCase()}</h2></div><div class="faq-list">${config.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("")}</div></div></section>
      <section class="section-pad seo-cta"><div class="container narrow"><h2>${config.ctaHeading}</h2><p>${config.ctaCopy}</p><div class="hero-actions"><a class="button primary" href="/free-strategy-call" data-analytics-cta="quote" data-analytics-location="service_cta">Book a Free Strategy Call</a><a class="button secondary" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="${config.whatsappKey}" data-analytics-location="service_cta">Ask on WhatsApp</a></div></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

function strategyPage() {
  const title = "Free Digital Strategy Call | AITech Innovations";
  const description = "Book a free 30-minute strategy call about websites, content, ads, chatbots or automation for your UK service business.";
  return `${pageHead({ title, description, canonical: "/free-strategy-call" })}
  <body>
    ${header()}
    <main>
      <section class="hero section-pad"><div class="container seo-hero-grid"><div><p class="eyebrow">Free 30-minute strategy call</p><h1>Choose the right digital growth system for your business</h1><p class="hero-text">Discuss your website, content, advertising, chatbot or follow-up process and leave with a clear recommended next step.</p><div class="hero-actions"><a class="button primary" href="${BOOKING_URL}" target="_blank" rel="noopener noreferrer" data-booking-link data-analytics-location="strategy_hero">Choose a call time</a><a class="button secondary" href="#strategy-form">Send project details</a></div></div><aside class="seo-summary"><strong>Who this is for</strong><p>UK service businesses that need more enquiries, a stronger online presence or a better way to respond and follow up.</p><p>No obligation and no technical preparation required.</p></aside></div></section>
      <section class="section-pad"><div class="container"><div class="section-heading center"><p class="eyebrow">Topics</p><h2>Use the call for one service or a connected system</h2></div><div class="pillar-grid"><article class="pillar-card"><h3>Website & Content</h3><p>Website design, landing pages, service copy, SEO structure and conversion tracking.</p></article><article class="pillar-card"><h3>Ads & Lead Generation</h3><p>Google or Meta campaign setup, landing pages, targeting and initial conversion tracking.</p></article><article class="pillar-card"><h3>Automation & Chatbots</h3><p>Chatbots, CRM workflows, booking automation and lead follow-up systems.</p></article></div></div></section>
      <section class="section-pad muted"><div class="container seo-copy-grid"><div class="section-heading"><p class="eyebrow">What happens</p><h2>A focused conversation with practical outputs</h2><p>We will review the current situation, the result you need and the most useful first project.</p></div><ul class="seo-check-list"><li>Clarify the main enquiry or workflow problem.</li><li>Identify which service pillar should come first.</li><li>Discuss realistic scope, starting price and timing.</li><li>Outline a simple recommended next step after the call.</li><li>Confirm whether a paid pilot or standard project is the best fit.</li></ul></div></section>
      <section class="section-pad" id="strategy-form"><div class="container contact-grid"><div class="section-heading"><p class="eyebrow">Fallback enquiry form</p><h2>Send the project details instead</h2><p>If you are not ready to choose a calendar time, submit the essentials. We will reply within one business day.</p><div class="contact-options"><a href="#" data-email-link data-analytics-location="strategy_form">support@aitechinnovations.com</a><a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" data-whatsapp-link data-whatsapp-message="strategy" data-analytics-location="strategy_form">WhatsApp strategy enquiry</a></div></div>
        <form class="strategy-form" data-strategy-form>
          <label class="hidden-field" aria-hidden="true">Leave this field empty<input name="_honey" tabindex="-1" autocomplete="off" /></label>
          <label>Name<input name="name" autocomplete="name" required /></label>
          <label>Business name<input name="business" autocomplete="organization" required /></label>
          <label>Email<input name="email" type="email" autocomplete="email" required /></label>
          <label>Phone<input name="phone" autocomplete="tel" /></label>
          <label>Service interest<select name="service" required><option value="">Choose one</option><option>Website & Content</option><option>Ads & Lead Generation</option><option>Automation & Chatbots</option><option>Connected growth system</option><option>Not sure yet</option></select></label>
          <label>Current website<input name="website" type="url" placeholder="https://" /></label>
          <label>Budget range<select name="budget" required><option value="">Choose one</option><option>£399 - £749</option><option>£750 - £1,499</option><option>£1,500 - £2,999</option><option>£3,000+</option><option>Not sure yet</option></select></label>
          <label>Preferred timeline<select name="timeline" required><option value="">Choose one</option><option>As soon as possible</option><option>Within 30 days</option><option>Within 3 months</option><option>Researching options</option></select></label>
          <label class="full-field">Primary business goal<textarea name="goal" rows="4" placeholder="What would you like to improve or achieve?" required></textarea></label>
          <p class="form-note full-field">By submitting this form, you agree that AITech Innovations can contact you about this enquiry. See our <a href="/privacy">privacy policy</a>.</p>
          <div class="form-actions full-field"><button class="button primary" type="submit">Request Strategy Call</button><p data-strategy-status aria-live="polite"></p></div>
        </form>
      </div></section>
      <section class="section-pad muted"><div class="container"><div class="section-heading center"><p class="eyebrow">Paid pilot availability</p><h2>Two founder-led pilot projects</h2><p>Discounted pilot places are available for suitable UK service businesses willing to provide honest feedback and permission to publish the completed work. Results are never guaranteed or invented.</p></div><div class="pilot-grid"><article class="pilot-card"><h3>Clear scope</h3><p>One tightly defined website, advertising setup or automation project with agreed deliverables.</p></article><article class="pilot-card"><h3>Paid engagement</h3><p>The pilot is discounted, not free, so both sides commit to completing the project properly.</p></article><article class="pilot-card"><h3>Honest case study</h3><p>Only real screenshots, feedback and measurable information approved by the business will be published.</p></article></div></div></section>
    </main>
    ${footer()}
  </body>
</html>`;
}

const websiteContentPage = {
  slug: "website-content-services",
  title: "Website Design and Content Services | AITech Innovations",
  description: "Website design, landing pages, service copy, SEO structure and conversion tracking for UK service businesses.",
  eyebrow: "Website & Content",
  h1: "Websites and content built to generate better enquiries",
  intro: "We plan, write and build clear websites and landing pages that explain the offer, establish trust and make the next action easy.",
  summaryTitle: "A practical online foundation",
  summary: "Ideal for new businesses, outdated websites and service offers that need a focused landing page.",
  price: "From £499",
  problemHeading: "Fix the gaps that stop visitors becoming enquiries",
  problems: [["Unclear offer", "Visitors cannot quickly understand the service, audience or next step."], ["Weak trust", "Generic copy and missing proof make a capable business look less established."], ["Poor conversion path", "Contact routes, landing pages and tracking are disconnected or difficult to use."]],
  deliverablesHeading: "Design, copy and tracking in one project",
  deliverablesIntro: "The final scope is matched to the business and page count.",
  deliverables: ["Responsive website design or redesign.", "Service-page and landing-page copy support.", "Clear calls to action, forms, booking and WhatsApp routes.", "Basic technical SEO, metadata and indexing setup.", "GA4 conversion tracking and Hostinger-ready launch support."],
  benefitsHeading: "A stronger foundation for trust, search and conversion",
  benefits: [["Clearer positioning", "Focused copy explains the service, ideal customer and next step without making visitors work it out."], ["Better enquiry quality", "Forms, booking routes and page structure collect more useful context before the first conversation."], ["Faster ownership", "A lightweight, Hostinger-ready build avoids unnecessary plugins and remains easy to maintain."]],
  useCasesHeading: "Website and content projects for common growth stages",
  useCases: [["New business launch", "Create a credible first website with a focused offer, basic SEO and reliable contact routes."], ["Outdated website redesign", "Replace confusing pages, dated visuals and weak mobile usability with a clearer customer journey."], ["Campaign landing page", "Build a dedicated page that matches one advert, audience and conversion action."], ["Service content expansion", "Add useful service or location pages without copying thin, generic text across the site."]],
  process: [["Discover", "Clarify the audience, offer, proof and enquiry goal."], ["Plan", "Agree the sitemap, page sections, copy inputs and tracking."], ["Build", "Create the responsive pages and review them together."], ["Launch", "Deploy, test contact routes and confirm indexing basics."]],
  scopeHeading: "Content support is part of the website process",
  scope: "We can shape supplied information into clear website copy. Ongoing social posting, high-volume article production and photography are separate services and are not included unless quoted.",
  faqs: [["How many pages are included?", "The £499 starting point is suitable for a focused one-page website or landing page. Multi-page sites are quoted after the page structure and content needs are clear."], ["Can you write the website copy?", "Yes. We can turn your service information, process and proof into clear page copy. Specialist regulated claims still need your approval."], ["Will the site be ready for Google?", "The build includes technical basics such as titles, descriptions, headings, sitemap support and indexable page structure. Rankings are not guaranteed."], ["Can you redesign an existing website?", "Yes. We can retain useful content and tracking while rebuilding the structure, design and enquiry journey."]],
  ctaHeading: "Discuss your website and content priorities",
  ctaCopy: "Book a free strategy call to identify the right first page, package and enquiry route.",
  whatsappKey: "website",
};

const adsSetupPage = {
  slug: "ads-setup-services",
  title: "Google and Meta Ads Setup Services | AITech Innovations",
  description: "Google or Meta ads setup, landing pages and conversion tracking for UK service businesses. Initial setup and launch from £399 plus ad spend.",
  eyebrow: "Ads & Lead Generation",
  h1: "Advertising setup connected to a clear landing page and enquiry path",
  intro: "We prepare and launch a focused Google or Meta campaign with the targeting, advert structure, landing page and tracking needed to start collecting useful data.",
  summaryTitle: "Setup and launch only",
  summary: "This initial offer does not include ongoing monthly campaign management or guaranteed lead volume.",
  price: "From £399 plus ad spend",
  problemHeading: "Avoid launching ads into a weak enquiry system",
  problems: [["No focused landing page", "Paid visitors arrive on a general homepage that does not match the advert."], ["Missing tracking", "Clicks are purchased without reliable form, call or booking measurement."], ["Unclear campaign structure", "Services, locations and audiences are mixed together, making results difficult to interpret."]],
  deliverablesHeading: "The essentials for a controlled first campaign",
  deliverablesIntro: "Choose Google Ads or Meta Ads for the initial setup.",
  deliverables: ["Campaign objective and account structure.", "Initial keyword, audience or location targeting.", "Advert copy and creative guidance using approved business claims.", "One focused landing page or review of an existing page.", "GA4 and platform conversion tracking checks.", "Launch handover with budget and monitoring guidance."],
  benefitsHeading: "Launch with clearer decisions and measurable actions",
  benefits: [["Focused traffic", "Targeting is organised around a defined service, location and audience rather than broad, mixed campaigns."], ["Consistent message", "The advert and landing page use the same offer and next step, reducing confusion after the click."], ["Useful measurement", "Conversion actions are checked before launch so enquiries can be separated from ordinary page visits."]],
  useCasesHeading: "Suitable first campaigns for service businesses",
  useCases: [["Local service leads", "Use Google Search to reach people actively looking for a specific service in an agreed area."], ["New offer test", "Build a focused landing page and small campaign to test demand before expanding the budget."], ["Consultation bookings", "Connect adverts to a qualification page and calendar route for higher-value services."], ["Remarketing preparation", "Set up the required tracking and audience foundations for a later remarketing campaign."]],
  process: [["Assess", "Review the offer, audience, budget and current website."], ["Prepare", "Build the campaign structure, adverts and landing path."], ["Track", "Configure measurable enquiry actions before launch."], ["Launch", "Publish the campaign and provide a clear handover."]],
  scopeHeading: "Advertising performance depends on the market and budget",
  scope: "The service covers initial setup and launch. Ad spend is paid directly to Google or Meta. Ongoing optimisation, reporting and creative production require a separate agreement.",
  faqs: [["Do you manage campaigns every month?", "This offer covers setup and launch only. Ongoing optimisation or reporting can be scoped separately after the initial campaign has useful data."], ["Is ad spend included in the £399 price?", "No. Advertising spend is paid directly to Google or Meta and should be agreed before the campaign is built."], ["Can you guarantee leads?", "No. Lead volume and cost depend on the offer, market, budget, competition and website experience. The setup is designed to create a controlled test, not a guaranteed outcome."], ["Do I need a landing page?", "Usually. A focused landing page gives the advert a consistent message and measurable next step. We can build one or review a suitable existing page."]],
  ctaHeading: "Check whether paid advertising is the right next step",
  ctaCopy: "Book a free strategy call before committing ad spend to a campaign or landing page.",
  whatsappKey: "ads",
};

for (const service of services) {
  fs.writeFileSync(path.join(ROOT, `${service.slug}.html`), servicePage(service));
}

fs.writeFileSync(path.join(ROOT, "free-ai-audit.html"), auditPage());
fs.writeFileSync(path.join(ROOT, "free-strategy-call.html"), strategyPage());
fs.writeFileSync(path.join(ROOT, "website-content-services.html"), pillarPage(websiteContentPage));
fs.writeFileSync(path.join(ROOT, "ads-setup-services.html"), pillarPage(adsSetupPage));
fs.writeFileSync(path.join(ROOT, "blog.html"), blogIndex());

for (const post of posts) {
  fs.writeFileSync(path.join(ROOT, `blog-${post.slug}.html`), blogPost(post));
}

console.log(`Generated ${services.length + posts.length + 5} SEO pages.`);

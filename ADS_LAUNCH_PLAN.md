# Google Search Ads Launch Plan

## Objective

Generate qualified website consultation enquiries from UK service businesses without paying for broad awareness traffic. Start with one offer, one landing page and one geographic market so lead quality can be reviewed before expanding.

## First Campaign

- Campaign: `Website Design - Kent - Search`
- Landing page: `https://www.aitechinnovations.com/website-design-for-service-businesses`
- Offer: Conversion-focused service-business websites from £499
- Location: Kent, with presence targeting set to people in or regularly in the selected locations
- Schedule: Monday-Friday, 08:00-19:00 UK time
- Initial budget: £15 per day for 30 days, maximum planned media spend £450
- Bid strategy: Maximise Clicks initially with a conservative CPC limit; move to Maximise Conversions only after reliable conversion volume exists
- Networks: Google Search only for the first test; disable Display expansion
- Primary conversion: `generate_lead`
- Secondary observation: `calendar_booking_click`

## Ad Groups And Keywords

Use phrase and exact match initially. Do not begin with unrestricted broad match.

### Website Designer Kent

- "website designer kent"
- [website designer kent]
- "web design kent"
- [web design kent]
- "small business website kent"
- "service business website design"

### Website Designer Maidstone

- "website designer maidstone"
- [website designer maidstone]
- "web design maidstone"
- [web design maidstone]
- "small business website maidstone"

### Website Redesign

- "website redesign kent"
- [website redesign kent]
- "business website redesign"
- "replace old business website"

## Negative Keywords

Add before launch and expand from the search-terms report:

- free
- jobs
- job
- salary
- course
- courses
- training
- tutorial
- template
- templates
- theme
- themes
- internship
- degree
- university
- wix
- squarespace
- shopify jobs
- wordpress jobs
- how to
- diy
- download

## Responsive Search Ad Assets

Headlines are kept within Google's 30-character limit:

- Website Design From £499
- Websites For Service Firms
- Kent Website Design
- Turn Visits Into Enquiries
- Clear Copy And Mobile Design
- Website Redesign For Business
- Tracking Included
- Built For UK Service Firms
- Free Website Consultation
- Launch In Around 7-14 Days
- Forms, WhatsApp And Booking
- Founder-Led Website Projects

Descriptions are kept within Google's 90-character limit:

- Clear, mobile-friendly websites for UK service businesses. Packages start from £499.
- Improve trust and enquiries with focused copy, contact routes and conversion tracking.
- Discuss your website goals and receive a practical scope, price and recommended next step.
- New UK agency offering two discounted paid pilot places. No false performance claims.

Use these assets:

- Sitelink: Website Packages -> `/website-content-services`
- Sitelink: Free Consultation -> `/free-strategy-call`
- Sitelink: About AITech -> `/about.html`
- Sitelink: Website Examples -> `/#examples`
- Callouts: `From £499`, `UK Service Businesses`, `Mobile-Friendly`, `Tracking Included`
- Structured snippet: `Services: Website Design, Landing Pages, Website Copy, Basic SEO`

## Tracking

- Enable Google Ads auto-tagging.
- Use this campaign tracking template:
  `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=website_design_kent&utm_content={creative}&utm_term={keyword}`
- Import only GA4 `generate_lead` as the primary Google Ads conversion initially.
- Keep `calendar_booking_click` as secondary until confirmed calendar bookings can be measured.
- Do not optimise toward CTA, WhatsApp or email clicks.
- Verify Consent Mode v2 in Google Tag Assistant before campaign activation.

## Launch Gates

Do not enable spend until all are true:

- Cookie acceptance and rejection both update all four Consent Mode v2 signals.
- The landing page loads on mobile and desktop without horizontal overflow.
- A test enquiry reaches Google Sheets or email and produces exactly one `generate_lead`.
- Campaign source, medium, name, content, term and click ID are attached to the lead when present.
- GA4 marks `generate_lead` as a key event and Google Ads imports it as the primary conversion.
- Internal team browsers are marked with `?internal=1` and filtered from reporting.
- Billing, location, schedule, negative keywords and maximum daily budget have been reviewed.

## 30-Day Review Rules

- Review search terms every working day for the first week, then at least twice weekly.
- Pause irrelevant terms immediately and add suitable negatives.
- Do not judge the campaign on clicks alone. Track qualified leads, calls attended, proposals and customers.
- After the first 100 clicks or £250 spend, review landing-page conversion rate and lead quality.
- Pause and revise if spend reaches £300 without a qualified enquiry.
- Expand geography or services only after the first campaign creates at least one qualified opportunity.


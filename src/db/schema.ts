import { pgTable, uuid, text, timestamp, index } from "drizzle-orm/pg-core";

export const clickEvents = pgTable(
  "click_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(), // phone_click | whatsapp_click | quote_click | chat_open
    location: text("location"), // button placement (hero, header, floating, footer...)
    pageUrl: text("page_url"),
    sessionId: text("session_id"),
    ipHash: text("ip_hash"),
    userAgent: text("user_agent"),
    // Ad attribution captured on landing (see captureAttribution in lib/analytics)
    gclid: text("gclid"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    referrer: text("referrer"),
    occurredAt: timestamp("occurred_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [
    index("click_events_name_idx").on(t.name),
    index("click_events_occurred_idx").on(t.occurredAt),
  ]
);

// Quote/contact form submissions — the actual lead contents, so they are
// readable in /admin/forms even if the visitor never sends the WhatsApp message.
export const formSubmissions = pgTable(
  "form_submissions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    formName: text("form_name").notNull(), // quote_form | quick_contact_form | contact_form
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    service: text("service"), // Kazalı/Hasarlı/Pert/Hurda (quick+contact forms)
    brand: text("brand"),
    model: text("model"),
    year: text("year"),
    fuel: text("fuel"),
    damage: text("damage"),
    message: text("message"),
    contactMethod: text("contact_method"), // phone | whatsapp | email
    pageUrl: text("page_url"),
    sessionId: text("session_id"),
    ipHash: text("ip_hash"),
    gclid: text("gclid"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (t) => [index("form_submissions_created_idx").on(t.createdAt)]
);

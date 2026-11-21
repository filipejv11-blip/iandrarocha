import test from "node:test";
import assert from "node:assert/strict";
import {
  buildContactFormMessage,
  buildLegalServiceJsonLd,
  buildWhatsAppUrl,
  CONTACT_SUBJECT_OPTIONS,
  FAQ_ITEMS,
  FIRST_ATTENDANCE_STEPS,
  PRACTICE_AREAS,
  SITE_CONFIG,
  WHATSAPP_FLOAT_MESSAGE,
} from "./site-config";

test("buildWhatsAppUrl encodes Portuguese messages with encodeURIComponent", () => {
  const url = buildWhatsAppUrl(WHATSAPP_FLOAT_MESSAGE);
  assert.ok(url.startsWith("https://wa.me/5583987633502?text="));
  assert.equal(
    decodeURIComponent(url.split("?text=")[1]),
    WHATSAPP_FLOAT_MESSAGE,
  );
  assert.equal(buildWhatsAppUrl(""), "https://wa.me/5583987633502");
});

test("buildContactFormMessage trims values and includes name, subject, and message", () => {
  const msg = buildContactFormMessage({
    name: "  Maria Silva  ",
    subject: "Direito Trabalhista",
    message: "  Preciso de orientação sobre verbas rescisórias. ",
  });
  assert.match(msg, /\*Maria Silva\*/);
  assert.match(msg, /\*Assunto:\* Direito Trabalhista/);
  assert.match(msg, /\*Mensagem:\* Preciso de orientação sobre verbas rescisórias\./);
});

test("PRACTICE_AREAS has 6 ordered items with Direito Trabalhista at 05 and Consultoria at 06", () => {
  assert.equal(PRACTICE_AREAS.length, 6);
  assert.deepEqual(
    PRACTICE_AREAS.map((a) => `${a.number}:${a.title}`),
    [
      "01:Direito de Família",
      "02:Direito Civil",
      "03:Direito do Consumidor",
      "04:Direito Previdenciário",
      "05:Direito Trabalhista",
      "06:Consultoria Jurídica",
    ],
  );
  for (const area of PRACTICE_AREAS) {
    assert.ok(area.ctaLabel.length > 5);
    assert.ok(area.whatsappMessage.length > 10);
  }
});

test("CONTACT_SUBJECT_OPTIONS includes Direito Trabalhista", () => {
  assert.ok(CONTACT_SUBJECT_OPTIONS.includes("Direito Trabalhista"));
});

test("FIRST_ATTENDANCE_STEPS has 3 concise steps and FAQ_ITEMS has 4-6 items", () => {
  assert.equal(FIRST_ATTENDANCE_STEPS.length, 3);
  assert.ok(FAQ_ITEMS.length >= 4 && FAQ_ITEMS.length <= 6);
});

test("OAB compliance: no configuration copy uses the forbidden term 'especialista'", () => {
  const allCopy = [
    SITE_CONFIG.description,
    ...PRACTICE_AREAS.flatMap((a) => [a.title, a.description, a.ctaLabel, a.whatsappMessage]),
    ...FIRST_ATTENDANCE_STEPS.flatMap((s) => [s.title, s.description]),
    ...FAQ_ITEMS.flatMap((f) => [f.question, f.answer]),
  ].join(" ");
  assert.doesNotMatch(allCopy, /especialista/i);
});

test("buildLegalServiceJsonLd emits valid Schema.org LegalService payload", () => {
  const jsonLd = buildLegalServiceJsonLd();
  assert.equal(jsonLd["@context"], "https://schema.org");
  assert.equal(jsonLd["@type"], "LegalService");
  assert.equal(jsonLd.address.addressLocality, "João Pessoa");
  assert.equal(jsonLd.address.addressRegion, "PB");
  assert.equal(jsonLd.areaServed.name, "Brasil");
  assert.equal(jsonLd.telephone, "+55-83-98763-3502");
  assert.ok(jsonLd.serviceType.includes("Direito Trabalhista"));
});

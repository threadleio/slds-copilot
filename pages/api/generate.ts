import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: { code: "METHOD_NOT_ALLOWED", message: "Use POST" } });
  const { prompt } = req.body || {};
  if (!prompt || !String(prompt).trim()) {
    return res.status(400).json({
      meta: { version: "0.1" },
      error: {
        code: "PROMPT_EMPTY",
        message: "Prompt nie może być pusty.",
        hint: "Opisz krótko komponent.",
      },
    });
  }

  const html = `
<section class="slds-p-around_large slds-grid slds-wrap">
  <div class="slds-size_1-of-1 slds-medium-size_1-of-2 slds-large-size_1-of-3">
    <article class="slds-card my-card">
      <div class="slds-card__body slds-card__body_inner">
        <div class="slds-media">
          <div class="slds-media__figure">
            <img src="https://via.placeholder.com/96" alt="Ilustracja produktu" class="slds-m-right_medium" />
          </div>
          <div class="slds-media__body">
            <h2 class="slds-text-heading_small slds-truncate" title="Tytuł karty">Tytuł karty</h2>
            <p class="slds-text-body_regular slds-m-top_x-small">Krótki opis zawartości karty.</p>
            <div class="slds-m-top_medium"><button class="slds-button slds-button_brand" type="button">Działanie</button></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>`;

  const response = {
    meta: { version: "0.1", model: "mock", latencyMs: 42 },
    result: {
      summary: "Karta z obrazkiem po lewej (media object) i przyciskiem",
      patterns: [
        { id: "media_object", label: "Media Object", confidence: 0.92, why: "Obrazek po lewej i treść po prawej" },
        { id: "card", label: "Card", confidence: 0.88, why: "Standardowa karta SLDS" }
      ],
      html,
      tokens: ["slds-card","slds-card__body","slds-card__body_inner","slds-media","slds-media__figure","slds-media__body","slds-grid","slds-wrap","slds-size_1-of-1","slds-medium-size_1-of-2","slds-large-size_1-of-3","slds-button","slds-button_brand","slds-truncate","slds-m-right_medium","slds-text-heading_small"],
      a11y: [
        { id: "image-alt", level: "must", status: "pass", message: "Obrazek ma atrybut alt" },
        { id: "heading-hierarchy", level: "should", status: "pass", message: "Nagłówek w h2" }
      ],
      explanation: {
        decisions: [
          { choice: "Wzorzec media object", justification: "Kanoniczny dla obrazek+treść" },
          { choice: "Padding large (~24px)", justification: "Skala SLDS 16/24; 20px wymaga custom CSS" }
        ],
        limitations: ["Brak dokładnego 20px w skali SLDS"]
      },
      customCss: [
        { selector: ".my-card .slds-card__body_inner", declaration: "padding: 20px;", reason: "Wymaganie użytkownika" }
      ],
      preview: { breakpoints: [ { id: "mobile", width: 360 }, { id: "tablet", width: 768 }, { id: "desktop", width: 1200 } ] }
    }
  };

  res.status(200).json(response);
}

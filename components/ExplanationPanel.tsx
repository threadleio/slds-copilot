export default function ExplanationPanel({ result }: { result: any }) {
  const { explanation, a11y, customCss, patterns } = result || {};
  return (
    <div className="p-4">
      <h3 className="font-medium mb-2">Wyjaśnienia</h3>
      {patterns?.length ? (
        <div className="mb-3">
          <div className="text-sm text-gray-600">Wzorce</div>
          <ul className="list-disc pl-5 text-sm">
            {patterns.map((p: any) => (
              <li key={p.id}>
                {p.label} ({Math.round(p.confidence * 100)}%) – {p.why}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {explanation?.decisions?.length ? (
        <div className="mb-3">
          <div className="text-sm text-gray-600">Decyzje</div>
          <ul className="list-disc pl-5 text-sm">
            {explanation.decisions.map((d: any, i: number) => (
              <li key={i}>
                <strong>{d.choice}:</strong> {d.justification}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {customCss?.length ? (
        <div className="mb-3">
          <div className="text-sm text-gray-600">Sugestie custom CSS</div>
          <ul className="list-disc pl-5 text-sm">
            {customCss.map((c: any, i: number) => (
              <li key={i}>
                <code>
                  {c.selector} {"{ " + c.declaration + " }"}
                </code>{" "}
                — {c.reason}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {a11y?.length ? (
        <div>
          <div className="text-sm text-gray-600">Dostępność (a11y)</div>
          <ul className="list-disc pl-5 text-sm">
            {a11y.map((r: any, i: number) => (
              <li key={i}>
                <strong>{r.level.toUpperCase()}</strong> – {r.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

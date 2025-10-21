"use client";
import { useState } from "react";
import PromptInput from "@/components/PromptInput";
import ResultTabs from "@/components/ResultTabs";

export default function HomePage() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <section>
        <h1 className="text-2xl font-semibold mb-2">SLDS Copilot (MVP)</h1>
        <p className="text-sm text-gray-600 mb-4">
          Opisz komponent, a wygenerujemy HTML + klasy SLDS, podgląd i uzasadnienie.
        </p>
        <PromptInput
          onSubmit={async (prompt) => {
            setError(null);
            setLoading(true);
            setResult(null);
            try {
              const res = await fetch("/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, options: { explain: true, a11yChecklist: true } }),
              });
              const json = await res.json();
              if (!res.ok || json.error)
                throw new Error(json?.error?.message || "Błąd generowania");
              setResult(json.result);
            } catch (e: any) {
              setError(e.message);
            } finally {
              setLoading(false);
            }
          }}
          loading={loading}
        />
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </section>

      <section>
        <ResultTabs result={result} loading={loading} />
      </section>
    </div>
  );
}

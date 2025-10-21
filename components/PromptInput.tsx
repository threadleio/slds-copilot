import { useState } from "react";

export default function PromptInput({
  onSubmit,
  loading,
}: {
  onSubmit: (prompt: string) => void;
  loading?: boolean;
}) {
  const [text, setText] = useState(
    "Chcę kartę z tytułem, przyciskiem i obrazkiem po lewej. Karta responsywna, padding ok. 20px, pojedynczo wyrównana do lewej."
  );

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <label className="block text-sm font-medium mb-2">Opis komponentu (prompt)</label>
      <textarea
        className="w-full h-40 resize-y rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-3 flex gap-2">
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
          onClick={() => onSubmit(text)}
          disabled={loading}
        >
          {loading ? "Generuję…" : "Generuj komponent"}
        </button>
        <button className="px-4 py-2 rounded bg-gray-100" onClick={() => setText("")}>
          Wyczyść
        </button>
      </div>
    </div>
  );
}

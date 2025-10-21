import HtmlOutput from "@/components/HtmlOutput";
import PreviewFrame from "@/components/PreviewFrame";
import ExplanationPanel from "@/components/ExplanationPanel";

export default function ResultTabs({ result, loading }: { result: any; loading?: boolean }) {
  if (loading) return <div className="bg-white rounded-xl p-6 shadow">Analizuję Twój opis…</div>;
  if (!result)
    return (
      <div className="bg-white rounded-xl p-6 shadow text-gray-500">
        Brak wyników. Wpisz prompt i wygeneruj komponent.
      </div>
    );

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="border-b px-4 py-2 text-sm text-gray-600">{result.summary}</div>
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-0">
        <HtmlOutput html={result.html} />
        <PreviewFrame html={result.html} />
        <ExplanationPanel result={result} />
      </div>
    </div>
  );
}

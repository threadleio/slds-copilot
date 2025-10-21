import Prism from "prismjs";
import { useEffect, useRef } from "react";
import "prismjs/components/prism-markup";

export default function HtmlOutput({ html }: { html: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  useEffect(() => {
    Prism.highlightAllUnder(preRef.current || document.body);
  }, [html]);

  return (
    <div className="p-4 border-r">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Kod HTML + SLDS</h3>
        <button
          className="text-sm text-blue-600"
          onClick={() => navigator.clipboard.writeText(html)}
        >
          Kopiuj
        </button>
      </div>
      <pre ref={preRef} className="language-markup text-xs overflow-auto max-h-[60vh]">
        <code className="language-markup">{html}</code>
      </pre>
    </div>
  );
}

import { highlightAllUnder } from "prismjs";
import { useEffect, useRef } from "react";
import "prismjs/components/prism-markup"; // język 'markup' (HTML/XML). Dodawaj kolejne wg potrzeb.

type Props = { html: string };

export default function HtmlOutput({ html }: Props) {
  const preRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    // Odpalaj highlight dopiero w przeglądarce i gdy ref już wskazuje element
    const root = preRef.current ?? document.body;
    highlightAllUnder(root);
  }, [html]);

  return (
    <div className="p-4 border-r">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">Kod HTML + SLDS</h3>
        <button
          className="text-sm text-blue-600"
          onClick={() => navigator.clipboard.writeText(html)}
          type="button"
        >
          Kopiuj
        </button>
      </div>

      <pre ref={preRef} className="language-markup text-xs max-h-[60vh] overflow-auto">
        <code className="language-markup">{html}</code>
      </pre>
    </div>
  );
}

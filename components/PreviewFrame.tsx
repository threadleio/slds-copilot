export default function PreviewFrame({ html }: { html: string }) {
  const src = "/preview/sandbox.html#" + encodeURIComponent(html);
  return (
    <div className="p-4 border-r">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">Podgląd</h3>
        <div className="text-xs text-gray-500">mobile / tablet / desktop (przewiń ↔)</div>
      </div>
      <iframe
        title="preview"
        className="w-full h-[60vh] rounded border"
        src={src}
        sandbox="allow-same-origin allow-top-navigation-by-user-activation"
      />
    </div>
  );
}

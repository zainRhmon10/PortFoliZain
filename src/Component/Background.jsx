export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5D4]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#7B6FFF]/5 rounded-full blur-3xl"></div>

      {/* Middle decorations */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#00F5D4]/5 rounded-full blur-3xl"></div>

      {/* Bottom decorations */}
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#7B6FFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
    </div>
  );
}

"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 py-8 px-6 sm:px-12 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm text-gray-500">
        <div>Manan Speaks &middot; 2026</div>
        <div className="text-center">
          speaksstudio.vercel.app
        </div>
        <div className="text-accent">One product at a time 🚀</div>
      </div>
    </footer>
  );
}

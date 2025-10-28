import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-white/60 text-indigo-700 text-sm">
            <Sparkles className="h-4 w-4" />
            AI-powered discovery & collab
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Accelerate research with an AI-native workspace
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Discover journals and conferences worldwide, find like‑minded collaborators, and manage your research like a pro — all in one place.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#discover" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              Start discovering
            </a>
            <a href="#collaborate" className="px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">
              Explore collaboration
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard label="Journals indexed" value="45k+" />
            <StatCard label="Conferences tracked" value="7.2k" />
            <StatCard label="Researchers onboard" value="120k+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-center">
      <div className="text-3xl font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

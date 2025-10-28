import { useState } from 'react';
import { Search, BookOpen, Calendar, Users } from 'lucide-react';

const tabs = [
  { key: 'journals', label: 'Journals', icon: BookOpen },
  { key: 'conferences', label: 'Conferences', icon: Calendar },
  { key: 'researchers', label: 'Researchers', icon: Users },
];

export default function DiscoverSection() {
  const [active, setActive] = useState('journals');

  return (
    <section id="discover" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Discover what's next</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Search across top journals, upcoming conferences, and leading researchers. Personalized by AI for your domain.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors ${
                active === key
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              placeholder={`Search ${active} by title, topic, venue...`}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} active={active} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ active, index }) {
  const isJournal = active === 'journals';
  const isConf = active === 'conferences';
  const isUser = active === 'researchers';

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-indigo-600 font-medium">
            {isJournal && 'Journal'}
            {isConf && 'Conference'}
            {isUser && 'Researcher'}
          </div>
          <h3 className="mt-1 font-semibold text-slate-900">
            {isJournal && `Advances in AI Systems ${index + 1}`}
            {isConf && `Global AI Summit ${2025 + index}`}
            {isUser && `Dr. Ada Lovelace ${index + 1}`}
          </h3>
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">
            {isJournal && 'A peer‑reviewed venue focusing on ML, NLP, and multi‑modal systems.'}
            {isConf && 'Call for papers: Trustworthy AI, GenAI for Science, Reproducibility.'}
            {isUser && 'Specializes in multi‑agent systems, reproducible ML, and scientific tooling.'}
          </p>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
          {isJournal && 'Q1'}
          {isConf && 'CFP'}
          {isUser && 'Open to collab'}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <span>Impact: {isJournal ? '8.7' : isConf ? 'A*' : '—'}</span>
          <span>H-index: {isJournal ? '120' : isConf ? '95' : '42'}</span>
        </div>
        <button className="text-indigo-600 hover:text-indigo-700 font-medium">View</button>
      </div>
    </div>
  );
}

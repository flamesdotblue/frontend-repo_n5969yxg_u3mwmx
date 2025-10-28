import { useState } from 'react';
import { Search, Sliders, Calendar, Globe, BookOpen, Star } from 'lucide-react';

export default function AIDiscovery() {
  const [abstract, setAbstract] = useState('Large language models (LLMs) enable new capabilities for scientific writing and literature discovery. We propose a hybrid RAG pipeline that improves relevance and transparency for AI-assisted research.');
  const [timeline, setTimeline] = useState('6');
  const [openAccess, setOpenAccess] = useState(false);
  const [subject, setSubject] = useState('AI & ML');
  const [region, setRegion] = useState('Global');

  const venues = sampleVenues({ openAccess, subject, timeline });

  return (
    <section id="discover" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-8">
          <div className="flex-1 w-full">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">AI‑Powered Venue Finder</h2>
            <p className="mt-2 text-slate-600">Paste an abstract or describe your work. Our AI semantically matches your research to top journals and conferences.</p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
              <textarea
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                rows={5}
                className="w-full resize-y rounded-md border border-slate-200 bg-white/80 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Paste abstract, keywords, or a short description..."
              />

              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
                <FilterGroup label="Timeline">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="flex-1 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm">
                      <option value="3">Next 3 months</option>
                      <option value="6">Next 6 months</option>
                      <option value="12">Next 12 months</option>
                    </select>
                  </div>
                </FilterGroup>

                <FilterGroup label="Access">
                  <button
                    onClick={() => setOpenAccess(!openAccess)}
                    className={`w-full rounded-md border px-2 py-1.5 text-sm ${openAccess ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-200 text-slate-700'}`}
                  >
                    {openAccess ? 'Open Access only' : 'Any access'}
                  </button>
                </FilterGroup>

                <FilterGroup label="Subject">
                  <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm">
                    <option>AI & ML</option>
                    <option>NLP</option>
                    <option>Human‑Computer Interaction</option>
                    <option>Systems</option>
                    <option>Healthcare</option>
                  </select>
                </FilterGroup>

                <FilterGroup label="Region">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-slate-400" />
                    <select value={region} onChange={(e) => setRegion(e.target.value)} className="flex-1 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-sm">
                      <option>Global</option>
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia</option>
                    </select>
                  </div>
                </FilterGroup>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-xs text-slate-500 inline-flex items-center gap-2"><Sliders className="h-4 w-4" /> Impact factor, acceptance rate, and fit score considered</div>
                <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">
                  <Search className="h-4 w-4" />
                  Generate recommendations
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {venues.map((v, i) => (
                <VenueCard key={i} venue={v} />
              ))}
            </div>
          </div>

          <aside className="w-full lg:w-[24rem]">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-medium text-slate-900">Smart summary</div>
              <p className="mt-2 text-sm text-slate-600">We semantically parse your text, extract topics and methods, and rank venues by scope overlap, historical acceptance, and impact.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Topic fit weighting: 55%</li>
                <li>• Impact & index: 25%</li>
                <li>• Timeline & region: 10%</li>
                <li>• Access & policies: 10%</li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-medium text-slate-900">Featured collaborator</div>
              <div className="mt-3 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 grid place-content-center text-indigo-700 font-semibold">AL</div>
                <div className="flex-1">
                  <div className="font-medium">Dr. Alex Li</div>
                  <div className="text-xs text-slate-600">NLP · RAG · Reproducibility</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                    <BookOpen className="h-3.5 w-3.5" /> 38 publications
                    <Star className="h-3.5 w-3.5" /> Match 92%
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm hover:bg-slate-50">View profile</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <div className="mb-1 text-xs font-medium text-slate-500">{label}</div>
      {children}
    </div>
  );
}

function VenueCard({ venue }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm text-indigo-600 font-medium">{venue.type}</div>
          <div className="mt-0.5 font-semibold text-slate-900">{venue.title}</div>
          <div className="mt-1 text-sm text-slate-600 line-clamp-2">{venue.reason}</div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-2 py-0.5">Impact {venue.impact}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5">Accept {venue.acceptance}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5">{venue.openAccess ? 'Open Access' : 'Subscription'}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-500">Fit score</div>
          <div className="text-2xl font-semibold text-slate-900">{venue.fit}%</div>
          <div className="mt-1 text-xs text-slate-500">Deadline {venue.deadline}</div>
        </div>
      </div>
    </div>
  );
}

function sampleVenues({ openAccess, subject, timeline }) {
  const base = [
    { type: 'Journal', title: 'Transactions on Machine Learning Research', impact: '9.1', acceptance: '18%', fit: 94, deadline: '—', openAccess: true, reason: 'Strong alignment with RAG and reproducibility; welcomes fast iterations and open reviews.' },
    { type: 'Conference', title: 'NeurIPS', impact: 'A*', acceptance: '26%', fit: 91, deadline: 'Jul 18', openAccess: true, reason: 'High relevance to LLM tooling and scientific applications; large audience for AI for Science.' },
    { type: 'Conference', title: 'ACL', impact: 'A*', acceptance: '24%', fit: 89, deadline: 'May 09', openAccess: true, reason: 'Excellent match for NLP/RAG contributions; strong community interest in evaluation and transparency.' },
    { type: 'Journal', title: 'Nature Scientific Reports (AI)', impact: '4.6', acceptance: '45%', fit: 84, deadline: '—', openAccess: true, reason: 'Broad‑scope open access journal with interest in applied AI for science.' },
    { type: 'Conference', title: 'AAAI', impact: 'A*', acceptance: '20%', fit: 82, deadline: 'Aug 01', openAccess: false, reason: 'Well‑aligned with methodology and analysis; competitive but timely.' },
  ];

  let list = base.filter(v => (openAccess ? v.openAccess : true));
  list = list.map(v => ({ ...v, fit: Math.min(99, Math.max(70, v.fit + (subject.includes('NLP') ? 3 : 0) + (timeline === '3' ? 2 : 0))) }));
  return list;
}

import { GitBranch, GitCommit, Users } from 'lucide-react';

export default function CollaborationShowcase() {
  return (
    <section id="collaborate" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              GitHub-like collaboration for research
            </h2>
            <p className="mt-3 text-slate-600">
              Manage papers, datasets, experiments, and writing with branches, reviews, and version history. Keep everything reproducible and transparent.
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  <GitBranch className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Branch-based workflows</div>
                  <p className="text-sm text-slate-600">Create feature branches for literature review, experiments, or writing, then merge with reviews.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  <GitCommit className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Versioned artifacts</div>
                  <p className="text-sm text-slate-600">Track datasets, notebooks, and manuscripts with immutable history and provenance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 rounded-md bg-indigo-50 p-2 text-indigo-600">
                  <Users className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Peer review built‑in</div>
                  <p className="text-sm text-slate-600">Comment, suggest changes, and approve merges. Integrates with citation managers and arXiv.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="#" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Create workspace</a>
              <a href="#features" className="px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">See all features</a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-sm text-slate-600">manuscript.md · main</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 border-b md:border-b-0 md:border-r border-slate-200">
                  <div className="text-xs font-medium text-slate-500">Pull requests</div>
                  <div className="mt-2 space-y-3">
                    {[
                      { title: 'Add related work section', status: 'Open · needs review' },
                      { title: 'Experiment: ablations v2', status: 'Merged · 2 days ago' },
                      { title: 'Fix dataset preprocessing', status: 'Approved · ready to merge' },
                    ].map((pr, i) => (
                      <div key={i} className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                        <div className="font-medium text-slate-900">{pr.title}</div>
                        <div className="text-xs text-slate-600">{pr.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium text-slate-500">Recent commits</div>
                  <div className="mt-2 space-y-3">
                    {[
                      { msg: 'chore: update references (ACL 2024)', by: 'J. Kim' },
                      { msg: 'feat: add zero-shot baseline results', by: 'A. Singh' },
                      { msg: 'fix: notebook seed for reproducibility', by: 'N. Chen' },
                    ].map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <div className="flex-1">
                          <div className="text-sm text-slate-800">{c.msg}</div>
                          <div className="text-xs text-slate-500">by {c.by}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

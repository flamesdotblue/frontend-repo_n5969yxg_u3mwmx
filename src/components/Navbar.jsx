import { useState } from 'react';
import { Rocket, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-content-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Aether Research</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#discover" className="text-slate-600 hover:text-slate-900">Discover</a>
            <a href="#collaborate" className="text-slate-600 hover:text-slate-900">Collaborate</a>
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                placeholder="Search journals, conferences, peers..."
                className="pl-9 pr-3 py-2 w-72 rounded-lg bg-white/70 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Sign in</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#discover" className="block px-2 py-2 rounded hover:bg-slate-100">Discover</a>
            <a href="#collaborate" className="block px-2 py-2 rounded hover:bg-slate-100">Collaborate</a>
            <a href="#features" className="block px-2 py-2 rounded hover:bg-slate-100">Features</a>
            <div className="pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search journals, conferences, peers..."
                  className="pl-9 pr-3 py-2 w-full rounded-lg bg-white/70 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <button className="w-full px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Sign in</button>
          </div>
        )}
      </nav>
    </header>
  );
}

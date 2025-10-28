import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiscoverSection from './components/DiscoverSection';
import CollaborationShowcase from './components/CollaborationShowcase';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <DiscoverSection />
        <section id="features" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Semantic search"
              desc="Find the most relevant venues and papers with embeddings and RAG."
            />
            <FeatureCard
              title="Smart profiles"
              desc="Let AI summarize expertise, impact, and collaboration fit."
            />
            <FeatureCard
              title="Reproducible workflow"
              desc="Version datasets, notebooks, and manuscripts end‑to‑end."
            />
          </div>
        </section>
        <CollaborationShowcase />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Aether Research. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

export default App;

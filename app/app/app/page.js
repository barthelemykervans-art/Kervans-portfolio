export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b px-8 py-6">
        <h1 className="text-4xl font-bold tracking-tight">Kervans Barthelemy</h1>
        <p className="text-lg mt-2 text-gray-600">Video Editor • Sound Design • Motion Graphics</p>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-12 space-y-16">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Creative storytelling through edit and sound</h2>
            <p className="text-lg text-gray-700 leading-8">
              I create story-driven edits with strong pacing, immersive sound design,
              cinematic transitions, and motion graphics that keep viewers engaged.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="rounded-2xl px-6 py-3 shadow-md border">View Demo Reel</button>
              <button className="rounded-2xl px-6 py-3 shadow-md border">Contact Me</button>
            </div>
          </div>
          <div className="rounded-3xl shadow-lg border p-8">
            <div className="aspect-video rounded-2xl border flex items-center justify-center text-gray-500">
              Demo Reel Placeholder
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6">Featured Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Sound Design Reel', 'Motion Graphics Sequence', 'Narrative Edit'].map((item) => (
              <div key={item} className="rounded-3xl shadow-md border p-6">
                <div className="aspect-video rounded-2xl border mb-4" />
                <h4 className="font-semibold">{item}</h4>
                <p className="text-sm text-gray-600 mt-2">Project description and creative focus.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-lg text-gray-700 leading-8">
            Video editor with professional experience in post-production, storytelling,
            sound design, and visual pacing. Background in film and disciplined project
            execution from military administration experience.
          </p>
        </section>
      </main>
    </div>
  );
}

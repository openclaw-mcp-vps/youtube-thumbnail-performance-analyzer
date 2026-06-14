export default function Home() {
  const faqs = [
    {
      q: 'How does the CTR prediction work?',
      a: 'We run your thumbnail through computer vision models that simulate human eye-tracking patterns, scoring contrast, focal points, and text legibility to predict click-through rate.'
    },
    {
      q: 'Do I need a large channel to use A/B testing?',
      a: 'You need at least 1,000 subscribers. Our YouTube API integration serves each thumbnail variant to a small controlled sample before you publish to your full audience.'
    },
    {
      q: 'How many thumbnails can I test at once?',
      a: 'Upload up to 4 thumbnail variants per video. Our dashboard shows heatmaps, predicted CTR scores, and real audience engagement data side by side.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For YouTube Creators · 1K+ Subscribers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          A/B Test YouTube Thumbnails<br />
          <span className="text-[#58a6ff]">Before You Publish</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload multiple thumbnail options, get predicted click-through rates via eye-tracking simulation, and validate winners with real audience samples — all before your video goes live.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors"
          >
            Start Free Trial — $9/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-base transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for trial · Cancel anytime</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Upload Variants', desc: 'Drop up to 4 thumbnail designs for any upcoming video.' },
            { step: '02', title: 'AI Eye-Tracking', desc: 'Computer vision models score contrast, focal points, and text legibility to predict CTR.' },
            { step: '03', title: 'Real Audience Test', desc: 'Serve each variant to a small controlled sample via YouTube API before full publish.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">{step}</div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Creator Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to maximize CTR</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Up to 4 thumbnail variants per video',
              'AI eye-tracking CTR prediction',
              'Heatmap visualization per thumbnail',
              'Real audience A/B testing via YouTube API',
              'Side-by-side performance dashboard',
              'Unlimited video projects'
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $9/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ThumbnailIQ · Built for YouTube creators
      </footer>
    </main>
  )
}

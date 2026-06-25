/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Github, Shield, Network, EyeOff, Fingerprint, Code } from 'lucide-react';
import HowItWorks from './components/HowItWorks';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="h-[100dvh] w-full flex flex-col font-sans bg-[#050505] text-[#FFFFFF] border-4 md:border-8 border-[#111111] overflow-hidden">
      {/* Header */}
      <header className="flex-none flex items-center justify-between px-5 py-3.5 md:px-8 border-b border-[#111] z-50 bg-[#050505]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#CCFF00] rotate-45 flex items-center justify-center">
            <EyeOff className="text-black -rotate-45" size={15} strokeWidth={3} />
          </div>
          <span className="font-black tracking-[-1.5px] text-lg uppercase">OpaqueDB</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/opaquedb/opaquedb" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded border border-[#333] hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all text-sm">
            <Github size={16} /> <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Main Scroll Container - full page snap */}
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar relative">
        
        {/* HERO - full screen */}
        <section className="h-full w-full snap-start flex flex-col items-center justify-center px-6 lg:px-12 relative">
          <div className="max-w-3xl w-full">
            <h1 className="text-[48px] leading-[0.92] sm:text-[60px] md:text-[76px] font-black tracking-[-3px] mb-6">
              The private<br />database.
            </h1>

            <p className="text-[17px] sm:text-xl md:text-2xl text-[#aaa] max-w-[40ch] leading-tight mb-9 border-l-[3px] border-[#CCFF00] pl-5">
              Run SQL on data that stays encrypted.<br className="hidden md:block" /> Even during computation.<br className="hidden md:block" /> A post-quantum, distributed database.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-xs sm:max-w-none">
              <a href="https://github.com/opaquedb/opaquedb" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 h-10 sm:h-12 text-sm sm:text-base bg-white text-black font-semibold rounded hover:bg-[#CCFF00] active:bg-[#CCFF00] transition-colors">
                <Github size={16} className="sm:hidden" /> <Github size={18} className="hidden sm:block" /> View on GitHub
              </a>
              <a href="https://docs.opaquedb.io" target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 h-10 sm:h-12 text-sm sm:text-base border border-[#444] hover:border-white text-white font-medium rounded transition-colors">
                Read the docs
              </a>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#555] font-mono text-[9px] sm:text-[10px] tracking-widest uppercase">
            <span>Scroll</span>
            <span className="animate-bounce text-[#CCFF00] text-base sm:text-lg">↓</span>
          </div>
        </section>

        {!isMobile ? (
          <>
            {/* HOW IT WORKS - full screen (desktop) */}
            <section className="h-full w-full snap-start flex flex-col justify-center px-12 bg-[#070707] overflow-hidden">
              <div className="w-full max-w-6xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-4xl font-black tracking-tighter mb-1">Your data never leaves encrypted.</h2>
                  <p className="text-[#888] text-base">See exactly what happens to your query. Start to finish.</p>
                </div>
                <HowItWorks />
              </div>

              {/* Scroll hint */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#555] font-mono text-[10px] tracking-widest uppercase">
                <span>Scroll</span>
                <span className="animate-bounce text-[#CCFF00] text-lg">↓</span>
              </div>
            </section>

            {/* BUILT FOR PRIVACY - full screen (desktop) */}
            <section className="h-full w-full snap-start flex flex-col justify-center px-12 overflow-hidden">
              <div className="w-full max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-4xl font-black tracking-tighter mb-1">Built for privacy.</h2>
                  <p className="text-[#888] text-base">Key features for privacy and scale.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { Icon: Shield, title: 'Post-quantum secure.', desc: 'Lattice cryptography that protects against current and future quantum threats.' },
                    { Icon: Fingerprint, title: 'Private information retrieval.', desc: 'The database never sees your queries or results. Everything stays encrypted.' },
                    { Icon: Code, title: 'SQL.', desc: 'Write normal SQL queries as usual. No new query language to learn.' },
                    { Icon: Network, title: 'Real scale.', desc: 'Horizontally scalable across a cluster with linear performance.' },
                    { Icon: EyeOff, title: 'Plausible deniability.', desc: 'We cannot tell which part of the database was accessed.' },
                  ].map(({ Icon, title, desc }) => (
                    <div
                      key={title}
                      className="group relative p-5 bg-[#0A0A0B] border border-[#222] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#CCFF00]/60 hover:-translate-y-1 hover:bg-[#0d0d0e]"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(204,255,0,0.08),transparent_60%)]" />
                      <div className="relative">
                        <div className="w-9 h-9 flex items-center justify-center rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20 mb-4 transition-colors group-hover:bg-[#CCFF00]/20">
                          <Icon className="text-[#CCFF00]" size={18} />
                        </div>
                        <h3 className="font-semibold text-lg mb-1.5">{title}</h3>
                        <p className="text-[#999] text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}

                  {/* CTA card */}
                  <a
                    href="https://github.com/opaquedb/opaquedb"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative p-5 rounded-lg overflow-hidden bg-[#CCFF00] text-black flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-9 h-9 flex items-center justify-center rounded bg-black/10 mb-4">
                        <Github className="text-black" size={18} />
                      </div>
                      <h3 className="font-black text-lg mb-1.5 tracking-tight">Open source.</h3>
                      <p className="text-black/70 text-sm leading-relaxed">Read the code, run it yourself, contribute.</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 font-semibold text-sm">
                      View on GitHub <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* HOW IT WORKS - full screen (mobile) */}
            <section className="h-full w-full snap-start flex flex-col items-center justify-start px-6 lg:px-12 bg-[#070707] overflow-hidden pt-2 sm:pt-4">
              <div className="w-full max-w-6xl max-h-full overflow-hidden flex flex-col pb-8 sm:pb-12">
                <div className="mb-1 sm:mb-2 shrink-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-black tracking-[-1px] mb-1 leading-tight">Your data never leaves encrypted.</h2>
                  <p className="text-[#aaa] text-xs sm:text-sm max-w-[48ch]">See exactly what happens to your query. Start to finish.</p>
                </div>

                <div className="flex-1 min-h-0 overflow-hidden">
                  <HowItWorks />
                </div>
              </div>
            </section>

            {/* BENEFITS + CTA - full screen (mobile) */}
            <section className="h-full w-full snap-start flex flex-col items-center justify-start px-6 lg:px-12 relative pt-6 sm:pt-8">
              <div className="w-full max-w-5xl">
                <div className="max-w-md mb-3 sm:mb-4 pt-1">
                  <h2 className="text-[22px] sm:text-2xl md:text-[34px] font-black tracking-tighter leading-tight mb-1">Built for privacy.</h2>
                  <p className="text-[#888] text-xs sm:text-sm">Key features for privacy and scale.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                  {[
                    { Icon: Shield, title: 'Post-quantum secure.', desc: 'Lattice cryptography that protects against current and future quantum threats.' },
                    { Icon: Fingerprint, title: 'Private information retrieval.', desc: 'The database never sees your queries or results. Everything stays encrypted.' },
                    { Icon: Code, title: 'SQL.', desc: 'Write normal SQL queries as usual.' },
                    { Icon: Network, title: 'Real scale.', desc: 'Horizontally scalable across a cluster with linear performance.' },
                    { Icon: EyeOff, title: 'Plausible deniability.', desc: 'We cannot tell which part of the database was accessed.' },
                  ].map(({ Icon, title, desc }) => (
                    <div key={title} className="p-3 sm:p-4 bg-[#0A0A0B] border border-[#222] rounded-lg">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-[#CCFF00]/10 border border-[#CCFF00]/20 mb-2 sm:mb-3">
                        <Icon className="text-[#CCFF00]" size={15} />
                      </div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-[15px]">{title}</h3>
                      <p className="text-[10px] sm:text-xs text-[#999] leading-relaxed">{desc}</p>
                    </div>
                  ))}

                  {/* CTA card */}
                  <a
                    href="https://github.com/opaquedb/opaquedb"
                    target="_blank"
                    rel="noreferrer"
                    className="group p-3 sm:p-4 bg-[#CCFF00] text-black rounded-lg flex flex-col justify-between active:opacity-90"
                  >
                    <div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-black/10 mb-2 sm:mb-3">
                        <Github className="text-black" size={15} />
                      </div>
                      <h3 className="font-black mb-1 text-sm sm:text-[15px] tracking-tight">Open source.</h3>
                      <p className="text-[10px] sm:text-xs text-black/70">Read the code, run it yourself, contribute.</p>
                    </div>
                    <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 font-semibold text-xs sm:text-sm">
                      View on GitHub <span>→</span>
                    </span>
                  </a>
                </div>

              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

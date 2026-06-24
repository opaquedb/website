/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Terminal, Book, Shield, Network, EyeOff, Fingerprint, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className="h-[100dvh] w-full flex flex-col font-sans bg-[#050505] text-[#FFFFFF] border-4 md:border-8 border-[#111111] overflow-hidden">
      {/* Header */}
      <header className="flex-none flex items-center justify-between px-6 py-5 md:px-12 border-b border-[#111] z-50 bg-[#050505]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#CCFF00] rotate-45 flex items-center justify-center">
            <EyeOff className="text-black -rotate-45" size={18} strokeWidth={3} />
          </div>
          <span className="font-sans font-black text-xl tracking-tighter uppercase text-white">OpaqueDB</span>
        </div>
        <a href="https://github.com/opaquedb/opaquedb" className="text-[#777] hover:text-[#CCFF00] transition-colors p-2" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
          <Github size={20} />
        </a>
      </header>

      {/* Main Scroll Container */}
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar relative">
        
        {/* HERO SECTION */}
        <section className="min-h-full w-full snap-start flex flex-col items-center justify-center px-6 py-12 relative">
          <div className="max-w-5xl w-full flex flex-col items-start space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="px-4 py-2 border border-[#333] text-[10px] font-mono tracking-widest uppercase text-[#CCFF00]"
            >
              Open Source
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-4xl sm:text-6xl md:text-[80px] font-black tracking-tighter text-white leading-[0.9] uppercase text-left max-w-4xl"
            >
              Post-Quantum <br className="hidden md:block" />
              <span className="text-[#CCFF00] inline-flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-12">
                <span>Private</span>
                <span>Database.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-[#AAA] max-w-2xl leading-relaxed border-l-2 border-[#CCFF00] pl-6 text-left"
            >
              {"An open-source distributed database built on Fully Homomorphic Encryption. Execute standard SQL directly on encrypted datasets across a horizontally scalable cluster, guaranteeing absolute privacy for your data and queries."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 w-full max-w-3xl"
            >
              <a href="https://github.com/opaquedb/opaquedb" target="_blank" rel="noreferrer" className="group border border-[#333] bg-[#0A0A0B] p-5 flex flex-col justify-between h-28 hover:border-[#CCFF00] transition-colors">
                <span className="font-mono text-[10px] text-[#777] uppercase tracking-widest group-hover:text-[#CCFF00] transition-colors">Repository</span>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors">GitHub</span>
                  <Github size={20} className="text-white group-hover:text-[#CCFF00] transition-colors" />
                </div>
              </a>
              <a href="https://github.com/opaquedb/opaquedb" target="_blank" rel="noreferrer" className="group border border-[#333] bg-[#0A0A0B] p-5 flex flex-col justify-between h-28 hover:border-[#CCFF00] transition-colors">
                <span className="font-mono text-[10px] text-[#777] uppercase tracking-widest group-hover:text-[#CCFF00] transition-colors">Integration</span>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors">Client SDKs</span>
                  <Terminal size={20} className="text-white group-hover:text-[#CCFF00] transition-colors" />
                </div>
              </a>
              <a href="https://docs.opaquedb.io" target="_blank" rel="noreferrer" className="group border border-[#333] bg-[#0A0A0B] p-5 flex flex-col justify-between h-28 hover:border-[#CCFF00] transition-colors">
                <span className="font-mono text-[10px] text-[#777] uppercase tracking-widest group-hover:text-[#CCFF00] transition-colors">Technical</span>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-black uppercase text-white group-hover:text-[#CCFF00] transition-colors">Docs</span>
                  <Book size={20} className="text-white group-hover:text-[#CCFF00] transition-colors" />
                </div>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555] font-mono text-[10px] tracking-widest uppercase"
          >
            <span>Scroll</span>
            <ChevronDown size={14} className="animate-bounce text-[#CCFF00]" />
          </motion.div>
        </section>

        {/* ANIMATION SECTION */}
        <section className="min-h-full w-full snap-start flex flex-col items-center justify-center px-6 py-12 relative bg-[#070707]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl"
          >
            <HowItWorks />
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section className="min-h-full w-full snap-start flex flex-col items-center justify-center px-6 py-12 relative">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <FeatureCard
              icon={<Shield className="text-[#CCFF00]" size={24} />}
              title="Post-Quantum Secure"
              description="Built on lattice-based cryptography, protecting your data against future attacks from quantum computers."
            />
            <FeatureCard
              icon={<Fingerprint className="text-[#CCFF00]" size={24} />}
              title="Private Info Retrieval"
              description="Retrieve records seamlessly without revealing your access patterns to the database operator."
            />
            <FeatureCard
              icon={<Network className="text-[#CCFF00]" size={24} />}
              title="Distributed & Scalable"
              description="Horizontally scalable architecture built to parallelize computationally heavy encrypted queries across clusters."
            />
          </div>

          <footer className="absolute bottom-0 left-0 w-full border-t border-[#111] py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#050505]">
            <div className="flex items-center gap-3">
              <EyeOff className="text-[#555]" size={16} />
              <span className="font-sans font-black tracking-tighter uppercase text-[#555]">OpaqueDB</span>
            </div>
            <div className="flex items-center gap-6 text-[10px] font-mono font-bold tracking-widest uppercase text-[#555]">
              <a href="https://github.com/opaquedb/opaquedb" target="_blank" rel="noreferrer" className="hover:text-[#CCFF00] transition-colors">GitHub</a>
              <a href="https://docs.opaquedb.io" target="_blank" rel="noreferrer" className="hover:text-[#CCFF00] transition-colors">Docs</a>
              <a href="mailto:info@opaquedb.io" className="hover:text-[#CCFF00] transition-colors">info@opaquedb.io</a>
            </div>
          </footer>
        </section>

      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 bg-[#0A0A0B] border border-[#333] hover:border-[#CCFF00] transition-colors flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-start h-full"
    >
      <div className="w-12 h-12 shrink-0 bg-[#111] border border-[#333] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h3 className="text-lg font-black uppercase text-white mb-2">{title}</h3>
        <p className="text-sm font-mono text-[#AAA] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

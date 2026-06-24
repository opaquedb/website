import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Database, Lock, Laptop, Key } from 'lucide-react';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setStep(0);
      return;
    }
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3500); // slightly longer for reading
    return () => clearInterval(timer);
  }, [isInView]);

  const sqlQuery = "SELECT temp FROM weather WHERE city='London'";
  const encryptedQuery = "0x8F9A...E2B1";
  const encryptedResult = "0x4C7D...F9A3";
  const decryptedResult = "{ temp: 18 }";

  const descriptions = [
    "1. Client writes SQL query locally.",
    "2. Query is encrypted (FHE) & transmitted.",
    "3. Cluster computes directly on ciphertext shards.",
    "4. Encrypted result is returned & decrypted."
  ];

  return (
    <div ref={containerRef} className="w-full border border-[#333] bg-[#0A0A0B] p-6 md:p-12 relative overflow-hidden shadow-2xl">
      {/* Grid background */}
      <div className="absolute inset-0 border border-[#222] grid grid-cols-8 grid-rows-8 opacity-20 pointer-events-none">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border border-[#333] w-full h-full" />
        ))}
      </div>

      {/* Scrolling wrapper for mobile */}
      <div className="overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex flex-row items-center justify-between gap-4 md:gap-12 relative z-10 py-8 min-w-[600px] px-4 md:px-0">
          {/* Client Side */}
          <div className="flex flex-col items-center gap-4 w-56 shrink-0 h-[190px]">
            <div className="w-full h-full bg-[#111] border border-[#333] flex flex-col justify-between relative p-4 pt-6">
              <div className="absolute top-0 right-0 px-2 py-1 bg-[#222] border-l border-b border-[#555] flex items-center gap-1 z-20">
                <Key className="text-[#AAA]" size={10} />
                <span className="text-[#AAA] text-[8px] font-mono font-bold uppercase whitespace-nowrap">Pub Key</span>
              </div>
              <div className="flex items-center gap-2 mb-2 border-b border-[#222] pb-2">
                <Laptop className="text-white" size={16} />
                <span className="font-black text-[10px] tracking-widest uppercase text-[#777]">Client</span>
              </div>
              <div className="font-mono text-[10px] md:text-[12px] text-[#CCFF00] flex-1 w-full flex items-center justify-center text-center bg-[#050505] p-2 border border-[#222] break-words whitespace-pre-wrap leading-tight overflow-hidden">
                {step === 0 ? sqlQuery : step === 3 ? decryptedResult : encryptedQuery}
              </div>
              <motion.div
                animate={{ opacity: step === 0 || step === 3 ? 1 : 0 }}
                className="absolute bottom-0 right-0 px-2 py-1 bg-[#222] border-l border-t border-[#CCFF00] flex items-center gap-1 shadow-[0_0_10px_rgba(204,255,0,0.2)] z-20"
              >
                <Key className="text-[#CCFF00]" size={10} />
                <span className="text-[#CCFF00] text-[8px] font-mono font-bold uppercase whitespace-nowrap">Priv Key</span>
              </motion.div>
            </div>
          </div>

          {/* Network / Animation Area */}
          <div className="flex-1 w-full h-32 relative flex items-center justify-center min-w-[150px]">
            {/* Track line */}
            <div className="absolute left-0 right-0 h-[1px] opacity-30 dashed-line" />

            {/* The Data Packet */}
            <motion.div
              initial={false}
              animate={{
                left: step === 0 || step === 3 ? '10%' : '90%',
                x: '-50%',
                opacity: step === 1 || step === 3 ? 1 : 0,
                scale: step === 1 || step === 3 ? 1 : 0.8,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute flex items-center gap-2 px-3 py-2 bg-[#CCFF00] text-black z-20 shadow-[0_0_20px_rgba(204,255,0,0.4)]"
            >
              <Lock size={12} className="text-black" />
              <span className="font-mono text-[10px] font-bold uppercase whitespace-nowrap">
                {step === 1 ? encryptedQuery : encryptedResult}
              </span>
            </motion.div>
          </div>

          {/* Server Side */}
          <div className="flex flex-col items-center gap-4 w-56 shrink-0 h-[190px]">
            <motion.div
              animate={{
                borderColor: step === 2 ? "#CCFF00" : "#333",
              }}
              className="w-full h-full bg-[#111] border flex flex-col justify-between relative transition-colors duration-500 overflow-visible p-4 pt-6"
            >
              <div className="absolute top-0 right-0 px-2 py-1 bg-[#222] border-l border-b border-[#555] flex items-center gap-1 z-20">
                <Key className="text-[#AAA]" size={10} />
                <span className="text-[#AAA] text-[8px] font-mono font-bold uppercase whitespace-nowrap">Pub Key</span>
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 border-b border-[#222] pb-2 relative z-10">
                  <span className="font-black text-[10px] tracking-widest uppercase text-[#999]">Opaque Cluster</span>
                  <Database className={step === 2 ? "text-[#CCFF00]" : "text-[#777]"} size={20} />
                </div>

                {/* Shard Representation */}
                <div className="flex gap-1 mb-2 relative z-10">
                  <div className={`h-1.5 flex-1 ${step === 2 ? 'bg-[#CCFF00]' : 'bg-[#333]'} transition-colors duration-500`}></div>
                  <div className={`h-1.5 flex-1 ${step === 2 ? 'bg-[#CCFF00]' : 'bg-[#333]'} transition-colors duration-500 delay-75`}></div>
                  <div className={`h-1.5 flex-1 ${step === 2 ? 'bg-[#CCFF00]' : 'bg-[#333]'} transition-colors duration-500 delay-150`}></div>
                </div>
              </div>
              
              <div className="font-mono text-[10px] md:text-[12px] text-[#CCFF00] flex-1 w-full flex items-center justify-center text-center bg-[#050505] p-2 border border-[#222] relative z-10 break-words whitespace-pre-wrap leading-tight overflow-hidden">
                {step === 2 ? `EVAL(${encryptedQuery})` : "AWAITING_QUERY"}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center h-8 relative z-10 flex justify-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 bg-[#222] border border-[#333] inline-flex items-center max-w-full"
        >
          <span className="font-mono text-[#CCFF00] text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
            {descriptions[step]}
          </span>
        </motion.div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .dashed-line { background-image: repeating-linear-gradient(90deg, #CCFF00 0, #CCFF00 4px, transparent 4px, transparent 8px); background-color: transparent; }
      `}</style>
    </div>
  );
}

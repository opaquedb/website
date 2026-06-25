import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Database, Lock, Code } from 'lucide-react';

export default function HowItWorks() {
  const [step, setStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Always-running cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1950);
    return () => clearInterval(timer);
  }, []);

  // Responsive detection for animation layout
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Friendly sample data
  const plainQuery = "SELECT temp FROM weather WHERE city='London'";
  const encQuery = "0xA7F3...91B2";
  const encResult = "0xC12E...4D9F";
  const plainResult = "{ temp: 18 }";

  const stepLabels = [
    "1. Write normal SQL in the client",
    "2. Query parameters are encrypted before leaving",
    "3. The cluster computes on encrypted data",
    "4. Encrypted result comes back. Only you decrypt it"
  ];

  // Animation targets — horizontal on desktop, vertical on mobile
  const isOutbound = step === 1 || step === 2;   // packet traveling toward server
  const packetVisible = step === 1 || step === 3;

  // Full travel for clear movement between boxes
  const desktopLeft = isOutbound ? '94%' : '6%';
  const mobileTop = isOutbound ? '92%' : '8%';

  return (
    <div className="w-full h-full flex flex-col">
      {/* The visual */}
      <div className={`border border-[#222] bg-[#0A0A0B] p-3 sm:p-4 md:p-5 rounded-lg overflow-hidden flex-1 ${isMobile ? 'flex flex-col min-h-[320px] sm:min-h-[360px]' : 'min-h-[220px] md:min-h-[260px]'}`}>
        {/* Responsive container */}
        <div className={`flex ${isMobile ? 'flex-col items-center gap-5 h-full flex-1' : 'flex-row items-center justify-between gap-4 md:gap-6'} relative z-10 py-1`}>
          
          {/* CLIENT */}
          <div className={`${isMobile ? 'w-full max-w-[280px] flex-1 min-h-[140px]' : 'shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]'}`}>
            <div
              className={`bg-[#111] border flex flex-col p-2.5 sm:p-3 rounded transition-colors h-full ${isMobile ? '' : 'h-32 sm:h-36 md:h-40'} ${step === 0 || step === 3 ? 'border-[#CCFF00]/70' : 'border-[#222]'}`}
            >
              <div className="flex items-center justify-between mb-2 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase text-[#666]">
                <div className="flex items-center gap-1.5 text-white/80">
                  <Code size={12} /> <span className="font-medium">Client</span>
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] text-[#CCFF00]">App</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-[#050505] border border-[#1f1f1f] px-1.5 py-1 text-[#CCFF00] font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-tight text-center overflow-hidden">
                {step === 0 ? plainQuery : step === 3 ? plainResult : encQuery}
              </div>

              <div className="mt-2 text-[8px] sm:text-[9px] md:text-[10px] font-mono text-[#777] flex items-center gap-1">
                <Lock size={10} /> Private key stays here
              </div>
            </div>
          </div>

          {/* CONNECTION + ANIMATED PACKET */}
          <div className={`flex items-center justify-center ${isMobile ? 'shrink-0 min-h-[96px] py-2' : 'flex-1 min-w-[100px] px-2'}`}>
            <div className={`${isMobile ? 'w-[3px] h-full min-h-[88px]' : 'w-full h-32 sm:h-36 md:h-40'} relative flex items-center justify-center`}>
              {/* The animated dotted road (the dashed line itself is animated via CSS) */}
              {!isMobile && (
                <div className="absolute left-0 right-0 top-1/2 h-px dashed-line" />
              )}

              {isMobile && (
                <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 dashed-line-vertical" />
              )}

              {/* The packet - cool glowing data mover, more understandable with full labels */}
              <motion.div
                initial={false}
                animate={{
                  ...(isMobile
                    ? { top: mobileTop, left: '50%', x: '-50%', y: '-50%' }
                    : { left: desktopLeft, top: '50%', x: '-50%', y: '-50%' }
                  ),
                  opacity: packetVisible ? 1 : 0,
                  scale: packetVisible ? 1 : 0.8,
                }}
                transition={{
                  left: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                  top: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.15 },
                  scale: { duration: 0.15 },
                }}
                className="absolute z-20 flex items-center gap-1 px-2 py-0.5 sm:py-1 bg-[#CCFF00] text-black font-mono text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-[0.3px] shadow-[0_0_0_1px_#000,0_0_24px_rgba(204,255,0,0.5)] whitespace-nowrap"
              >
                <Lock size={10} />
                <span>{step === 1 ? "ENCRYPTED QUERY" : "ENCRYPTED RESULT"}</span>
              </motion.div>


            </div>
          </div>

          {/* SERVER / CLUSTER */}
          <div className={`${isMobile ? 'w-full max-w-[280px] flex-1 min-h-[140px]' : 'shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px]'}`}>
            <div
              className={`bg-[#111] border flex flex-col p-2.5 sm:p-3 rounded transition-colors h-full ${isMobile ? '' : 'h-32 sm:h-36 md:h-40'} ${step === 2 ? 'border-[#CCFF00]/70' : 'border-[#222]'}`}
            >
              <div className="flex items-center justify-between mb-2 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase text-[#666]">
                <div className="flex items-center gap-1.5 text-white/80">
                  <Database size={12} /> <span className="font-medium">OpaqueDB</span>
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] text-[#CCFF00]">Encrypted</span>
              </div>

              <div className="flex-1 flex items-center justify-center bg-[#050505] border border-[#1f1f1f] px-1.5 py-1 text-[#CCFF00] font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-tight text-center">
                {step === 2 ? (
                  <span className="flex items-center gap-1.5">
                    COMPUTING
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.9, repeat: Infinity }}>▌</motion.span>
                  </span>
                ) : "WAITING"}
              </div>

              {/* Visual shards — active during compute */}
              <div className="mt-2.5 flex gap-1">
                {[0,1,2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1 flex-1 bg-[#222]"
                    animate={{
                      backgroundColor: step === 2 ? "#CCFF00" : "#222",
                      scaleX: step === 2 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: step === 2 ? i * 0.06 : 0,
                      repeat: step === 2 ? Infinity : 0,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step indicator + description — always visible, clear */}
      <div className="flex flex-col items-center mt-2 sm:mt-4">
        <div className="flex gap-1.5 mb-1.5">
          {[0,1,2,3].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              animate={{ backgroundColor: i === step ? "#CCFF00" : "#333" }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
        <div className="font-mono text-[8px] sm:text-[9px] md:text-xs text-[#CCFF00] tracking-[0.4px] px-2 sm:px-3 py-0.5 sm:py-1 bg-[#111] border border-[#222] rounded text-center max-w-[95%]">
          {stepLabels[step]}
        </div>
      </div>

      <style>{`
        .dashed-line {
          background-image: repeating-linear-gradient(90deg, #CCFF00 0, #CCFF00 5px, transparent 5px, transparent 12px);
          background-size: 24px 3px;
          animation: dash-flow 1.2s linear infinite;
          background-color: transparent;
        }
        @keyframes dash-flow {
          to { background-position: 24px 0; }
        }
        .dashed-line-vertical {
          background-image: repeating-linear-gradient(0deg, #CCFF00 0, #CCFF00 5px, transparent 5px, transparent 12px);
          background-size: 3px 24px;
          animation: dash-flow-vertical 1.2s linear infinite;
          background-color: transparent;
        }
        @keyframes dash-flow-vertical {
          to { background-position: 0 24px; }
        }
      `}</style>
    </div>
  );
}

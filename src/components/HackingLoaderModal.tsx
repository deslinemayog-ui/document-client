import React, { useRef, useEffect } from "react";
import { Ghost, Volume2, VolumeX } from "lucide-react";

const loadingPhrases = [
  "Crafting your documents...",
  "Attaching your salaries...",
  "Encrypting payloads...",
  "Summoning data ghosts...",
  "Sealing the statement...",
  "Initializing quantum processors...",
  "Bypassing security protocols...",
  "Compiling financial matrices...",
  "Injecting salary data streams...",
  "Forging digital signatures...",
  "Activating neural networks...",
  "Synchronizing blockchain ledgers...",
  "Decrypting corporate firewalls...",
  "Generating holographic statements...",
  "Calibrating time-space coordinates...",
  "Uploading to secure vaults...",
  "Verifying authenticity codes...",
  "Finalizing document encryption...",
  "Deploying stealth algorithms...",
  "Completing mission parameters..."
];

interface HackingLoaderModalProps {
  isOpen: boolean;
}

export const HackingLoaderModal = ({ isOpen }: HackingLoaderModalProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const doneAudioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = React.useState(false);
  const prevIsOpen = React.useRef(isOpen);

  useEffect(() => {
    if (isOpen && audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    // Play done sound when modal closes (generation complete)
    if (prevIsOpen.current && !isOpen && doneAudioRef.current && !isMuted) {
      doneAudioRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
    }

    prevIsOpen.current = isOpen;
  }, [isOpen, isMuted]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm text-cyan-100 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-10 text-cyan-400/20 animate-float-ghost">
          <Ghost className="w-20 h-20" />
        </div>
        <div className="absolute right-4 top-32 text-emerald-400/15 animate-float-ghost-delayed">
          <Ghost className="w-16 h-16" />
        </div>
        <div className="absolute left-1/2 bottom-10 -translate-x-1/2 text-indigo-400/10 animate-float-ghost-slow">
          <Ghost className="w-24 h-24" />
        </div>
      </div>

      <div className="relative w-full max-w-4xl border border-cyan-500/40 rounded-3xl bg-gradient-to-br from-cyan-900/30 via-black/70 to-slate-900/50 shadow-[0_0_40px_rgba(8,145,178,0.35)] p-6 md:p-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_45%)]" />
        <div className="absolute inset-px border border-cyan-500/20 rounded-3xl" />
        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <p className="text-sm uppercase tracking-[0.4em] text-red-300/80">System Override</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-cyan-200/70 hover:text-cyan-200 transition-colors"
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <div className="text-xs text-cyan-200/70 font-mono">LIVE TRACE // 0x1F3</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-mono text-lg sm:text-xl md:text-2xl text-cyan-100">Hacking sequence engaged</div>
            <div className="h-16 overflow-hidden relative w-full max-w-xl">
              <div className="absolute inset-0 flex flex-col gap-3 animate-slide-words">
                {loadingPhrases.map((phrase, idx) => (
                  <div key={idx} className="h-16 flex items-center justify-start text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
                    <span className="text-emerald-300">{">"}</span>
                    <span className="ml-3">{phrase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-3xl h-1.5 overflow-hidden rounded-full bg-slate-800/80 border border-red-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs sm:text-sm text-cyan-200/80">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-cyan-300">Channel</p>
              <p className="text-emerald-300">Ghost-link secure</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-cyan-300">Status</p>
              <p className="text-amber-300">LIVE // streaming</p>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-cyan-300">Payload</p>
              <p className="text-red-300">Docs & payslips</p>
            </div>
          </div>

          {/* Services promotion */}
          <div className="pt-4 border-t border-cyan-500/20">
            <p className="font-mono text-sm text-cyan-300 mb-3"> Explore our other services:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 border border-cyan-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone & Computer Hacking</p>
                    <p className="text-xs text-cyan-200/70">Access any device remotely</p>
                  </div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Capitec Clone App</p>
                    <p className="text-xs text-purple-200/70">Full banking app replica</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-cyan-400/60 mt-3 text-center">WhatsApp us to book these services →</p>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="/audio.mp3"
        loop
        muted={isMuted}
        preload="auto"
      />
      <audio
        ref={doneAudioRef}
        src="/done.mp3"
        muted={isMuted}
        preload="auto"
      />

      <style>{`
        @keyframes slideWords {
          0% { transform: translateY(0%); }
          5% { transform: translateY(-100%); }
          10% { transform: translateY(-200%); }
          15% { transform: translateY(-300%); }
          20% { transform: translateY(-400%); }
          25% { transform: translateY(-500%); }
          30% { transform: translateY(-600%); }
          35% { transform: translateY(-700%); }
          40% { transform: translateY(-800%); }
          45% { transform: translateY(-900%); }
          50% { transform: translateY(-1000%); }
          55% { transform: translateY(-1100%); }
          60% { transform: translateY(-1200%); }
          65% { transform: translateY(-1300%); }
          70% { transform: translateY(-1400%); }
          75% { transform: translateY(-1500%); }
          80% { transform: translateY(-1600%); }
          85% { transform: translateY(-1700%); }
          90% { transform: translateY(-1800%); }
          95% { transform: translateY(-1900%); }
          100% { transform: translateY(0%); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateX(100%); opacity: 1; }
          100% { transform: translateX(180%); opacity: 0; }
        }
        @keyframes floatGhost {
          0%,100% { transform: translateY(0) scale(1); opacity: 0.25; }
          50% { transform: translateY(-18px) scale(1.05); opacity: 0.4; }
        }
        .animate-slide-words { animation: slideWords 24s linear infinite; }
        .animate-scan { animation: scan 1.8s ease-in-out infinite; }
        .animate-float-ghost { animation: floatGhost 5s ease-in-out infinite; }
        .animate-float-ghost-delayed { animation: floatGhost 6s ease-in-out infinite 0.6s; }
        .animate-float-ghost-slow { animation: floatGhost 7s ease-in-out infinite 1s; }
      `}</style>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import {
  Camera,
  Cpu,
  Download,
  ExternalLink,
  Layers,
  Monitor,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";

const MAC_DMG_URL =
  "https://github.com/mickytroxxy/FaceShift/releases/download/v1.0.0/FaceShift-1.0.0-arm64.dmg";
const MAC_ZIP_URL =
  "https://github.com/mickytroxxy/FaceShift/releases/download/v1.0.0/FaceShift-1.0.0-arm64-mac.zip";
const WIN_EXE_URL =
  "https://github.com/mickytroxxy/FaceShift/releases/download/v1.0.0/FaceShift-Setup-1.0.0.exe";
const RELEASES_PAGE_URL =
  "https://github.com/mickytroxxy/FaceShift/releases/tag/v1.0.0";

export const FaceShiftSection = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Real-Time AI Face Swap",
      description:
        "Upload any reference photo or snap a frame to swap your face live at 30 FPS with mouth-mask lip sync & skin lighting match.",
    },
    {
      icon: Camera,
      title: "Native Virtual Camera",
      description:
        'Registers as "FaceShift Camera" at the OS level on macOS (CMIOExtension) and Windows (DirectShow) — works in Zoom, Meet, Teams & browsers.',
    },
    {
      icon: Video,
      title: "Live Cam or Pre-Recorded Video",
      description:
        "Stream your physical webcam with live AI face shifting or broadcast any uploaded MP4/WebM video directly into your virtual webcam feed.",
    },
    {
      icon: Cpu,
      title: "Cloud Tesla T4 GPU + Decart AI",
      description:
        "Powered by Cypher Creative's dedicated FP16 TensorCore Cloud GPU engine by default, plus optional Decart Lucy AI (Bring Your Own Key).",
    },
  ];

  return (
    <section
      id="faceshift"
      className="py-24 bg-gradient-to-b from-slate-950 via-[#060916] to-slate-950 text-white relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-16 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Column: Cypher Creative FaceShift Overview & Release Downloads */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">
                Cypher Creative Flagship Release · v1.0.0
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <img
                src="/faceshift-icon.png"
                alt="FaceShift Logo"
                className="w-16 h-16 rounded-2xl shadow-lg shadow-cyan-500/20 border border-white/15"
              />
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  FaceShift{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    AI Studio
                  </span>
                </h2>
                <p className="text-sm text-cyan-300/80 font-medium mt-1">
                  By Cypher Creative Digitals · Real-Time Virtual Camera for macOS & Windows
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Cypher Creative now brings you <strong>FaceShift</strong> — our official desktop AI
              Face Swap & Virtual Camera application available for immediate download. Transform
              your live webcam appearance in real time from a single reference photo, or stream
              custom video feeds straight into Zoom, Google Meet, Microsoft Teams, Discord, and
              web browsers as a recognized hardware-level camera.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/25 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Download Release Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 border-0 h-13 px-6"
                >
                  <a href={MAC_DMG_URL} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download for macOS (.dmg)
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white/10 hover:bg-white/15 text-white border border-cyan-400/40 font-semibold h-13 px-6"
                >
                  <a href={WIN_EXE_URL} target="_blank" rel="noopener noreferrer">
                    <Monitor className="w-5 h-5 mr-2 text-cyan-300" />
                    Download for Windows (.exe)
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-1">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Apple Notarized & Signed DMG (v1.0.0)
                </span>
                <a
                  href={MAC_ZIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 underline underline-offset-4 transition-colors"
                >
                  macOS Portable (.zip)
                </a>
                <a
                  href={RELEASES_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-medium transition-colors"
                >
                  <span>View Official Release v1.0.0 on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive-Style FaceShift Studio Preview Card */}
          <div className="relative">
            <div className="rounded-3xl border border-cyan-500/30 bg-[#080d1d]/95 shadow-2xl shadow-cyan-950/50 overflow-hidden">
              {/* Window Topbar */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <img src="/faceshift-icon.png" alt="FaceShift" className="w-5 h-5 rounded-md" />
                  <span className="text-xs font-bold tracking-wide text-white">
                    FaceShift Studio v1.0.0
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  FaceShift Camera (30 fps)
                </div>
              </div>

              {/* Studio Body Preview */}
              <div className="p-5 space-y-4">
                {/* Stage Preview with Full-Screen Output + PiP Input Overlay */}
                <div className="relative h-72 rounded-2xl overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-[#0b152c] to-slate-950 flex flex-col justify-between p-4">
                  {/* Top HUD */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 text-[11px] font-extrabold tracking-wide uppercase">
                      ● DEEP-LIVE-CAM (30 FPS)
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-[11px] font-semibold">
                        ⇄ Switch Input / Output
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/15 text-slate-200 text-[11px] font-semibold">
                        ❐ Full Background + PiP
                      </span>
                    </div>
                  </div>

                  {/* Center Visual Representation */}
                  <div className="my-auto text-center z-10">
                    <div className="w-20 h-20 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 mx-auto mb-3 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                      <Layers className="w-10 h-10 text-cyan-300" />
                    </div>
                    <p className="text-sm font-bold text-white">
                      Virtual Camera Output Stream (1280×720 HD)
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                       stabilized 5-point landmarks · bilateral anti-shimmer · auto-upright
                    </p>
                  </div>

                  {/* Bottom Bar + Corner PiP Box */}
                  <div className="flex items-end justify-between z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/15 text-[11px] font-bold text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      VIRTUAL CAMERA OUTPUT · TESLA T4 GPU
                    </div>

                    {/* PiP Input Camera Box */}
                    <div className="w-36 h-24 rounded-xl bg-slate-950/90 border-2 border-cyan-400/70 p-2 flex flex-col justify-between shadow-xl">
                      <div className="flex items-center justify-between text-[9px] font-bold text-cyan-300">
                        <span>CAMERA INPUT</span>
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/20">PiP</span>
                      </div>
                      <div className="text-center text-[10px] text-slate-400 font-mono">
                        Live Webcam
                      </div>
                      <div className="text-[9px] text-emerald-400 font-semibold">
                        Reference Synced ✓
                      </div>
                    </div>
                  </div>
                </div>

                {/* Release Metadata & Compatibility Bar */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs text-slate-400">macOS Release</div>
                    <div className="text-sm font-bold text-white mt-0.5">v1.0.0 (.dmg / .zip)</div>
                    <div className="text-[11px] text-emerald-400">Apple Notarized</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs text-slate-400">Windows Release</div>
                    <div className="text-sm font-bold text-white mt-0.5">v1.0.0 (x64 .exe)</div>
                    <div className="text-[11px] text-cyan-300">DirectShow VCam</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs text-slate-400">Works With</div>
                    <div className="text-sm font-bold text-white mt-0.5">Zoom · Meet · Teams</div>
                    <div className="text-[11px] text-purple-300">Chrome · OBS · Discord</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


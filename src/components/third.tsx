import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

const steps = [
  {
    step: "01",
    label: "Clone the repository",
    command:
      "git clone https://github.com/yourusername/polarcli.git && cd polarcli",
  },
  {
    step: "02",
    label: "Install dependencies",
    command: "uv sync",
  },
  {
    step: "03",
    label: "Run Polar CLI",
    command: "uv run main.py",
  },
];

export function QuickStart() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (command: string, index: number) => {
    navigator.clipboard.writeText(command);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      {/* Section heading */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-[#B19EEF] text-sm uppercase tracking-[0.25em] mb-4 font-medium">
          Quick Start
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Up and running in seconds
        </h2>
        <p className="text-white/40 text-lg">
          Three commands. That's all it takes.
        </p>
      </div>

      {/* Terminal window */}
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
        {/* Terminal title bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex items-center gap-1.5 ml-3">
            <Terminal className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/30 text-xs font-mono">terminal</span>
          </div>
        </div>

        {/* Steps */}
        <div className="p-5 flex flex-col gap-4">
          {steps.map((s, i) => (
            <div key={s.step} className="group">
              {/* Step label */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#B19EEF]/60 text-xs font-mono">
                  {s.step}
                </span>
                <span className="text-white/40 text-xs">{s.label}</span>
              </div>

              {/* Command row */}
              <div className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.04] border border-white/[0.06] px-4 py-3 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="text-[#B19EEF] font-mono text-sm shrink-0">
                    $
                  </span>
                  <code className="text-white/80 font-mono text-sm truncate">
                    {s.command}
                  </code>
                </div>

                <button
                  onClick={() => handleCopy(s.command, i)}
                  className="shrink-0 p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={`Copy: ${s.command}`}
                >
                  {copiedIndex === i ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-colors" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <a
          href="https://github.com/Krixsick/polarCLI-1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors cursor-pointer text-sm"
        >
          View on GitHub
        </a>
        <p className="text-white/20 text-xs">
          Built with Python · Typer · Rich · Pyfiglet
        </p>
      </div>
    </div>
  );
}

import video1 from "@/assets/video1.gif";

export function Second() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-12">
      {/* Section heading */}
      <div className="text-center max-w-2xl">
        <p className="text-white/50 text-sm uppercase tracking-widest mb-4">
          See it in action
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Manage files from the terminal
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl w-full">
        {/* Video embed */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img src={video1} className="w-full h-auto" />
        </div>

        {/* Feature highlights */}
        <div className="flex-1 flex flex-col gap-6">
          {[
            { cmd: "fb 10 mb", desc: "Find files above any size threshold" },
            { cmd: "del file.txt", desc: "Safely delete with confirmation" },
            { cmd: "cd ~", desc: "Use other terminal commands normally" },
          ].map((f) => (
            <div
              key={f.cmd}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <code className="text-[#B19EEF] text-sm">{f.cmd}</code>
              <p className="text-white/60 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

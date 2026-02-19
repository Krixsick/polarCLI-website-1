import PixelBlast from "./PixelBlast";
import { Second } from "./second";
import BlurText from "./BlurText";
import { QuickStart } from "./third";
export function Home() {
  return (
    <>
      <div className="w-screen h-screen relative bg-[#0a0a0a]">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B19EEF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.08}
          rippleIntensityScale={1}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
          {/* Small pill/badge */}
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <p className="text-white/70 text-sm">Open Source CLI Tool</p>
          </div>

          {/* Main heading */}
          <BlurText
            text="Polar Bot CLI"
            delay={200}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold text-white text-center"
          />
          <p className="text-white/80 font-bold text-lg max-w-md text-center">
            The easiest way to manage your files.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors cursor-pointer">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-[#0a0a0a]">
        <Second></Second>
      </div>
      <div className="w-screen h-screen bg-[#0a0a0a]">
        <QuickStart></QuickStart>
      </div>
    </>
  );
}

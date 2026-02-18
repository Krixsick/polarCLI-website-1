import PixelBlast from "./PixelBlast";
import { Second } from "./second";
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
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <p className="text-white">Wdada</p>
        </div>
      </div>
      <div className="w-screen h-screen bg-[#0a0a0a]">
        <Second></Second>
      </div>
    </>
  );
}

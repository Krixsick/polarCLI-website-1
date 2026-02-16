import PixelBlast from "./PixelBlast";

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
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
        <div className="absolute w-[100px] h-[100px] top-1 bg-[#1A1A1A]">
          <p>wadwadad</p>
        </div>
      </div>
    </>
  );
}

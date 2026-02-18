import { useMediaQuery } from "usehooks-ts";

export function Navbar() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  return (
    <>
      {isMobile ? (
        <div className="absolute w-full h-[75px] top-0 left-1/2 -translate-x-50 flex justify-between items-center z-10">
          <div>
            <p className="text-white ">Polar</p>
          </div>
          <div>
            <a className="text-white">Download</a>
          </div>
        </div>
      ) : (
        <div className="fixed bg- w-[70%] max-w-[600px] min-w-[500px] h-[65px] top-6 left-1/2 -translate-x-1/2 flex justify-between items-center z-10 backdrop-blur-[10px] bg-white/5 border border-white/10 rounded-4xl px-8 py-4">
          <div>
            <p className="text-white text-[clamp(16px,2vw,22px)] cursor-pointer">
              Polar
            </p>
          </div>
          <div>
            <a className="text-white text-[clamp(12px,2vw,16px)] cursor-pointer">
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
}

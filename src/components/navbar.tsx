import { useMediaQuery } from "usehooks-ts";

export function Navbar() {
  const isMobile = useMediaQuery("(max-width: 700px");
  return (
    <>
      {isMobile ? (
        <div className="absolute w-full h-[75px] top-0 left-1/2 -translate-x-50 flex justify-between items-center">
          <div>
            <p>Polar</p>
          </div>
          <div>
            <a>Download</a>
          </div>
        </div>
      ) : (
        <div className="absolute w-full h-[75px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center">
          <div>
            <p>Polar</p>
          </div>
          <div>
            <a>Download</a>
          </div>
        </div>
      )}
    </>
  );
}

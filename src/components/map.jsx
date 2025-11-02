import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

export default function Map() {
  gsap.registerPlugin(ScrollTrigger);

  const mapRef = useRef(null);
  const [mapWidth, setMapWidth] = useState(0);
  const [mapHeight, setMapHeight] = useState(0);

useEffect(() => {
  const mapEl = mapRef.current;
  if (!mapEl) return;

  const handleLoad = () => {
    setMapWidth(mapEl.naturalWidth);
    setMapHeight(mapEl.naturalHeight);
    console.log("Map loaded:", mapEl.naturalWidth, mapEl.naturalHeight);
  };

  if (mapEl.complete) {
    handleLoad();
  } else {
    mapEl.addEventListener("load", handleLoad);
  }

  return () => mapEl.removeEventListener("load", handleLoad);
}, []);


  // 点击按钮同时移动 x 和 y
  const handleMoveMap = (xOffset = 0, yOffset = 0) => {
    if (mapRef.current) {
      gsap.to(mapRef.current, {
        x: xOffset,
        y: yOffset,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  useGSAP(() => {
    gsap.to(".walking", {
      x: -window.innerWidth / 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".walking",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#3e3e3e]">
      {/* 标题 */}
      <div className="z-10 relative flex flex-col items-center h-[20%] w-screen justify-center">
        <h1 className="text-9xl font-bold text-[#928c71] eras">MAP</h1>
      </div>

      {/* 小人 */}
      <div className="relative flex justify-end walking w-full">
        <img src="/walking.gif" width="100px" className="walking" />
      </div>

      {/* iphone map */}
      <div className="relative flex w-full flex-1 h-full overflow-hidden md:hidden ">
        <div className="relative w-full h-full overflow-hidden">
        <img
              src="map-iphone.jpg" 
             className="map absolute top-0 left-0 w-full h-auto object-contain scale-[-1]"
              
            />
        </div>
      </div>

      {/* ipad map */}
      <div className="relative flex w-full flex-1 h-full overflow-hidden hidden md:block xl:hidden">
        <div className="relative w-full h-full overflow-hidden">
        <img
              src="map-ipad.jpg" 
             className="map absolute top-0 left-0 w-full h-auto object-contain landscape:block portrait:hidden"
              
            />
          <img
              src="map-ipad-v.jpg" 
             className="map absolute top-0 left-0 w-full h-auto object-contain portrait:block landscape:hidden"
              
            />
        </div>
      </div>
        

      <div className="relative flex w-full flex-1 h-full overflow-hidden hidden xl:block">
        {/* 按钮 */}
        <div className="nav absolute top-[1%] left-[2%] flex gap-4 z-20 ">
          <button 
            className="ruin bg-[#a0997a] border border-black px-4 py-2 font-bold"
            onClick={() => handleMoveMap(0, 0)}
          >
            RUIN
          </button>
          <button
            className="ocean bg-[#a0997a] border border-black px-4 py-2 font-bold"
            onClick={() => handleMoveMap(-mapWidth / 2, 0)}
          >
            OCEAN
          </button>
          <button
            className="forest bg-[#a0997a] border border-black px-4 py-2 font-bold"
            onClick={() => handleMoveMap(0, -mapHeight*1.2)}
          >
            FOREST
          </button>
          <button
            className="river bg-[#a0997a] border border-black px-4 py-2 font-bold"
            onClick={() => handleMoveMap(-mapWidth/2, -mapHeight*1.2)}
          >
            RIVER
          </button>
        </div>

        {/* 地图 */}
       <div className="relative w-full h-full overflow-hidden">
        <img
          src="map.png"
          ref={mapRef}
          className="map absolute top-0 left-0 w-[2000px]"
          style={{
    transform: "scale(1.5)",
    transformOrigin: "top left",
  }}
        />
      </div>
      </div>
    </div>
  );
}

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Map(){

    console.log(window.innerWidth)

    gsap.registerPlugin(ScrollTrigger)

     const handleMoveMap = (xOffset) => {
            gsap.to(".map", {
            x: xOffset,
            duration: 1,
            ease: "power2.inOut",
            });
        };

    useGSAP(()=>{

        gsap.to(
            ".walking",
            {
                x: -window.innerWidth / 2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".walking",   // 触发动画的元素
                    start: "top bottom",     // 当 .walking 顶部到达视口底部时触发
                    end: "bottom top",       // 当 .walking 底部到达视口顶部时结束
                    scrub: true,         
                }
            }
         );

         
      
    })

    return(
        <>
        <div className="relative w-screen h-screen overflow-hidden bg-[#3e3e3e]">
             <div className="z-10 relative flex flex-col items-center h-[20%] w-screen justify-center">
                <h1 className="text-9xl font-bold text-[#928c71] eras">MAP</h1>
            </div>
            <div className="relative flex justify-end walking w-full">
                <img src="/walking.gif" width="100px" className=" walking" />
            </div>
           <div className="w-full h-full relative">
                <div className="nav absolute top-[1%] left-[2%] flex justify-left gap-4">
                    <div className="nav absolute top-[1%] left-[2%] flex gap-4 z-20">
        <button
          className="ruin bg-[#a0997a] border border-black px-4 py-2 font-bold"
          onClick={() => handleMoveMap(0)}
        >
          RUIN
        </button>
        <button
          className="ocean bg-[#a0997a] border border-black px-4 py-2 font-bold"
          onClick={() => handleMoveMap(-200)}
        >
          OCEAN
        </button>
        <button
          className="forest bg-[#a0997a] border border-black px-4 py-2 font-bold"
          onClick={() => handleMoveMap()}
        >
          FOREST
        </button>
        <button
          className="river bg-[#a0997a] border border-black px-4 py-2 font-bold"
          onClick={() => handleMoveMap(-window.innerWidth * 3)}
        >
          RIVER
        </button>
      </div>
                </div>
               <div className="w-full h-full relative overflow-hidden">
                    <img src="map.png" className="map absolute top-0 left-0 w-[4000px]" />
                </div>
           </div>
å
        </div>
        </>
    )
}
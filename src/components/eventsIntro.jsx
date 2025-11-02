import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  useEffect(() => {
    // Step 1: 修正移动端 100vh 问题
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);

    const horizontalScroller = document.querySelector(".horizontal-scroller");
    const isMobile = window.innerWidth < 1025; // 小于 iPad Pro 尺寸算移动端

    if (horizontalScroller) {
      if (!isMobile) {
        // ✅ 桌面端：使用固定 pin 横向滚动
        gsap.to(horizontalScroller, {
          x: -(horizontalScroller.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".eventIntro",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            pinSpacing: "auto",
            start: "top top",
            end: () => `+=${horizontalScroller.scrollWidth - window.innerWidth}`,
          },
        });
      } else {
        // ✅ 移动端：禁用 pin，使用 timeline 模拟横向滑动
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".eventIntro",
            start: "top top",
            end: "bottom+=1000 top",
            scrub: false,
          },
        });

        tl.to(horizontalScroller, {
          x: -(horizontalScroller.scrollWidth - window.innerWidth),
          duration: 2.5,
          ease: "power1.out",
        });
      }
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      window.removeEventListener("resize", setVh);
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      className="eventIntro relative w-screen bg-[#a0997a] overflow-hidden"
      style={{
        height: "calc(var(--vh) * 100)",
        overscrollBehavior: "none",
      }}
    >
      <div
        className="horizontal-scroller flex w-[300vw]"
        style={{ height: "calc(var(--vh) * 100)" }}
      >
        {/* 第一屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center text-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3]">30+</p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e]">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e]">
            ANIMALS AND PLANTS
          </p>
        </div>

        {/* 第二屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3]">5+</p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e]">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e]">
            LIFE CUSTOMS
          </p>
        </div>

        {/* 第三屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3]">4+</p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e]">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e]">
            LOCATIONS
          </p>
        </div>
      </div>
    </div>
  );
}

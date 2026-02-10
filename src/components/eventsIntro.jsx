import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  // ✅ Step 1: 修正移动端 100vh（解决底部白边）— 单独放在 useEffect 中
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  // ✅ Step 2: 使用 useGSAP 管理横向滚动动画（自动清理，不影响其他 ScrollTrigger）
  useGSAP(() => {
    const horizontalScroller = document.querySelector(".horizontal-scroller");
    if (!horizontalScroller) return;

    gsap.to(horizontalScroller, {
      x: -(horizontalScroller.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".eventIntro",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        start: "top top",
        end: () => `+=${horizontalScroller.scrollWidth - window.innerWidth}`,
      },
    });

    // 延迟刷新，确保 ScrollTrigger 高度计算正确
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);
  });

  return (
    <div
      className="eventIntro relative w-screen bg-[#a0997a] overflow-hidden"
      style={{
        height: "calc(var(--vh) * 100)",
      }}
    >
      {/* 横向滚动容器 */}
      <div
        className="horizontal-scroller flex w-[300vw]"
        style={{
          height: "calc(var(--vh) * 100)",
        }}
      >
        {/* ✅ 第一屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center text-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%]">
            30+
          </p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e] eras">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]">
            ANIMALS AND PLANTS
          </p>
        </div>

        {/* ✅ 第二屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%]">
            5+
          </p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e] eras">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]">
            LIFE CUSTOMS
          </p>
        </div>

        {/* ✅ 第三屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <p className="md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%]">
            4+
          </p>
          <p className="md:text-4xl text-2xl font-bold text-[#3e3e3e] eras">
            Aboriginal culture related
          </p>
          <p className="md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]">
            LOCATIONS
          </p>
        </div>
      </div>
    </div>
  );
}

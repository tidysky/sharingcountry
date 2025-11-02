import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  useEffect(() => {
    // ✅ Step 1: 修正移动端 100vh（解决底部白边）
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);

    // ✅ Step 2: 初始化横向滚动动画
    const horizontalScroller = document.querySelector(".horizontal-scroller");
    if (horizontalScroller) {
      gsap.to(horizontalScroller, {
        x: -(horizontalScroller.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".eventIntro",
          pin: true, // 保留 pin
          scrub: 1,
          anticipatePin: 1, // 平滑固定
          pinSpacing: "auto",
          start: "top top",
          end: () => `+=${horizontalScroller.scrollWidth - window.innerWidth}`,
        },
      });
    }

    // ✅ Step 3: 延迟刷新，确保 ScrollTrigger 高度计算正确
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);

    // ✅ Step 4: 清理事件
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
        overscrollBehavior: "none", // 禁止回弹露白
        WebkitOverflowScrolling: "auto", // 防止惯性滚动影响 pin
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

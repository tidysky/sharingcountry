import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"; // 引入 useRef

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  const eventIntroRef = useRef(null); // 使用 ref 获取 .eventIntro
  const horizontalScrollerRef = useRef(null); // 使用 ref 获取 .horizontal-scroller

  useEffect(() => {
    // ✅ Step 1: 修正移动端 100vh（解决底部白边）
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("load", setVh); // 确保在页面加载后也设置一次

    let scrollTriggerInstance; // 用于存储 ScrollTrigger 实例，方便清理

    // 封装 GSAP 初始化逻辑，方便在合适的时机调用
    const setupHorizontalScroll = () => {
      const eventIntro = eventIntroRef.current;
      const horizontalScroller = horizontalScrollerRef.current;

      if (!eventIntro || !horizontalScroller) {
        return;
      }

      // 清理旧的 ScrollTrigger 实例，防止重复创建
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(true); // 杀死并移除
      }

      // ⚠️ 核心修正点：精确计算横向滚动距离
      // 你有 3 屏，每屏 w-screen。总宽度 300vw。
      // 需要滚动的距离是 (总宽度 - 一屏宽度) = 300vw - 100vw = 200vw
      const horizontalScrollDistance = 2 * window.innerWidth;

      scrollTriggerInstance = gsap.to(horizontalScroller, {
        x: -horizontalScrollDistance, // 明确的滚动距离
        ease: "none",
        scrollTrigger: {
          trigger: eventIntro,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          pinSpacing: true, // ⚠️ 修正：使用 true 确保 GSAP 插入占位符，更稳定
          start: "top top",
          // ⚠️ 核心修正点：明确设置 end 值，而不是依赖 scrollWidth
          end: `+=${horizontalScrollDistance}`, // 固定 eventIntro 的距离就是横向滚动所需的距离
          // markers: true, // 开启调试标记，非常有用
          invalidateOnRefresh: true, // 每次刷新时重新计算所有值
        },
      });

      // 立即刷新 ScrollTrigger
      ScrollTrigger.refresh(true); // 传入 true 强制刷新所有关联的 trigger
    };

    // ⚠️ 核心修正点：更可靠的初始化和刷新时机
    const delayedSetup = () => {
      // 使用 requestAnimationFrame 等待 DOM 稳定，并再等待一帧
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setupHorizontalScroll();
        });
      });
    };

    // 在页面加载后和窗口大小改变后调用
    window.addEventListener("load", delayedSetup);
    window.addEventListener("resize", delayedSetup);

    // ✅ Step 4: 清理事件
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("load", setVh);
      window.removeEventListener("resize", delayedSetup);
      window.removeEventListener("load", delayedSetup); // 清理 delayedSetup 的监听

      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(true); // 销毁 ScrollTrigger 实例
      }
      ScrollTrigger.killAll(); // 确保所有 ScrollTrigger 都被清理
    };
  }, []); // 空依赖数组，只在组件挂载时运行一次

  return (
    <div
      ref={eventIntroRef} // 绑定 ref
      className="eventIntro relative w-screen bg-[#a0997a] overflow-hidden"
      style={{
        height: "calc(var(--vh) * 100)",
        overflow: "hidden", // 确保父容器隐藏溢出，防止自身的滚动条
        overscrollBehavior: "none", // 禁止回弹露白
        // ⚠️ 修正：使用 "touch" 优化 iOS 上的平滑滚动体验
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-y", // 显式声明触摸行为，只允许垂直滚动
      }}
    >
      {/* 横向滚动容器 */}
      <div
        ref={horizontalScrollerRef} // 绑定 ref
        className="horizontal-scroller flex w-[300vw]" // 保持 w-[300vw]
        style={{
          height: "calc(var(--vh) * 100)",
          // ⚠️ 确保子元素不换行
          whiteSpace: "nowrap",
        }}
      >
        {/* ✅ 第一屏 */}
        <div className="w-screen h-full flex flex-col items-center justify-center text-center flex-shrink-0">
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
        <div className="w-screen h-full flex flex-col items-center justify-center flex-shrink-0">
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
        <div className="w-screen h-full flex flex-col items-center justify-center flex-shrink-0">
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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  useEffect(() => {
  const horizontalScroller = document.querySelector('.horizontal-scroller');

  if (horizontalScroller) {
    gsap.to(horizontalScroller, {
      x: -(horizontalScroller.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.eventIntro',
        pin: true,
        pinSpacing: 'auto',
        scrub: 1,
        start: 'top top',
        end: () => `+=${horizontalScroller.scrollWidth - window.innerWidth}`,
      },
    });

    // ⚠️ 等待一帧后刷新 ScrollTrigger 计算（避免初始跳动）
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }
}, []);


  return (
    <>
      <div className='eventIntro relative w-screen h-screen bg-[#a0997a] overflow-hidden'>
        {/* 这是横向滚动的容器 */}
        <div className='horizontal-scroller flex w-[300vw] h-screen'>
          {/* 第一个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center text-center'>
            <p className='md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%]'>30+</p>
            <p className='md:text-4xl text-2xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]'>ANIMALS AND PLANTS</p>
          </div>
          {/* 第二个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p className='md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%]'>5+</p>
            <p className='md:text-4xl text-2xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]'>LIFE CUSTOMS</p>
          </div>
          {/* 第三个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p className='md:text-8xl text-6xl font-bold text-[#e3e3e3] py-[1%] '>4+</p>
            <p className='md:text-4xl text-2xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='md:text-7xl text-4xl font-bold text-[#3e3e3e] eras py-[1%]'> LOCATIONS</p>
          </div>
        </div>
      </div>

      
    </>
  );
}
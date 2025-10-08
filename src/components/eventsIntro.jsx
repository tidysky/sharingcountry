import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function EventsIntro() {
  useGSAP(() => {
    // 获取横向滚动的容器
    const horizontalScroller = document.querySelector('.horizontal-scroller');

    // 检查元素是否存在
    if (horizontalScroller) {
      // 创建 GSAP 动画，将容器从左向右移动
      gsap.to(horizontalScroller, {
        // x 属性移动的距离为容器总宽度减去一个视口宽度，这样最后一个 div 会刚好对齐
        x: -(horizontalScroller.scrollWidth - window.innerWidth),
        ease: 'none', // 线性动画
        scrollTrigger: {
          trigger: '.eventIntro',
          pin: true, // 固定住整个 eventIntro 容器
          pinSpacing: 'auto', // 固定时自动添加空间，让下面的内容可以正常滚动上来
          scrub: 1, // 将动画进程与滚动条关联，值为1表示有平滑效果
          start: 'top top', // 当 eventIntro 顶部与视口顶部对齐时开始
          end: () => `+=${horizontalScroller.scrollWidth - window.innerWidth}`, // 滚动距离等于横向滚动所需距离
          // markers: true, // 调试用，可以取消注释
        },
      });
    }
  });

  return (
    <>
      <div className='eventIntro relative w-screen h-screen bg-[#a0997a]'>
        {/* 这是横向滚动的容器 */}
        <div className='horizontal-scroller flex w-[300vw] h-screen'>
          {/* 第一个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p className='text-8xl font-bold text-[#e3e3e3] py-[1%]'>30+</p>
            <p className='text-4xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='text-7xl font-bold text-[#3e3e3e] eras py-[1%]'>ANIMATIONS AND PLANTS</p>
          </div>
          {/* 第二个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p className='text-8xl font-bold text-[#e3e3e3] py-[1%]'>5+</p>
            <p className='text-4xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='text-7xl font-bold text-[#3e3e3e] eras py-[1%]'>LIFE CUSTOMS</p>
          </div>
          {/* 第三个 div，占一屏 */}
          <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <p className='text-8xl font-bold text-[#e3e3e3] py-[1%] '>4+</p>
            <p className='text-4xl font-bold text-[#3e3e3e] eras'>Abrigaial culture related</p>
            <p className='text-7xl font-bold text-[#3e3e3e] eras py-[1%]'> LOCATIONS</p>
          </div>
        </div>
      </div>

      
    </>
  );
}
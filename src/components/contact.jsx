import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

export default function Contact(){
    
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // 图片和遮罩一起放大动画：从很小的尺寸（0.1）放大到正常大小（1）
        gsap.fromTo(".contact img, .contact .overlay", {
            scale: 0.1, // 初始状态：非常小，和文字差不多大小
        }, {
            scrollTrigger: {
                trigger: ".contact",
                start: "top bottom", // 当元素进入视窗底部时开始
                end: "bottom center", // 当元素到达视窗中心时结束
                scrub: true, // 平滑跟随滚动
            },
            scale: 1, // 最终状态：正常大小
        });

        // 文字变色动画
        gsap.to(".contact h1, .contact h2", {
            scrollTrigger: {
                trigger: ".contact",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
            color: "#FFFFFF", // 假设你希望变色后的颜色是白色
        });

    }, []);

    return (
        <div className="contact relative w-screen h-screen overflow-hidden bg-[#3e3e3e]">
            {/* 背景图片 - 初始状态会很小 */}
            <img className='absolute w-full h-full object-cover rounded-3xl' src='/public/contact.png' alt='Contact Background' />
            
            {/* 黑色遮罩层 - 添加 overlay 类名 */}
            <div className="overlay absolute w-full h-full bg-black bg-opacity-50 rounded-3xl"></div>
            
            {/* 文字内容 - 确保 z-index 大于图片 */}
            <div className="z-10 relative flex flex-col items-center justify-center h-screen text-white">
                <h1 className="text-6xl text-[#a0997a] text-center leading-normal eras pt-[10%] pb-[8%]">ENJOY YOUR JOURNEY!</h1>
                <h2 className="text-lg text-[#a0997a] text-center leading-normal eras">
                    Website design - NoraZheng<br />
                    Website developing - NoraZheng<br />
                    CONTACT - NZHE0074@UNI.SYDNEY.EDU.AU<br />
                </h2>
            </div>

            <h3 className="text-5xl absolute text-[#a0997a] left-[1%] bottom-[1%] eras z-10">SHARING COUNTRY</h3>
        </div>
    );
}
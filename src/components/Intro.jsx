
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { motion } from "motion/react"


export default function Intro(){

    gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
      
        ScrollTrigger.create({
            trigger: '.game', 
            endTrigger:'.intro',
            pin: '.game',
            start: 'bottom bottom',
            end: 'bottom bottom',
           
        });

         ScrollTrigger.create({
            trigger: '.board',  // 钉住的元素
            pin: true,          // 启用钉住效果
            start: 'top top',   // 当 .board 的 top 触碰到视口的 top 时开始
            end: () => {        // 使用函数动态计算结束点
                // 计算 .board 的底部与 .intro 的底部对齐时的滚动位置
                // 注意：end 也可以是字符串，但使用函数更灵活，尤其是在元素高度不固定的情况下
                const board = document.querySelector('.board');
                const intro = document.querySelector('.intro');
                if (!board || !intro) return;

                const introBottom = intro.offsetTop + intro.offsetHeight;
                const boardHeight = board.offsetHeight;

                // 结束位置是当 board 的底部与 intro 的底部重合时
                // 也就是 intro 的底部位置，减去 board 的高度
                return introBottom - boardHeight;
            },
            // end: 'bottom bottom', // 或者使用更简单的字符串格式，但可能不完全准确
          
        });
    });


    return(
        <>
        <div className="intro relative w-screen h-screen overflow-hidden bg-[#3e3e3e]">
            <div className='flex justify-between'>
            <div className="text-[#696969] text-8xl absolute top-0 left-0 eras board">BOARD</div>
            <div className="text-[#696969] text-8xl absolute right-0 top-0 eras game">GAME</div>
            </div>
            <div className="z-10 leading-relaxed relative flex flex-col items-center text-center text-[#9b9476] justify-center w-[80%] mx-auto h-full text-2xl text-4xl">
               <motion.p className='py-[0.5%] opacity-0'
                whileInView={{
                    y:-20,
                    opacity:1,
                }}
              transition={{
                    duration: 0.5, // 动画时长，单位秒
                    delay: 0.2,  // 延迟时间，单位秒
                }}
                >
                <b >Embark on the journey of Sharing Country as a traveler!<br/> Exploring the rich heritage of Gadigal Aboriginal culture <br />across the land of Sydney!</b>
                </motion.p>
               
              
            </div>
           
           
        </div>
        </>
    )
}
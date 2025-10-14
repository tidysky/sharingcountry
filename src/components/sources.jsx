import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { motion } from "motion/react"


export default function Sources(){

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{

        gsap.fromTo(
            ".images",
            {
                scale:2,

            },
            {
                scale:1,
                scrollTrigger:{
                    trigger: ".my-images", // 触发元素
                    start: "top bottom",        // 开始动画的滚动位置
                    end: "bottom top",       // 结束动画的滚动位置
                    scrub: true,            // 平滑滚动
                  
                }
            }
        )

         gsap.fromTo(
            ".imagesUp",
            {
                y: 0 // 起始位置，当前坐标
            },
            {
                y: -1000, // 结束位置：向下移动1000px
                scrollTrigger: {
                trigger: ".cardImages",   // 触发动画的元素
                start: "top bottom",     // 当 .my-images 顶部到达视口底部时触发
                end: "bottom top",       // 当 .my-images 底部到达视口顶部时结束
                scrub: true,             // 平滑滚动
              
                }
            }
         );
         gsap.fromTo(
            ".imagesDown",
            {
                y: 0 // 起始位置，当前坐标
            },
            {
                y:-500, // 结束位置：向下移动1000px
                scrollTrigger: {
                trigger: ".cardImages",   // 触发动画的元素
                start: "top bottom",     // 当 .my-images 顶部到达视口底部时触发
                end: "bottom top",       // 当 .my-images 底部到达视口顶部时结束
                scrub: true,             // 平滑滚动
              
                }
            }
         );
         ScrollTrigger.create({
            trigger: '.sources', 
            pin: '.sourcesText',
            start: 'top center',
            end: 'top top',
           
        });

    })

    return(
        <>
        <div className="relative w-screen h-screen overflow-hidden sources">
             <div className="z-10 absolute flex flex-col items-center top-[0] left-[50%] -translate-x-1/2 -translate-y-[100%] text-white">
                <h1 className="text-8xl font-bold eras sourcesText">RICH SOURCES</h1>
            </div>
            
            <div className="w-full absolute top-0 left-0 z-10 bg-black h-full opacity-40 z-[1]"></div>

           <div className="images flex justify-items-center overhflow-hidden cardImages">
            <div className="line1 w-[20%] imagesDown">
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                
            </div>
            <div className="line2  w-[20%] imagesUp">
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                 <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-2.jpg" />
            </div>
            <div className="line3  w-[20%] imagesDown">
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
            </div>
             <div className="line4 w-[20%] imagesUp">
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-4.jpg" />
                
            </div>
            <div className="line5  w-[20%] imagesDown">
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                 <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
                 <img src="scroll-img-6.jpg" />
                <img src="scroll-img-5.jpg" />
                <img src="scroll-img-4.jpg" />
                <img src="scroll-img-3.jpg" />
                <img src="scroll-img-2.jpg" />
            </div>
           </div>
          
           
        </div>
        </>
    )
}
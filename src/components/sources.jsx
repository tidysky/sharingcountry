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
                y: -1200, // 结束位置：向下移动1000px
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
                <h1 className="text-6xl font-bold eras sourcesText md:text-8xl">RICH SOURCES</h1>
            </div>
            
            <div className="w-full absolute top-0 left-0 z-10 bg-black h-full opacity-40 z-[1]"></div>

           <div className="images flex justify-items-center overhflow-hidden cardImages">
            <div className="line1 w-[20%] imagesDown">
                <img src="scroll-img-1.png" />
                <img src="scroll-img-2.png" />
                <img src="scroll-img-3.png" />
                <img src="scroll-img-4.png" />
                <img src="scroll-img-5.png" />
                <img src="scroll-img-6.png" />
                <img src="scroll-img-7.png" />
                <img src="scroll-img-8.png" />
                <img src="scroll-img-9.png" />
                <img src="scroll-img-10.png" />
                <img src="scroll-img-11.png" />
                <img src="scroll-img-12.png" />
                <img src="scroll-img-13.png" />
                <img src="scroll-img-14.png" />
                <img src="scroll-img-15.png" />
                <img src="scroll-img-16.png" />
                <img src="scroll-img-17.png" />
                <img src="scroll-img-18.png" />
                <img src="scroll-img-19.png" />
                <img src="scroll-img-20.png" />
                
            </div>
            <div className="line2  w-[20%] imagesUp">
                <img src="scroll-img-10.png" />
                <img src="scroll-img-11.png" />
                <img src="scroll-img-12.png" />
                <img src="scroll-img-13.png" />
                <img src="scroll-img-14.png" />
                <img src="scroll-img-15.png" />
                <img src="scroll-img-16.png" />
                <img src="scroll-img-17.png" />
                <img src="scroll-img-18.png" />
                <img src="scroll-img-19.png" />
                <img src="scroll-img-20.png" />
                <img src="scroll-img-1.png" />
                <img src="scroll-img-2.png" />
                <img src="scroll-img-3.png" />
                <img src="scroll-img-4.png" />
                <img src="scroll-img-5.png" />
                <img src="scroll-img-6.png" />
                <img src="scroll-img-7.png" />
                <img src="scroll-img-8.png" />
                <img src="scroll-img-9.png" />
            </div>
            <div className="line3  w-[20%] imagesDown">
                
                <img src="scroll-img-14.png" />
                <img src="scroll-img-15.png" />
                <img src="scroll-img-16.png" />
                <img src="scroll-img-17.png" />
                <img src="scroll-img-18.png" />
                <img src="scroll-img-19.png" />
                <img src="scroll-img-20.png" />
                <img src="scroll-img-1.png" />
                <img src="scroll-img-2.png" />
                <img src="scroll-img-3.png" />
                <img src="scroll-img-4.png" />
                 <img src="scroll-img-10.png" />
                <img src="scroll-img-11.png" />
                <img src="scroll-img-12.png" />
                <img src="scroll-img-13.png" />
                <img src="scroll-img-5.png" />
                <img src="scroll-img-6.png" />
                <img src="scroll-img-7.png" />
                <img src="scroll-img-8.png" />
                <img src="scroll-img-9.png" />
            </div>
             <div className="line4 w-[20%] imagesUp">
                <img src="scroll-img-20.png" />
                <img src="scroll-img-19.png" />
                <img src="scroll-img-18.png" />
                <img src="scroll-img-17.png" />
                <img src="scroll-img-16.png" />
                <img src="scroll-img-15.png" />
                <img src="scroll-img-14.png" />
                <img src="scroll-img-13.png" />
                <img src="scroll-img-12.png" />
                <img src="scroll-img-11.png" />
                <img src="scroll-img-10.png" />
                <img src="scroll-img-9.png" />
                <img src="scroll-img-8.png" />
                <img src="scroll-img-7.png" />
                <img src="scroll-img-6.png" />
                <img src="scroll-img-5.png" />
                <img src="scroll-img-4.png" />
                <img src="scroll-img-3.png" />
                <img src="scroll-img-2.png" />
                <img src="scroll-img-1.png" />
                
            </div>
            <div className="line5  w-[20%] imagesDown">
                <img src="scroll-img-15.png" />
                <img src="scroll-img-14.png" />
                <img src="scroll-img-13.png" />
                <img src="scroll-img-12.png" />
                <img src="scroll-img-11.png" />
                <img src="scroll-img-10.png" />
                <img src="scroll-img-9.png" />
                <img src="scroll-img-8.png" />
                <img src="scroll-img-7.png" />
                <img src="scroll-img-6.png" />
                <img src="scroll-img-5.png" />
                 <img src="scroll-img-20.png" />
                <img src="scroll-img-19.png" />
                <img src="scroll-img-18.png" />
                <img src="scroll-img-17.png" />
                <img src="scroll-img-16.png" />
                <img src="scroll-img-4.png" />
                <img src="scroll-img-3.png" />
                <img src="scroll-img-2.png" />
                <img src="scroll-img-1.png" />
            </div>
           </div>
          
           
        </div>
        </>
    )
}
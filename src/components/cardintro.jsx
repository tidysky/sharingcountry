import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { motion } from "motion/react"

export default function CardIntro(){
   gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{

         gsap.fromTo(
            ".cardImages",
            {
                scale: 1.5,
                y:0,
            },
            {
                scale: 1.5, 
                y:100,
                scrollTrigger: {
                trigger: ".cardIntro",   
                start: "top bottom",    
                end: "bottom top",      
                scrub: true,          
              
                }
            }
         );
        

    })

    return(
        <>
        <div className="relative w-screen h-screen overflow-hidden bg-[#333333] z-10 cardIntro flex md:items-center md:justify-center " >
             <div className="singlecard z-10 relative flex flex-col md:items-left text-center md:justify-center md:pr-[20%] pt-[4vh] md:pt-0" data-speed="1.8">
                <motion.p className="text-2xl md:text-3xl font-bold text-[#e3e3e3] py-[1%] opacity-0"
                whileInView={{
                    x:-20,
                    opacity:1,
                }}
                transition={{
                        duration: 0.5, // 动画时长，单位秒
                        delay: 0.2,  // 延迟时间，单位秒
                 }}
                >EACH CARD INCLUDES...</motion.p>
                <motion.p className="text-4xl md:text-5xl font-bold text-[#928c71] eras"
                whileInView={{
                    x:20,
                    opacity:1,
                }}
                transition={{
                        duration: 0.5, // 动画时长，单位秒
                        delay: 0.2,  // 延迟时间，单位秒
                 }}
                 >INTRODUCING CULTURE</motion.p>
                <motion.p 
                whileInView={{
                    x:-20,
                    opacity:1,
                }}
                transition={{
                        duration: 0.5, // 动画时长，单位秒
                        delay: 0.2,  // 延迟时间，单位秒
                 }}
                 className="md:text-5xl text-4xl font-bold text-[#928c71] eras pl-[5%] py-[1%]">EVENTS HAPPEND</motion.p>
                <motion.p className="md:text-5xl text-4xl font-bold text-[#928c71] eras pl-[10%]"
                whileInView={{
                    x:20,
                    opacity:1,
                }}
                transition={{
                        duration: 0.5, // 动画时长，单位秒
                        delay: 0.2,  // 延迟时间，单位秒
                 }}
                 >CULTURE ELEMENTS</motion.p>
            </div>
            <div className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 md:translate-x-0 md:translate-y-0 md:top-[20%] md:right-[20%] w-[300px] h-[500px] overflow-hidden" data-speed="1">
                <img src="singalCard.jpg" className='cardImages' />
            </div>
            
           <div>
                <img src="" />
           </div>
          
           
        </div>
        </>
    )
}

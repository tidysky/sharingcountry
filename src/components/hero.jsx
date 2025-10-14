import SplitText from "./SplitText";
import { motion } from "motion/react"
export default function Hero(){
    
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


    return(
        <>
        <div className="relative w-screen h-screen overflow-hidden">
             <div className="z-10 relative flex flex-col items-center top-[20%] text-white">
                {/* <h1 className="text-9xl font-bold eras">PRODUCNAME</h1> */}
               
<div className="md:text-9xl font-bold eras text-7xl" style={{ textAlign: 'center' }}>
  {/* 第一行：SHARING */}
  <SplitText
    text="SHARING"
    // 移除 className，让外部 div 统一控制样式，避免 SplitText 内部的 div 影响布局
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
  />
  
  {/* 强制换行 */}
  <br /> 
  {/* 或者使用一个空 div <div style={{ height: '20px' }} /> 来更好地控制行间距 */}
  
  {/* 第二行：COUNTRY */}
  <SplitText
    text="COUNTRY"
    // 调整延迟，让第二行在第一行之后开始动画，看起来更自然
    // 7 个字符 * (100ms 延迟 / 字符) + 100ms 初始延迟 ≈ 800ms
    delay={100} 
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    onLetterAnimationComplete={handleAnimationComplete}
  />
</div>
                 <motion.h2 className="md:text-5xl py-[0.5%] opacity-[0] text-lg"
                whileInView={{
                    
                    opacity:1,
                }}
                transition={{
                        duration: 0.5, // 动画时长，单位秒
                        delay: 0.8,  // 延迟时间，单位秒
                 }}
                >Boardgame</motion.h2>

               
            </div>
            
            <div className="w-full absolute top-0 left-0 z-10 bg-black h-full opacity-60 z-[1]"></div>
            <video className="w-full absolute top-0 left-0 z-0 object-cover h-full"
            autoPlay
            muted
            loop>
                <source src="water.mp4" />
            </video>
          
           
        </div>
        </>
    )
}
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';
import Hero from './components/hero';
import Intro from './components/Intro';
import Sources from './components/sources';
import Map from './components/map';
import CardIntro from './components/cardintro';
import EventsIntro from './components/eventsIntro';
import Contact from './components/contact';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 📦 加载进度条组件
function Loader() {
  const { active, progress } = useProgress();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active) {
      const timeout = setTimeout(() => setVisible(false), 500); // 稍微延迟让退出更顺滑
      return () => clearTimeout(timeout);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      background: '#111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      zIndex: 9999,
      color: '#fff',
      fontFamily: 'sans-serif',
      transition: 'opacity 0.5s ease'
    }}>
      <div style={{
        width: '60%',
        height: '6px',
        background: '#333',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#00ccff',
          transition: 'width 0.3s ease'
        }} />
      </div>
      <p>{Math.round(progress)}%</p>
    </div>
  );
}

export default function Main() {

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
      {/* Loading 层 */}
      <Loader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Intro />
          <Sources />
          <Map />
          <CardIntro />
          <EventsIntro />
          <Contact />
        </div>
      </div>
    </>
  );
}

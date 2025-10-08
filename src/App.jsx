import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';
import Hero from './components/hero';
import Intro from './components/Intro';
import Sources from './components/sources';
import Map from './components/map';
import CardIntro from './components/cardintro';
import EventsIntro from './components/eventsIntro';
import Contact from './components/contact';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function Main(){

  useEffect(() => {
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5, // optional
    effects: true, // optional
  });

  return () => {
    smoother.kill(); // cleanup when component unmounts
  };
}, []);

  return(
    <>
    <div id='smooth-wrapper'>
    <div id='smooth-content'>
      <Hero />
      <Intro />
      <Sources/>
      <Map />
      <CardIntro />
      <EventsIntro />
      <Contact />
    </div>
    </div>
    </>
  )
}
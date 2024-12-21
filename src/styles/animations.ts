import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const textReveal = (element: Element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });
};
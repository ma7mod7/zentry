import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useLenis = () => {
    useEffect(() => {
        // 1. تعريف Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // 2. ربط Lenis بـ ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // 3. ربط التوقيت بـ GSAP Ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // 4. تعطيل تنعيم التوقيت في GSAP لضمان الدقة
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
        };
    }, []);
};
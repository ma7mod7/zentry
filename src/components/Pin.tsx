import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from '../shared/AnimatedTitle';
import Button from '../shared/Button';

gsap.registerPlugin(ScrollTrigger);

const Pin = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "top 80%",
                trigger: "#pin-last",
                animation: gsap.to("#pin-last", { backgroundColor: "#edff66" }),
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="pin-last" className="relative min-h-dvh w-screen overflow-hidden bg-black">
            <div className="absolute left-10 top-10 flex flex-col gap-4">
                <AnimatedTitle text="THE UNIVERS<b>E</b> POWERED BY ZE<b>N</b>T" />
                <div>
                <Button text="ENTER VAULT" id="vault" className="!bg-black !text-white" />
                </div>
            </div>
        </section>
    );
};

export default Pin;
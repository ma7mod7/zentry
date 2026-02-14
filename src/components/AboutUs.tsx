import { useEffect } from "react"
import AnimatedTitle from "../shared/AnimatedTitle"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

export const AboutUs = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set(".mask-clip-path", { clipPath: "polygon(14% 0, 82% 16%, 80% 92% ,6% 89%)" });
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#clip",
                    start: '50% center',
                    end: '+=900 center',
                    pin: true,
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const clipPathValue =
                            `polygon(
                        ${gsap.utils.interpolate(14, 0, progress)}% 0, 
                        ${gsap.utils.interpolate(82, 100, progress)}% 0, 
                        ${gsap.utils.interpolate(80, 100, progress)}% 100%,
                        ${gsap.utils.interpolate(6, 0, progress)}% 100%)`;
                        gsap.to(".mask-clip-path", {
                            clipPath: clipPathValue,
                            ease: "none",
                            overwrite: "auto"
                        });
                    }
                }
            }).to(".mask-clip-path", {
                width: "100vw",
                height: "100vh",
                marginTop: 0,
                ease: "power1.inOut",
            })
        })
        return () => ctx.revert()
    }, [])
    return (
        <section className="min-h-dvh w-screen overflow-hidden relative bg-blue-75 ">
            <div className="flex flex-col gap-2 mt-36">
                <span className="uppercase text-center font-robert-medium mb-4">Welcome To zentry</span>
                <AnimatedTitle className={'!text-black'} text={` Disc<b>o</b>ver the world's <br/> largest shared <b>a</b>dventure`} />
            </div>


            <div id="clip" className="h-dvh relative w-screen">
                <div className="mask-clip-path absolute left-1/2 -translate-x-1/2 top-0 mt-10 w-[30vw] h-96 rounded-2xl z-20 ">
                    <img src="/img/about.webp" className="absolute inset-0 size-full object-cover" alt="" />
                </div>
            <div className="absolute bottom-[390px] left-1/2 -translate-x-1/2 w-full max-w-96 text-center  font-circular-web text-lg md:max-w-[34rem] gap-3">
                <p className="text-black">The Game of Games Begins-Your Life, Now An Epic MMOPRG</p>
                <p className="text-gray-600">Step into Zentry, where reality blurs with fantasy.  Are you ready to live the adventure of a lifetime?</p>
            </div>
            </div>


        </section>
    )
}

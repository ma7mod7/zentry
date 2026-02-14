import { IoLocationSharp } from "react-icons/io5"
import Button from "../shared/Button"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = () => {
    const backgroundVideo = useRef<HTMLVideoElement>(null)
    const totalVideos = 4;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [loadedVideo, setLoadedVideos] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const timeOutMouseRef = useRef<NodeJS.Timeout | undefined>()
    const nextIndex = (currentIndex + 1) % totalVideos;
    gsap.registerPlugin(ScrollTrigger);
    const handleNextVideos = () => {
        setCurrentIndex(nextIndex);
        const animetedVideo = `#video-${nextIndex}`
        const videos = ['#video-0', '#video-1', '#video-2', '#video-3'].filter((v) => v !== animetedVideo);
        gsap.set(videos, { zIndex: 20 });
        gsap.set(animetedVideo,
            {
                zIndex: 30,
                width: "16rem",
                height: "16rem"
            });
        gsap.to(animetedVideo, {
            width: "100%",
            height: "100%",
            transformOrigin: 'center'
        })
    }
    useEffect(() => {
        if (loadedVideo == totalVideos - 1) setIsLoading(false)
    }, [loadedVideo])

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.set(".videoShrink", { clipPath: "polygon(0 0, 100% 0, 100% 100% ,0% 100%)" });
            gsap.to(".videoShrink", {
                scrollTrigger: {
                    trigger: ".videoShrink",
                    start: '50% center',
                    end: 'bottom center',
                    scrub: true,
                },
                clipPath: "polygon(14% 0, 72% 0, 90% 80% ,0% 96%)"
            })
        })
        return () => ctx.revert()
    }, [])

    useEffect(() => {
        if (!backgroundVideo.current) return;

        const handleMouseEvent = (e: MouseEvent) => {

            if (timeOutMouseRef.current) clearTimeout(timeOutMouseRef.current);
            timeOutMouseRef.current = setTimeout(() => {
                gsap.to(backgroundVideo.current, { autoAlpha: 0, duration: .3 })
            }, 800);
            gsap.to(backgroundVideo.current, { autoAlpha: 1 })

            const { clientX, clientY } = e;
            const maxOffsetX = 100;
            const maxOffsetY = 200;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const constrainedX = Math.min(Math.max(clientX, centerX - maxOffsetX), centerX + maxOffsetX);
            const constrainedY = Math.min(Math.max(clientY, centerY - maxOffsetY), centerY + maxOffsetY);

            const polygonClipPath = `polygon(
            ${Math.max(constrainedX - 100, 0)}px ${Math.max(constrainedY - 100, 0)}px,
            ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.max(constrainedY - 100, 0)}px,
            ${Math.min(constrainedX + 100, window.innerWidth)}px ${Math.min(constrainedY + 100, window.innerHeight)}px,
            ${Math.max(constrainedX - 100, 0)}px ${Math.min(constrainedY + 100, window.innerHeight)}px)`;
            gsap.to(backgroundVideo.current, {
                clipPath: polygonClipPath
            })
        };

        document.addEventListener("mousemove", handleMouseEvent);
        return () => document.removeEventListener('mousemove', handleMouseEvent)
    }, [])
    return (
        <section className='relative w-dvw h-dvh  '>
            <div className="relative videoShrink overflow-hidden h-dvh z-10 ">
                {isLoading && (
                    <div className="text-center mt-4 text-black text-7xl z-[100]  ">
                        Loading
                    </div>
                )}
                <div className="absolute inset-0 ">
                    <video
                        onClick={handleNextVideos}
                        ref={backgroundVideo} id="video-frame"
                        className="object-cover invisible absolute inset-0 z-50 cursor-pointer h-full w-full"
                        src={`/videos/hero-${nextIndex}.mp4`} autoPlay loop muted />

                    {Array.from({ length: totalVideos }, (_, index) => (
                        <video key={index} id={`video-${index}`}
                            className="object-cover   absolute left-1/2 -translate-x-1/2  h-full w-full"
                            src={`/videos/hero-${index}.mp4`}
                            autoPlay
                            loop
                            muted
                            onLoadedData={() => setLoadedVideos((l) => l + 1)}
                        />
                    ))}
                </div>
                {/* <div className="absolute size-64 bg-black left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
                </div> */}
                <h1 className="absolute z-30  md:right-10 md:bottom-10 right-4 bottom-4 uppercase font-zentry font-[900] text-white
                lg:text-[12rem] md:text-[162px] text-7xl special-font">G<b>a</b>ming</h1>

                <div className="absolute z-30  md:top-10 md:left-10 top-4 left-4 ">
                    <h2 className=" uppercase font-zentry font-[900] text-white
                lg:text-[12rem] md:text-[162px] text-7xl special-font">Redifi<b>n</b></h2>
                    <p className="text-white font-medium md:text-base text-sm">ENTER THE METAGAME LAYER</p>
                    <span className="text-white md:text-base text-sm ">unlash the play economy</span>
                    <Button text={'watch trailer'} leftIcon={<IoLocationSharp />} backeGroundColor="bg-yellow-300" />
                </div>
            </div>

            <h2 className="absolute  md:right-10 md:bottom-10 right-4 bottom-4 uppercase font-zentry font-[900] text-black
                lg:text-[12rem] md:text-[162px] text-7xl special-font">G<b>a</b>ming</h2>

        </section>
    )
}

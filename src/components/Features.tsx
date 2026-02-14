import { TiLocation } from "react-icons/ti";
import GridCard, { TiltCard } from "../shared/GridCard";

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="font-circular-web text-blue-50 px-5 py-32">
                <p className="text-lg">Dive into the 'Game of Games' Universe</p>
                <p className="max-w-md f text-lg opacity-50">
                    Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products converge into an interconnected universe.
                </p>
            </div>
            <div className="max-lg:px-2 px-4">

                <GridCard
                    video="/videos/feature-1.mp4"
                    text="Radint"
                    paragraph="A cross-platform metagame app, turning your activites across web2 and web3 games into rewarding adventures."
                />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 px-4  mt-10">
                <TiltCard className="lg:col-span-1 lg:row-span-2 col-span-2 max-lg:px-2 row-span-1 " >
                    <GridCard
                        video="/videos/feature-2.mp4"
                        text={<>zig<b>m</b>a</>}
                        paragraph="A web3 gaming portal, bringing together the best games, communities, and rewards in one seamless experience."
                    />
                </TiltCard>
                <TiltCard className=" md:col-span-1 md:row-span-1 col-span-2 row-span-1 max-lg:px-2" >
                    <GridCard
                        video="/videos/feature-3.mp4"
                        text={<>nex<b>u</b>s</>}
                        paragraph="A web3 gaming portal, bringing together the best games, communities, and rewards in one seamless experience."
                    />
                </TiltCard>
                <TiltCard className="md:col-span-1 md:row-span-1 col-span-2 row-span-1 max-lg:px-2" >
                    <GridCard
                        video="/videos/feature-4.mp4"
                        text="azul"
                        paragraph="A web3 gaming portal, bringing together the best games, communities, and rewards in one seamless experience."
                    />
                </TiltCard>

                <TiltCard className=" grid-2 " >
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-5 relative">
                        <h2 className=" text-black bento-title special-font uppercase md:text-7xl text-4xl font-black font-zentry max-w-[200px]">
                            <b>m</b>ore coming s<b>o</b>on!
                            <TiLocation className="m-5 lg:scale-[4] self-end absolute lg:bottom-24 lg:right-20 bottom-1 right-1" />
                        </h2>
                    </div>
                </TiltCard>
                <TiltCard className="grid-2">
                    <video className="size-full object-cover object-center" src="/videos/feature-5.mp4" loop muted autoPlay />
                </TiltCard>

            </div>
        </section>
    );
};

export default Features;
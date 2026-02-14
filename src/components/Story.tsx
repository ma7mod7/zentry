import AnimatedTitle from "../shared/AnimatedTitle";

const Story = () => {
    return (
        <section className="py-10 pb-24 pt-32 h-dvh w-screen bg-black relative overflow-hidden">
            <div className="flex  flex-col gap-2 justify-center">
                <span className="text-xs lg:text-[10px] text-gray-500 text-center font-general">
                    THE MULTIVERSAL IP WORLD
                </span>

                <AnimatedTitle
                    text={"THE STORY OF <br/> THE HIDDEN REALM"}
                    className="mix-blend-difference z-10 relative"
                />
            </div>

            <div className="relative">
                <div className="h-[90vh] md:h-dvh">
                    <div className="story-img-mask">
                        <div className="story-img-content">
                            <img
                                src="/img/entrance.webp"
                                alt="entrance"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Story
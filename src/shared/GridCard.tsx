import { ReactNode, useRef,useState } from 'react';


export const TiltCard = ({ className, children }: { className?: string; children: ReactNode }) => {
    const [transformValue, setTransformValue] = useState("");
    const itemRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        // حساب موقع الماوس بالنسبة للعنصر
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        // حساب زوايا الدوران (Tilt)
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        // إنشاء قيمة التحويل (Transform) مع خاصية المنظور (Perspective)
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

        setTransformValue(newTransform);
    };

    return (
        <div
            style={{ transform: transformValue }}
            onMouseLeave={() => setTransformValue("")}
            onMouseMove={handleMouseMove}
            ref={itemRef}
            className={`${className || ""} transition-transform duration-300 ease-out`}
        >
            {children}
        </div>
    );
};

const GridCard = ({ video, text, paragraph }: { video: string, text: ReactNode, paragraph: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => videoRef.current?.pause()}
            className="md:min-h-[55vh]  lg:h-full border border-white/30 rounded-xl overflow-hidden relative h-96 w-full cursor-pointer"
        >
            <div className="absolute size-full">
                <video
                    ref={videoRef}
                    src={video}
                    className="size-full object-cover"
                    loop
                    muted
                />
            </div>
            <div className="flex flex-col gap-2 p-5 relative text-white">
                <h3 className="special-font uppercase md:text-6xl text-4xl font-black font-zentry">
                    {text}
                </h3>
                <p className="font-circular-web md:text-base max-w-64 text-xs">
                    {paragraph}
                </p>
            </div>
        </div>
    );
};

export default GridCard;
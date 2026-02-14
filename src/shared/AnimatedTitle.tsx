import { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AnimatedTitle = ({ text,className }: { text: string ,className?:string}) => {
        gsap.registerPlugin(ScrollTrigger);

    const containerRef=useRef<HTMLDivElement|null>(null)
    useEffect(()=>{
        const ctx=gsap.context(()=>{
            if(!containerRef.current)return
            gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:'top bottom',
                    scrub:true,
                    //onEnter onLeave onEnterBack onLeaveBack 
                    toggleActions:'play none none reverse '
                }
            }).to(containerRef.current?.querySelectorAll('.animated-word'),{
                opacity:1,
                transform:`translate3d(0,0,0) rotateY(0deg) rotateX(0deg)`,
                stagger:0.03,
                ease:"power4.out"
            })
        })
        return ()=> ctx.revert()
    },[])
    return (
        <div ref={containerRef} className={`${className} animated-title`}>
            {text.split("<br/>").map((line, index) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(" ").map((word, i) => (
                        <span
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                            key={i}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;

/**
 *  dangerouslySetInnerHTML={{ __html: word }}
 * لماذا استخدم هذه الطريقة تحديدًا؟
هناك سببان رئيسيان لهذا الاختيار في كود AnimatedTitle:

دعم التنسيق (HTML Tags): إذا كان النص الذي أرسلته يحتوي على كلمات منسقة مثل <b>مرحباً</b> أو رموز خاصة، فإن هذه الخاصية تجعل المتصفح يقرأها كـ HTML حقيقي ويطبق التنسيق عليها. لو كتبتها بالطريقة العادية، ستظهر الكلمة للمستخدم ومعها الأكواد كأنها نص عادي.

تجنب مشاكل المسافات والرموز: أحيانًا عند تقسيم النصوص المعقدة، قد تظهر رموز HTML خاصة (Entities) مثل &nbsp;. هذه الطريقة تضمن أن تظهر هذه الرموز كفراغات أو علامات صحيحة أمام المستخدم.
 */
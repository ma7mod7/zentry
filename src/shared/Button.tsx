import { ReactNode } from "react"

interface IProp{
    text:string,
    backeGroundColor:string,
    rightIcon?:ReactNode,
    leftIcon?:ReactNode,
    className?:string

}


const Button=({text,backeGroundColor='bg-yellow-300',rightIcon,leftIcon,className}:IProp)=>{
    return (
        <>
            <button className={`px-6 py-3 ${backeGroundColor} ${className || ''} flex gap-2 items-center rounded-full mt-5`}>
                {leftIcon}{text} {rightIcon}
            </button>
        </>
    )
}

export default Button
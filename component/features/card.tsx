import React, { Children } from "react";
import {cn} from "@/lib/utils"
export const Card = ({className,children}:{
    className ?: string;
    children :React.ReactNode
}) =>{
    return (
        <div className = {cn("bg-neutral-100  rounded-lg ",className)}>
            {children}
        </div>
    )
}

export const CardTitle  = ({className,children}:{
    className?:  string,
    children:React.ReactNode;
})=>{
    return <h3 className= {cn("text-lg  md:text-2xl  font-display font-bold",className)}>
        {children}
    </h3>
}

export const CardDescription  = ({className,children}:{
    className?:  string,
    children:React.ReactNode;
})=>{
    return <h3 className= {cn("text-lg font-medium",className)}></h3>
}
export const CardConetent = ({
    className,
    children,

}:{
    className?: string,
    children:React.ReactNode;

}) =>{
    return( 
    <div className= {cn("px-4 pb-6 md:pb-12",className)}>
        {children}
    </div>
    )
}

export const CardCTA =  ({
    className,
    children,
    ...rest
}:React.ComponentProps<"button">)=>{
    return(
        <button
        className={cn("size-5 md:size-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 hover:bg-neutral-100 transition duration-200 active:scale-90",className)}
        {...rest}>
            {children}
        </button>
    )
}
export const CardSkeleton = ({
    className,
    children 
}:{
    className?:string,
    children?:React.ReactNode
}
) =>{
    return(
        <div className="min-h-40 md:min-h-60">{children}</div>
    )
}

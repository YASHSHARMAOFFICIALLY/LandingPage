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
    return <h3 className= {cn("text-lg  md:text-2xl  font-display font-medium",className)}>
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
    <div className= {cn("px-4 pb-6",className)}>
        {children}
    </div>
    )
}


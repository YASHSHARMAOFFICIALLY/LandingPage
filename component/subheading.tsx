import { cn } from "@/lib/utlis";
import React from "react";
export const SubHeading = ({children,className,as = 'p'}:{
    children:React.ReactNode,
    className? :string,
    as?:'h1'|'h2'|"p"
})=>{
    const Tag = as;
    return(
      <Tag className = {cn('text-base md:text-lg font-medium font-inter max-w-xl ',className)}>{children}</Tag>
    )
}
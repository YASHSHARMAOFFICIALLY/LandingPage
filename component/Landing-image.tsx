"use client"
import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utlis"
import {easeOut, motion} from "motion/react"
export const LandingImage = () =>{
    return(
        <div className="relative">
        
            <div className="absolute inset-x-0 h-full w-full mask-t-from-10%  z-50">
            </div>
            <div className="relative min-h-72 sm:min-80 md:min-h-100 lg:min-h-140  w-full pt-20 perspective-distant  translate-x-20">

            <motion.div 
            initial = {{
                opacity:0,  
                y:-100  
            }}
            animate = {{
                opacity:1,
                y:0,
            }}transition={{
                duration:0.5,
                ease:"easeOut",  
            }}
            className="perspective-[4000px] shadow-2xl"
            >
                    <Image 
                    src = "https://assets.aceternity.com/agenforce-demo-2.jpg"
                    alt = "Demo 1 for agentforce template"
                    height = {1080}
                    width = {1920}
                    className = {cn("absolute inset-0  rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl")}
                    style={{
                        transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
                    }}
                    >
                    </Image>
                  
            </motion.div>
            <motion.div 
            initial = {{
                opacity:0,
                y:-100,
            }}
            animate = {{
                opacity:1,
                y:0,
            }}transition={{
                duration:0.5,
                ease:"easeOut",
                delay:0.1
            }}
            className=" perspective-[4000px] translate-x-20 -translate-y-40 ">
                    <Image 
                    src = "https://assets.aceternity.com/screenshots/4.jpg"
                    alt = "Demo 1 for agentforce template"
                    height = {1080}
                    width = {1920}
                    className = {cn("absolute inset-0  border-4  border-neutral-200  rounded-lg mask-r-from-50% mask-b-from-50% shadow-xxl")}
                     style={{
                        transform:"rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"
                    }}
                    >
                    </Image>
            </motion.div>
                </div>
                </div>
    )
}


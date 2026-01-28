"use client"
import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utlis"
import {motion} from "motion/react"
export const LandingImage = () =>{
    return(
        <div className="relative min-h-140 w-full pt-20 perspective-distant ">
            <motion.div className="perspective-[4000px]">
                    <Image 
                    src = "https://assets.aceternity.com/agenforce-demo-2.jpg"
                    alt = "Demo 1 for agentforce template"
                    height = {1080}
                    width = {1920}
                    className = {cn("absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-2xl")}
                    style={{
                        transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
                    }}
                    >
                    </Image>
                  
            </motion.div>
            <motion.div className=" perspective-[4000px] translate-x-20 -translate-y-40">
                    <Image 
                    src = "https://assets.aceternity.com/screenshots/4.jpg"
                    alt = "Demo 1 for agentforce template"
                    height = {1080}
                    width = {1920}
                    className = {cn("absolute inset-0  border-4  border-neutral-200  rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl")}
                     style={{
                        transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"
                    }}
                    >
                    </Image>
            </motion.div>
                </div>
    )
}
"use client"
import { title } from "process";
import React from "react";
import {motion} from "motion/react"
import Image from "next/image";
export const LogoCloud = ()=>{
    const logos = [
        {
            title:"Open AI",
            src:'https://assets.aceternity.com/logos/openai.png'
        },{
            title:"Hello Patient",
            src:'https://assets.aceternity.com/logos/hello-patient.png'
        },{
            title:"Granola",
            src:'https://assets.aceternity.com/logos/granola.png'
        },{
            title:"character Ai",
            src:'https://assets.aceternity.com/logos/characterai.png'
        },{
            title:"meta",
            src:'https://assets.aceternity.com/logos/portola.png'
        },{
            title:"Oracle",
            src:'https://assets.aceternity.com/logos/oracle.png'
        }
    ]
    return (
        <div className="pb-10 md:pb-10">
            <h2 className="text-neutral-600 dark:text-neutral-600 text-center text-lg max-w-xl mx-auto mt-80 font-medium ">
                Trusted by modern operators across industries.<br/> {""}
               <span className="text-neutral-400">
                {" "} From pilot to scale without chaos</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto">

      
           {logos.map((logo,index)=> (
            <motion.div initial = {{
                y: -10,
                opacity:0,
                filter:"blur(10px)"
            }} 
            whileInView={{
                y:0,
                opacity:1,
                filter:"blur(0px)"
            }}
            transition={{
                duration:0.5,
                ease:"easeOut",
                delay:index*0.1,
            }}
                >
           <Image
            key = {logo.title }
           src = {logo.src}
           width = {100}
           height = {100}
            alt = {logo.title}
            className="size-20 object-contain mx-auto mt-10"
           />
           </motion.div>
        ))}
        </div>
        </div>  
    )
}
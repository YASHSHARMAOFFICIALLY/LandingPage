"use client"
import React, { useState } from "react";
import { Logoo } from "./logo";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Buttonn";
import {AnimatePresence, motion} from 'motion/react'
import { IconLayoutSidebar,IconX } from "@tabler/icons-react";


const navlink = [
        {
            title:'Feature',
            href:'/features'
        },
        {
            title:'Product',
            href:'/product'
        },
        {
            title:'Social',
            href:'/social'
        },{
            title:'Pricing',
            href:'/pricing',
        }
    ]
export const Navbar = ()=>{
    
    return (
        <div className=" w-full border-b  border-neutral-200 dark:border-neutral-800">
            <DesktopNavbar/>
            <MobileNavbar/>
            
        
        </div>
    )
}
export const MobileNavbar = () =>{
    const[open,setopen] = useState(false)
    return(
        <div className="flex md:hidden px-4 py-2 justify-between m">
            <Logoo/>
            <button onClick = {()=>setopen(!open)}>
                <IconLayoutSidebar className = "size-4" />
            </button>     
        <AnimatePresence>
        {open && (
             <motion.div 
             initial = {{opacity:0}}
             animate = {{
                opacity:1,
                backdropFilter:"blur(15px)",
                background:'transparent'
             }}
             exit = {{
                opacity:0,
                backdropFilter:"blur(0px)",
                background:'rgba(255,255,255,0.5)'
             }}
             transition={{
                duration:0.2
             }}
             className="fixed inset-0 h-full w-full bg-white/10 z-50 px-4 py-2  ">
              <div className="flex justify-between">
                <Logoo/>
               <button 
                className="p-2 text-neutral-800  absolute right-2 top-2 "
                onClick={() => setopen(false)}
            >
                <IconX className="size-6 " />
            </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl my-10">
                {navlink.map((items,index)=>{
                    return (
                    <motion.div
                    initial = {{
                        opacity:0,
                        x: -4,
                    }}
                    animate = {{
                        opacity:1,
                        x:0,
                    }}
                    transition={{
                        duration:0.5,
                        delay:index * 0.5,
                    }}
                    key = {index + items.title}
                    >
                         <Link
                        key = {index} 
                        href={items.href}
                        className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                            {items.title}
                        </Link>
                    </motion.div>
                    )
                         
                    
                })}
                <div className="flex items-center justify-end gap-4">
                    <Link 
                    href = "/login"
                    className="text-sm px-4 inline-block py02 rounded-md text-neutral-600 dark:text-neutral-400 font-medium">
                        Login 
                    </Link>
                    <Button>SignUp </Button>
                </div>
            </div>
        </motion.div>
        )}
        </AnimatePresence>
        </div>
    )
}
export const DesktopNavbar = () => {
    return(
        <Container className="py-4  items-center justify-between hidden lg:flex">
               <Logoo></Logoo>
                <div className="flex items-center gap-4">
                    {navlink.map((item,index)=>{
                        return(
                            <Link key = {index} href = {item.href}
                            className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                                {item.title}
                                </Link>
                        )
                    })}
                </div>
                <div className="flex items-center gap-4">
                    <Link href = "/login" className="text-sm px-4 py-2 rounded-md  
                     text-neutral-600 dark:text-neutral-400 font-medium">
                    Login
                    </Link>
                    <Button >
                       Signup 
                    </Button>

                </div>
            </Container>

    )
}
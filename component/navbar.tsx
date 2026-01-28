
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Buttonn";
export const Navbar = ()=>{
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
    return (
        <div className=" w-full border-b  border-neutral-200 dark:border-neutral-800">
            <Container className="py-4 flex items-center justify-between">
               <Logo></Logo>
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
        
        </div>
    )
}

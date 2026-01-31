import { Hero } from "@/component/hero";
import { ModeToggle } from "@/component/mode-togle";
import { LogoCloud } from "@/component/logo-cloud";
import {Features}  from "@/component/features/Index"
export default function Home(){
  return(
    <div className="min-h-screen  ">
      <ModeToggle/>
    <Hero>
    
    </Hero>
      <LogoCloud ></LogoCloud>
      <Features></Features>
    
   
    </div>
  )
}

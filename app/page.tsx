import { Hero } from "@/component/hero";
import { ModeToggle } from "@/component/mode-togle";
import { LogoCloud } from "@/component/logo-cloud";
export default function Home(){
  return(
    <div className="min-h-screen  ">
      <ModeToggle/>
    <Hero>
    
    </Hero>
      <LogoCloud ></LogoCloud>
   
    </div>
  )
}

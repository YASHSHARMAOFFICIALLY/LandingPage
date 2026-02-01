import { Container } from "../Container";
import React from "react";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardConetent, CardTitle,CardCTA } from "./card";

import { IconPlus } from '@tabler/icons-react';

export  const Features = () => {
    return (
   <Container className="py-10 md:py-20 lg:py-32">
    <div className="flex  items-baseline-last justify-between gap-10 lg:gap-30">
         <Heading>
            Built for Fast Moving <br/> Teams That Need Control 
        </Heading>
        <SubHeading>
            Agents work inside your existing tools with built-in approval,brand and policy guardrails, and full traceability.Every actionb is auditable,every outcome accountable
        </SubHeading>
        </div>

    <div className="grid grid:cols-1 md:grid-cols-3 gap-4 my-10 md:my-20 ">           
        <Card className="rounded-tl-3xl rounded-bl-3xl">
            <CardConetent className="flex items-center justify-between gap-4 p-0"> 
                 <CardTitle>Prebuilt Agents,Tuned to Your Workflows</CardTitle>
                 <CardCTA>
                     <IconPlus/>
                 </CardCTA>
            </CardConetent>
        </Card>

        <Card className="rounded-tl-3xl rounded-bl-3xl">
            <CardConetent className="flex items-center justify-between gap-4 p-0">
                 <CardTitle>Automate Handoffs,Reduce Ops Friction</CardTitle>
                 <CardCTA>
                     <IconPlus/>
                 </CardCTA>
            </CardConetent>  
        </Card>


        <Card className="rounded-tl-3xl rounded-bl-3xl overflow-hidden max-w-full">
            <CardConetent className="flex items-center justify-between gap-4 p-0">
                <CardTitle className="leading-tight flex-1">Approvals,Guardrails,and Full Auditablity</CardTitle>
                <CardCTA className="shrink-0">
                     <IconPlus/>
                 </CardCTA>
            </CardConetent>
            
        </Card>

        
    
    </div>
   </Container>
    )
    
}

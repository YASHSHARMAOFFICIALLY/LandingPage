import { Container } from "../Container";
import React from "react";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardConetent, CardTitle } from "./card";
export  const Features = () => {
    return (
   <Container className="py-10 md:py-20 lg:py-32">
    <div className="flex flex-col md:flex-row items-baseline-last justify-between gap-10 lg:gap-30">
         <Heading>
            Built for Fast Moving <br/> Teams That Need Control 
        </Heading>
        <SubHeading>
            Agents work inside your existing tools with built-in approval,brand and policy guardrails, and full traceability.Every actionb is auditable,every outcome accountable
        </SubHeading>
        </div>

    <div className="grid grid:cols-1 md:grid-cols-3 gap-4">           
        <Card>
            <CardConetent>
                 <CardTitle>Prebuilt Agents,Tuned to Your Workflows</CardTitle>
            </CardConetent>
        </Card>

        <Card>
            <CardConetent>
                 <CardTitle>Automate Handoffs,Reduce Ops Friction</CardTitle>
            </CardConetent>  
        </Card>


        <Card>
            <CardConetent>
                <CardTitle>Approvals,Guardrails,and Full Auditablity</CardTitle>
            </CardConetent>
            
        </Card>

        
    
    </div>
   </Container>
    )
    
}

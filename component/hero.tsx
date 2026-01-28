import React from "react";
import { Container } from "./Container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./Buttonn";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utlis";
import { LandingImage } from "./Landing-image";
export const Hero = () => {
    return(
        <div className="pt-10 md:pt-20 lg:pt-32">
            <Container>
                <Heading as= "h1">
                    Agents that do the work <br/> Approval that keep you safe
                </Heading>
                <SubHeading className="py-8">
                    Deploy Al agents that plan,act through tool, and report outcome-without changing how your teams work 
                </SubHeading>
                <div className="flex items-center gap-6">
                    <Button className="shadow-brand">Start your free trial</Button>
                    <Button asChild variant="outline">
                        <Link href = "#">View role based demos</Link>
                    </Button>
                </div>
                <LandingImage></LandingImage>
            </Container>
        </div>
    )
}
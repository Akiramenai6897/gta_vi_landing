import React from 'react';
import { useGSAP } from "@gsap/react"
import gsap from 'gsap';

const Outro = () => {
    useGSAP(() => {
        gsap.set(".final-message", {
            opacity: 0,
            marginTop: '-100vh'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".final-message",
                start: "top 30%",
                end: 'top 10%',
                scrub: true
            }
        })

        tl
            .to(".final-content", {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut'
            })
            .to(".final-message", {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            })
    })

    return (
        <section className={"final-message"}>
            <div className={"h-full col-center gap-10"}>
                <img
                    src={"/images/logo.webp"}
                    alt={"coming-soon logo"}
                    className={"md:w-72 w-52"}
                />

                <div>
                    <h3 className={"gradient-title"}>
                        Coming <br/> May 26 <br/> 2026
                    </h3>
                </div>

                <div className={"flex-center gap-10"}>
                    <img
                        src={"/images/ps-logo.svg"}
                        className={"md:w-32 w-20"}
                        alt={"playstation logo"}
                    />
                    <img
                        src={"/images/x-logo.svg"}
                        className={"md:w-52 w-40"}
                        alt={"xbox logo"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Outro;

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';

const SecondVideo = () => {
    const videoRef = useRef(null)

    useGSAP(() => {
        gsap.set(".lucia", {
            opacity: 0,
            marginTop: '-60vh'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".lucia",
                start: "top top",
                end: "bottom top",
                scrub: 2,
                pin: true
            }
        })

        tl.to(".lucia", {
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut'
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                duration: 3,
                ease: 'power1.inOut'
            }, '<')
        }
    })

    return (
        <section className={"lucia"}>
            <div className={"h-dvh"}>
                <video
                    ref={videoRef}
                    src={"/videos/output2.mp4"}
                    muted
                    playsInline
                    preload={"auto"}
                    className={"second-vd size-full object-cover"}
                    style={{
                        objectPosition: '10% 0%'
                    }}
                />
            </div>
        </section>
    );
};

export default SecondVideo;

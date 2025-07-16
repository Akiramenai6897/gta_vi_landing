import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
        </main>
    );
};

export default app;

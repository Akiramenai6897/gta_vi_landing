import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from "./sections/Hero.jsx";
import Navbar from "./sections/Navbar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import Jason from "./sections/Jason.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import FinalVideo from "./sections/FinalVideo.jsx";
import Outro from "./sections/Outro.jsx";

gsap.registerPlugin(ScrollTrigger);

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
            <Lucia />
            <PostCard />
            <FinalVideo />
            <Outro />
        </main>
    );
};

export default app;

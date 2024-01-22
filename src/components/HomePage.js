import React from "react";
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import Timeline from './Timeline';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Timeline />

            <Contact />
        </div>
    )
}

export default HomePage
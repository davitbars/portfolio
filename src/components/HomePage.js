import React from "react";
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default HomePage
import React from "react";
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import WorkTimeline from "./WorkTimeline";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <WorkTimeline />
            <Contact />
        </div>
    )
}

export default HomePage
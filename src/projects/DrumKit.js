import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import drumkitpic from "./projectPics/drumkit.png";

const DrumKit = () => {
    const projectData = {
        title: "Drum Kit",
        projLink: "https://davitbars.github.io/DrumKit/",
        gitLink: "https://github.com/davitbars/DrumKit",
        photo: drumkitpic,
        contributors: "Davit Barseghyan",
        description: `<h2>Introduction</h2>

        <p>
            The JavaScript Drum Kit App is a simple yet engaging project that explores the fundamentals of event listeners and audio playback. This static webpage features an interactive drum kit, allowing users to play drum sounds by clicking corresponding keys on their keyboard.
        </p>
    
        <h2>Technical Learning</h2>
    
        <p>
            The project served as a valuable learning experience in handling keyboard events through event listeners in JavaScript. Each key press triggers a specific drum sound, creating an interactive and dynamic user experience. This project played a crucial role in solidifying my understanding of event-driven programming on the web.
        </p>
    
        <h2>Functionalities Implemented</h2>
    
        <p>
            The drum kit includes various drum sounds, and each key corresponds to a specific sound. Upon key press, the associated drum sound is played, accompanied by a visual animation. The simplicity of the app allowed for a focused exploration of audio playback, key events, and CSS animations.
        </p>
    
        <h2>Key Features</h2>
    
        <ul>
            <li>Dynamic audio playback on key press</li>
            <li>Distinct animations for different drum elements</li>
            <li>Responsive and intuitive design for a seamless user experience</li>
        </ul>
    
        <h2>Conclusion</h2>
    
        <p>
            This Drum Kit App, while straightforward in its functionality, played a crucial role in my early exploration of web development. It provided hands-on experience in handling user interactions, audio playback, and the integration of JavaScript with HTML and CSS. The project's simplicity belies its significance in laying the groundwork for more complex applications in the future.
        </p>
    `
    }
    return <ProjectTemplate {...projectData} />;
};

export default DrumKit;
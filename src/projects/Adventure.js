import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import adventurePic from "./projectPics/adventure.png";

const Adventure = () => {
    const projectData = {
        title: "Adventure",
        projLink: "https://davitbars.github.io/AdventureSite/",
        gitLink: "https://github.com/davitbars/AdventureSite",
        photo: adventurePic,
        contributors: "Davit Barseghyan",
        description: `<h2>Introduction</h2>

        <p>
            As one of my earlier web development projects, I crafted a basic yet functional website for a travel company that specializes in thrilling adventures. This project served as a fundamental learning experience, providing insights into the core concepts of web development using HTML, CSS, and Vanilla JavaScript.
        </p>
    
        <h2>Technical Learning</h2>
    
        <p>
            The project delved into the essentials of creating a responsive webpage, ensuring a seamless experience across various devices. This hands-on endeavor allowed me to grasp the principles of mobile-responsive design, laying a solid foundation for future projects.
        </p>
    
        <p>
            One of the key takeaways from this project was the implementation of JavaScript scripts to enhance the website's functionality. I developed custom scripts to create engaging features, such as a dynamic carousel that showcased the exciting destinations and activities offered by the travel company.
        </p>
    
        <h2>Functionalities Implemented</h2>
    
        <p>
            The website not only served as a visual representation of the travel company's offerings but also incorporated interactive elements. The carousel, crafted with Vanilla JavaScript, dynamically displayed captivating images and information, providing users with an immersive glimpse into the adventures awaiting them.
        </p>
    
        <h2>Conclusion</h2>
    
        <p>
            This early project played a pivotal role in my journey as a web developer, offering hands-on experience in the basics of HTML, CSS, and JavaScript. The lessons learned from this endeavor laid the groundwork for my understanding of responsive design, scripting functionalities, and the importance of creating engaging user experiences on the web.
        </p>`
    }
    return <ProjectTemplate {...projectData} />;
};

export default Adventure;
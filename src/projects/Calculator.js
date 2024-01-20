import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import calculatorpic from "./projectPics/calculator.png";

const Calculator = () => {
    const projectData = {
        title: "Calculator App",
        projLink: "https://davitbars.github.io/calculator/",
        gitLink: "https://github.com/davitbars/calculator",
        photo: calculatorpic,
        contributors: "Davit Barseghyan",
        description: `    <h2>Introduction</h2>

        <p>
            The Vanilla JavaScript Calculator App stands as a testament to my early explorations in web development, showcasing a fundamental yet functional approach to creating interactive user interfaces. This project is a basic calculator with support for addition, subtraction, multiplication, and division, following the principles of order of operations.
        </p>
    
        <h2>Technical Learning</h2>
    
        <p>
            This calculator project provided a foundational understanding of how JavaScript can be leveraged to build dynamic and responsive applications. The use of HTML for structuring the calculator, CSS for styling, and Vanilla JavaScript for implementing the calculator's logic collectively contributed to my comprehension of front-end development concepts.
        </p>
    
        <h2>Functionalities Implemented</h2>
    
        <p>
            The calculator supports standard arithmetic operations, allowing users to perform calculations in accordance with the order of operations. The interface provides a user-friendly experience, with responsive buttons and dynamic display of input and results. The emphasis on simplicity in design allowed for a concentrated focus on the core functionalities of the calculator.
        </p>
    
        <h2>Key Features</h2>
    
        <ul>
            <li>Basic arithmetic operations: addition, subtraction, multiplication, and division</li>
            <li>Order of operations support for accurate calculations</li>
            <li>Clean and intuitive user interface</li>
        </ul>
    
        <h2>Conclusion</h2>
    
        <p>
            This early Calculator App project reflects my initial steps into web development, emphasizing functionality over complexity. It served as a stepping stone for understanding the interplay between HTML, CSS, and JavaScript in creating interactive web applications. While straightforward, the project laid the groundwork for more intricate applications in my ongoing journey as a web developer.
        </p>`
    }
    return <ProjectTemplate {...projectData} />;
};

export default Calculator;
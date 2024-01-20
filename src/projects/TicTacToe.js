import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import TicTacToePic from "./projectPics/tictactoe.png";

const TicTacToe = () => {
    const projectData = {
        title: "Tic Tac Toe",
        projLink: "https://davitbars.github.io/TicTacToe/",
        gitLink: "https://github.com/davitbars/TicTacToe",
        photo: TicTacToePic,
        contributors: "Davit Barseghyan",
        description: `
        <h2>Introduction</h2>

    <p>Embarking on the journey of web development, I embarked on a fascinating project - a Tic Tac Toe game built using HTML, CSS, and JavaScript. This venture was not merely a recreation of a classic game but a foray into the realm of artificial intelligence, with the implementation of the minimax algorithm. The project encompasses three distinct game modes: player versus player, player versus a randomly generated CPU, and player versus a smart CPU driven by the formidable minimax algorithm.</p>

    <h2>Learning and Implementing Minimax Algorithm</h2>

    <p>As a passionate learner in the early stages of my programming career, the decision to delve into the complexities of the minimax algorithm was both ambitious and rewarding. The minimax algorithm, a cornerstone of artificial intelligence in gaming, is a recursive algorithm used for decision-making in two-player zero-sum games, such as Tic Tac Toe. Its objective is to find the optimal move for a player, assuming that the opponent is also playing optimally.</p>

    <h3>Technical Aspects of Minimax</h3>

    <p>The minimax algorithm involves exhaustive exploration of the game tree, evaluating each possible move and its subsequent outcomes. Each node in the tree represents a game state, and the algorithm recursively evaluates the best possible moves for both players, ultimately determining the optimal move for the current player. This involves assigning scores to different game states, with positive scores indicating favorable outcomes and negative scores representing unfavorable situations.</p>

    <h3>Application in Tic Tac Toe</h3>

    <p>In the context of Tic Tac Toe, the minimax algorithm explores all possible moves, creating a game tree that extends to the end of the game. It assigns scores to each terminal state (win, lose, or draw) and propagates these scores back up the tree, enabling the algorithm to make decisions that lead to the most favorable outcome for the player.</p>

    <h2>Game Modes and Implementation</h2>

    <p>The Tic Tac Toe project incorporates three game modes, each offering a unique gaming experience:</p>

    <h3>Player versus Player</h3>

    <p>In this mode, two human players take turns making moves on the board, engaging in a classic face-off to achieve victory.</p>

    <h3>Player versus Random CPU</h3>

    <p>The second mode introduces an element of unpredictability, with the player facing a randomly generating CPU opponent. This mode serves as an entertaining challenge where strategic moves collide with the randomness of the CPU's choices.</p>

    <h3>Player versus Smart CPU</h3>

    <p>The most intriguing mode involves a smart CPU powered by the minimax algorithm. This CPU is not easily outwitted, making strategic decisions based on its analysis of the game tree. Players engaging in this mode will find themselves up against a formidable opponent that strives for optimal gameplay.</p>

    <h2>Conclusion</h2>

    <p>In conclusion, the Tic Tac Toe project serves as a testament to my early exploration of artificial intelligence in gaming. The implementation of the minimax algorithm has broadened my understanding of decision-making processes in games and honed my programming skills. This project, conceived for the sheer joy of learning and experimentation, reflects the dedication to pushing boundaries and creating engaging experiences in the early days of my programming journey.</p>
`
    };

    return <ProjectTemplate {...projectData} />;

}

export default TicTacToe;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import "./App.css";
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

// Project Components
import TicTacToe from './projects/TicTacToe';
import Weather from './projects/Weather';
import ULyfe from './projects/ULyfe';
import Adventure from './projects/Adventure';
import DrumKit from './projects/DrumKit';
import Calculator from './projects/Calculator';
import FacialClassifier from './projects/FacialClassifier';
import LinearRegression from './projects/LinearRegression';


function App() {
  return (
    <Router basename='/'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/:category' element={<ProjectsPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/ulyfe' element={<ULyfe />} />
        <Route path='/adventure' element={<Adventure />} />
        <Route path='/drumkit' element={<DrumKit />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/facial-expression-classifier' element={<FacialClassifier />} />
        <Route path='/linear-regression' element={<LinearRegression />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

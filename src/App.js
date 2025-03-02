import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';

const App = () => {
    return (
        <>
            <Sidebar />
            <main>
                <Home />
                <About />
                <Resume />
            </main>
        </>
    );
};

export default App;

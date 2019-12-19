import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <Navbar />
                <Facebook/>
                <Content/>
            </div>
        );
    }
}

export default App;

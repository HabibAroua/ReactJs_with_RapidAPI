import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Content from './components/table/Content';

class App extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <Facebook/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import List from './components/table1/list'

class App extends React.Component
{
    render()
    {
        //<Facebook/>
        return (
            <div className="App">
                <List/>
            </div>
        );
    }
}

export default App;

/*
import Content from './components/table/Content';

 */

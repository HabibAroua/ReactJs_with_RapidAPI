import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component
{
    click()
    {
        const axios = require("axios");

        axios({
            "method":"GET",
            "url":"https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/",
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"kanjialive-api.p.rapidapi.com",
                "x-rapidapi-key":"5317af96eamshf826fb62886a64cp1d1852jsn1e53c19dca56"
            },"params":{
                "ks":"16"
            }
        })
            .then((response)=>{
                //console.log(response.data[1].kanji.character)
                console.log(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    render()
    {
        return (
            <div className="App">
                <Navbar />
                <Facebook/>
                <button onClick={this.click}>Click</button>
                <Content/>
            </div>
        );
    }
}

export default App;

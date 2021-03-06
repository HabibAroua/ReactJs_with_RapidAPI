import React from 'react';
import Element from "./Element";
import  Header from "./header";

class Content extends React.Component
{

    state =
    {
        lists : []
    }

    componentDidMount()
    {
        const axios = require("axios");
        axios
        (
            {
                "method":"GET",
                "url":"https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/",
                "headers":
                {
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"kanjialive-api.p.rapidapi.com",
                    "x-rapidapi-key":"5317af96eamshf826fb62886a64cp1d1852jsn1e53c19dca56"
                },
                "params":
                {
                    "ks":"16"
                }
            }
        )
        .then((response)=>
        {
            this.setState
            (
                {
                    lists: response.data
                }
            )
        })
        .catch((error)=>
        {
            console.log(error)
        })
    }

    render()
    {
        const {lists} = this.state
        //var i = 0;
        const kanjiList = lists.map((list,index)=>
        {
            //i++;
            //console.log("index "+i)
            console.log(list.kanji.character)
            return(
                <Element nb={index} l={list}/>
            )
        })
        return (
            <div>
                <table  className="table table-bordered table-dark">
                    <Header/>
                    <tbody>
                        {kanjiList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Content;

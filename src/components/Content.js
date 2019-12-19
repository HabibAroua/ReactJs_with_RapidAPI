import React from 'react';
import Element from "./Element";

class Content extends React.Component
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
            <table className="table table-bordered table-dark">
                <thead>
                <tr>
                    <th scope="col" rowSpan="2">Nd</th>
                    <th scope="col" colSpan="2">Kanji</th>
                    <th scope="col" colSpan="3">Radical</th>
                </tr>
                <tr>
                    <th>Character</th>
                    <th>Stroke</th>
                    <th>Character</th>
                    <th>Stroke</th>
                    <th>Order</th>
                </tr>
                </thead>
                <tbody>
                    <Element/>
                    <Element/>
                    <Element/>
                </tbody>
            </table>
        )
    }
}

export default Content;

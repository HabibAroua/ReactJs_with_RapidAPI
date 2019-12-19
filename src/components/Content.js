import React from 'react';
import Element from "./Element";

class Content extends React.Component
{
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

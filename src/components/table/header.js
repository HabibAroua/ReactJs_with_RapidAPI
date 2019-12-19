import React from "react";

function Header()
{
    return (
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
    )
}

export default Header;

import React from 'react';

function Tbody(props)
{
    let fix=false;
    if(props.p.fixed ==true)
    {
        fix = "Yes";
    }
    else
    {
        fix="No";
    }
    return(
        <tr>
            <td>{props.p.date}</td>
            <td>{props.p.localName}</td>
            <td>{props.p.name}</td>
            <td>{props.p.countryCode}</td>
            <td>{fix}</td>
        </tr>
    );
}
export default Tbody;

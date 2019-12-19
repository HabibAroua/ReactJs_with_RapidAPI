import React from 'react';

function Element(props)
{
    return(
        <tr>
            <th scope="row">{props.nb}</th>
            <td>{props.l.kanji.character}</td>
            <td>{props.l.kanji.stroke}</td>
            <td>{props.l.radical.character}</td>
            <td>{props.l.radical.stroke}</td>
            <td>{props.l.radical.order}</td>
        </tr>
    );
}
export default Element;

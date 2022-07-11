import React from "react";

export function TodoItem(props) {

    return (
        <li className="list-group-item">
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
        </li>
    )
}
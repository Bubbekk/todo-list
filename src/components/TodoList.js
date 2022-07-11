import React, { Fragment, useRef, useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

export function TodoList() {


    const [tareas, setTareas] = useState([]);

    const tarea = useRef();


    const KEY = "elemento";


    useEffect (() => {
        const tareasStorage = JSON.parse(localStorage.getItem(KEY));
        console.log(tareasStorage);
            setTareas((tareasAnteriores) => {
                return[...tareasAnteriores, ...tareasStorage];
        });
    }, [] );


    useEffect( () => {
        localStorage.setItem(KEY, JSON.stringify(tareas));
    }, [tareas] );





//----------------------------------------------------------------------------------------------
    const [titulos, setTitulos] = useState([]);

    const titulo = useRef();

    useEffect (() => {
        const titulosStorage = JSON.parse(localStorage.getItem(KEY));
        console.log(titulosStorage);
            setTitulos((titulosAnteriores) => {
                return[...titulosAnteriores, ...titulosStorage];
        });
    }, [] );


    useEffect( () => {
        localStorage.setItem(KEY, JSON.stringify(titulos));
    }, [titulos] );

    function documentos() {
        const valor_titulo = titulo.current.value;
        const valor_tarea = tarea.current.value;
        if (valor_titulo ===  '' && valor_tarea === '') return;
        console.log(uuid());
        
        const nuevo_documento = {
            id: uuid(),
            valorTitulos: valor_titulo,
            valorTareas: valor_tarea,
        }

        setTitulos( (titulosAnteriores) => {
            return [...titulosAnteriores, nuevo_documento];
        });
        setTareas ((tareasAnteriores) => {
            return [...tareasAnteriores, nuevo_documento]
        })
    }

    function checkbox() {
        var check1 = document.getElementById("flexCheckDefault").checked;
    }


    function validarCheckbox() {
        var resul_val_checkbox = checkbox();
        return (resul_val_checkbox)
    }


    return (
        <Fragment>
            <div className="container m-2">
                <h2 className="titulo">Lista de tareas por hacer</h2>
                
                <div className="input-group mt-4 mb-2">
                    <input ref={titulo} type="text" className="form-control m-2" placeholder="Titulo"/>
                    <input ref={tarea} type="text" className="form-control m-2" placeholder="Descripcion"/>
                    <input class="form-check-input m-2" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label m-1" for="flexCheckDefault">Importante!</label>
                    <button onClick={documentos} className="btn btn-dark ms-4">AGREGAR</button>
                </div>

                <ul className="list-group">
                    {titulos.map((item) => <TodoItem key={item.id} titulo={item.valorTitulos} descripcion={item.valorTareas}></TodoItem>)}
                </ul>
            </div>
        </Fragment>
    );
}
import React from 'react';
import { GoFileSubmodule, GoPerson, GoFileDirectory } from 'react-icons/go';
import './styles.css';
import {Link} from "react-router-dom";


export default function Menu() {

    function hide_itens(itens){
        itens.forEach(item => {
            item.style.display = "none";
            item.style.animation = "hideitem 1s linear";
            


        });
      }
    function show_itens(itens){
        itens.forEach(item => {
            item.style.animation = "showitem 1s linear";
            item.style.display = '';
        });
    }
    function View(Type){
        const itens = document.querySelectorAll("."+Type);
        const all = document.querySelectorAll(".item-project");
        switch(Type){
            case "business":
                hide_itens(all);
                setTimeout(() =>  show_itens(itens), 5);
            break;
            case "open_source":
            hide_itens(all);
            setTimeout(() =>  show_itens(itens), 5);
            break;
            case "all":
                hide_itens(all);
                setTimeout(() =>  show_itens(all), 5);
            break;
        }
 
    }
    return (
        <header className="menu">
            <ul>
            <li onClick={() =>View('all')}>
                
                    <GoFileSubmodule size={30} />
            Todos
            </li>
            <li onClick={() =>View('business')}>
                    <GoFileDirectory size={30} />
            Mercado
            </li>
            <li onClick={() =>View('open_source')}>

                    <GoFileDirectory size={30} />
            OpenSource
            </li>
                
            </ul>
        </header>
    );
}
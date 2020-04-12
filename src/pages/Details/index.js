import React from 'react';
import { Link, useParams } from "react-router-dom";
import Projects from "../Projects.json";
import './styles.css';
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Details() {
    let { slug } = useParams();
    function isBigEnough(value) {
        return value.slug == slug;
    }
    const Work = Projects.filter(isBigEnough)[0];
    const item = Work;
    console.log(Work);

    return (
        <section className="details ">
            <div className="goBack">
                <Link to="/">
                    <IoMdArrowRoundBack /> Voltar
      </Link>
            </div>
   
            <div className="project-content custom-scroll">
            
                <div className="info-project">
                    <img src={item.logo} />
                    <div className="header-info">
                        <h1>{item.name}</h1>
                        <ul className="techs">
                            <li>Teste</li>
                            <li>Teste</li>
                            <li>Teste</li>
                            <li>Teste</li>
                            <li>Teste</li>
                            <li>Teste</li>
                        </ul>
                    </div>
                    <div className="links">
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                    <a href="#">Teste</a>
                            </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit libero. In elementum tellus eget convallis venenatis. Morbi ut vestibulum lacus, at pretium enim. Fusce a lorem lobortis quam rhoncus hendrerit. Pellentesque ornare dolor urna, ac faucibus massa sollicitudin posuere. Duis ligula ligula, laoreet quis massa sit amet, consectetur tristique purus. Donec hendrerit ex at dignissim facilisis. Morbi et dignissim enim, nec semper leo.
    </p>

            </div>
        </section>
    )
}
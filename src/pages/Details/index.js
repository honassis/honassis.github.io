import React from 'react';
import { Link, useParams } from "react-router-dom";
import Projects from "../Projects.json";
import './styles.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import GooglePlay from '../../assets/playstore.svg';
import AppStore from '../../assets/appstore.svg';
import GitHub from '../../assets/github.svg';
import Expo from '../../assets/expo.svg';
import Internet from '../../assets/internet.svg';
import Interweave from 'interweave';

export default function Details() {
    let { slug } = useParams();
    function searchItem(value) {
        return value.slug == slug;
    }
    const item = Projects.filter(searchItem)[0];
    const otherlinks = item.links==null ? [] : item.links;
    function LinksApp(){
        var Links = "";
        Links += item.playstore!=null ? `<a href="${item.playstore}" target="_blank">
        <img src="${GooglePlay}"/>
        Abrir Playstore</a>` : ``; 
        Links += item.appstore!=null ? `<a href="${item.appstore}" target="_blank">
        <img src="${AppStore}"/>
        Abrir AppStore</a>` : ``; 
        Links += item.github!=null ? `<a href="${item.github}" target="_blank">
        <img src="${GitHub}"/>
        Abrir GitHub</a>` : ``;  
        Links += item.expo!=null ? `<a href="${item.expo}" target="_blank">
        <img src="${Expo}"/>
        Abrir Expo</a>` : ``; 
        Links += item.preview!=null ? `<a href="${item.preview}" target="_blank">
        <img src="${Internet}"/>
        Abrir Website</a>` : ``; 
        return (
            <Interweave content={Links} />
        );
    }
  
   

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
                        {item.techs.map(tech => (
                            <li>
                            {tech}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="links">
                            <LinksApp/>
                    </div>
                </div>
                <p>
                    {item.description}
                   </p>
    {otherlinks.map(link => (
                           <a className="other-links" href={link[1]} target="_blank">
                            <h2>
                               {link[0]}
                            </h2>
                           </a>
                            
                        ))}
            </div>
        </section>
    )
}
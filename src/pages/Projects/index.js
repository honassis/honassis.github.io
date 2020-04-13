import React from "react";
import Projects from "../Projects.json";
import './styles.css';
import {Link} from "react-router-dom";
export default function Main() {
  
return ( <section className="projects custom-scroll">
{Projects.map(Project => (
  <span>
  <Link to={'Details/'+Project.slug}>
      <div className="img"
      style={{
        backgroundImage: "url(" + Project.logo + ")"
      }}
    ></div>
      <h1>{Project.name}</h1>
  </Link>
 
  </span>
))}
</section>)
}

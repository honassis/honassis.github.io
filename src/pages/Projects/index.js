import React from "react";
import Projects from "../Projects.json";
import './styles.css';
import {Link} from "react-router-dom";
export default function Main() {
  
return ( <section className="projects custom-scroll">
{Projects.map(Project => (
  <span>
  <Link to={'Details/'+Project.slug}
      className="img"
      style={{
        backgroundImage: "url(" + Project.logo + ")"
      }}
    >
  </Link>
  </span>
))}
</section>)
}

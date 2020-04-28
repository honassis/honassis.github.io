import React from "react";
import Projects from "../Projects.json";
import './styles.css';
import { Link } from "react-router-dom";

 
export default function MyProjects() {
  
  return (
    <section className="projects grid custom-scroll">
      {Projects.map(Project => (
        <span className={"item-project "+Project.type}>
          <Link to={'/' + Project.slug}>
            <div className="img"
              style={{
                backgroundImage: "url(" + Project.logo + ")"
              }}
            ></div>
            <h1>{Project.name}</h1>
          </Link>
        </span>
      ))}
    </section>
  )
  
}

import React from 'react';
import {
    FaGithub,
    FaInstagram,
    FaWhatsapp,
    FaLinkedin
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";
  import profileImg from "../../assets/profile.jpg";
export default function Routes(){
    return (
            <section className="profile">
              <img src={profileImg} />
              <h2>Honassis Lopes</h2>
              <h3>Desenvolvedor FullStack</h3>
              <div className="socials">
              <a href="https://www.instagram.com/hopz.js" target="_blank">
              <FaInstagram size={20} color="#e30c57" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5585985377813&text=Ol%C3%A1%20Honassis%2C%20vi%20seu%20portif%C3%B3lio%20no%20github" target="_blank">
              <FaWhatsapp size={20} color="#1ea72c" />
            </a>
            <a href="https://github.com/honassis" target="_blank">
              <FaGithub size={20} color="#000000" />
            </a>
            <a href="mailto:honassislopes@gmail.com" target="_blank">
              <MdEmail size={20} color="#923f3f" />
            </a>
            <a href="https://www.linkedin.com/in/honassis/" target="_blank">
              <FaLinkedin size={20} color="#0077b5" />
            </a>
              </div>
              <p className="techs">
            Entre em contato comigo seja por trabalho, freela, dúvidas, parcerias, amo progamar e quero seguir com isso na minha vida!
            </p>  
            </section>
           
      );
}
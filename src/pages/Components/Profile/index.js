import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profileImg from "../../../assets/profile.jpg";
export default function Profile() {
  return (
    <section className="profile">
      <img src={profileImg} alt="Honassis Lopes" />
      <h1>Honassis Lopes</h1>
      <h2>Desenvolvedor FullStack</h2>
      <h3>Entre em contato com alguma rede abaixo</h3>
      <div className="socials">
        <a href="https://www.instagram.com/honassisl" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} color="#e30c57" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5585985377813&text=Ol%C3%A1%20Honassis%2C%20vi%20seu%20portif%C3%B3lio%20no%20github" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={20} color="#1ea72c" />
        </a>
        <a href="https://github.com/honassis" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} color="#000000" />
        </a>
        <a href="mailto:honassislopes@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail size={20} color="#923f3f" />
        </a>
        <a href="https://www.linkedin.com/in/honassis/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} color="#0077b5" />
        </a>
      </div>
     
    </section>

  );
}
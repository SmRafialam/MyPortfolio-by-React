import React from 'react'
import './about.css'
import ME from '../../assets/me4-about.jpg'
import { TbAwardFilled } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAwardFilled className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article> 

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> 

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article> 
          </div>

          <p>
            I’m looking to collaborate on Communicate openly, Open communication with team members and senior leaders has a profound impact on breaking down information silos between developers and operations teams, Select the right tools. ... Write comprehensive documentation. ... Provide fast feedback,Lead effectively.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
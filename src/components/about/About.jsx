import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p style={{textAlign:"justified"}}>
          I am passionate about leveraging technology to solve complex problems and create innovative solutions. With experience in designing and developing software systems for various industries, I have honed my skills in full-stack development, problem-solving, and project management.
          <br />
          If you're interested in learning more about my experience and how I can help you achieve your goals, please feel free to reach out.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section >
  )
}

export default About
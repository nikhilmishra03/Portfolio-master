import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Netflix Movies Gpt- Movie Suggesting system using OpenAI API ',
    github: 'https://github.com/nikhilmishra03/netflix-gpt-main',
  },
  {
    id: 2,
    image: IMG2,
    title: 'DALLE - AI Image Generation App Made Using OpenAi API',
    github: 'https://github.com/nikhilmishra03/DALLE-master',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Doctor Website - Site where appointments can be made ' , 
    github: 'https://github.com/nikhilmishra03/Doctor-master',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Landing Page - A basic landing page using React Js',
    github: 'https://github.com/nikhilmishra03/Landing-Page',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Expense Tracker App - App provides list and summary in form of graph',
    github: 'https://github.com/nikhilmishra03/assignment3_expensetrack',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Todo List app - App provides your todos in list for a day ',
    github: 'https://github.com/nikhilmishra03/assignment1_todo',
  },
 

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
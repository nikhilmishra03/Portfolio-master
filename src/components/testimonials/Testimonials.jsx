import React from 'react'
import "./testimonials.css"
import Img1 from "../../assets/testimonial1.jpg"
import Img2 from "../../assets/testimonial2.jpg"
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Img1,
    name: 'Anant Kumar (Founder and CEO @ Bhoomi AI)',
    review: `I had the pleasure of working with Nikhil Mishra on the creation and deployment of Bhoomi AI's company website. Nikhil and his team did an outstanding job, from initial development to seamless deployment. Their technical expertise and dedication were evident throughout the project. He played a pivotal role in ensuring the website's success, and I have the utmost confidence in recommending him. I look forward to the opportunity to work with Nikhil and his team again on future projects.`
  },
  {
    avatar: Img2,
    name: 'Harsh Marolia (SDE @ MetaStart)',
    review: `Nikhil Mishra is the type of person who comes to mind when you think about a problem. I have seen him on the web recently, and I think he is a wonderful person. Professionalism is evident in the way he represents himself.`
  }


 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients & colleagues</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
    
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
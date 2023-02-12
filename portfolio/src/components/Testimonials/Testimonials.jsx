import React from 'react'
import './testimonial.css'
import AVTR10 from '../../assets/Avatar10.jpg'
import AVTR9 from '../../assets/Avatar9.jpg'
import AVTR7 from '../../assets/Avatar7.jpg'
import AVTR8 from '../../assets/Avatar8.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR10,
    name: 'client 1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa dicta, dolores perspiciatis, voluptates mollitia odit tempore deserunt minus ullam quis ipsa provident suscipit, voluptate id error praesentium? Excepturi, eligendi!'
  },
  {
    id: 2,
    avatar: AVTR9,
    name: 'client 2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa dicta, dolores perspiciatis, voluptates mollitia odit tempore deserunt minus ullam quis ipsa provident suscipit, voluptate id error praesentium? Excepturi, eligendi!'
  },
  {
    id: 3,
    avatar: AVTR8,
    name: 'client 3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa dicta, dolores perspiciatis, voluptates mollitia odit tempore deserunt minus ullam quis ipsa provident suscipit, voluptate id error praesentium? Excepturi, eligendi!'
  },
  {
    id: 4,
    avatar: AVTR7,
    name: 'client 4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio culpa dicta, dolores perspiciatis, voluptates mollitia odit tempore deserunt minus ullam quis ipsa provident suscipit, voluptate id error praesentium? Excepturi, eligendi!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {
          data.map (({id, name, review, avatar})=> {
            return (
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                      {review}
                    </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
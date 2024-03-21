import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Jack',
    review: 'When potential customers read testimonials, they are stepping into the person shoes in the testimonial and see themselves using your product. An authentic testimonial is virtually impossible for a marketer to recreate.'
  },
  {
    avatar: AVTR2,
    name: 'Smith',
    review: 'When potential customers read testimonials, they are stepping into the person shoes in the testimonial and see themselves using your product. An authentic testimonial is virtually impossible for a marketer to recreate.'
  },
  {
    avatar: AVTR3,
    name: 'Nau',
    review: 'When potential customers read testimonials, they are stepping into the person shoes in the testimonial and see themselves using your product. An authentic testimonial is virtually impossible for a marketer to recreate.'
  },
  {
    avatar: AVTR4,
    name: 'Nime',
    review: 'When potential customers read testimonials, they are stepping into the person shoes in the testimonial and see themselves using your product. An authentic testimonial is virtually impossible for a marketer to recreate.'
  }

]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
        {/* <article className='testimonial1'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
              <h5 className='client__name'>Enrest Achiever</h5>
              <small className='client__review'>
                Thanks to SumatoSoft can-do attitude, amazing work ethic and willingness to tackle client's 
                problems as their own, they've become an integral part of our team.
              </small>
            </div>
          </article> */}
          {/* <article className='testimonial1'>
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar One" />
              <h5 className='client__name'>Enrest Achiever</h5>
              <small className='client__review'>
                Thanks to SumatoSoft can-do attitude, amazing work ethic and willingness to tackle client's 
                problems as their own, they've become an integral part of our team.
              </small>
            </div>
          </article>
          <article className='testimonial1'>
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar One" />
              <h5 className='client__name'>Enrest Achiever</h5>
              <small className='client__review'>
                Thanks to SumatoSoft can-do attitude, amazing work ethic and willingness to tackle client's 
                problems as their own, they've become an integral part of our team.
              </small>
            </div>
          </article>
          <article className='testimonial1'>
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar One" />
              <h5 className='client__name'>Enrest Achiever</h5>
              <small className='client__review'>
                Thanks to SumatoSoft can-do attitude, amazing work ethic and willingness to tackle client's 
                problems as their own, they've become an integral part of our team.
              </small>
            </div>
          </article> */}
      </Swiper>
    </section>
  )
}

export default testimonials
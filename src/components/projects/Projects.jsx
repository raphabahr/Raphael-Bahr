import React, { useRef, useState } from 'react';
import "./projects.css";
import { Data } from "./Data";

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import '../animation/Animation.css';

const Projects = () => {
    return (
        <section className="project container section animate">
            <h2 className="section__title">My projects</h2>
            <span className="section__subtitle">Projects</span>

            <Swiper className="project__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="project__card" key={id}>
                            <img src={image} alt="" className='project__img' />

                            <h3 className="project__name">{title}</h3>
                            <p className="project__description">{description}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Projects;
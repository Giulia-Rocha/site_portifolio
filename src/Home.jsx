import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css'


// import required modules
import { Navigation,  Autoplay } from 'swiper/modules';

import foto from './assets/foto_giulia.jpg'
import projeto1 from './assets/web-challenge.png'
const Home = () => {
  return (
    <section className="min-h-screen">
        <section className='w-full h-auto p-6 flex justify-center flex-col items-center gap-10'>
            <img src={foto} alt="Giulia Barbizan" className='w-2xs h-auto rounded-[145px]'/>
            <div>
            <a href="">Linkedin</a>
            <a href="">Github</a>
            </div>
            <h2 className='text-2xl  font-medium font-fire text-mygreen'>Olá, eu sou a Giulia Barbizan!</h2>
        </section>
        <section id='Sobre' className="h-9/10 w-full p-10 flex flex-col items-center">
            <p className=" text-amber-50 text-justify p-6">Estudante de Engenharia de Software, apaixonada por inovação e tecnologia, com sólida base em Java e experiência em desenvolvimento front-end com React. Meu objetivo é me tornar desenvolvedora full-stack, criando soluções eficientes e bem estruturadas, sempre aplicando boas práticas e buscando aprimorar minhas habilidades para enfrentar novos desafios.</p>
            <a href="">Download CV</a>
            
        </section>
        <section id='Projetos'>
            <h2 class='text-3xl font-light text-mygreen flex justify-center mt-5'>Projetos</h2>
            <Swiper navigation = {true} modules = {[Navigation]} className='mySwiper m-10'>
                <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-mygreen m-10 ">
                    <img class="w-full" src={projeto1} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-mygreen">The Coldest Sunset</div>
                        <p class="text-amber-50 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#React</span>
                        <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#TailwindCSS</span>
                        <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Javascript</span>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 1</SwiperSlide>
                

            </Swiper>
        </section>
        <section id='skills'>
            <h2 className='text-3xl font-light text-mygreen flex justify-center mt-5'>Habilidades</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="swiper-one"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
    
        </section>
        <section id='contato'>
            <h3>Entre em contato comigo!</h3>
            <a href=""><img src="" alt="email" /></a>
            <a href=""><img src="" alt="linkedin" /></a>
        </section>
    </section>
  )
}

export default Home
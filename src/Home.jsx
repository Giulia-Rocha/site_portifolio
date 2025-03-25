import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css'


// import required modules
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';

import foto from './assets/foto_giulia.jpg'
import projeto1 from './assets/web-challenge.png'
const Home = () => {
  return (
    <section className="min-h-screen ">
        <section className='w-full h-auto p-6 flex justify-center flex-col items-center gap-10'>
            <img src={foto} alt="Giulia Barbizan" className='w-2xs h-auto rounded-[145px]'/>
            <div className='flex gap-10'>
            <a href=""><img src="src/assets/linkedin.png" alt="Linkedin" /></a>
            <a href=""><img src="src/assets/github.png" alt="Github" /></a>
            </div>
            
        </section>
        <section id='Sobre' className="min-h-[60vh] w-full p-10 flex flex-col items-center justify-center">
            <h2 className='text-2xl  font-medium font-fire text-mygreen'>Olá, eu sou a Giulia Barbizan!</h2>
            <p className=" text-amber-50 text-justify p-15 text-lg ">Estudante de Engenharia de Software, apaixonada por inovação e tecnologia, com sólida base em Java e experiência em desenvolvimento front-end com React. Meu objetivo é me tornar desenvolvedora full-stack, criando soluções eficientes e bem estruturadas, sempre aplicando boas práticas e buscando aprimorar minhas habilidades para enfrentar novos desafios.</p>
            <a href="" className='w-40 h-10 flex justify-center items-center rounded-4xl bg-mygreen font-fire text-lg font-semibold'>Download CV</a>
            
        </section>
        <section id='Projetos'className='h-screen p-10'>
            <h2 class='text-3xl font-light text-mygreen flex justify-center '>Projetos</h2>
            <Swiper 
                centeredSlides={true}
                slidesPerView={2}
                navigation = {true} 
                modules = {[Navigation]} 
                className='mySwiper m-10'>
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
        <section id='skills' className=''>
            <h2 className='text-3xl font-light text-mygreen flex justify-center mt-20'>Habilidades</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={10}
                centeredSlides={true}
                autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                }}
                loop = {true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-one"
            >
                <SwiperSlide>
                    <img src="src/assets/css.png" alt="css logo" className='w-48 h-auto' />
    
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/react.png" alt="" />    
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/html.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/tailwind.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/figma.png" alt="" />
                  </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/icons8-github-100.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/java.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/python.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/node-js.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/mysql.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/postman.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src="src/assets/js.png" alt="" />
                </SwiperSlide>

            </Swiper>
    
        </section>
        <section id='contato' className='min-h-[40vh] flex flex-col justify-center items-center gap-20 p-10'>

            <h3 className=' w-1/3 h-15 rounded-3xl shadow-blue-500/50  flex justify-center items-center bg-mygreen text-myblack font-fire text-2xl'>Entre em contato comigo!</h3>
            <div className='w-fit flex gap-20'>
                <a href="">
                    <img src="src/assets/email.png" alt="email" className=''/>
                </a>
                <a href=''>
                    <img src="src/assets/linkedin.png" alt="linkedin" />
                </a>
            </div>
            
        </section>
    </section>
  )
}

export default Home
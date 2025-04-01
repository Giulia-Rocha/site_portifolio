import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css'


// import required modules
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';

import foto from './assets/foto_giulia.jpg'
import projeto1 from './assets/web-challenge.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
const Home = () => {
  return (
    <section className="min-h-screen w-full">
        <section className='w-full h-auto p-6 flex justify-center flex-col items-center gap-10'>
            <img src={foto} alt="Giulia Barbizan" className='w-3xs md:w-2xs h-auto rounded-[145px]'/>
            <div className='flex gap-10'>
            <a href="https://www.linkedin.com/in/giulia-barbizan"><img src={linkedin} alt="Linkedin" /></a>
            <a href="https://github.com/Giulia-Rocha"><img src={github} alt="Github" /></a>
            </div>
            
        </section>
        <section id='Sobre' className="min-h-[60vh] w-full p-10 flex flex-col items-center justify-center gap-40 lg:gap-10">
            <h2 className='text-xl  text-center md:text-2xl font-medium font-fire text-mygreen '>Olá, eu sou a Giulia Barbizan!</h2>
            <p className=" text-amber-50 text-center md:text-justify  md: text-lg lg:p-30  ">Estudante de Engenharia de Software, apaixonada por <span className='font-bold font-fire text-mygreen'>inovação e tecnologia</span> , com sólida base em Java e experiência em desenvolvimento front-end com React. <br/>Meu objetivo é me tornar desenvolvedora <span className='font-bold font-fire text-mygreen'>Full-stack</span> , criando soluções eficientes e bem estruturadas, sempre aplicando boas práticas e buscando aprimorar minhas habilidades para enfrentar novos desafios.</p>
            <a href="" className='w-40 h-10 flex justify-center items-center rounded-4xl bg-mygreen font-fire text-lg font-semibold'>Download CV</a>
            
        </section>
        <section id='projetos'className='h-screen p-2 md:p-10'>
            <h2 class='text-3xl font-light text-mygreen flex justify-center '>Projetos</h2>
            <Swiper 
                
                rewind ={true}
                breakpoints ={
                    {   
                        320:{
                            slidesPerView: 1,
                            spaceBetween: 10,
                        
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            
                            
                        },
                        768:{
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024:{
                            slidesPerView: 2,
                            spaceBetween:20,

                        
                        },
                        1440:{
                            slidesPerView:2,
                            spaceBetween:60,
                        }

                        

                    }
                }
                pagination = { true}
                centeredSlides={true}
                navigation = {true} 
                modules = {[Pagination,Navigation]} 
                className='mySwiper m-10 md:w-70 lg:w-60'>
                <SwiperSlide>
                    <div class="max-w-sm  rounded overflow-hidden shadow-lg shadow-mygreen m-10 ">
                        <img class="w-full" src={projeto1} alt="formula e website"/>
                        <div class="px-6 py-4">
                            <div class="font-semibold  font-fire text-xl mb-2 text-mygreen">Fórmula-E Website</div>
                            <p class="text-amber-50 text-base">
                                Página web desenvolvida com React + Vite, usando Styled Components para estilização e responsividade.
                                Criada com a finalidade de dar mais visibilidade para a Fórmula-E
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2  ">
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#React</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#StyledComponents</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Javascript</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-mygreen m-10 ">
                        <img class="w-full" src="src/assets/near-guard.jpg" alt="near guard"/>
                        <div class="px-6 py-4">
                            <div class="font-semibold font-fire text-xl mb-2 text-mygreen">Near Guard</div>
                            <p class="text-amber-50 text-base">
                                Dispositivo Iot usado para medir a distância entre o carro e obstáculos ou oponentes, ajudando pilotos a tomarem decisões mais precisas em ultrapassagens e durante a corrida.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#C++</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Python</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Azure</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-mygreen m-10 ">
                        <img class="w-full" src="src/assets/smart-energy.png" alt="smart energy"/>
                        <div class="px-6 py-4">
                            <div class="font-semibold font-fire text-xl mb-2 text-mygreen">Smart Energy</div>
                            <p class="text-amber-50 text-base">
                            Solução IoT que visa mitigar os desafios técnicos e sociais da implementação de microrredes no Brasil, promovendo acesso universal à energia de forma sustentável, eficiente e inclusiva.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#C++</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Python</span>
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Azure</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-mygreen m-10 ">
                        <img class="w-full" src="src/assets/fish-manager.png" alt="script fih manager"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-mygreen">Fish Manager</div>
                            <p class="text-amber-50 text-base">
                                O Fish Manager é um sistema de gestão de aquacultura desenvolvido em Python para ajudar piscicultores a gerenciar suas operações de cultivo de peixes de forma eficiente e sustentável.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-mygreen rounded-full px-3 py-1 text-sm font-semibold text-myblack mr-2 mb-2">#Python</span> 
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        <section id='skills' className=''>
            <h2 className='text-3xl font-light text-mygreen flex justify-center mt-20'>Habilidades</h2>
            <Swiper
                
                centeredSlides={true}
                breakpoints ={
                    {
                        320:{
                            slidesPerView:3
                        },
                        640: {
                            slidesPerView:4
                            
                        },
                        768:{
                            slidesPerView: 5
                        },
                        1024:{
                            slidesPerView: 7

                        },
                        1440:{
                            slidesPerView:10
                            
                        }

                        

                    }
                }
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
        <section id='contato' className=' min-h-[60vh] flex flex-col justify-center items-center gap-20 p-5'>

            <div className='w-[80%] sm:w-[40%] h-10 rounded-3xl flex justify-center items-center bg-mygreen p-8 '>
                <h3 className=' text-myblack font-bold font-fire text-[16px] sm:text-xl text-center'>Entre em contato comigo!</h3>
            </div>

            
            <div className='w-fit flex gap-20'>
                <a href="">
                    <img src="src/assets/email.png" alt="email" />
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
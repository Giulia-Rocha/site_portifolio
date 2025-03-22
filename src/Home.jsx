import foto from './assets/foto_giulia.jpg'
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
        <section id='Sobre' className="h-9/10">
            <p className="">Estudante de Engenharia de Software, apaixonada por inovação e tecnologia, com sólida base em Java e experiência em desenvolvimento front-end com React. Meu objetivo é me tornar desenvolvedora full-stack, criando soluções eficientes e bem estruturadas, sempre aplicando boas práticas e buscando aprimorar minhas habilidades para enfrentar novos desafios.</p>
            <a href="">Download CV</a>
            
        </section>
        <section id='Projetos'>
            <h2>Projetos</h2>
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
            <div>card 4</div>
        </section>
        <section id='skills'>
            <h2>Habiliades</h2>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
            <div><img src="" alt="" /></div>
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
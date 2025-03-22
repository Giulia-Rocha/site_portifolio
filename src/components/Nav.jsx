import React from 'react'

const Nav = () => {
  return (
    <nav>
        <ul className='w-full h-20 font-fire text-mygreen flex justify-center items-center gap-20'>
            <li><a href="#Sobre">Sobre mim</a></li>
            <li><a href="#Projetos">Projetos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
  )
}

export default Nav
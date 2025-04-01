import {useState} from 'react'
import {Link} from 'react-scroll'
import '../styles.css'


const MenuHamburguer = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen);
    };

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        {/* Ícone de Menu */}
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </button>

      {/* Menu */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul className=" section font-fire text-mygreen  text-lg flex flex-col flex-wrap justify-center items-center gap-10 ">
            <Link to="projetos" smooth={true} duration={700} className="cursor-pointer">
            Projetos
            </Link>
            <Link to="skills" smooth={true} duration={700} className="cursor-pointer">
            Habilidades
            </Link>
            <Link to="contato" smooth={true} duration={700} className="cursor-pointer">
            Contato
            </Link>
        </ul>
      </nav>
    </div>
    
  )
}

export default MenuHamburguer
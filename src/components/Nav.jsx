import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="w-full h-20 flex  p-2 justify-center">
      <ul className="font-fire text-mygreen flex flex-wrap justify-center items-center gap-20">
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
  );
};

export default Nav;

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="w-full h-20 flex justify-center">
      <ul className="font-fire text-mygreen flex justify-center items-center gap-20">
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

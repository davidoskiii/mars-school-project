import { Link } from "react-scroll";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed w-screen h-24 pt-4 z-[100]">
      <div className="flex-1 flex items-center justify-center mr-auto pl-[10rem]">
        <Link activeClass="scroll" spy={true} smooth={true} offset={-200} duration={1000} className="mx-4 cursor-pointer text-normal text-[18px] text-center font-semibold" to="NozioniPrincipali">Nozioni Principali</Link>
        <Link activeClass="scroll" spy={true} smooth={true} offset={-325} duration={1000} className="mx-4 cursor-pointer text-normal text-[18px] text-center font-semibold" to="EsplorazioniSuMarte">Esplorazioni su Marte</Link>
      </div>
      <div className="flex items-center justify-center">
        <Link activeClass="scroll" spy={true} smooth={true} offset={0} duration={1500} className="cursor-pointer font-sans text-normal text-5xl text-center font-bold" to="Header">MARTE</Link>
      </div>
      <div className="flex-1 flex items-center justify-center ml-auto pr-[10rem]">
        <Link activeClass="scroll" spy={true} smooth={true} offset={-325} duration={1000} className="mx-4 cursor-pointer text-normal text-[18px] text-center font-semibold" to="VitaMarte">C'è vita su Marte?</Link>
        <Link activeClass="scroll" spy={true} smooth={true} offset={-325} duration={1000} className="mx-4 cursor-pointer text-normal text-[18px] text-center font-semibold" to="Curiosità">Curiosità</Link>
      </div>
    </nav>
  )
}

export default Navbar

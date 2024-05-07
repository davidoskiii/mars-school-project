import { Link } from "react-scroll";
import React from "react";

const Button = ({ children, to, ...props }: any) => {
  return (
    <div className="max-w-max">
      <Link to={to} activeClass="scroll" spy={true} smooth={true} offset={-200} duration={1000}>
        <button
          className="font-sans text-white text-base bg-transparent px-8 py-2 rounded-full border border-white"
          style={{ fontFamily: 'PT Sans', fontSize: '16px' }}
          {...props}
        >
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;

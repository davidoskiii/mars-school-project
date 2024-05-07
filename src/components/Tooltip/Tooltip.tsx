import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text?: string | undefined;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { pageX, pageY } = e;
    setPosition({ x: pageX, y: pageY });
    setIsVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const { pageX, pageY } = e;
    setPosition({ x: pageX, y: pageY });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleTooltipMouseEnter = () => {
    setIsVisible(true);
  };

  const handleTooltipMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <span className="tooltip inline-block z-50" onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
      </span>
        <div className={`w-[500px] min-h-[200px] h-auto p-4 bg-white absolute z-50 transition-opacity duration-1000 ${isVisible ? `opacity-100 block` : `opacity-0 hidden`}`} style={{ left: position.x + 20, top: position.y + 20 }} onMouseEnter={handleTooltipMouseEnter} onMouseLeave={handleTooltipMouseLeave}>
          {text}
        </div>
    </>
  );
};

export default Tooltip;

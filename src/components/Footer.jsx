import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-main_action min-h-[68px] text-[10px] text-black pl-6 pt-4 pb-[14px]">
      <a href="#" className="mb-1">
        Соглашение о конфиденциальности
      </a>
      <a href="#" className="mb-1">
        Пользовательское соглашение
      </a>
      <a href="#">DMCA</a>
    </div>
  );
};

export default Footer;

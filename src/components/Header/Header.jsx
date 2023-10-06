import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';
import InputSearch from '../Search/InputSearch';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const Header = () => {
  const [activeRightMenu, setActiveRightMenu] = useState(false);
  const [activeLeftMenu, setActiveLeftMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { setIsAuth, isAuth, countNotification } = useContext(AuthContext);

  const handleActiveRightMenu = () => {
    setActiveRightMenu(!activeRightMenu);
  };

  const handlerIsSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleActiveLeftMenu = () => {
    setActiveLeftMenu(!activeLeftMenu);
  };

  return (
    <div className=" bg-black h-[60px] grid grid-cols-6">
      {isSearch && <InputSearch handlerIsSearch={handlerIsSearch} />}
      <div className="col-1 flex justify-center items-center md:hidden">
        <i
          className="fa-solid fa-bars text-white text-xl"
          onClick={handleActiveLeftMenu}
        />
      </div>
      <Link
        to="/"
        className="col-2 flex justify-start md:justify-end items-center"
      >
        <img src="./images/logo.png" className="w-[28px] h-[28px]" />
      </Link>

      <div className="col-start-5 flex  justify-end md:justify-center items-center">
        <i
          className="fa-sharp fa-solid fa-magnifying-glass text-textSpecial"
          onClick={handlerIsSearch}
        />
      </div>

      <div className="col-start-6 flex justify-center md:justify-start items-center">
        <div className="relative">
          <img
            src={`${
              isAuth ? './images/avatar.png' : './images/default_logo.jpg'
            }`}
            alt=""
            className="w-[28px] h-[28px] rounded-full"
            onClick={handleActiveRightMenu}
          />
          <div
            className={`${
              isAuth && countNotification != 0 ? '' : 'hidden'
            } absolute top-0 right-0 w-2 h-2 bg-main_action rounded-full `}
          ></div>
        </div>
      </div>

      <RightMenu
        handleActiveRightMenu={handleActiveRightMenu}
        activeRightMenu={activeRightMenu}
      />
      <LeftMenu
        handleActiveLeftMenu={handleActiveLeftMenu}
        activeLeftMenu={activeLeftMenu}
      />
    </div>
  );
};

export default Header;

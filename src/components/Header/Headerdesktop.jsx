import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context';

const Headerdesktop = (props) => {
  const menu = [
    {
      title: 'Главная',

      url: '/',
    },
    {
      title: 'Проекты',
      url: '/projects',
    },
    {
      user: true,
      title: 'Закладки',
      url: '/bookmarks',
    },
  ];
  const { setIsAuth, isAuth } = useContext(AuthContext);

  return (
    <div className={`bg-black h-[42px] hidden md:block`}>
      <div
        className={`bg-main_action h-full flex font-bold text-[14px] flex-row `}
      >
        {menu.map((url) => (
          <Link
            key={url.title}
            to={url.url}
            className={`flex justify-between items-center pr-[28px] pl-[27px] ${
              url.user && url.user != isAuth ? 'hidden' : ''
            }`}
          >
            {url.title}
          </Link>
        ))}

        {/* {!isAuth && (
	
				)} */}
      </div>
    </div>
  );
};

export default Headerdesktop;

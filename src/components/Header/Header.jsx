import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context'
import RightMenu from './RightMenu'

function Header() {
	const [activeRightMenu, setActiveRightMenu] = useState(false)
	const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

	const handleActiveRightMenu = () => {
		setActiveRightMenu(!activeRightMenu)
	}

	return (
		<div className='w-full bg-black h-[60px] flex items-center justify-around'>
			<i className='fa-solid fa-bars text-white text-2xl' />

			<img src='assets/logo.png' className='w-[28px] h-[28px]' />

			<form className='min-w-[205px]'>
				{/* <div className='min-w-[205px] rounded-md bg-[#ECECEC]/5 h-[34px] flex items-center px-[10px] justify-between'></div> */}
				{/* <input
					type='text'
					placeholder='Поиск'
					className='bg-transparent outline-none text-white text-[12px] '
				/> */}
			</form>

			<i className='fa-sharp fa-solid fa-magnifying-glass text-[#555555]' />

			<img
				src={`${isLoggedIn ? 'assets/avatar.png' : 'assets/default_logo.png'}`}
				alt=''
				className='w-[40px] h-[40px] rounded-full'
				onClick={handleActiveRightMenu}
			/>

			<RightMenu
				handleActiveRightMenu={handleActiveRightMenu}
				activeRightMenu={activeRightMenu}
			/>
		</div>
	)
}

export default Header

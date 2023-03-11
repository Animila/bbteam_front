import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

function Header() {
	const [activeRightMenu, setActiveRightMenu] = useState(false)
	const [activeLeftMenu, setActiveLeftMenu] = useState(false)
	const { setIsAuth, isAuth, countNotification } = useContext(AuthContext)

	const handleActiveRightMenu = () => {
		setActiveRightMenu(!activeRightMenu)
	}

	const handleActiveLeftMenu = () => {
		setActiveLeftMenu(!activeLeftMenu)
	}

	return (
		<div className='w-full bg-black h-[60px] flex items-center justify-around'>
			<i
				className='fa-solid fa-bars text-white text-xl'
				onClick={handleActiveLeftMenu}
			/>
			<Link to='/'>
				<img src='assets/logo.png' className='w-[28px] h-[28px]' />
			</Link>

			<form className='min-w-[100px]'>
				{/* <div className='min-w-[205px] rounded-md bg-[#ECECEC]/5 h-[34px] flex items-center px-[10px] justify-between'></div> */}
				{/* <input
					type='text'
					placeholder='Поиск'
					className='bg-transparent outline-none text-white text-[12px] '
				/> */}
			</form>

			<i className='fa-sharp fa-solid fa-magnifying-glass text-[#555555]' />

			<div className='relative'>
				<img
					src={`${isAuth ? 'assets/avatar.png' : 'assets/default_logo.png'}`}
					alt=''
					className='w-[28px] h-[28px] rounded-full'
					onClick={handleActiveRightMenu}
				/>
				<div
					className={`${
						isAuth && countNotification != 0 ? '' : 'hidden'
					} absolute top-0 right-0 w-2 h-2 bg-[#23B1A5] rounded-full`}
				></div>
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
	)
}

export default Header

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import InputSearch from '../Seacrh/InputSearch'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

function Header() {
	const [activeRightMenu, setActiveRightMenu] = useState(false)
	const [activeLeftMenu, setActiveLeftMenu] = useState(false)
	const [isSearch, setIsSearch] = useState(false)
	const { setIsAuth, isAuth, countNotification } = useContext(AuthContext)

	const handleActiveRightMenu = () => {
		setActiveRightMenu(!activeRightMenu)
	}

	const handlerIsSearch = () => {
		setIsSearch(!isSearch)
	}

	const handleActiveLeftMenu = () => {
		setActiveLeftMenu(!activeLeftMenu)
	}

	return (
		<div className='w-full bg-black h-[60px] flex items-center justify-around'>
			{isSearch && <InputSearch handlerIsSearch={handlerIsSearch} />}
			<i
				className='fa-solid fa-bars text-white text-xl'
				onClick={handleActiveLeftMenu}
			/>
			<Link to='/'>
				<img src='./src/assets/images/logo.png' className='w-[28px] h-[28px]' />
			</Link>

			<div className='min-w-[100px]'></div>

			<i
				className='fa-sharp fa-solid fa-magnifying-glass text-[#555555]'
				onClick={handlerIsSearch}
			/>

			<div className='relative'>
				<img
					src={`${
						isAuth
							? './src/assets/images/avatar.png'
							: './src/assets/images/default_logo.png'
					}`}
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

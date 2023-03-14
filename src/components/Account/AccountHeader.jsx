import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'

function AccountHeader({ user }) {
	const { setIsAuth, isAuth, countNotification } = useContext(AuthContext)

	const handleLogout = () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('expires_in')
		setIsAuth(false)
	}

	return (
		<div className='min-h-[190px] flex'>
			<div
				className='opacity-25 w-full absolute h-[190px] bg-no-repeat bg-cover'
				style={{
					backgroundImage: ` ${
						user.logo == 'none'
							? 'url("./images/default_account_bg.jpg")'
							: `url("${user.logo}")`
					}`,
				}}
			></div>
			<div className='bg-black/80 w-full h-[147px] block my-auto'>
				<div className='h-full flex flex-col justify-center'>
					<div className=' flex justify-center items-center'>
						<img
							src={`${
								user.logo == 'none' ? './images/default_logo.jpg' : user.logo
							}`}
							alt=''
							className='w-[83px] h-[83px] rounded-full'
						/>
						<h2 className='text-white self-start mt-[5px] ml-[16px] text-[19px] font-medium'>
							{user.nickname}
						</h2>
					</div>
					<Link
						className='text-white flex justify-end items-end self-end mr-[20px] z-[0]'
						onClick={handleLogout}
						to='/'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
							/>
						</svg>
						Выйти
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AccountHeader

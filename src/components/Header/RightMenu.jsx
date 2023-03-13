import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import AuthModal from '../AuthModal/AuthModal'

function RightMenu(props) {
	const { setIsAuth, isAuth, countNotification } = useContext(AuthContext)
	const [activeAuthModal, setActiveAuthModal] = useState(false)

	const handlerActiveAuthModal = () => {
		setActiveAuthModal(!activeAuthModal)
	}

	const handleLogout = () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('expires_in')
		setIsAuth(false)
	}

	return (
		<div
			className={`fixed z-[2] bg-[#171717] ${
				props.activeRightMenu ? '' : 'hidden'
			}`}
		>
			<div
				className={`fixed left-0 top-0 bg-black/80 w-full h-full z-[2]`}
				onClick={props.handleActiveRightMenu}
			></div>
			<div
				className={`fixed right-0 top-0 z-[99] h-full min-w-[70%] bg-[#171717] flex justify-center items-start pt-8`}
			>
				{!isAuth && (
					<div>
						<button
							type='submit'
							className=' bg-[#2EC4B6] font-bold text-black rounded-sm w-fit py-[11px] px-[26px]'
							onClick={handlerActiveAuthModal}
						>
							Войти в аккаунт
						</button>
						<AuthModal
							handlerActiveAuthModal={handlerActiveAuthModal}
							activeAuthModal={activeAuthModal}
						/>
					</div>
				)}
				{isAuth && (
					<div className='w-full text-white'>
						<div className='flex pl-6 mb-4'>
							<img
								src='./src/assets/images/avatar.png'
								alt=''
								className='w-[40px] h-[40px] rounded-full'
							/>

							<div className='ml-4 w-full'>
								<span className='text-[16px]'>shumerman</span>
								<div className='flex mt-2 items-center justify-between'>
									<div className='flex'>
										<img src='./src/assets/images/premium.svg' alt='' />
										<span className='text-[11px] ml-[5px]'>Премиум</span>
									</div>

									<span className='text-[#2EC4B6] text-[11px] float-right pr-[18px]'>
										Активен
									</span>
								</div>
							</div>
						</div>
						<hr />

						<div className='pr-[26px] pl-[24px] mt-[25px]'>
							<Link
								to='/notification'
								className='flex justify-between mb-[23px]'
								onClick={props.handleActiveRightMenu}
							>
								Уведомления{' '}
								<div className='bg-[#2EC4B6] rounded-full w-[25px] h-[25px] flex items-center justify-center text-[9px] text-black'>
									{countNotification}
								</div>
							</Link>
							<a className='flex justify-between mb-[30px]'>
								Настройки
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
										d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</a>
							<a className='flex justify-between' onClick={handleLogout}>
								Выйти{' '}
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
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default RightMenu

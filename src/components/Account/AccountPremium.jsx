import React, { useState } from 'react'

function AccountPremium(props) {
	const [activeSocial, setActiveSocial] = useState(props.user.id_social_account)
	const [activePremium, setActivePremium] = useState(props.user.premium_status)

	const handlerSocial = () => {
		setActiveSocial(!activeSocial)
	}

	const handlerPremium = () => {
		setActivePremium(!activePremium)
	}

	return (
		<div>
			<form
				action=''
				className='bg-[#101010] pb-[24px] min-h-[386px] flex flex-col items-center mx-[10px] rounded-[3px] mt-[18px] border-[#3D3D3D] border-[1px]'
			>
				<h2 className='text-[22px] font-bold text-center mt-[22px]'>
					Приобретение обычной подписки
				</h2>
				<p className='ml-[49px] mr-[41px] mt-6'>
					— Перейдите по{' '}
					<a href='' className='text-main_action'>
						ЭТОЙ
					</a>{' '}
					ссылку и оформите VK DONUT.
				</p>
				<p className='ml-[49px] mr-[41px]'>
					— После оформления вернитесь на этот сайт и нажмите кнопку
					Активировать.
				</p>
				<div
					onClick={handlerSocial}
					className={`
					${
						activeSocial ? 'bg-[#1D1D1D] text-[#CCCCCC]' : 'bg-[#0061A1]'
					}   flex justify-center items-center w-[221px] h-[42px] rounded-[2px] mt-[29px]`}
				>
					{activeSocial ? 'Отвязать страницу' : 'Привязать свой VK'}
				</div>
				<div
					onClick={handlerPremium}
					className={`${
						activePremium
							? 'bg-[#1D1D1D] text-[#CCCCCC]'
							: 'bg-main_action text-black'
					} flex justify-center items-center w-[221px] h-[42px] rounded-[2px] mt-[13px]`}
				>
					{activePremium ? 'Активировано' : 'Активировать'}
				</div>
			</form>

			<form
				action=''
				className='bg-[#101010] pb-[24px] min-h-[386px] flex flex-col items-center mx-[10px] rounded-[3px] mt-[29px] border-[#3D3D3D] border-[1px]'
			>
				<h2 className='text-[22px] font-bold text-center mt-[22px]'>
					Приобретение альтернативной подписки
				</h2>
				<p className='ml-[49px] mr-[41px] mt-6'>
					— Если вы не из России, то перейдите по{' '}
					<a href='' className='text-main_action'>
						ЭТОЙ
					</a>{' '}
					ссылке и оформите подписку через сервис Boosty.
				</p>
				<p className='ml-[49px] mr-[41px]'>
					— Затем напишите в личные сообщения{' '}
					<a href='' className='text-main_action'>
						группы
					</a>
					, либо в лс{' '}
					<a href='' className='text-main_action'>
						телеграмм
					</a>
					. Вам выдадут промокод, который нужно будет ввести в окошке ниже, он
					активирует{' '}
					<a href='' className='text-[#80FF00]'>
						Премиум-подписку.
					</a>
				</p>
				<input
					className='bg-[#1D1D1D] text-center w-[221px] h-[42px] rounded-[2px] mt-[29px] outline-none placeholder:text-[#3E3E3E] placeholder:text-[15px]'
					placeholder='Проверочный код'
					disabled={activePremium}
				/>
				<div
					onClick={handlerPremium}
					className={`${
						activePremium
							? 'bg-[#1D1D1D] text-[#CCCCCC]'
							: 'bg-main_action text-black'
					} flex justify-center items-center w-[221px] h-[42px] rounded-[2px] mt-[13px]`}
				>
					{activePremium ? 'Активировано' : 'Активировать'}
				</div>
			</form>
		</div>
	)
}
export default AccountPremium

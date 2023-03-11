import React, { useContext, useEffect, useState } from 'react'
import SocialNotificationList from '../components/SocialNotification/SocialNotificationList'
import TitlesNotificationList from '../components/TitlesNotification/TitlesNotificationList'
import { AuthContext } from '../context'

function NotificationsPage() {
	const { countTitleNotification, countSocialNotification } =
		useContext(AuthContext)
	const [subMenu, setSubMenu] = useState([
		{
			title: 'Обновление',
			active: true,
			count: countTitleNotification,
		},
		{
			title: 'Социальное',
			active: false,
			count: countSocialNotification,
		},
	])
	useEffect(() => setSubMenu([...subMenu]), [])

	function handlerMenu(title) {
		console.log(title)
		const select = subMenu.map(item => {
			if (item.title == title) {
				return { ...item, active: true }
			} else {
				return { ...item, active: false }
			}
		})
		setSubMenu(select)
	}

	return (
		<div className='text-white mt-4'>
			<h2 className='text-[23px] font-bold ml-[20px]'>Уведомления</h2>
			<hr className='border-[#FFFFFF] opacity-[.15]' />
			<div className='flex justify-around text-[#D9D9D9] items-center h-[49px]'>
				{subMenu.map(obj => (
					<div
						key={obj.title}
						className={`${
							obj.active
								? 'after:block after:border-[#2EC4B6] after:border-[1px] after:mt-[6px]'
								: ''
						}
						 h-6 mb-[9px] relative
						`}
						onClick={() => handlerMenu(obj.title)}
					>
						{obj.title}
						<span
							className={`${
								obj.active
									? 'bg-[#2EC4B6] text-black text-[8px]'
									: 'text-transparent'
							} absolute top-[50%] translate-y-[-50%] right-[-23px] w-[21px] h-[21px] rounded-full flex justify-center items-center `}
						>
							{obj.count}
						</span>
					</div>
				))}
			</div>
			<hr className='border-[#FFFFFF/15] opacity-[.15]' />
			{subMenu[0].active && <TitlesNotificationList />}
			{subMenu[1].active && <SocialNotificationList/>}
		</div>
	)
}

export default NotificationsPage

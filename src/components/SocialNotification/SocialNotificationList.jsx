import React, { useContext, useState } from 'react'
import TitlesNotification from './SocialNotification'
import { AuthContext } from '../../context'
import SocialNotification from './SocialNotification'

function SocialNotificationList() {
	const [comments, setComments] = useState([
		{
			imgUser: './assets/avatar.png',
			nameUser: '@aboba6969',
			linkUser: '',
			typeAction: 'like',
			messagePost: 'Крутые переводы, так держать!',
			url: '',
			time: '4 часа назад',
		},
		{
			imgUser: './assets/avatar.png',
			nameUser: '@aboba6969',
			linkUser: '',
			typeAction: 'answer',
			messagePost: 'Крутые переводы, так держать!',
			url: '',
			time: '4 часа назад',
		},
	])

	// setCountTitleNotification(mangas.length)

	return (
		<div className='min-h-screen'>
			{comments.length == 0 && (
				<div className='text-center mt-[20px]'>Комментариев нет</div>
			)}
			{comments.length != 0 && (
				<>
					{comments.map(comment => (
						<SocialNotification comment={comment} />
					))}
				</>
			)}
		</div>
	)
}

export default SocialNotificationList

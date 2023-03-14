import React, { useState } from 'react'
import SocialNotification from './SocialNotification'

const SocialNotificationList = () => {
	const [comments, setComments] = useState([
		{
			id: 0,
			imgUser: './images/avatar.png',
			nameUser: '@aboba6969',
			linkUser: '',
			typeAction: 'like',
			messagePost: 'Крутые переводы, так держать!',
			url: '',
			time: '4 часа назад',
		},
		{
			id: 1,
			imgUser: './images/avatar.png',
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
						<SocialNotification key={comment.id} comment={comment} />
					))}
				</>
			)}
		</div>
	)
}

export default SocialNotificationList

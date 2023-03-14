import React, { useContext, useState } from 'react'
import TitlesNotification from './TitlesNotification'
import { AuthContext } from '../../context'

const TitlesNotificationList = () => {
	// const { setCountTitleNotification } = useContext(AuthContext)
	const [mangas, setMangas] = useState([
		{
			id: 0,
			title: 'Тихоокеанский рубеж',
			lastChapter: 40,
			time: '4 часа назад',
			free: true,
			url: '',
			img: './images/manga.png',
		},
		{
			id: 1,
			title: 'Тихоокеанский рубеж',
			lastChapter: 40,
			time: '4 часа назад',
			free: false,
			url: '',
			img: './images/manga_1.png',
		},
		{
			id: 2,
			title: 'Тихоокеанский рубеж',
			lastChapter: 40,
			time: '4 часа назад',
			free: true,
			url: '',
			img: './images/manga.png',
		},
		{
			id: 3,
			title: 'Тихоокеанский рубеж',
			lastChapter: 40,
			time: '4 часа назад',
			free: false,
			url: '',
			img: './images/manga_1.png',
		},
	])

	// setCountTitleNotification(mangas.length)

	return (
		<div className='min-h-screen'>
			{mangas.length == 0 && (
				<div className='text-center mt-[20px]'>Обновлений нет</div>
			)}
			{mangas.length != 0 && (
				<>
					{mangas.map(manga => (
						<TitlesNotification key={manga.id} manga={manga} />
					))}
				</>
			)}
		</div>
	)
}

export default TitlesNotificationList

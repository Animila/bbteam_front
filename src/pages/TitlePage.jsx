import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mangas from '../../data'
import CommentsList from '../components/Comment/CommentsList'
import TitleSelect from '../components/Title/TitleSelect'
import TitleHeader from '../components/TitleHeader/TitleHeader'
import TitleChapters from '../components/TitleScreen/TitleChapters'
import TitleDescription from '../components/TitleScreen/TitleDescription'

const TitlePage = () => {
	const params = useParams()
	const [manga, setManga] = useState({})
	const [subMenu, setSubMenu] = useState([
		{
			title: 'Подробнее',
			active: false,
		},
		{
			title: 'Главы',
			active: true,
		},
		{
			title: 'Комментарии',
			active: false,
		},
	])
	const [activeModal, setActiveModal] = useState(false)
	const [success, setSuccess] = useState(false)

	const handlerModal = () => {
		setActiveModal(!activeModal)
	}

	const handlerManga = () => {
		return mangas.find(manga => manga.id == params.id)
	}
	useEffect(() => {
		setManga(handlerManga())
	}, [])

	return (
		<div className='text-white min-h-screen'>
			<TitleHeader manga={manga} />
			<TitleSelect subMenu={subMenu} setSubMenu={setSubMenu} />
			<div>
				{subMenu[0].active && <TitleDescription manga={manga} />}
				{subMenu[1].active && <TitleChapters manga={manga} />}
				{subMenu[2].active && <CommentsList />}
			</div>
		</div>
	)
}
export default TitlePage

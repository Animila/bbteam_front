import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mangas from '../../public/data'
import TitleHeader from '../components/TitleHeader/TitleHeader'

const TitlePage = () => {
	const params = useParams()
	const [manga, setManga] = useState(null)

	const handlerManga = () => {
		return mangas.find(manga => manga.id == params.id)
	}
	useEffect(() => {
		setManga(handlerManga())
	}, [])

	return (
		<div className='text-white'>
			<TitleHeader />
		</div>
	)
}
export default TitlePage

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mangas from '../../data'
import CommentsList from '../components/Comment/CommentsList'

const ChapterPage = () => {
	const [chapter, setChapter] = useState({})
	// const [manga, setManga] = useState({})

	const params = useParams()
	const handlerChapter = () => {
		const manga = mangas.find(manga => manga.id == params.id)
		return manga.chapters.find(chapter => chapter.id == params.chapter_id)
	}
	useEffect(() => {
		setChapter(handlerChapter())
	}, [])
	return (
		<div className='bg-[#15141C] pt-[37px]'>
			<div className='font-bold text-[19px] text-white flex justify-center'>
				<span>Охотник в ином мире </span>
				<span className='ml-[5px]'>Глава {chapter.number}</span>
			</div>
			<div className='text-white text-[12px] text-center mt-[14px]'>
				Все главы по проекту{' '}
				<span className='text-[#2EC4B6] '>Охотник в ином мире</span>{' '}
			</div>
			<div className='bg-[#222222] min-h-[59px] text-[#999999] text-[12px] flex flex-col justify-center items-center rounded-[5px] mx-[20px]'>
				<div>
					BBTEAM {'>'} Охотник в ином мире {'>'}{' '}
				</div>
				<div className='flex justify-center'>
					<span>Охотник в ином мире </span>
					<span className='ml-[5px]'>Глава {chapter.number}</span>
				</div>
			</div>
			<div className='mt-2 px-[20px]'>
				<select
					name=''
					id=''
					className='h-[36px] bg-[#222222] outline-none rounded-[5px] text-[#4C5555] w-full '
				>
					<option value=''>Глава 48</option>
					<option value=''>Глава 47</option>
					<option value=''>Глава 46</option>
				</select>
			</div>
			<div className='flex justify-end mx-[20px] mt-[14px]'>
				<div className='bg-main_action w-[74px] h-[34px] flex justify-center rounded-[5px] font-bold items-center'>
					Назад
				</div>
				<div className='bg-[#222222] text-[#4C5555] w-[74px] h-[34px] flex justify-center rounded-[5px] font-bold items-center ml-[16px]'>
					Вперед
				</div>
			</div>
			<div className='h-[994px] mt-[20px] bg-[#D9D9D9]'></div>
			<div className='flex justify-center mt-[30px]'>
				<div className='inline-grid grid-cols-2 gap-2'>
					<div className='bg-[#242424] text-white w-[140px] h-[34px] flex justify-center rounded-[5px] font-bold items-center '>
						Назад
					</div>
					<div className='bg-[#242424] text-white w-[140px] h-[34px] flex justify-center rounded-[5px] font-bold items-center '>
						Вперед
					</div>
					<div className='bg-[#242424] text-white w-[140px] h-[34px] flex justify-center rounded-[5px] font-bold items-center '>
						К тайтлу
					</div>
					<div className='bg-[#242424] text-white w-[140px] h-[34px] flex justify-center rounded-[5px] font-bold items-center '>
						В закладки
					</div>
				</div>
			</div>
			<CommentsList />
		</div>
	)
}

export default ChapterPage

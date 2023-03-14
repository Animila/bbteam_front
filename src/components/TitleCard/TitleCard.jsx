import React from 'react'
import { useHistory } from 'react-router-dom'
const TitleCard = ({ manga }) => {
	const router = useHistory()
	return (
		<a
			onClick={() => {
				router.push(`/titles/${manga.id}`)
				console.log(`/titles/${manga.id}`)
			}}
			key={manga.id}
			className='relative flex flex-col justify-center items-center'
			style={{
				filter:
					'drop-shadow(0px 4.8px 4.8px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4.8px 4.8px rgba(0, 0, 0, 0.25))',
			}}
		>
			<div className='relative'>
				<img src={manga.bookJacket} className='rounded-lg col-1 h-[240px] ' />
				<div className='absolute w-[66px] h-[24px] text-[12px] bg-spanManga flex justify-center items-center text-main_action rounded-sm left-[7px] bottom-[7px]'>
					{manga.type}
				</div>
			</div>
			<div className='w-full'>
				<h3 className='text-[14px] text-ellipsis overflow-hidden whitespace-nowrap mt-4 '>
					{manga.title}
				</h3>
				<div className='text-[13px] text-color_genre font-medium'>
					Жанры:{' '}
					{manga.genres.map(genre => (
						<span key={genre} className='italic text-white'>
							{genre}{' '}
						</span>
					))}
				</div>
				<div className='text-[13px] italic'>
					Глава <span>{manga.chapters[manga.chapters.length - 1].number}</span>
				</div>
			</div>
		</a>
	)
}
export default TitleCard

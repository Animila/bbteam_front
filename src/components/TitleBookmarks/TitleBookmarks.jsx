import React from 'react'
const TitleBookmarks = ({ manga, stateDelete }) => {
	return (
		<a
			href={manga.url}
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
				<div
					className={`${
						stateDelete ? '' : 'hidden'
					} absolute top-0 right-0 bg-btnDelete w-[76px] h-[28px] flex justify-center items-center text-[12px] rounded-[2px]`}
				>
					Удалить
				</div>
			</div>
			<div className='w-full'>
				<h3 className='text-[14px] text-ellipsis overflow-hidden whitespace-nowrap mt-4 '>
					{manga.title}
				</h3>
				<div className='text-[13px] text-color_genre font-medium'>
					Жанры:{' '}
					{manga.genres.map(genre => (
						<span key={genre.id} className='italic text-white'>
							{genre.title}{' '}
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
export default TitleBookmarks

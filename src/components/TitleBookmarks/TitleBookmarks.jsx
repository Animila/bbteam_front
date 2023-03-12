import React from 'react'
function TitleBookmarks({ manga, stateDelete }) {
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
				<img src={manga.src} className='rounded-lg col-1 h-[240px] ' />
				<div className='absolute w-[66px] h-[24px] text-[12px] bg-[#1B1B1B] flex justify-center items-center text-[#2EC4B6] rounded-sm left-[7px] bottom-[7px]'>
					Манга
				</div>
				<div
					className={`${
						stateDelete ? '' : 'hidden'
					} absolute top-0 right-0 bg-[#E53427] w-[76px] h-[28px] flex justify-center items-center text-[12px] rounded-[2px]`}
				>
					Удалить
				</div>
			</div>
			<div className='w-full'>
				<h3 className='text-[14px] text-ellipsis overflow-hidden whitespace-nowrap mt-4 '>
					{manga.title}
				</h3>
				<div className='text-[13px] text-[#888785] font-medium'>
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
export default TitleBookmarks

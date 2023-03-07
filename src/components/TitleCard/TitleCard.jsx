import React from 'react'
function TitleCard({ manga }) {
	return (
		<a
			href={manga.url}
			key={manga.id}
			className=' relative flex flex-col mb-[30px]'
			style={{
				filter:
					'drop-shadow(0px 4.8px 4.8px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4.8px 4.8px rgba(0, 0, 0, 0.25))',
			}}
		>
			<img
				src={manga.src}
				className='rounded-lg col-1 h-[240px] mx-[6px] relative'
			/>
			<h3 className='text-[14px] text-ellipsis overflow-hidden whitespace-nowrap mt-4'>
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
				Глава <span>11</span>
			</div>
			<div className='absolute w-[66px] h-[24px] text-[12px] bg-[#1B1B1B] flex justify-center items-center text-[#2EC4B6] rounded-sm left-[10px] bottom-[80px]'>
				Манга
			</div>
		</a>
	)
}
export default TitleCard

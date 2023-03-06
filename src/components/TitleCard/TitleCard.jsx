import React from 'react'
function TitleCard({ manga }) {
	return (
		<a href={manga.url} key={manga.id} className='flex flex-col'>
			<img src={manga.src} className='rounded-lg col-1 h-[240px] mx-[12px]' />
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
		</a>
	)
}
export default TitleCard

import React from 'react'

function CarouselSlide({ manga }) {
	return (
		<a
			href={manga.url}
			className={`w-full h-[200px] flex items-center px-2 bg-no-repeat bg-cover relative`}
			style={{
				backgroundImage: `url("${manga.src}")`,
			}}
		>
			<div className='flex flex-col justify-center z-[1] text-white mr-[7px]'>
				<h2 className='text-[22px] w-full leading-6 font-bold mb-[10px]'>
					{manga.title}
				</h2>
				<div className='text-[13px] font-medium mb-[7px]'>
					Жанры:{' '}
					{manga.genres.map(genre => (
						<span key={genre} className='italic'>
							{genre}{' '}
						</span>
					))}
				</div>
				<p className='text-[8px] leading-3 overflow-hidden text-ellipsis'>
					{manga.description}
				</p>
			</div>
			<img
				src={manga.src}
				className='border-[1.2px] border-[#FFFFFF]/20 rounded-md min-w-[123px] h-[161px] z-[1]'
			/>
			<div
				className='flex flex-col justify-center absolute inset-0 z-0'
				style={{
					backdropFilter: 'blur(20px)',
				}}
			></div>
		</a>
	)
}

export default CarouselSlide

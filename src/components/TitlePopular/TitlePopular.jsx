import React from 'react'

function TitlePopular({ manga }) {
	return (
		<div>
			<div className='flex items-center my-[16px] ml-[30px] mr-[5px] justify-around'>
				<div className='h-[28px] w-[28px] flex justify-center items-center border-[1.2px] rounded text-[#888888] font-bold border-[#888888] mr-[32px]'>
					{manga.id}
				</div>
				<img
					src={manga.src}
					alt=''
					className='min-w-[65px] h-[88px] rounded mr-[10px]'
				/>
				<div>
					<h4 className='text-[14px] mb-[7px] leading-3'>{manga.title}</h4>
					<div className='text-[12px] font-medium mb-[7px] leading-3 text-[#888785]'>
						Жанры:{' '}
						{manga.genres.map(genre => (
							<span key={genre} className='italic text-white'>
								{genre}{' '}
							</span>
						))}
					</div>
					<p className='text-[12px] leading-3'>
						Глава {manga.chapters[manga.chapters.length - 1].number}
					</p>
				</div>
			</div>
			<hr className='border-[#383838] border-[1.18px]' />
		</div>
	)
}

export default TitlePopular

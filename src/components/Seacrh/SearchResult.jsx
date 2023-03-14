import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({ manga }) => {
	return (
		<Link>
			<div className='flex items-center my-[5px] justify-around mx-[5px]'>
				<img
					src={manga.src}
					alt=''
					className='min-w-[65px] h-[88px] rounded mr-[10px]'
				/>
				<div>
					<h4 className='text-[10px] mb-[7px] leading-3'>{manga.title}</h4>
					<div className='text-[8px] font-medium mb-[7px] leading-3 text-color_genre'>
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
			<hr className='border-border_block border-[1.18px]' />
		</Link>
	)
}

export default SearchResult

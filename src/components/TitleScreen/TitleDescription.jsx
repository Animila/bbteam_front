import React from 'react'
import TitlePopularList from '../TitlePopular/TitlePopularList'

const TitleDescription = ({ manga }) => {
	return (
		<>
			<div className='px-[16px] pt-[31px]'>
				<span className='text-[15px]'>{manga.description}</span>
				<div className='mt-[15px]'>
					{manga.type}, {manga.year},{' '}
					<span className='text-[#2EC4B6]'>{manga.status.toUpperCase()}</span>
				</div>
				<div className='mt-[20px] inline-grid grid-cols-3 gap-3'>
					{manga.genres.map(genre => (
						<div
							key={genre.id}
							className='w-[90px] h-[29px] bg-[#E2E2E2] rounded-[3px] text-black flex justify-center items-center font-bold text-[13px]'
						>
							{genre.title}
						</div>
					))}
				</div>
			</div>
			<TitlePopularList />
		</>
	)
}
export default TitleDescription

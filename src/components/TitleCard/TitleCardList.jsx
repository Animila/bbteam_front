import React from 'react'
import mangas from '../../../public/data'
import TitleCard from './TitleCard'

function TitleCardList() {
	return (
		<div className='text-white w-full pt-[13px] bg-[#222222]'>
			<h2 className='text-left px-[17px]'>Популярно сегодня</h2>
			<hr className='border-[#312F40] mt-[9px]' />
			<div className='grid grid-cols-2 px-[10px] gap-2 mt-5 self-center'>
				{mangas.map(manga => (
					<TitleCard key={manga.id} manga={manga} />
				))}
			</div>
		</div>
	)
}

export default TitleCardList

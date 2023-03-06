import React from 'react'
import mangas from '../../data'
import TitleCard from './TitleCard'

function TitleCardList() {
	return (
		<div className='text-white w-full mt-[13px]'>
			<h2 className='text-left px-[17px]'>Популярно сегодня</h2>
			<hr className='border-[#312F40] mt-[9px]' />
			<div className='grid grid-cols-2 px-[17px] gap-2 mt-5'>
				{mangas.map(manga => (
					<TitleCard manga={manga} />
				))}
			</div>
		</div>
	)
}

export default TitleCardList

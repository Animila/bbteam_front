import React from 'react'
import TitlePopular from './TitlePopular'
import TitlePopularFilter from './TitlePopularFilter'
import mangas from '../../data'

function TitlePopularList() {
	return (
		<div className='bg-[#222222] mt-[26px] text-white py-[13px]'>
			<h2 className='ml-[17px] font-bold text-[17px]'>Популярно</h2>
			<hr className='border-[#312F40] mt-[10px]' />
			<TitlePopularFilter />
			{mangas.map(manga => (
				<TitlePopular key={manga.id} manga={manga} />
			))}
		</div>
	)
}

export default TitlePopularList

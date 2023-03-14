import React from 'react'
import TitlePopular from './TitlePopular'
import TitlePopularFilter from './TitlePopularFilter'
import mangas from '../../../public/data'

const TitlePopularList = () => {
	return (
		<div className='bg-main_content mt-[26px] text-white py-[13px]'>
			<h2 className='ml-[17px] font-bold text-[17px]'>Популярно</h2>
			<hr className='border-border_block mt-[10px]' />
			<TitlePopularFilter />
			{mangas.map(manga => (
				<TitlePopular key={manga.id} manga={manga} />
			))}
		</div>
	)
}

export default TitlePopularList

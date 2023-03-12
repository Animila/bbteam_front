import React from 'react'
import mangas from '../../data'
import TitleProject from './TitleProject'

function TitleProjectList() {
	return (
		<div className='bg-[#222222] pb-[20px] mb-[26px]'>
			<div className='grid grid-cols-2 px-[10px] gap-2 mt-5 self-center'>
				{mangas.map(manga => (
					<TitleProject key={manga.id} manga={manga} />
				))}
			</div>
			<button
				type='submit'
				className='block mx-auto mt-5  bg-[#2EC4B6] font-bold text-black text-[14px] rounded-sm py-[4px] px-[25px] '
			>
				Дальше
			</button>
		</div>
	)
}

export default TitleProjectList

import React from 'react'
import mangas from '../../../public/data'
import TitleUpdate from './TitleUpdate'

function TitleUpdateList() {
	return (
		<div className='bg-main_content pb-5'>
			<div className='text-white text-[15px] flex justify-between items-center pl-4 pr-[14px] py-2 mt-[5px]'>
				<h2>Последние обновления</h2>
				<div className='w-[121px] h-[29px] flex justify-center items-center text-black bg-main_action text-[11px] rounded font-bold'>
					Посмотреть всё
				</div>
			</div>
			<hr className='border-border_block' />
			{mangas.map(manga => (
				<TitleUpdate key={manga.id} manga={manga} />
			))}

			<button
				type='submit'
				className='block mx-auto mt-5  bg-main_action font-bold text-black text-[14px] rounded-sm py-[4px] px-[25px]'
			>
				Дальше
			</button>
		</div>
	)
}

export default TitleUpdateList

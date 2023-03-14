import React from 'react'
import mangas from '../../../public/data'
import TitleProject from './TitleBookmarks'

const TitleBookmarksList = (props) => {
	return (
		<div className='bg-main_content pb-[20px] mb-[26px]'>
			<div className='grid grid-cols-2 px-[10px] gap-2 mt-5 self-center'>
				{mangas.map(manga => (
					<TitleProject
						key={manga.id}
						manga={manga}
						stateDelete={props.stateDelete}
					/>
				))}
			</div>
			<button
				type='submit'
				className='block mx-auto mt-5  bg-main_action font-bold text-black text-[14px] rounded-sm py-[4px] px-[25px] '
			>
				Дальше
			</button>
		</div>
	)
}

export default TitleBookmarksList

import React, { useState } from 'react'
import TitleBookmarksList from '../components/TitleBookmarks/TitleBookmarksList'
import TitlePopularList from '../components/TitlePopular/TitlePopularList'

function BookmarksPage() {
	const [inDelete, setInDelete] = useState(false)

	const handlerDelete = () => {
		setInDelete(!inDelete)
	}

	return (
		<div className='bg-[#16151D] text-white'>
			<div className='flex items-center justify-between'>
				<h2 className='text-white text-[15px] mt-[12px] ml-[16px] mb-[12px]'>
					Закладки
				</h2>
				<div
					className='bg-[#E53427] w-[76px] h-[28px] flex justify-center items-center text-[12px] rounded-[2px] mr-[16px]'
					onClick={handlerDelete}
				>
					Удалить
				</div>
			</div>
			<hr className='border-[#312F40]' />
			<TitleBookmarksList stateDelete={inDelete} />
			<TitlePopularList />
		</div>
	)
}

export default BookmarksPage

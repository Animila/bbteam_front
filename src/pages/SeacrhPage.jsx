import React from 'react'
import TitleProjectList from '../components/TitleProjects/TitleProjectList'
import TitlePopularList from '../components/TitlePopular/TitlePopularList'
import mangas from '../../public/data'

function SearchPage() {
	return (
		<div className='bg-[#16151D] text-white'>
			<h2 className='text-white text-[15px] mt-[12px] ml-[16px] mb-[12px]'>
				Найденные запросы по “...”
			</h2>
			<hr className='border-[#312F40]' />
			<TitleProjectList mangas={mangas} />
			<TitlePopularList />
		</div>
	)
}

export default SearchPage

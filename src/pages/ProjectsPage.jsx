import React from 'react'
import TitlePopularList from '../components/TitlePopular/TitlePopularList'
import TitleProjectList from '../components/TitleProjects/TitleProjectList'
import mangas from '../assets/data'

function ProjectsPage() {
	return (
		<div className='bg-[#16151D] text-white'>
			<h2 className='text-white text-[15px] mt-[12px] ml-[16px] mb-[12px]'>
				Список наших проектов
			</h2>
			<hr className='border-[#312F40]' />
			<TitleProjectList mangas={mangas} />
			<TitlePopularList />
		</div>
	)
}

export default ProjectsPage

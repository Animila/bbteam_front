import React from 'react'
import { Link } from 'react-router-dom'

function TitlesNotification({ manga }) {
	return (
		<Link className='bg-[#171717] border-[1px] border-[#383838] min-h-[104px] rounded-[5px] mx-[5px] mb-[4px] flex items-center justify-around'>
			<img src={manga.img} alt='' className='w-[57px] h-[87px] rounded-[5px]' />
			<div className='flex flex-col self-start mt-[16px]'>
				<div className='text-[11px] '>{manga.title}</div>
				<div className='text-[10px] text-[#555555] mt-[6px]'>
					Глава {manga.lastChapter}
				</div>
			</div>
			<div className='flex flex-col '>
				<div className='text-[#2EC4B6] text-[10px] font-bold mb-[7px]'>
					{manga.free ? 'Общий доступ' : 'Платный доступ'}
				</div>
				<div className='text-[9px] text-[#555555]'>{manga.time}</div>
			</div>
		</Link>
	)
}

export default TitlesNotification

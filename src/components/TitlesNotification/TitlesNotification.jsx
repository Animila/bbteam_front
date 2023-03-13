import React from 'react'
import { Link } from 'react-router-dom'

function TitlesNotification({ manga }) {
	return (
		<Link className='bg-filterBg border-[1px] border-line_list min-h-[104px] rounded-[5px] mx-[5px] mb-[4px] flex items-center justify-around'>
			<img src={manga.img} alt='' className='w-[57px] h-[87px] rounded-[5px]' />
			<div className='flex flex-col self-start mt-[16px]'>
				<div className='text-[11px] '>{manga.title}</div>
				<div className='text-[10px] text-textSpecial mt-[6px]'>
					Глава {manga.lastChapter}
				</div>
			</div>
			<div className='flex flex-col '>
				<div className='text-main_action text-[10px] font-bold mb-[7px]'>
					{manga.free ? 'Общий доступ' : 'Платный доступ'}
				</div>
				<div className='text-[9px] text-textSpecial'>{manga.time}</div>
			</div>
		</Link>
	)
}

export default TitlesNotification

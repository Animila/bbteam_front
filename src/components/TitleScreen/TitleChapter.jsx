import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const TitleChapter = ({ chapter, manga_id }) => {
	const router = useHistory()

	return (
		<div
			onClick={() => {
				router.push(`/titles/${manga_id}/chapter/${chapter.id}`)
				console.log(`/titles/${manga_id}/chapter/${chapter.id}`)
			}}
			className='flex items-center justify-between mx-[16px] px-[16px] bg-[#161616] py-[11px] border-[#2EC4B6]/20 border-[1px] rounded-[3px] mb-[6px] '
		>
			<div>
				<div className='text-[14px] font-bold'>Глава {chapter.number}</div>
				<div className='text-[11px] text-[#797979]'>{chapter.data}</div>
			</div>
			<div className='text-[12px] text-[#7E7E7E]'>{chapter.time}</div>
			<img
				src={!chapter.free && '/images/block.png'}
				alt=''
				className='max-w-[18px] max-h-[20px]'
			/>
		</div>
	)
}
export default TitleChapter

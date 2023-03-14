import React from 'react'

const TitleUpdate = ({ manga }) => {
	return (
		<div className='flex flex-col'>
			<div className='mt-[13px] mb-[20px] flex pl-5 w-full pr-[21px]'>
				<a href='#'>
					<img
						src={manga.bookJacket}
						alt=''
						className='min-w-[100px] h-[142px] rounded'
					/>
				</a>
				<div className='ml-3 w-full'>
					<h4 className='text-[16px] text-white'>{manga.titleRu}</h4>
					<div className='flex flex-col mt-[18px]'>
						{manga.chapters.slice(0).map(chapter => (
							<a
								key={chapter.number}
								className={`flex justify-between mb-[10px]`}
							>
								<span
									className={`text-[14px] ${
										chapter.future ? 'text-textSpecial' : 'text-main_action'
									}`}
								>
									Глава {chapter.number}
								</span>
								<span className='text-[11px] text-textSpecial'>
									{chapter.time}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
			<hr className='border-border_block border-[1px]' />
		</div>
	)
}

export default TitleUpdate

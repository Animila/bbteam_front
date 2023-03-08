import React from 'react'

function TitleUpdate({ manga }) {
	return (
		<div className='flex flex-col'>
			<div className='mt-[13px] mb-[20px] flex pl-5 w-full pr-[21px]'>
				<a href='#'>
					<img
						src={manga.src}
						alt=''
						className='min-w-[100px] h-[142px] rounded'
					/>
				</a>
				<div className='ml-3 w-full'>
					<h4 className='text-[16px] text-white'>{manga.title}</h4>
					<div className='flex flex-col mt-[25px]'>
						{manga.chapters
							.slice(0)
							.reverse()
							.map(chapter => (
								<a key={chapter.number} className={`flex justify-between `}>
									<span
										className={`text-[14px] ${
											chapter.future ? 'text-[#555555]' : 'text-[#2EC4B6]'
										}`}
									>
										Глава {chapter.number}
									</span>
									<span className='text-[11px] text-[#555555]'>
										{chapter.time}
									</span>
								</a>
							))}
					</div>
				</div>
			</div>
			<hr className='border-[#312F40] border-[1px]' />
		</div>
	)
}

export default TitleUpdate

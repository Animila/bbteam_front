import React from 'react'
import { Link } from 'react-router-dom'

const SocialNotification = ({ comment }) => {
	return (
		<Link className='bg-filterBg border-[1px] border-line_list min-h-[104px] rounded-[5px] mx-[5px] mb-[4px] flex flex-col justify-center'>
			<div className='flex items-center justify-around'>
				<img
					src={comment.imgUser}
					alt=''
					className='w-[53px] h-[53px] rounded-full'
				/>
				<div className=' text-[10px] font-bold mb-[7px]'>
					Пользователь {comment.nameUser} <br />
					<span className='text-main_action'>
						{comment.typeAction == 'like'
							? 'оценил ваш комментарий'
							: 'ответил вам'}
					</span>
					{': '}
					<br />
					<span>{comment.messagePost}</span>
				</div>
			</div>

			<div className='text-[9px] text-textSpecial self-end mr-[12px]'>
				{comment.time}
			</div>
		</Link>
	)
}

export default SocialNotification

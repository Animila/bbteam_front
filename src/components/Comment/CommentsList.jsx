import React, { useEffect, useRef } from 'react'
import comments from '../../../public/comments'
const CommentsList = () => {
	const textareaRef = useRef(null)

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.scrollTop = textareaRef.current.scrollHeight
		}
	}, [comments])
	return (
		<div className='text-white font-bold mt-[25px]'>
			<h4 className='ml-[28px] text-[18px]'>
				Комментарии <span className='text-main_action'>{comments.length}</span>{' '}
			</h4>
			<div className=' w-full px-[17px] mt-[18px]'>
				<div className='bg-[#0E0E0E] flex items-center justify-between	 min-h-[111px] pr-[30px] pl-[26px] rounded-[9px] border-[#323232] border-[1px]'>
					{' '}
					<textarea
						name=''
						id=''
						placeholder='Введите ваш текст'
						className='bg-transparent outline-none self-start mt-[10px] mr-[30px] min-h-[111px] h-auto resize-none placeholder:text-[#404040] placeholder:text-[14px]'
					></textarea>
					<svg
						width='26'
						height='25'
						viewBox='0 0 26 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1.74772 0.0400753C1.36105 0.134045 0.983245 0.433575 0.820905 0.777151C0.750066 0.926916 0.741211 0.982708 0.741211 1.24113V1.53478L2.35871 5.83685C3.24715 8.20078 3.97915 10.1389 3.98211 10.1448C3.98801 10.1477 7.20234 10.6851 11.1251 11.3341C15.0478 11.986 18.2592 12.5234 18.2592 12.5322C18.2592 12.541 15.0478 13.0784 11.1251 13.7303C7.20234 14.3793 3.98801 14.9167 3.98211 14.9196C3.97915 14.9255 3.26486 16.8225 2.39413 19.1395C1.41123 21.7618 0.800244 23.4298 0.779582 23.5502C0.708743 23.9466 0.853373 24.3754 1.15444 24.6573C1.50864 24.9891 1.9809 25.086 2.45906 24.9216C2.54466 24.8922 3.7873 24.2814 5.21884 23.5649C8.26198 22.0378 22.8962 14.7199 24.4251 13.9564C25.2545 13.5453 25.4936 13.4102 25.5969 13.3104C26.0485 12.8611 26.0249 12.1035 25.5467 11.6277C25.3637 11.4427 25.9334 11.7335 12.6068 5.0704C5.82688 1.67867 2.59779 0.0811863 2.46792 0.045948C2.23474 -0.0127831 1.9809 -0.0157204 1.74772 0.0400753Z'
							fill='#2EC4B6'
						/>
					</svg>
				</div>
			</div>
			<div className='text-[#5C5C5C] flex items-center justify-between px-[30px] mt-[14px]'>
				<div className='flex'>
					<input type='checkbox' />
					<div className='text-[16px] ml-[7px]'>Спойлер</div>
				</div>
				<div className='text-[12px]'>0/500 Символов</div>
			</div>
			<div className='mt-[22px]'>
				{comments.map(comment => (
					<div
						className={`mx-[16px] border-main_action border-[1px] border-l-[3px] rounded-[10px] bg-[#0E0E0E] flex min-h-[123px] items-center mb-[12px] relative ${
							comment.pinned ? 'border-[#DE3333]' : 'border-main_action'
						}`}
						key={comment.id}
					>
						{!comment.pinned && (
							<svg
								width='18'
								height='14'
								viewBox='0 0 18 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='absolute top-[10px] right-[15px]'
							>
								<path
									d='M7.35911 10.2785L1.34265 6.01033C1.20094 5.9276 1.08351 5.8098 1.00193 5.66855C0.920347 5.5273 0.877441 5.36748 0.877441 5.20485C0.877441 5.04222 0.920347 4.8824 1.00193 4.74115C1.08351 4.59991 1.20094 4.4821 1.34265 4.39937L7.35911 0.128618C7.50253 0.0452743 7.66571 0.000905012 7.8321 1.36988e-05C7.99849 -0.000877614 8.16215 0.0417407 8.30648 0.123543C8.4508 0.205345 8.57065 0.323419 8.65386 0.465777C8.73707 0.608136 8.78067 0.769711 8.78024 0.934101V2.60102C10.7559 2.60102 16.6828 2.60102 17.9999 13.0111C14.7071 7.15545 8.78024 7.80608 8.78024 7.80608V9.473C8.78024 10.2017 7.98209 10.6415 7.35911 10.2798V10.2785Z'
									fill='#888888'
								/>
							</svg>
						)}

						<img
							src='/images/avatar.png'
							alt=''
							className='w-[43px] h-[42px] rounded-full mr-[10px] ml-[10px]'
						/>
						<div>
							<div className='flex items-center '>
								<h4 className='text-[12px]'>I sheesh man</h4>
								<span className='text-[11px] text-[#686868] ml-[9px]'>
									{comment.time}
								</span>
							</div>
							<div className='text-[11px] font-medium mt-[5px] mb-[7px] leading-3 text-white pr-[17px]'>
								{comment.message}
							</div>
							<p className='text-[12px] leading-3'></p>
							{!comment.pinned && (
								<div className='flex items-center'>
									<div className='flex items-center'>
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M15.3842 3.38925C15.1399 2.79595 14.7877 2.25832 14.3473 1.80643C13.9065 1.3532 13.3868 0.993027 12.8165 0.745492C12.2251 0.487794 11.5907 0.355889 10.9503 0.357435C10.0519 0.357435 9.17534 0.615502 8.41358 1.10296C8.23134 1.21957 8.05821 1.34765 7.8942 1.4872C7.73018 1.34765 7.55706 1.21957 7.37482 1.10296C6.61306 0.615502 5.73649 0.357435 4.83805 0.357435C4.19111 0.357435 3.56421 0.487425 2.97193 0.745492C2.3997 0.994001 1.88396 1.35147 1.44112 1.80643C1.0001 2.25781 0.647799 2.79557 0.404186 3.38925C0.150874 4.0067 0.0214844 4.66238 0.0214844 5.33717C0.0214844 5.97374 0.145407 6.63707 0.391429 7.31186C0.597359 7.87579 0.892586 8.46074 1.26982 9.05143C1.86756 9.9862 2.68946 10.9611 3.71 11.9494C5.40117 13.5877 7.07595 14.7193 7.14702 14.7652L7.57893 15.0558C7.77028 15.1839 8.0163 15.1839 8.20765 15.0558L8.63956 14.7652C8.71063 14.7174 10.3836 13.5877 12.0766 11.9494C13.0971 10.9611 13.919 9.9862 14.5168 9.05143C14.894 8.46074 15.191 7.87579 15.3951 7.31186C15.6412 6.63707 15.7651 5.97374 15.7651 5.33717C15.7669 4.66238 15.6375 4.0067 15.3842 3.38925Z'
												fill='#2EC4B6'
											/>
										</svg>
										<span className='text-[12px] ml-[7px]'>
											{comment.likes}
										</span>
									</div>
									<div className='flex items-center ml-[14px]'>
										<svg
											width='17'
											height='17'
											viewBox='0 0 17 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M1.55367 0.617188L15.5985 14.8316L14.5182 15.9248L11.6556 13.0278L8.57608 16.1513L2.09762 9.58574C1.34462 8.7309 0.930677 7.62439 0.935473 6.4792C0.940268 5.33402 1.36346 4.2311 2.12359 3.38275L0.472656 1.7112L1.55367 0.617188ZM14.8735 3.21807C15.7011 4.05554 16.1809 5.18167 16.2144 6.36563C16.2479 7.54959 15.8327 8.70168 15.0538 9.58574L13.8047 10.8506L4.95486 1.89521C5.60451 1.81279 6.26406 1.87251 6.88893 2.07032C7.5138 2.26813 8.08941 2.59942 8.57684 3.04179C9.44973 2.25101 10.5887 1.82861 11.7598 1.8614C12.9309 1.89418 14.0451 2.37966 14.8735 3.21807Z'
												fill='#9D4942'
											/>
										</svg>
										<span className='text-[12px] ml-[7px]'>
											-{comment.unlike}
										</span>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CommentsList

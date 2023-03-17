import React from 'react'

const TitleHeader = ({ manga }) => {
	return (
		<div
			className={`w-screen min-h-[450px] flex flex-row items-start justify-center bg-no-repeat bg-top relative pt-[27px]`}
			style={{
				backgroundImage: `url("${manga.bookJacket}")`,
			}}
		>
			<div
				className='flex flex-col justify-center absolute inset-0 w-screen min-h-[470px]'
				style={{
					backdropFilter: 'blur(40px)',
				}}
			></div>
			<div className='z-[1] flex flex-col justify-center mx-[40%] items-center mb-[17px]'>
				<div className='  '>
					<img
						src={`${manga.bookJacket}`}
						alt='1'
						className='max-w-[200px] max-h-[290px] self-center rounded-[6px]'
					/>
				</div>
				<div className='text-white font-sansmedium font-medium text-[21px] flex-nowrap whitespace-nowrap text-center mt-[17px]'>
					{manga.titleRu}
				</div>
				<div className='text-[11px] mt-[10px]'>
					{manga.titleEng} / {manga.titleKorean}
				</div>
				<div className='flex mt-[13px]'>
					<div className='flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='2'
							stroke='currentColor'
							className='w-6 h-6 text-main_action'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>

						<span className='font-sans-bold text-[15px] ml-[10px]'>
							{manga.views}
						</span>
					</div>
					<div className='flex items-center ml-[20px]'>
						<svg
							width='16'
							height='22'
							viewBox='0 0 16 22'
							strokeWidth='3'
							xmlns='http://www.w3.org/2000/svg'
							className='text-main_action'
						>
							<path
								d='M13.5864 0.809082H5.31742C4.86123 0.811547 4.42437 1.00996 4.10179 1.3612C3.77921 1.71243 3.59698 2.18811 3.59471 2.68482V4.56056H2.56109C2.1049 4.56303 1.66803 4.76144 1.34545 5.11268C1.02287 5.46392 0.840643 5.93959 0.838379 6.43631V19.9416C0.83883 20.1521 0.893044 20.3584 0.994961 20.5372C1.09688 20.7161 1.24248 20.8606 1.41549 20.9545C1.55815 21.0283 1.71406 21.0668 1.872 21.0671C2.10015 21.0701 2.32225 20.9873 2.50079 20.8326L6.35105 17.6063L10.2013 20.8326C10.3538 20.9611 10.5362 21.0407 10.728 21.0622C10.9198 21.0838 11.1133 21.0465 11.2866 20.9545C11.4596 20.8606 11.6052 20.7161 11.7071 20.5372C11.8091 20.3584 11.8633 20.1521 11.8637 19.9416V15.5899L13.6467 17.0811C13.8253 17.2358 14.0474 17.3186 14.2755 17.3156C14.4335 17.3153 14.5894 17.2769 14.732 17.2031C14.905 17.1091 15.0506 16.9646 15.1526 16.7858C15.2545 16.6069 15.3087 16.4007 15.3091 16.1902V2.68482C15.3069 2.18811 15.1247 1.71243 14.8021 1.3612C14.4795 1.00996 14.0426 0.811547 13.5864 0.809082V0.809082ZM9.79647 17.6532L6.97984 15.2992C6.8 15.1471 6.57877 15.0645 6.35105 15.0645C6.12333 15.0645 5.9021 15.1471 5.72226 15.2992L2.90563 17.6532V6.81145H9.79647V17.6532ZM13.2419 13.9018L11.8637 12.7482V6.43631C11.8615 5.93959 11.6792 5.46392 11.3567 5.11268C11.0341 4.76144 10.5972 4.56303 10.141 4.56056H5.66197V3.05997H13.2419V13.9018Z'
								fill='#2EC4B6'
							/>
						</svg>

						<span className='font-sans-bold text-[15px] ml-[10px]'>
							{manga.bookmarks / 1000 + 'K'}
						</span>
					</div>
				</div>
				<div
					className={`
						bg-main_action text-black
				 flex justify-center items-center w-[170px] h-[42px] rounded-[2px] mt-[13px] font-bold`}
				>
					<svg
						width='16'
						height='22'
						viewBox='0 0 16 22'
						strokeWidth='3'
						xmlns='http://www.w3.org/2000/svg'
						className='text-main_action'
					>
						<path
							d='M13.5864 0.809082H5.31742C4.86123 0.811547 4.42437 1.00996 4.10179 1.3612C3.77921 1.71243 3.59698 2.18811 3.59471 2.68482V4.56056H2.56109C2.1049 4.56303 1.66803 4.76144 1.34545 5.11268C1.02287 5.46392 0.840643 5.93959 0.838379 6.43631V19.9416C0.83883 20.1521 0.893044 20.3584 0.994961 20.5372C1.09688 20.7161 1.24248 20.8606 1.41549 20.9545C1.55815 21.0283 1.71406 21.0668 1.872 21.0671C2.10015 21.0701 2.32225 20.9873 2.50079 20.8326L6.35105 17.6063L10.2013 20.8326C10.3538 20.9611 10.5362 21.0407 10.728 21.0622C10.9198 21.0838 11.1133 21.0465 11.2866 20.9545C11.4596 20.8606 11.6052 20.7161 11.7071 20.5372C11.8091 20.3584 11.8633 20.1521 11.8637 19.9416V15.5899L13.6467 17.0811C13.8253 17.2358 14.0474 17.3186 14.2755 17.3156C14.4335 17.3153 14.5894 17.2769 14.732 17.2031C14.905 17.1091 15.0506 16.9646 15.1526 16.7858C15.2545 16.6069 15.3087 16.4007 15.3091 16.1902V2.68482C15.3069 2.18811 15.1247 1.71243 14.8021 1.3612C14.4795 1.00996 14.0426 0.811547 13.5864 0.809082V0.809082ZM9.79647 17.6532L6.97984 15.2992C6.8 15.1471 6.57877 15.0645 6.35105 15.0645C6.12333 15.0645 5.9021 15.1471 5.72226 15.2992L2.90563 17.6532V6.81145H9.79647V17.6532ZM13.2419 13.9018L11.8637 12.7482V6.43631C11.8615 5.93959 11.6792 5.46392 11.3567 5.11268C11.0341 4.76144 10.5972 4.56303 10.141 4.56056H5.66197V3.05997H13.2419V13.9018Z'
							fill='black'
						/>
					</svg>
					<span className='ml-[12px] text-[15px]'>В закладки</span>
				</div>
			</div>
		</div>
	)
}

export default TitleHeader

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResultList'

function InputSearch({ handlerIsSearch }) {
	const [searchText, setSearchText] = useState('')
	const [onSearch, setOnSearch] = useState(false)

	return (
		<div className='fixed top-0 left-0 h-[60px] w-full z-[4] bg-black flex items-center justify-around pl-[7px] pr-[7px]'>
			<div
				className='fixed left-0 top-0 bg-black/80 w-full h-full z-[4]'
				onClick={handlerIsSearch}
			></div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth='3'
				stroke='currentColor'
				className='w-8 h-8 text-white z-[5]'
				onClick={handlerIsSearch}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.75 19.5L8.25 12l7.5-7.5'
				/>
			</svg>

			<div className='relative z-[4]'>
				<div className='rounded-md bg-[#17151B] border-[#23202A] border-[1px] h-[34px] flex items-center px-[10px] justify-around w-full '>
					<Link to='/search' onClick={handlerIsSearch}>
						<i className='fa-sharp fa-solid fa-magnifying-glass text-white ' />
					</Link>
					<input
						type='text'
						placeholder='Поиск'
						className='bg-transparent outline-none text-white text-[12px] w-full ml-[8px] z-[1]'
						onChange={e => {
							setSearchText(e.target.value)
							setOnSearch(e.target.value != '')
						}}
						value={searchText}
					/>
				</div>
				{onSearch && <SearchResult />}
			</div>
			<Link
				className='text-[#2EC4B6] text-[14px] z-[4] ml-[8px]'
				to='/search'
				onClick={handlerIsSearch}
			>
				Найти
			</Link>
		</div>
	)
}

export default InputSearch

import React, { useEffect, useState } from 'react'
import TitlePopular from './TitlePopular'

function TitlePopularFilter() {
	var selectIndex = 0
	const [data, setData] = useState([
		{
			id: 0,
			active: true,
			title: 'За день',
		},
		{
			id: 1,
			active: false,
			title: 'За неделю',
		},
		{
			id: 2,
			active: false,
			title: 'За месяц',
		},
	])

	function selectItem(id) {
		const select = data.map(item => {
			if (item.id == id) {
				selectIndex = item.id
				return { ...item, active: true }
			} else {
				return { ...item, active: false }
			}
		})
		setData(select)
		console.log(selectIndex)
	}

	return (
		<div className='block bg-[#333333] h-10 mx-3 rounded-md my-auto'>
			<div className='flex items-center justify-around py-[7px] w-full'>
				{data.map(item => (
					<div
						key={item.id}
						className={`${
							item.active ? 'bg-[#2EC4B6] text-black' : ''
						} w-[90px] h-[26px] text-[14px]   flex items-center justify-around rounded-md font-bold`}
						onClick={() => selectItem(item.id)}
					>
						{item.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default TitlePopularFilter

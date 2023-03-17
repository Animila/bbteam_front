import React from 'react'

const TitleSelect = ({ subMenu, setSubMenu }) => {
	function handlerMenu(title) {
		const select = subMenu.map(item => {
			if (item.title == title) {
				return { ...item, active: true }
			} else {
				return { ...item, active: false }
			}
		})
		setSubMenu(select)
	}

	return (
		<div className='text-white '>
			<div className='flex justify-around text-textFilterTitle items-center h-[48px]'>
				{subMenu.map(obj => (
					<div
						key={obj.title}
						className={`${obj.active ? 'text-main_action' : ''}
						 h-6 mb-[9px] relative text-[16px] font-bold
						`}
						onClick={() => handlerMenu(obj.title)}
					>
						{obj.title}
					</div>
				))}
			</div>
			<hr className='border-white opacity-[.15]' />
		</div>
	)
}

export default TitleSelect

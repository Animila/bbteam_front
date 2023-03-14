import React, { useState } from 'react'
import AccountError from './AccountError'
import AccountSuccess from './AccountSuccecs'

const AccountModal = ({ handlerModal, success }) => {
	return (
		<div className='fixed z-[99]'>
			<div
				className='fixed left-0 top-0 bg-black/80 w-full h-full z-[2]'
				onClick={handlerModal}
			></div>
			<div className='flex items-center text-white z-[9] fixed bg-bgForm z-99 min-h-[188px] rounded-xl top-[45%] translate-y-[-50%] left-7 right-7 border-[#3D3D3D] border-[1px] pt-[35px] pb-[30px]'>
				{success ? <AccountSuccess /> : <AccountError />}
			</div>
		</div>
	)
}

export default AccountModal

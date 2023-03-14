import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return (
		<div className='text-white font-bold text-center h-screen'>
			<h2 className='mt-[25px] '>404 ошибка</h2>
			<p className='text-[12px] mt-[5px]'>Похоже вы ошиблись страницей</p>
			<Link
				to='/'
				className='bg-main_action text-black px-5 py-3 rounded-sm mt-10 mb-9 block w-[200px] mx-auto'
			>
				{' '}
				Домой{' '}
			</Link>
		</div>
	)
}
export default ErrorPage

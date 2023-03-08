import React, { useState } from 'react'
import axios from 'axios'

function ForgotPasswordForm(props) {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [send, setSend] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		setSend(true)

		try {
			await axios
				.post('...', {
					email: email,
				})
				.then(response => {
					// обработка успешного ответа
					setSend(false)
				})
				.catch(error => {
					// обработка ошибки
					console.log(error)
					setSend(false)
				})
		} catch (error) {
			setError(error)
			setSend(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col text-white z-[9] fixed bg-[#0D0D0D] z-99 rounded-xl top-[50%] translate-y-[-50%] left-2 right-2'
		>
			<div
				className='flex items-center mt-5 ml-4'
				onClick={props.switchToLogin}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 19.5L8.25 12l7.5-7.5'
					/>
				</svg>
				<p className='text-[#B3B3B3] text-[18px]'>Назад</p>
			</div>
			<h2 className={`text-center text-[25px] mt-[25px]`}>
				Восстановление <br /> пароля
			</h2>
			{error && <div className='error'>{error}</div>}
			<div className='flex flex-col items-center mt-[20px]'>
				<input
					type='email'
					name='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Введите ваш email'
					required
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-[#C3C3C3] bg-[#151515] px-[23px] py-[16px] w-[303px] mb-[7px]'
				/>

				<button
					type='submit'
					className='mt-[27px] bg-[#2EC4B6] font-bold text-black rounded-sm w-fit py-[11px] px-[75px] mb-[37px]'
					disabled={send}
				>
					Отправить
				</button>
			</div>
		</form>
	)
}

export default ForgotPasswordForm

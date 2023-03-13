import React, { useState } from 'react'
import axios from 'axios'

function LoginForm(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [send, setSend] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()
		// setSend(true)
		localStorage.setItem('access_token', '123')
		props.handleActiveLogin
		window.location.reload()

		// try {
		// 	await axios
		// 		.post('http://bbteam.ru/api/login', {
		// 			email: email,
		// 			password: password,
		// 		})
		// 		.then(response => {
		// 			// обработка успешного ответа
		// 			localStorage.setItem('access_token', response.data.access_token)
		// 			localStorage.setItem('expires_in', response.data.expires_in)
		// 			props.handleActiveLogin()
		// 			setSend(false)
		// 		})
		// 		.catch(error => {
		// 			// обработка ошибки
		// 			console.log(error)
		// 			setSend(false)
		// 		})
		// } catch (error) {
		// 	setError(error)
		// 	setSend(false)
		// }
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col text-white z-[9] fixed bg-bgForm z-99 min-h-[437px] rounded-xl top-[50%] translate-y-[-50%] left-2 right-2'
		>
			<a className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-[#0061A1] px-[23px] py-[16px] w-[303px] block mx-auto mt-[52px]'>
				Войти через Вконтакте
			</a>
			<h2 className={`text-center text-[25px] mt-[25px]`}>Войти в аккаунт</h2>
			{error && <div className='error'>{error}</div>}
			<div className='flex flex-col items-center mt-[20px]'>
				<input
					type='email'
					name='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder='Введите ваше email'
					required
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-bgInput px-[23px] py-[16px] w-[303px] mb-[7px]'
				/>
				<input
					type='password'
					name='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Введите ваш пароль'
					required
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-bgInput px-[23px] py-[16px] w-[303px]'
				/>

				<button
					type='submit'
					className='mt-[27px] bg-main_action font-bold text-black rounded-sm w-fit py-[11px] px-[75px]'
					disabled={send}
				>
					Войти
				</button>
				<a
					className='text-[16px] text-textForm mt-[24px]'
					onClick={props.switchToForgotPassword}
				>
					Забыли пароль?
				</a>
				<a
					className='text-[16px] text-textForm mt-[20px] mb-[22px]'
					onClick={props.switchToRegister}
				>
					Зарегистрироваться
				</a>
			</div>
		</form>
	)
}

export default LoginForm

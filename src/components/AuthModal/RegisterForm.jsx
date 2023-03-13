import React, { useState } from 'react'
import axios from 'axios'

function RegisterForm(props) {
	const [nickname, setNickname] = useState('')
	const [name, setName] = useState('')
	const [gender, setGender] = useState()
	const [password, setPassword] = useState('')
	const [currentPassword, setCurrentPassword] = useState('')
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const response = await axios.post('http://bbteam.ru/api/register', {
				nickname: nickname,
				name: name,
				gender: gender,
				password: password,
				email: email,
			})
			console.log(response.status)
			console.log(response.data)
			console.log(response.statusText)
		} catch (error) {
			setError(error)
		}
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col text-white z-[9] fixed bg-bgForm z-99 h-[608px] rounded-xl top-[50%] translate-y-[-50%] left-2 right-2'
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

			<h2 className='text-center text-[25px] mt-[26px]'>Регистрация</h2>
			{error && <div className='error'>{error}</div>}
			<div className='flex flex-col items-center mt-[15px]'>
				<input
					type='text'
					name='nickname'
					value={nickname}
					onChange={e => setNickname(e.target.value)}
					placeholder='Введите ваш никнейм'
					required
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-bgInput px-[23px] py-[16px] w-[303px] mb-[7px]'
				/>
				<input
					type='text'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					placeholder='Введите ваше имя'
					required
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-bgInput px-[23px] py-[16px] w-[303px] mb-[7px]'
				/>
				<select
					name='gender'
					value={gender}
					onChange={e => setGender(e.currentTarget.value)}
					className='rounded-sm text-white outline-none text-[15px] placeholder:text-[14px] placeholder:text-placeholderInput bg-bgInput px-[23px] py-[16px] w-[303px] mb-[7px]'
					required
				>
					<option value={0} selected>
						Не выбрано
					</option>
					<option value={1}>Мужской</option>
					<option value={2}>Женский</option>
				</select>
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

				<p className='font-normal text-[12px] mt-[25px]'>
					Регистрируясь, вы соглашаетесь с условиями <br />{' '}
					<span className='text-main_action'>пользовательского соглашения</span>
				</p>

				<button
					type='submit'
					className='mt-[27px] bg-main_action font-bold text-black rounded-sm w-fit py-[11px] px-[15px]'
				>
					Зарегистрироваться
				</button>
			</div>
		</form>
	)
}

export default RegisterForm

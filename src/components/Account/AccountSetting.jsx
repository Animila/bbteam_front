import React, { useState } from 'react'

const AccountSetting = (props) => {
	const [onName, setOnNAme] = useState(true)
	const [name, setName] = useState(props.user.name)
	const [onPassword, setOnPassword] = useState(true)
	const [password, setPassword] = useState(props.user.password)
	const [onEmail, setOnEmail] = useState(true)
	const [email, setEmail] = useState(props.user.mail)

	return (
		<form action='' className='mx-6 pt-[35px]'>
			<div className='w-full px-[22px] h-[56px] bg-settingInput border-[#3D3D3D] border-[1px] rounded-[3px] flex items-center justify-around'>
				<input
					name='name'
					type='text'
					className='bg-transparent outline-none text-[15px] w-full'
					value={name}
					onChange={e => setName(e.target.value)}
					disabled={onName}
				/>
				{onName ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnNAme(!onName)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnNAme(!onName)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
						/>
					</svg>
				)}
			</div>
			<div className='w-full h-[56px] px-[22px] mt-4 bg-settingInput border-[#3D3D3D] border-[1px] rounded-[3px] flex items-center justify-around'>
				<input
					name='password'
					type={`${onPassword ? 'password' : 'text'}`}
					className='bg-transparent outline-none text-[15px] w-full'
					value={password}
					onChange={e => setPassword(e.target.value)}
					disabled={onPassword}
				/>
				{onPassword ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnPassword(!onPassword)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnPassword(!onPassword)}
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
				)}
			</div>
			<div className='w-full px-[22px] h-[56px] mt-4 bg-settingInput border-[#3D3D3D] border-[1px] rounded-[3px] flex items-center justify-around'>
				<input
					name='email'
					type='text'
					className='bg-transparent outline-none text-[15px] w-full'
					value={email}
					onChange={e => setEmail(e.target.value)}
					disabled={onEmail}
				/>
				{onEmail ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnEmail(!onEmail)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6'
						onClick={() => setOnEmail(!onEmail)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
						/>
					</svg>
				)}
			</div>
		</form>
	)
}

export default AccountSetting

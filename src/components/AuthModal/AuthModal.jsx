import React, { useState } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import ForgotPasswordForm from './ForgotPasswordForm'

const AuthModal = (props) => {
	const [formType, setFormType] = useState('login')

	const switchToLogin = () => {
		setFormType('login')
	}

	const switchToRegister = () => {
		setFormType('register')
	}

	const switchToForgotPassword = () => {
		setFormType('forgotPassword')
	}

	return (
		<div className={`fixed z-[99] ${props.activeAuthModal ? '' : 'hidden'}	`}>
			<div
				className='fixed left-0 top-0 bg-black/80 w-full h-full z-[2]'
				onClick={props.handlerActiveAuthModal}
			></div>
			{formType === 'login' && (
				<LoginForm
					switchToRegister={switchToRegister}
					switchToForgotPassword={switchToForgotPassword}
				/>
			)}
			{formType === 'register' && (
				<RegisterForm switchToLogin={switchToLogin} />
			)}
			{formType === 'forgotPassword' && (
				<ForgotPasswordForm switchToLogin={switchToLogin} />
			)}
		</div>
	)
}

export default AuthModal

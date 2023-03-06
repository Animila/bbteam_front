import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const checkAuth = async () => {
		const access_token = localStorage.getItem('access_token')
		const expires_in = localStorage.getItem('expires_in')

		console.log(access_token)
		console.log(expires_in)

		if (access_token && expires_in) {
			const now = new Date().getTime() / 1000
			console.log('Now:' + now)
			console.log('Old:' + expires_in)
			if (expires_in > now) {
				axios.defaults.headers.common[
					'Authorization'
				] = `Bearer ${access_token}`
				setIsLoggedIn(true)
			} else {
				localStorage.removeItem('access_token')
				localStorage.removeItem('expires_in')
			}
		}
	}

	useEffect(() => {
		checkAuth()
	}, [])

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider

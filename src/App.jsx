import './App.css'
import Header from './components/Header/Header'
import React, { useEffect, useState } from 'react'
import { AuthContext } from './context'
import Footer from './components/Footer'
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)
	const [countTitleNotification, setCountTitleNotification] = useState(0)
	const [countSocialNotification, setCountSocialNotification] = useState(0)
	const [countNotification, setCountNotification] = useState(0)

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			setIsAuth(true)
			setCountNotification(90)
			setCountTitleNotification(2)
			setCountSocialNotification(4)
		}
		setLoading(false)
	}, [])

	return (
		<>
			<AuthContext.Provider
				value={{
					isAuth,
					setIsAuth,
					isLoading,
					countNotification,
					setCountNotification,
					countTitleNotification,
					setCountTitleNotification,
					countSocialNotification,
				}}
			>
				<BrowserRouter>
					<Header />
					<AppRouter />
					<Footer />
				</BrowserRouter>

				{/* 
					
					<Route path='/chapter/:id' component={ChapterPage} />
				</Switch>
			</Router> */}
			</AuthContext.Provider>
		</>
	)
}

export default App

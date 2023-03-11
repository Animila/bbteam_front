import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import React, { useEffect, useState } from 'react'
import { AuthContext } from './context'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotificationsPage from './pages/NotificationsPage'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)
	const [countNotification, setNotification] = useState(0)

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			setIsAuth(true)
			setNotification(6)
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
					setNotification,
				}}
			>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/notification' element={<NotificationsPage />} />
					</Routes>
					<Footer />
				</BrowserRouter>

				{/* <Router>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/notifications' component={NotificationsPage} />
					<Route path='/projects' component={ProjectsPage} />
					<Route path='/search' component={SearchPage} />
					<Route path='/bookmarks' component={BookmarksPage} />
					<Route path='/user' component={UserPage} />
					<Route path='/manga/:id' component={MangaPage} />
					<Route path='/chapter/:id' component={ChapterPage} />
				</Switch>
			</Router> */}
			</AuthContext.Provider>
		</>
	)
}

export default App

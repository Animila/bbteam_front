import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import React, { useEffect, useState } from 'react'
import { AuthContext } from './context'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotificationsPage from './pages/NotificationsPage'
import ProjectsPage from './pages/ProjectsPage'
import BookmarksPage from './pages/BookmarksPage'
import SearchPage from './pages/SeacrhPage'
import AccountPage from './pages/AccountPage'

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
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/notification' element={<NotificationsPage />} />
						<Route path='/projects' element={<ProjectsPage />} />
						<Route path='/bookmarks' element={<BookmarksPage />} />
						<Route path='/search' element={<SearchPage />} />
						<Route path='/account' element={<AccountPage />} />
					</Routes>
					<Footer />
				</BrowserRouter>

				{/* 
					<Route path='/manga/:id' component={MangaPage} />
					<Route path='/chapter/:id' component={ChapterPage} />
				</Switch>
			</Router> */}
			</AuthContext.Provider>
		</>
	)
}

export default App

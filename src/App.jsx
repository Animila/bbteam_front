import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-dom'
import HomePage from './pages/HomePage'
import React, { useEffect, useState } from 'react'
import { AuthContext } from './context'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			setIsAuth(true)
		}
		setLoading(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<HomePage />
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
	)
}

export default App

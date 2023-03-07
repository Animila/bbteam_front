import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import TitleCardList from '../components/TitleCard/TitleCardList'
import TitleUpdateList from '../components/TitlesUpdates/TitleUpdateList'

function HomePage() {
	return (
		<>
			<Carousel />
			<TitleCardList />
			<TitleUpdateList />
		</>
	)
}

export default HomePage

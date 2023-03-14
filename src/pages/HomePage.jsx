import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import TitleCardList from '../components/TitleCard/TitleCardList'
import TitlePopularList from '../components/TitlePopular/TitlePopularList'
import TitleUpdateList from '../components/TitlesUpdates/TitleUpdateList'

const HomePage = () => {
	return (
		<>
			<Carousel />
			<TitleCardList />
			<TitleUpdateList />
			<TitlePopularList />
		</>
	)
}

export default HomePage

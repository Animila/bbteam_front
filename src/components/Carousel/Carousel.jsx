import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import mangas from '../../data'
import 'swiper/css'
import 'swiper/css/pagination'
import './Carousel.css'
import CarouselSlide from './CarouselSlide'

function Carousel() {
	return (
		<div className='bg-white w-full'>
			<Swiper
				slidesPerView={1}
				pagination={{ clickable: true }}
				modules={[Pagination]}
			>
				{mangas.map(manga => (
					<SwiperSlide key={manga.id}>
						<CarouselSlide manga={manga} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Carousel

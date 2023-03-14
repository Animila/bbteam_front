import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import mangas from '../../../public/data'
import 'swiper/css'
import 'swiper/css/pagination'
import CarouselSlide from './CarouselSlide'
import './Carousel.css'

const Carousel = () => {
	return (
		<div className='bg-white w-full'>
			<Swiper
				slidesPerView={1}
				style={{
					'--swiper-pagination-bullet-horizontal-gap': '1.3px',
				}}
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

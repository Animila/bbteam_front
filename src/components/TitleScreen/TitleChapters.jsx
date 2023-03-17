import React from 'react'
import TitleChapter from './TitleChapter'

const TitleChapters = ({ manga }) => {
	return (
		<div className='mt-[23px]'>
			{manga.chapters ? (
				manga.chapters
					.slice()
					.reverse()
					.map(chapter => (
						<TitleChapter
							key={chapter.id}
							chapter={chapter}
							manga_id={manga.id}
						/>
					))
			) : (
				<p>Нет глав</p>
			)}
		</div>
	)
}

export default TitleChapters

import React, { useState } from 'react'
import mangas_data from '../../assets/data'
import SearchResult from './SearchResult'
function SearchResultList() {
	const [dataSearch, setDataSearch] = useState(mangas_data)

	return (
		<div className='absolute top-8 text-white block mx-auto bg-[#0F0F0F] max-h-[300px] overflow-scroll border-[1px] border-[#3D3D3D]/80'>
			{dataSearch ? (
				dataSearch.map(manga => <SearchResult key={manga.id} manga={manga} />)
			) : (
				<div className='text-center flex items-center my-[5px] justify-around mx-[5px]'>
					Нет результата
				</div>
			)}
		</div>
	)
}
export default SearchResultList

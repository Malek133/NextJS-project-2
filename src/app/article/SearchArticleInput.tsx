'use client'
import { useState } from "react"


const SearchArticleInput = () => {

    const [searchText,setSearchText] = useState('');
    
    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        console.log({searchText})
    }

  return (
    <form  onSubmit={formSubmitHandler} className='flex flex-col'>
      
      <input className="w-full p-3 rounded text-xl 
      border-none text-black"
      type="search" id="search" 
      placeholder="Search" value={searchText} 
      onChange={(e) => setSearchText(e.target.value)} />

    </form>
  )
}

export default SearchArticleInput
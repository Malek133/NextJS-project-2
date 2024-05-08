'use client'

import { useState } from "react"
import { toast } from 'react-toastify';

const AddArticleForm = () => {

    const [title,setTitle] = useState('');
    const [des,setDes] = useState('');

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(title === "") return toast.error("title is required");
        if(des === "") return toast.error("descreption is required");
        
        console.log({title,des})
    }

  return (

    <form onSubmit={formSubmitHandler} 
    className="flex flex-col">
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="text"
                placeholder="Enter Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='mb-4 p-2 lg:text-xl rounded resize-none'
                rows={5}
                placeholder='Enter Artilce Description'
                value={des}
                onChange={(e) => setDes(e.target.value)}
            ></textarea>
            <button type="submit" className="text-xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold">
                Add
            </button>
        </form>
  )
}

export default AddArticleForm
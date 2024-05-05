'use client'

import Link from "next/link"

interface ErrorProps {
    error:Error
    rest:() => void
}

const error = ({error,rest}:ErrorProps) => {
  return (
    <div className="text-center my-3 fix-height">
      <div className=" my-3 text-center text-3xl 
       font-semibold text-red-600">
        il y a une error !!...</div>

        <h2 className="my-3 text-red-500 text-xl 
       font-semibold">
          error :  {error.message}
        </h2>
      
        <button onClick={() =>{rest()}}
      className='bg-cyan-900 text-white rounded px-4 py-1'>
      try again
      </button>
      <button 
      className='bg-black text-white mx-3 rounded px-4 py-1'>
      <Link href={'/'}>Back to home</Link>
      </button>
      
    </div>
  )
}

export default error

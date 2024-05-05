import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      About
      <button className='bg-black text-white rounded p-1'>
      <Link href={'/'}>Back to home</Link>
      </button>
    </div>
  )
}

export default AboutPage

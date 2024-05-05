import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      AdminPage
      <button className='bg-black text-white rounded p-1'>
      <Link href={'/'}>Back to home</Link>
      </button>
    </div>
  )
}

export default AdminPage
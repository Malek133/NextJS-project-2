import Link from "next/link";



const NotFoundPage = () => {
    return (
      <section className='h-96 fix-height flex justify-center items-center flex-col'>
          <h1 className='text-5xl text-gray-800 font-bold'>404</h1>
          <p className='text-gray-500 text-3xl mt-2 mb-5'>
              Page Not Found
          </p>
          <button 
      className='bg-black text-white mx-3 rounded px-4 py-1'>
      <Link href={'/'}>Back to home</Link>
      </button>
      </section>
    )
  }
  
  export default NotFoundPage;
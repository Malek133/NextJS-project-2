

 interface PaginationProps {
//    pages: number;
   pageNumber: number;
//   route: string;
 }
// { ,  route }: PaginationProps

const Pagination = ({pageNumber}:PaginationProps) => {

//     let pagesArray: number[] = [];
//   for (let i = 1; i <= pages; i++) pagesArray.push(i);

//    const prev = pageNumber - 1;
//   const next = pageNumber + 1;

 const pages = [1,2,3,4,5]

  return (
    <div className='flex items-center justify-center mt-2 mb-10'>
      {pageNumber !== 1 && ( 
        <div
        // href={`${route}?pageNumber=${prev}`} 
        className="border border-gray-700 text-gray-700 py-1 px-3 
        font-bold text-xl cursor-pointer hover:bg-gray-200 transition">
          prev
        </div>
       )} 
      {pages.map(page => (
        <div
        //  href={`${route}?pageNumber=${page}`} 
        className={`${pageNumber === page ? "bg-gray-400": ""} 
        border border-gray-700 text-gray-700 py-1 px-3 font-bold 
        text-xl cursor-pointer hover:bg-gray-200 transition`} >
          {page}
        </div>
      ))}
       {pageNumber !== pages[0] && ( 
        <div 
        // href={`${route}?pageNumber=${next}`} 
        className="border border-gray-700 text-gray-700 py-1 
        px-3 font-bold text-xl cursor-pointer hover:bg-gray-200 transition">
          next
        </div>
       )} 
    </div>
  )
}

export default Pagination;
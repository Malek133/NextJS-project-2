import ArticlesItem from "@/components/articlesItem/ArticlesItem"
import { Article } from "@/utils/Types";
import type { Metadata } from "next";
import SearchArticleInput from "./SearchArticleInput";
import Pagination from "@/components/articlesItem/Pagination";

interface ArticlesPageProps {
  searchParams: { pageNumber: number }
}

const ArticlesPage = async ({ searchParams } : ArticlesPageProps) => {

  const { pageNumber } = searchParams;


 const res = await fetch('https://jsonplaceholder.typicode.com/posts');

 if(!res.ok){
  throw new Error("Tnak Kho !");
 }
 const  articles:Article[] = await res.json(); 
 
  return (
    <section className="bg-slate-100">
    <div className="my-5 container">
      <SearchArticleInput />
      </div>
      <div className="text-center py-3">
        <p className="text-4xl font-semibold">Articles</p>
      </div>
   
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 container m-auto py-3 px-5">
      
    {articles && articles.slice(0,9).map(item =>(
      <ArticlesItem article= {item} key={item.id}/>
    ))} 
    </div> 

    <div className="container my-8 text-center">
      <Pagination pageNumber={pageNumber} />
    </div>
    
    </section>
  )
}

export default ArticlesPage

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Articles Page',
}
import ArticlesItem from "@/components/articlesItem/ArticlesItem"
import { Article } from "@/utils/Types";


const ArticlesPage = async () => {

 const res = await fetch('https://jsonplaceholder.typicode.com/posts');

 if(!res.ok){
  throw new Error("Tnak Kho !");
 }
 const  articles:Article[] = await res.json(); 
 
  return (
    <>
      <div className="text-center py-3">
        <p className="text-4xl font-semibold">Articles</p>
      </div>
   
    <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 container m-auto py-3 px-5">
      
    {articles && articles.map(item =>(
      <ArticlesItem article= {item} key={item.id}/>
    ))} 
    </section> 
    </>
  )
}

export default ArticlesPage
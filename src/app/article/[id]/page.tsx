import { Article } from "@/utils/Types";


interface SingleArticlePageProps {
  params: { id: string }
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if(!res.ok){
    throw new Error("Tnak Kho !");
   }

  const  article:Article[] = await res.json(); 

  return (
    <section className="container fix-height flex justify-center items-center">

     <span></span>
    <div className=" p-5 cursor-pointer 
    rounded h-60 w-96 bg-gray-100">
    <h1 className="text-xl font-semibold my-2">
        {article.id} - {article.title}</h1>
    <p className="py-4 my-4">{article.body}</p>
    
  </div>
  <span></span>
  </section>
  )
}

export default SingleArticlePage

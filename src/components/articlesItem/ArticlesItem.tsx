import { Article } from "@/utils/Types"
import Link from "next/link"

  interface ArticleProps {
    article:Article
  }
  

const ArticlesItem = ({article}:ArticleProps) => {
  return (
    <div className="p-5 my-1 cursor-pointer rounded border-2 border-neutral-700 w-96 hover:bg-gray-100">
        <h1 className="text-xl font-semibold line-clamp-1">
            {article.id} - {article.title}</h1>
        <p className="my-2 text-xl text-gray-700 p-1">{article.body}</p>
        <Link href={`/article/${article.id}`}>
        <p className="text-lg text-white font-medium m-2 p-2 w-full block text-center rounded bg-blue-800 hover:bg-blue-900">
           Rade me</p></Link>
      </div>
  )
}

export default ArticlesItem
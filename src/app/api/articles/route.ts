
import { Article } from '@/utils/Types';
import { articles } from '@/utils/data';
import { creatArticle } from '@/utils/dtos';
import { createArticleSchema } from '@/utils/validationSchema';
import { NextRequest, NextResponse } from 'next/server';



/**
 *  @method  GET
 *  @route   http://localhost:3003/api/articles
 *  @desc    Get All Articles 
 *  @access  public
 */

export async function GET(request: NextRequest) {
    return  NextResponse.json(articles,{status:200})
}

/**
 *  @method  POST
 *  @route   ~/api/articles
 *  @desc    Create New Article
 *  @access  private (only admin can create article)
 */

export async function POST(request: NextRequest) {
    const body = (await request.json()) as creatArticle;


    const validation = createArticleSchema.safeParse(body);

    if(!validation.success){
        return  NextResponse.json({message:validation.error.errors[0].message},
            {status:400})
    }

    const newArticle:Article = {
        title:body.title,
        body:body.body,
        id:articles.length +1,
        userId:200
    }

    articles.push(newArticle);

    return NextResponse.json(newArticle,
    {status:201})
}
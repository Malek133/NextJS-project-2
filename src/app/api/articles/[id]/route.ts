import { articles } from '@/utils/data';
import { updateArticle } from '@/utils/dtos';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
    params: { id: string }
}

/**
 *  @method  GET
 *  @route   ~/api/articles/:id
 *  @desc    Get Single Article By Id
 *  @access  public
 */

export  function GET(request: NextRequest, { params }: Props) {
    
    const article = articles.find(a =>a.id === parseInt(params.id));

    if (!article){ return NextResponse.json({message:'Article not found'},
     { status: 404 })};

    return NextResponse.json(article,{status:200})
}



/**
 *  @method  PUT
 *  @route   ~/api/articles/:id
 *  @desc    Update Single Article By Id
 *  @access  private
 */

export  async function PUT(request: NextRequest, { params }: Props) {
    
    const article = articles.find(a =>a.id === parseInt(params.id));

    if (!article){ return NextResponse.json({message:'Article not found'},
     { status: 404 })};

     const body = (await request.json()) as updateArticle;
     console.log(body)

    return NextResponse.json({message:'Article Updated'},{status:200})
}



/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    delete Single Article By Id
 *  @access  private
 */

export  async function DELETE(request: NextRequest, { params }: Props) {
    
    const article = articles.find(a =>a.id === parseInt(params.id));

    if (!article){ return NextResponse.json({message:'Article not found'},
     { status: 404 })};

    return NextResponse.json({message:'Article delete'},{status:200})
}
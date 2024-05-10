
import { articles } from '@/utils/data';
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
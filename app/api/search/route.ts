import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    if (!query) {
        return NextResponse.json({ 'error': 'Requires parameter is missing: query' }, { status: 400 })
    }
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.TMDB_API_KEY}`)
    if (!response.ok) {
        return NextResponse.json({ 'error': 'Failed to fetch results' }, { status: 400 })
    }
    const data = await response.json()
    return NextResponse.json(data)
}
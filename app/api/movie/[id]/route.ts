import { NextRequest,NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    if (!id) {
        return NextResponse.json({ 'error': 'Movie id is invalid or not found' }, { status: 400 })
    }
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
    if (!response.ok) {
        return NextResponse.json({ 'error': 'Failed to fetch results' }, { status: 400 })
    }
    const data = await response.json()
    return NextResponse.json(data)
}
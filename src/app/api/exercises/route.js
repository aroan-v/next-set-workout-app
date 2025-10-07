import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json'
    )

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

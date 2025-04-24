import { NextResponse } from "next/server"

// This would be a real API call to CodeChef in a production environment
export async function GET() {
  
  const codeChefContests = [
    {
      title: "Starters 183 (Rated till 6 star)",
      date: "2025-04-23",
      division: "Division 1",
      rank: 39,
      totalParticipants: 30000,
      rating: 2043,
      link: "https://www.codechef.com/START183A",
    },
    {
      title: "Starters 181 (Rated till 5 star)",
      date: "2025-04-09",
      division: "Division 2",
      rank: 187,
      totalParticipants: 30000,
      rating: 2007,
      link: "https://www.codechef.com/START181B",
    },
    {
      title: "Starters 179 (Rated till 6 star)",
      date: "2025-03-26",
      division: "Division 1",
      rank: 91,
      totalParticipants: 30000,
      rating: 1991,
      link: "https://www.codechef.com/START179A",
    },
  ]

  return NextResponse.json(codeChefContests)
}

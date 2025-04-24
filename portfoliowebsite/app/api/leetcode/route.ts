import { NextResponse } from "next/server"

// This would be a real API call to LeetCode in a production environment
export async function GET() {
  // Mock data for demonstration purposes
  const leetCodeContests = [
    {
      title: "Weekly Contest 443",
      date: "2025-03-30",
      rank: 46,
      totalParticipants: 26392,
      score: 20,
      link: "https://leetcode.com/contest/weekly-contest-443/ranking/?region=global_v2",
    },
    {
      title: "Weekly Contest 442",
      date: "2025-03-23",
      rank: 172,
      totalParticipants: 30923,
      score: 18,
      link: "https://leetcode.com/contest/weekly-contest-442/ranking/?region=global_v2",
    },
    {
      title: "Weekly Contest 439",
      date: "2025-03-02",
      rank: 197,
      totalParticipants: 29352,
      score: 19,
      link: "https://leetcode.com/contest/weekly-contest-439/ranking/?region=global_v2",
    },
  ]

  return NextResponse.json(leetCodeContests)
}

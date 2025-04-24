"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Trophy, Clock, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"


interface LeetCodeContest {
  title: string
  date: string
  rank: number
  totalParticipants: number
  score: number
  link: string
}

interface CodeChefContest {
  title: string
  date: string
  division: string
  rank: number
  totalParticipants: number
  rating: number
  link: string
}

export default function WhatsNewSection() {
  const [leetCodeContests, setLeetCodeContests] = useState<LeetCodeContest[]>([])
  const [codeChefContests, setCodeChefContests] = useState<CodeChefContest[]>([])
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    const timer = setTimeout(() => {
      // Mock LeetCode contest data
      const leetCodeData: LeetCodeContest[] = [
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

      // Mock CodeChef contest data
      const codeChefData: CodeChefContest[] = [
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

      setLeetCodeContests(leetCodeData)
      setCodeChefContests(codeChefData)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="whats-new" className="py-20 bg-gradient-to-b from-purple-950/30 to-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's New</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Stay updated with my latest competitive programming achievements from LeetCode, CodeChef and Codeforces.
            This section dynamically displays my most recent contest results.
          </p>
        </motion.div>

        <Tabs defaultValue="leetcode" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50">
              <TabsTrigger value="leetcode" className="data-[state=active]:bg-blue-600">
                <Code className="h-4 w-4 mr-2" />
                LeetCode
              </TabsTrigger>
              <TabsTrigger value="codechef" className="data-[state=active]:bg-blue-600">
                <Trophy className="h-4 w-4 mr-2" />
                CodeChef
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="leetcode">
            <div className="grid gap-6">
              {loading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i} className="bg-gray-900 border-gray-800">
                        <CardHeader>
                          <Skeleton className="h-6 w-3/4 bg-gray-800" />
                          <Skeleton className="h-4 w-1/4 mt-2 bg-gray-800" />
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-1/3 bg-gray-800" />
                            <Skeleton className="h-4 w-1/3 bg-gray-800" />
                          </div>
                        </CardContent>
                      </Card>
                    ))
                : leetCodeContests.map((contest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-colors">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-white">{contest.title}</CardTitle>
                              <CardDescription className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {new Date(contest.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </CardDescription>
                            </div>
                            <a
                              href={contest.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </a>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-white/60 mb-1">Rank</p>
                              <p className="text-lg font-medium text-white">
                                {contest.rank.toLocaleString()}
                                <span className="text-sm text-white/60 ml-1">
                                  / {contest.totalParticipants.toLocaleString()}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-white/60 mb-1">Percentile</p>
                              <p className="text-lg font-medium text-white">
                                {Math.round((1 - contest.rank / contest.totalParticipants) * 100)}%
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-white/60 mb-1">Score</p>
                              <p className="text-lg font-medium text-white">{contest.score}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
            </div>
          </TabsContent>

          <TabsContent value="codechef">
            <div className="grid gap-6">
              {loading
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i} className="bg-gray-900 border-gray-800">
                        <CardHeader>
                          <Skeleton className="h-6 w-3/4 bg-gray-800" />
                          <Skeleton className="h-4 w-1/4 mt-2 bg-gray-800" />
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between">
                            <Skeleton className="h-4 w-1/3 bg-gray-800" />
                            <Skeleton className="h-4 w-1/3 bg-gray-800" />
                          </div>
                        </CardContent>
                      </Card>
                    ))
                : codeChefContests.map((contest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gray-900 border-gray-800 hover:border-blue-800 transition-colors">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-white">{contest.title}</CardTitle>
                              <CardDescription className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {new Date(contest.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </CardDescription>
                            </div>
                            <a
                              href={contest.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </a>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-white/60 mb-1">Division</p>
                              <p className="text-lg font-medium text-white">{contest.division}</p>
                            </div>
                            <div>
                              <p className="text-sm text-white/60 mb-1">Rank</p>
                              <p className="text-lg font-medium text-white">
                                {contest.rank.toLocaleString()}
                                <span className="text-sm text-white/60 ml-1">
                                  / {contest.totalParticipants.toLocaleString()}
                                </span>
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-white/60 mb-1">Percentile</p>
                              <p className="text-lg font-medium text-white">
                                {Math.round((1 - contest.rank / contest.totalParticipants) * 100)}%
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-white/60 mb-1">Rating</p>
                              <p className="text-lg font-medium text-white">{contest.rating}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutSection() {
  const skills = [
    {
      icon: <Server className="h-8 w-8 text-purple-400" />,
      title: "Backend Development",
      description: "Java,Spring Framework, Spring Boot",
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Database",
      description: "MongoDB, PostgreSQL, MySQL, Redis",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-400" />,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Gitlab",
    },
    {
      icon: <Code2 className="h-8 w-8 text-blue-400" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            I'm a tech enthusiast who loves tackling tough problems. I interned at Goldman Sachs, where I worked with
            Java, Spring Boot, Docker, PostgreSQL, AWS, and more. Outside of work, I push myself through competitive
            programming, with 5 star on CodeChef, Expert on Codeforces, and Guardian on Leetcode. I enjoy breaking down
            complex problems and finding simple solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">Integrated B.Tech and M.Tech</div>
                    <div className="text-sm">ABV-IIITM Gwalior, 2020-2025</div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white">Experience</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ul className="space-y-4">
                  <li>
                    <div className="font-medium">Summer Analyst</div>
                    <div className="text-sm">Goldman Sachs, May 2024 - July 2024</div>
                    <div className="text-sm mt-1">Developed a centralized File Purge On Cloud Solution.</div>
                  </li>
                  <li>
                    <div className="font-medium">Seasonal Analyst</div>
                    <div className="text-sm">Goldman Sachs, Jan 2025 - June 2025</div>
                    <div className="text-sm mt-1">
                      Built multiple applications such as Reconciliation Tool, Database Purge Tool.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-white">Interests</CardTitle>
              </CardHeader>
              <CardContent className="text-white/70">
                <ul className="space-y-2">
                  <li>• Backend Development</li>
                  <li>• Cloud Computing and Serverless</li>
                  <li>• Competitive Programming</li>
                  <li>• Machine Learning and AI</li>
                  <li>• Anime and Cricket</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-white text-center mb-10">Technical Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    {skill.icon}
                    <h4 className="text-lg font-medium text-white mt-4 mb-2">{skill.title}</h4>
                    <p className="text-white/70 text-sm">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

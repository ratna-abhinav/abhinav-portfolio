"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "MangaStore",
      description:
        "An online platform for exploring and purchasing manga, Korean manhwas, Chinese donghuas, with a community forum for discussions.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/Index%20Page.png?alt=media&token=a4ee92fb-3b39-48ef-8da2-53e1864e5a49?height=400&width=600",
      tags: ["Java", "PostgreSQL", "Spring Boot", "Docker", "Thymleaf"],
      demoUrl: "https://scm-deployment-latest.onrender.com/home",
      githubUrl: "https://github.com/ratna-abhinav/mangastore",
      category: "distributed-systems",
    },
    {
      id: 2,
      title: "Text To Video Generator",
      description: "A real-time text to video generator powered by diffusion models",
      image:
        "https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/t2vg.webp?alt=media&token=337c4d1e-09af-4448-a357-465e86d42917?height=400&width=600",
      tags: ["Generative AI", "Python", "PyTorch", "Deep Learning"],
      demoUrl: "#",
      githubUrl: "https://github.com/ratna-abhinav/Text_to-Video-Generator",
      category: "ai",
    },
    {
      id: 3,
      title: "Smart Contact Manager",
      description: "A simple one stop solution for maintaining all of your real state data",
      image:
        "https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/scm.jpg?alt=media&token=ac6defd3-66a6-4ca2-805a-cdaba71fc530?height=400&width=600",
      tags: ["Java", "Spring Boot", "MySQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/ratna-abhinav/Smart-Contact-Manager",
      category: "web",
    },
    {
      id: 4,
      title: "Urban Nest Pro",
      description:
        "A Real Estate App or marketplace, where the landlords can upload their properties and the buyers can rent ot buy.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/urban.jpg?alt=media&token=8badcdaa-6ccd-4d7a-9eb0-8a5f923824f4?height=400&width=600",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      demoUrl: "#",
      githubUrl: "https://github.com/ratna-abhinav/urban_nest_pro",
      category: "web",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black/90 to-purple-950/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            A showcase of my recent projects, ranging from machine learning to web applications. Each project represents
            a unique challenge and solution.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-900/50">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")} className="data-[state=active]:bg-blue-600">
                All
              </TabsTrigger>

              <TabsTrigger value="web" onClick={() => setActiveTab("web")} className="data-[state=active]:bg-blue-600">
                Web
              </TabsTrigger>
              <TabsTrigger value="ai" onClick={() => setActiveTab("ai")} className="data-[state=active]:bg-blue-600">
                AI
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden bg-gray-900 border-gray-800 h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="bg-blue-900/30 text-blue-300 hover:bg-blue-900/50">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

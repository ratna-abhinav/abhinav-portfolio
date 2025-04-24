import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, AtSign, Code } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import WhatsNewSection from "@/components/whats-new-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="relative w-6 h-6">
              <Image src="https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/mine_ghibli.jpg?alt=media&token=9acc4276-4abd-4d8a-a595-7263b65ae187" alt="Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">Abhinav Ratna</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-white/80 hover:text-white transition">
              About
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-white transition">
              Projects
            </Link>
            <Link href="#whats-new" className="text-white/80 hover:text-white transition">
              What's New
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com/in/abhinav-ratna-858346202/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-white/80 hover:text-white transition" />
            </Link>
            <Link href="https://github.com/ratna-abhinav" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 text-white/80 hover:text-white transition" />
            </Link>
            <Link href="mailto:abhinavratna1984@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-white/80 hover:text-white transition" />
            </Link>
            <Link href="https://leetcode.com/u/artAbhi/" target="_blank" aria-label="Leetcode">
              <Code className="w-5 h-5 text-white/80 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* What's New Section */}
      <WhatsNewSection />

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md py-6">
        <div className="container mx-auto px-4 text-center text-white/70">
          <p>© {new Date().getFullYear()} Abhinav Ratna. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown, Code, Database, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const TYPING_TEXTS = [
  "Building scalable systems",
  "Solving complex problems",
  "Creating elegant solutions",
  "Passionate about technology",
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isMobile = useMobile()
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [avatarSrc, setAvatarSrc] = useState("https://firebasestorage.googleapis.com/v0/b/uploadimage-90bc2.appspot.com/o/mine_ghibli.jpg?alt=media&token=9acc4276-4abd-4d8a-a595-7263b65ae187")

  // Parallax effect values
  const satelliteY = useTransform(scrollY, [0, 500], [0, 100])
  const compassY = useTransform(scrollY, [0, 500], [0, -100])
  const textY = useTransform(scrollY, [0, 300], [0, 50])
  const opacityValue = useTransform(scrollY, [0, 300], [1, 0])
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const avatarRotate = useTransform(scrollY, [0, 500], [0, 10])

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Tech icons with their colors
  const techIcons = [
    { icon: <Code className="h-full w-full" />, color: "text-blue-400", delay: 0 },
    { icon: <Database className="h-full w-full" />, color: "text-green-400", delay: 0.1 },
    { icon: <Server className="h-full w-full" />, color: "text-purple-400", delay: 0.2 },
    { icon: <Globe className="h-full w-full" />, color: "text-orange-400", delay: 0.3 },
  ]

  // Load avatar image
 

  // Listen for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Entrance animations loader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(TYPING_TEXTS[0])
      return
    }

    const currentText = TYPING_TEXTS[currentTextIndex]
    let charIndex = 0
    let typingTimer: NodeJS.Timeout
    let deletingTimer: NodeJS.Timeout

    const typeText = () => {
      if (charIndex < currentText.length) {
        setTypedText(currentText.substring(0, charIndex + 1))
        charIndex++
        typingTimer = setTimeout(typeText, 100)
      } else {
        setTimeout(deleteText, 2000)
      }
    }

    const deleteText = () => {
      if (charIndex > 0) {
        setTypedText(currentText.substring(0, charIndex - 1))
        charIndex--
        deletingTimer = setTimeout(deleteText, 50)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length)
      }
    }

    typeText()
    return () => {
      clearTimeout(typingTimer)
      clearTimeout(deletingTimer)
    }
  }, [currentTextIndex, prefersReducedMotion])

  // Space background animation (unchanged)…
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || prefersReducedMotion) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; pulse: number }[] = []
    const meteors: { x: number; y: number; length: number; speed: number; angle: number; alpha: number }[] = []

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
        alpha: Math.random() * 0.5 + 0.5,
        pulse: Math.random() * 0.1,
      })
    }

    const createMeteor = () => {
      if (meteors.length < 3 && Math.random() < 0.01) {
        meteors.push({
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 5 + 10,
          angle: Math.PI / 4 + (Math.random() * Math.PI) / 8,
          alpha: 1,
        })
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      createMeteor()

      meteors.forEach((meteor, i) => {
        ctx.save()
        ctx.translate(meteor.x, meteor.y)
        ctx.rotate(meteor.angle)
        const gradient = ctx.createLinearGradient(0, 0, meteor.length, 0)
        gradient.addColorStop(0, `rgba(255,255,255,${meteor.alpha})`)
        gradient.addColorStop(1, "rgba(255,255,255,0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, meteor.length, 2)
        ctx.restore()

        meteor.x += Math.cos(meteor.angle) * meteor.speed
        meteor.y += Math.sin(meteor.angle) * meteor.speed
        meteor.alpha -= 0.01
        if (meteor.alpha <= 0 || meteor.x > canvas.width || meteor.y > canvas.height) meteors.splice(i, 1)
      })

      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * 0.001 * star.pulse) * 0.01
        star.alpha = Math.max(0.5, Math.min(1, star.alpha))
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`
        ctx.fill()
        star.x = (star.x + star.vx + canvas.width) % canvas.width
        star.y = (star.y + star.vy + canvas.height) % canvas.height
      })

      requestAnimationFrame(drawStars)
    }

    drawStars()
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })
    return () => window.removeEventListener("resize", () => {})
  }, [prefersReducedMotion])

  // Variants, words split, and JSX remain identical…
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  }
  const titleWords = ["Software Engineer"]


  return (
    <section ref={sectionRef} className="relative h-screen flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-purple-950 to-blue-950 z-0"
      />

      <div className="absolute inset-0 bg-[url('/images/nebula.png')] bg-cover bg-center opacity-40 z-10" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {!prefersReducedMotion &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Avatar/Profile Image - Takes 2 columns on md screens */}
          <motion.div
            className="hidden md:flex md:col-span-2 justify-center items-center"
            style={{
              scale: prefersReducedMotion ? 1 : avatarScale,
              rotate: prefersReducedMotion ? 0 : avatarRotate,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glowing circle behind avatar */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl z-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />

              {/* Avatar with circular mask */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg shadow-blue-500/20 z-10">
                <Image src={avatarSrc} alt="Abhinav Ratna" fill className="object-cover" />
              </div>

              {/* Floating tech icons around avatar */}
              
            </div>
          </motion.div>

          {/* Text content - Takes 3 columns on md screens */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : textY, opacity: prefersReducedMotion ? 1 : opacityValue }}
            className="md:col-span-3"
          >
            <div className="overflow-hidden">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial={prefersReducedMotion ? "visible" : "hidden"}
                    animate="visible"
                    variants={titleVariants}
                    className={
                      i === 1
                        ? "text-blue-400"
                        : i === 2
                          ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
                          : ""
                    }
                  >
                    {word}
                    {i === 0 && <br />}
                    {i === 1 && " "}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Typing animation */}
            <motion.div
              className="h-8 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-lg text-blue-300 font-medium">
                {typedText}
                <span
                  className={`inline-block w-2 h-5 ml-1 bg-blue-300 ${prefersReducedMotion ? "opacity-0" : "animate-pulse"}`}
                ></span>
              </p>
            </motion.div>

            <motion.p
              className="text-lg text-white/80 mb-8 max-w-2xl"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A passionate software engineer driven by an innate curiosity and desire to master programming. From an
              slightly late introduction to coding in my college, each new opportunity unlocked wonder and ignited
              determination that launched a lifelong voyage of discovery.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group z-10">
                  <a href="#projects" className="flex items-center">
                    <span className="relative z-10">View Projects</span>
                    <motion.span
                      className="absolute inset-0 bg-blue-500 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
                {/* Button glow effect */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute -inset-1 rounded-lg bg-blue-500/30 blur-md z-0 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </motion.div>

              <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-transparent">
          <a href="#about">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
            <span className="sr-only">Scroll down</span>
          </a>
        </Button>
      </motion.div>

      {/* Decorative elements with parallax */}
      <motion.div
        className="absolute left-10 top-1/4 w-16 h-16 opacity-30 z-10"
        style={{ y: prefersReducedMotion ? 0 : satelliteY }}
      >
       
      </motion.div>

      <motion.div
        className="absolute right-10 bottom-1/4 w-24 h-24 opacity-30 z-10"
        style={{ y: prefersReducedMotion ? 0 : compassY }}
      >
        
      </motion.div>

      {/* Animated gradient orbs */}
      <AnimatePresence>
        {isLoaded && !prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl z-5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl z-5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

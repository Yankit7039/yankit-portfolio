"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Achievements from "./components/Achievements"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)] animate-bounce-slow" />
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 -z-5 bg-gradient-to-br from-blue-900/20 via-slate-900/20 to-cyan-900/20"
        style={{ y: backgroundY }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

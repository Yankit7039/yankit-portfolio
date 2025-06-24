"use client"

import { useRef, Suspense } from "react"
import dynamic from "next/dynamic"
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
import Aurora from "./components/Aurora"

// Dynamically import the Three.js scene component
// const ThreeScene = dynamic(() => import("./components/ThreeScene"), { 
//   ssr: false,
//   loading: () => <div className="w-full h-full bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-blue-600/20" />
// })

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Aurora Background */}
      {/* <div className="fixed inset-0 -z-5">
        <Aurora
          colorStops={["#3b82f6", "#06b6d4", "#0ea5e9"]}
          blend={0.5}
          amplitude={1.2}
          speed={0.5}
        />
      </div> */}

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)] animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.1),transparent_50%)] animate-bounce-slow" />
      </div>

      {/* Three.js Background - Disabled */}
      {/* <div className="fixed inset-0 -z-15">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <ThreeScene />
        </Suspense>
      </div> */}

      {/* Animated Background Gradient */}
      <motion.div
        // className="fixed inset-0 -z-5 bg-gradient-to-br from-blue-900/10 via-slate-900/10 to-cyan-900/10"
        className="fixed inset-0 -z-5 bg-black"
        // style={{ y: backgroundY }}
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

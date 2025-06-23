"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Yankit Rajor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0"
            >
              Full Stack Developer & Data Science Student crafting intelligent digital solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button
                onClick={() => {
                  // Create a downloadable resume
                  const link = document.createElement("a")
                  link.href = "/Resume0625.pdf" // You'll need to add your resume PDF to the public folder
                  // link.download = "Yankit_Rajor_Resume.pdf"
                  link.click()
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Resume
              </Button>

              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Yankit7039"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yankit-rajor-5725b1257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:yankit7039@gmail.com"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto"
          >
            {/* bg-gradient-to-br from-blue-500/30 to-cyan-500/30 */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <Image
              src="/WhatsApp Image 2025-06-23 at 1.48.55 PM.jpeg" // Replace with your image path
              alt="Yankit Rajor"
              width={384}
              height={384}
              className="rounded-full object-cover w-full h-full p-2 bg-slate-900"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

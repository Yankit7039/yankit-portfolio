"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Code, Database, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import CardSwap, { Card } from "./CardSwap"
import Aurora from "./Aurora"

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* WebGL Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#1e40af", "#3b82f6", "#06b6d4"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.6}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
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
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
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
                  link.href = "/Resume0825.pdf" // You'll need to add your resume PDF to the public folder
                  // link.download = "Yankit_Rajor_Resume.pdf"
                  link.click()
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
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
            className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 mx-auto order-1 lg:order-2 block lg:hidden"
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

      {/* CardSwap Component - Skills Showcase (Desktop only) */}
      <div className="hidden md:block">
        <div className="fixed lg:absolute bottom-4 right-4 left-0 lg:left-auto flex justify-center lg:justify-end z-20 pointer-events-none">
          <div className="w-[90vw] max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-60 pointer-events-auto">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
            >
              {/* Card 1: Developer Info */}
              <Card className="relative overflow-hidden p-0 bg-transparent border-none shadow-none w-full h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/95 border-b border-slate-700/50 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-400 font-mono">portfolio.tsx</div>
                  </div>
                  <div className="absolute inset-0 pt-10 px-4 pb-4">
                    <div className="h-full flex flex-col space-y-2">
                      <div className="flex text-xs text-slate-500 font-mono">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-8 flex-shrink-0">{i + 1}</div>
                        ))}
                      </div>
                      <div className="flex-1 font-mono text-sm leading-relaxed">
                        <div className="flex">
                          <span className="text-slate-400">const</span>
                          <span className="text-white ml-2">developer</span>
                          <span className="text-slate-400 ml-2">=</span>
                          <span className="text-blue-400 ml-2">{'{'}</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">name</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'Yankit Rajor'</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">role</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'Full Stack Developer'</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">specialization</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'MERN Stack & Data Science'</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">skills</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-blue-400 ml-2">['React', 'Node.js', 'Python', 'ML']</span>
                        </div>
                        <div className="flex">
                          <span className="text-blue-400">{'}'}</span>
                          <span className="text-slate-400">;</span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-12 w-0.5 h-5 bg-green-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>
              </Card>
              {/* Card 2: Project Info */}
              <Card className="relative overflow-hidden p-0 bg-transparent border-none shadow-none w-full h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/95 border-b border-slate-700/50 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-400 font-mono">portfolio.tsx</div>
                  </div>
                  <div className="absolute inset-0 pt-10 px-4 pb-4">
                    <div className="h-full flex flex-col space-y-2">
                      <div className="flex text-xs text-slate-500 font-mono">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-8 flex-shrink-0">{i + 1}</div>
                        ))}
                      </div>
                      <div className="flex-1 font-mono text-sm leading-relaxed">
                        <div className="flex">
                          <span className="text-slate-400">const</span>
                          <span className="text-white ml-2">project</span>
                          <span className="text-slate-400 ml-2">=</span>
                          <span className="text-blue-400 ml-2">{'{'}</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">name</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'SmartSoil IoT'</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">stack</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-blue-400 ml-2">['ESP8266', 'Python', 'Arduino']</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">achievement</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'40% Water Savings'</span>
                        </div>
                        <div className="flex">
                          <span className="text-blue-400">{'}'}</span>
                          <span className="text-slate-400">;</span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-12 w-0.5 h-5 bg-green-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>
              </Card>
              {/* Card 3: Achievement Info */}
              <Card className="relative overflow-hidden p-0 bg-transparent border-none shadow-none w-full h-full">
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/95 border-b border-slate-700/50 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                    </div>
                    <div className="ml-4 text-xs text-slate-400 font-mono">portfolio.tsx</div>
                  </div>
                  <div className="absolute inset-0 pt-10 px-4 pb-4">
                    <div className="h-full flex flex-col space-y-2">
                      <div className="flex text-xs text-slate-500 font-mono">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-8 flex-shrink-0">{i + 1}</div>
                        ))}
                      </div>
                      <div className="flex-1 font-mono text-sm leading-relaxed">
                        <div className="flex">
                          <span className="text-slate-400">const</span>
                          <span className="text-white ml-2">achievement</span>
                          <span className="text-slate-400 ml-2">=</span>
                          <span className="text-blue-400 ml-2">{'{'}</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">title</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-yellow-400 ml-2">'LeetCode: 1513'</span>
                          <span className="text-slate-400">,</span>
                        </div>
                        <div className="flex ml-4">
                          <span className="text-green-400">problemsSolved</span>
                          <span className="text-slate-400">:</span>
                          <span className="text-blue-400 ml-2">700</span>
                        </div>
                        <div className="flex">
                          <span className="text-blue-400">{'}'}</span>
                          <span className="text-slate-400">;</span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-12 w-0.5 h-5 bg-green-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  )
}

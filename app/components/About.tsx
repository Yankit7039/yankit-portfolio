"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Ballpit from "./Ballpit"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Ballpit Background */}
      <div className="absolute inset-0 -z-10">
        <div style={{position: 'relative', overflow: 'hidden', height: '100%', width: '100%'}}>
          <Ballpit
            count={200}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <p className="text-white text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and Data Science student at Netaji Subhas University of Technology
                with expertise in the MERN stack and IoT solutions. I specialize in creating intelligent web
                applications and have solved 700+ DSA problems with a LeetCode rating of 1513.
              </p>

              <p className="text-white text-lg leading-relaxed mb-6">
                My approach combines modern web technologies with data science principles to deliver solutions that are
                not only functional but also intelligent and scalable.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-lg border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-white/90">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-lg border border-white/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-white/90">Years Learning</div>
                </div>
              </div>

              {/* <div className="flex justify-center mb-4">
                <Button
                  onClick={() => {
                    // Create a downloadable resume
                    const link = document.createElement("a")
                    link.href = "/Resume0625.pdf" // You'll need to add your resume PDF to the public folder
                    // link.download = "Yankit_Rajor_Resume.pdf"
                    link.click()
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                  <Download className="mr-2" size={16} />
                  View Resume
                </Button>
              </div> */}
              {/* <p className="text-gray-400 text-sm text-center">New Delhi, India</p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-md shadow-2xl">
              {/* Code Editor Header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/95 border-b border-slate-700/50 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="ml-4 text-xs text-slate-400 font-mono">portfolio.tsx</div>
              </div>

              {/* Code Content */}
              <div className="absolute inset-0 pt-10 px-4 pb-4">
                <div className="h-full flex flex-col space-y-2">
                  {/* Line numbers */}
                  <div className="flex text-xs text-slate-500 font-mono">
                    <div className="w-8 flex-shrink-0">1</div>
                    <div className="w-8 flex-shrink-0">2</div>
                    <div className="w-8 flex-shrink-0">3</div>
                    <div className="w-8 flex-shrink-0">4</div>
                    <div className="w-8 flex-shrink-0">5</div>
                    <div className="w-8 flex-shrink-0">6</div>
                    <div className="w-8 flex-shrink-0">7</div>
                    <div className="w-8 flex-shrink-0">8</div>
                    <div className="w-8 flex-shrink-0">9</div>
                    <div className="w-8 flex-shrink-0">10</div>
                  </div>

                  {/* Code lines */}
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

                  {/* Cursor blink effect */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute bottom-8 left-12 w-0.5 h-5 bg-green-400"
                  />
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and Data Science student at Netaji Subhas University of Technology
                with expertise in the MERN stack and IoT solutions. I specialize in creating intelligent web
                applications and have solved 700+ DSA problems with a LeetCode rating of 1513.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My approach combines modern web technologies with data science principles to deliver solutions that are
                not only functional but also intelligent and scalable.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-gray-400">Years Learning</div>
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
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 right-4 w-16 h-16 bg-blue-500/30 rounded-full backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-4 left-4 w-12 h-12 bg-pink-500/30 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

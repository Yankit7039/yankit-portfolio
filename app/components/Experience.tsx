"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import Orb from "./Orb"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Stealth Mode Startup",
    location: "Remote",
    period: "Jun 2025 – Present",
    description:
      "Worked on building various agentic applications for multiple clients, handling complete web development lifecycle from frontend to backend integration.",
    achievements: [
      "Developed agentic applications using Next.js, FastAPI, and MongoDB for various clients",
      "Handled complete web development part of multiple projects from conception to deployment",
      "Gained extensive knowledge about AI agents and SDK servers architecture",
      "Collaborated with cross-functional teams to deliver client-focused solutions",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    location: "Remote",
    period: "Sep 2024 – Nov 2024",
    description:
      "Contributed to enhancing user experience by designing and implementing website animations and developing dynamic front-end features.",
    achievements: [
      "Developed dynamic front-end features using React.js and integrated them with back-end services",
      "Utilized Node.js and MongoDB to manage and display data effectively on the front end",
      "Collaborated with remote team to build full-stack web applications using the MERN stack",
      "Enhanced user experience through implementation of smooth animations and transitions",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Orb Centered Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 flex items-center justify-center w-full h-full">
        <div style={{ width: "60vw", height: "60vw", maxWidth: 800, maxHeight: 800 }}>
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={220} forceHoverState={false} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A journey through my professional career and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-blue-400 font-semibold mb-3">{exp.company}</h4>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

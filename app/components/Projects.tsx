"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  // {
  //   id: 1,
  //   title: "SmartSoil - IoT Irrigation System",
  //   description:
  //     "Intelligent IoT-based irrigation system that automates water flow based on real-time sensor and weather data, reducing water usage by over 40%.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["ESP8266", "Arduino", "Python", "IoT", "Sensors"],
  //   liveUrl: "https://github.com/Yankit7039",
  //   githubUrl: "https://github.com/Yankit7039",
  //   featured: false,
  // },
  {
    id: 1,
    title: "ReelNest - Content Sharing Platform",
    description:
      "Full-stack content sharing platform built with NextJS, featuring user authentication, post creation, and personalized profiles managing 200+ posts.",
    image: "/Screenshot 2025-06-23 at 1.29.51 PM.png",
    tags: ["Next.js", "MongoDB", "REST API", "Vercel"],
    liveUrl: "https://reel-platform-one.vercel.app/auth",
    githubUrl: "https://github.com/Yankit7039/reelnest.git",
    featured: false,
  },
  {
    id: 2,
    title: "PizzaCraft - Business Management App",
    description:
    "Pizza Management App built with React Native, Expo, and TypeScript, featuring a modern UI and seamless navigation for managing pizza orders.",
    image: "/Screenshot 2025-06-23 at 1.35.49 PM.png",
    tags: ["React Native", "Expo", "TypeScript", "React Navigation", "React Native Paper"],
    liveUrl: "https://pizza-management-99kz.vercel.app/",
    githubUrl: "https://github.com/Yankit7039/pizza-management.git",
    featured: false,
  },
  {
    id: 3,
    title: "TextUtil - Text Transformation App",
    description:
      "Responsive text transformation web app with real-time analysis, case conversion, space removal, and light/dark mode features.",
    image: "/Screenshot 2025-06-23 at 1.32.17 PM.png",
    tags: ["React.js", "JavaScript", "Bootstrap", "Vercel"],
    liveUrl: "https://text-util-six-phi.vercel.app/",
    githubUrl: "https://github.com/Yankit7039/Text-Util.git",
    featured: false,
  },
  // {
  //   id: 4,
  //   title: "DSA Problem Solving",
  //   description:
  //     "Comprehensive collection of 700+ Data Structures and Algorithms solutions across multiple platforms with LeetCode rating of 1513.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["Python", "C++", "Algorithms", "LeetCode", "Problem Solving"],
  //   liveUrl: "https://leetcode.com/Yankit7039",
  //   githubUrl: "https://github.com/Yankit7039",
  //   featured: false,
  // },
  // {
  //   id: 5,
  //   title: "Machine Learning Projects",
  //   description:
  //     "Collection of ML projects implementing Decision Trees, Linear Regression, and Model Evaluation techniques for various use cases.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["Python", "Machine Learning", "Scikit-learn", "Jupyter"],
  //   liveUrl: "https://github.com/Yankit7039",
  //   githubUrl: "https://github.com/Yankit7039",
  //   featured: false,
  // },
  // {
  //   id: 6,
  //   title: "MERN Stack Applications",
  //   description:
  //     "Various full-stack web applications built using MongoDB, Express.js, React.js, and Node.js with modern UI/UX design.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
  //   liveUrl: "https://github.com/Yankit7039",
  //   githubUrl: "https://github.com/Yankit7039",
  //   featured: false,
  // },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work and creative solutions
          </p>

          {/* Filter Buttons */}
          {/* <div className="flex justify-center space-x-4 mb-12">
            {["all", "featured", "other"].map((filterType) => (
              <Button
                key={filterType}
                onClick={() => setFilter(filterType)}
                variant={filter === filterType ? "default" : "outline"}
                className={`capitalize ${
                  filter === filterType
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "bg-transparent border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {filterType}
              </Button>
            ))}
          </div> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Code, Trophy, Users } from "lucide-react"
import ParticleField from "./ParticleField"

const achievements = [
  {
    icon: Code,
    title: "700+ DSA Problems Solved",
    description: "LeetCode Rating: 1513",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "AI Certification",
    description: "Certified by Rinex.AI in collaboration with IIT Bhubaneswar",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "ML Certification",
    description: "Supervised Machine Learning by DeepLearning.AI",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "IEEE Senior Member",
    description: "Leadership role in Asia's largest technical society",
    color: "from-orange-500 to-red-500",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* ParticleField Background - Floating Achievement Badges */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticleField 
          particleCount={150}
          particleSpread={8}
          speed={0.15}
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          moveParticlesOnHover={false}
          alphaParticles={false}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={15}
          disableRotation={false}
        />
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Recognition and certifications that showcase my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${achievement.color} mb-4`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

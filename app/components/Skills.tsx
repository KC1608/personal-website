"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {
  const skillsData = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "Java", "SQL"],
    },
    {
      category: "Libraries/Frameworks",
      items: [
        "React",
        "Redux",
        "RxJs",
        "ES6",
        "Next.js",
        "Node.js",
        "Express.js",
        "AJAX",
        "NextAuth.js",
        "Paho Mqtt",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      category: "Software",
      items: ["Visual Studio Code", "Git", "ArgoCd", "AWS", "Docker"],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(skillsData[0].category)

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Toolkit</h2>
        <div className="flex flex-wrap justify-center mb-12">
          {skillsData.map((skillSet) => (
            <button
              key={skillSet.category}
              className={`text-gray-700 px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                activeCategory === skillSet.category
                  ? "bg-primary-color shadow-lg scale-110"
                  : "bg-white hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => setActiveCategory(skillSet.category)}
            >
              {skillSet.category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData
            .find((s) => s.category === activeCategory)
            ?.items.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}


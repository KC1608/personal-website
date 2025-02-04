"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Appscrip",
      period: "August 2022 – February 2025",
      achievements: [
        "Developed a comprehensive job posting platform using Next.js",
        "Led UI development for live streaming features",
        "Boosted site traffic by 30% through SEO optimizations",
        "Reduced page load times by 35% using performance optimization techniques",
        "Improved video load times by 20% with custom video player implementation",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-primary-color text-black p-6">
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-xl">{exp.company}</p>
              {/* <p className="text-sm">{exp.period}</p> */}
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <svg
                      className="w-6 h-6 text-primary-color mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


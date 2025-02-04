"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Flex Crew",
      description: "A comprehensive platform for job posting and bidding, optimized for the US market.",
      technologies: ["React", "Redux", "Next.js", "Uppy", "Stripe", "google-maps-react", "AI API"],
      features: [
        "Multi-step job posting workflow",
        "Document upload with Uppy",
        "Stripe payment integration",
        "Interactive map view with google-maps-react",
        "SEO optimization",
      ],
    },
    {
      title: "On The Glow",
      description: "Developed a doorstep beauty service platform that enables users to book professionals for services like nails, massages, hair, and waxing. The platform streamlines the booking and payment process with an optimized UI/UX.",
      technologies: ["React", "Next.js", "JavaScript", "RxJs", "Gumlet"],
      features: [
        "Service Booking Flow: Users can browse services, add them to the cart, select extras, and proceed to checkout.",
        "Dynamic Professional Allocation: Based on the user’s address, available professionals are identified and listed for selection.",
        "Seamless Payments: Integrated Stripe for secure payment processing.",
        "Optimized User Experience: Developed responsive UI with efficient state management for smooth navigation across service categories."
      ],
    },
    {
      title: "Sold",
      description: "A standalone SDK for integrating live streaming functionality into web applications.",
      technologies: ["React", "Next.js", "LiveKit", "JavaScript", "RxJs", "SDK"],
      features: [
        "Live streaming SDK development",
        "End-to-end UI development for live streaming",
        "Integration with existing e-commerce functionalities",
      ],
    },
    {
      title: "ClipCollab",
      description: "A cloud-based platform for seamless video collaboration and content management.",
      technologies: ["React", "Next.js", "Clerk", "AWS Cloud", "JavaScript"],
      features: [
        "User authentication with Clerk",
        "SEO enhancement with Static Site Generation",
        "Performance optimizations with server-side rendering",
        "Collaboration tools for organizations and projects",
      ],
    }
  ]

  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="flex flex-wrap justify-center mb-12">
          {projects.map((project) => (
            <button
              key={project.title}
              className={`text-gray-700 px-6 py-3 m-2 rounded-full transition-all duration-300 ${
                activeProject.title === project.title
                  ? "bg-primary-color shadow-lg scale-110"
                  : "bg-white hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => setActiveProject(project)}
            >
              {project.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-primary-color text-black p-6">
              <h3 className="text-2xl font-semibold">{activeProject.title}</h3>
              <p className="mt-2">{activeProject.description}</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap mb-4">
                {activeProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside">
                {activeProject.features.map((feature, index) => (
                  <li key={index} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


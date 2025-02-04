export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Kartik Chopra. All rights reserved.</p>
        <p className="mt-2">Built with Next.js and React</p>
        <div className="mt-4">
          <a href="#about" className="text-white hover:text-gray-200 mx-2 transition-colors duration-300">
            About
          </a>
          <a href="#skills" className="text-white hover:text-gray-200 mx-2 transition-colors duration-300">
            Skills
          </a>
          <a href="#experience" className="text-white hover:text-gray-200 mx-2 transition-colors duration-300">
            Experience
          </a>
          <a href="#projects" className="text-white hover:text-gray-200 mx-2 transition-colors duration-300">
            Projects
          </a>
          <a href="#education" className="text-white hover:text-gray-200 mx-2 transition-colors duration-300">
            Education
          </a>
        </div>
      </div>
    </footer>
  )
}


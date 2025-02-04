import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import Image from "next/image";
import PROFILE_IMAGE from "../../lib/images/profile_pic.jpg";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gray-800 py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-5xl font-bold text-white mb-4">Kartik Chopra</h1>
            <h2 className="text-3xl text-blue-300 mb-6">Frontend Engineer</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Crafting exceptional user experiences with React and Next.js. Turning complex problems into elegant,
              efficient solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/kartikchopra1608/", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/KC1608", label: "GitHub" },
                { icon: FaEnvelope, href: "mailto:choprakartik10@gmail.com", label: "Email" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-gray-800 hover:bg-blue-100 transition-colors duration-300"
                  aria-label={item.label}
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
              <Image
                src={PROFILE_IMAGE}
                alt="Kartik Chopra"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-4 border-white shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


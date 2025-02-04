export default function Education() {
  const courses = [
    "DSA",
    "Object-Oriented Programming (OOPS)",
    "Software Development Lifecycle",
    "Version Control Systems",
    "Git",
    "Web Development",
    "REST APIs",
    "Computer Networking",
    "JavaScript and Java",
  ]

  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 animate-slideIn">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-md hover-scale border border-card-border">
          <h3 className="text-2xl font-semibold text-primary-color">B.E. ME (Specialized in Computer Science)</h3>
          <p className="text-gray-700">Thapar University</p>
          <p className="text-gray-600">July 2017 – June 2021</p>
          <p className="mt-2 text-lg font-semibold">
            GPA: <span className="text-secondary-color">8.11/10</span>
          </p>
          <h4 className="font-semibold mt-4 mb-2">Key Courses:</h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {courses.map((course, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded shadow text-sm">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


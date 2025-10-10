import { GraduationCap } from "lucide-react"

const experiences = [
  {
    name: "Education",
    icon: GraduationCap,
    description: "I have a degree in Computer Science from the University of Example.",
    link: "https://example.com/education"
  }
]

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-12 mb-4">
      <div className="top-0 flex items-center justify-center">
        <h1 >About <span className="gradient-text">Me</span></h1>
      </div>
      <div className="bg-red-900 mx-auto max-w-6xl rounded-lg p-4 grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-row items-start p-4">
            <div className="p-6 bg-green-800">
              <experience.icon className="w-10 h-10 rounded-full bg-blue-900" />
            </div>
            <div>
              <h2>{experience.name}</h2>
              <p className="text-sm md:text-md lg:text-lg">
                {experience.description}
              </p>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
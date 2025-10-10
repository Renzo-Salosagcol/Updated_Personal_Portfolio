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
    <section id="about" className="relative min-h-screen py-12">
      <div className="top-0 flex items-center justify-center">
        <h1 >About <span className="gradient-text">Me</span></h1>
      </div>
      <div className="bg-red-900 mx-auto mt-8 max-w-6xl rounded-lg p-6">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h2 className="flex items-center text-2xl font-semibold mb-2">
              <experience.icon className="w-6 h-6 mr-2" />
              {experience.name}
            </h2>
            <p className="text-sm md:text-md lg:text-lg">
              {experience.description}
            </p>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
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
      <div className="flex items-center justify-center mb-12">
        <h1 >About <span className="gradient-text">Me</span></h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg p-4 grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div className="z-0 relative gradient-border">
            <div className="w-full h-full relative container flex flex-cols md:flex-rows justify-between gap-6 rounded-md p-6 bg-background">
              <experience.icon className="w-10 h-10 rounded-full bg-blue-900" />
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
          </div>
        ))}
      </div>
    </section>
  )
}
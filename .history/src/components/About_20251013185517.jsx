import { GraduationCap, Briefcase, User } from "lucide-react"

const experiences = [
  {
    name: "Education",
    icon: GraduationCap,
    role: "Bachelor of Science in Computer Science",
    description: "Description",
    link: "https://example.com/education"
  },
  {
    name: "Work Experience",
    icon: Briefcase,
    role: "Operations Associate",
    description: "I have 5 years of experience in software development.",
    link: "https://example.com/work-experience"
  },
  {
    name: "Personal",
    icon: User,
    role: "Hobbies & Interests",
    description: "I enjoy hiking, photography, and learning new technologies.",
    link: "https://example.com/personal"
  }
]

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-12">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold"><span className="gradient-text">About </span> Me</h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg p-4 grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div className="gradient-card mb-6 animate-fade-in" key={index}>
            <div className="gradient-card-inner container flex flex-cols md:flex-rows rounded-md bg-background gap-6">
              <div className="w-10 h-10 my-auto items-center justify-center">
                <experience.icon className="w-full h-full rounded-full" />
              </div>
              <div>
                <h2 className="font-semibold gradient-text text-xl">{experience.name}</h2>
                <h4 className="font-bold">{experience.role}</h4>
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
import { GraduationCap, Briefcase, User } from "lucide-react"

const categories = [
  {
    name: "Education",
    icon: GraduationCap,
    experiences: [{
      location: "California State University, Fullerton",
      role: "Bachelor of Science in Computer Science",
      period: "2023 - 2025",
      description: "Pursued a Bachelor's degree in Computer Science with a focus on Full-Stack Web Development. " +
      "Graduated in May 2025 with a strong foundation in software development principles and practices.",
    },
    {
      location: "Orange Coast College",
      role: "Transfer to CSU Fullerton for Computer Science",
      period: "2019 - 2023",
      description: "Began my college journey in 2019 as a Nursing Major before switching to Computer Science in 2021. " +
      "Completed my general education courses and major prerequisites to transfer to CSU Fullerton.",
    }]
  },
  {
    name: "Work Experience",
    icon: Briefcase,
    experiences: [ {
      location: "Gucci",
      role: "Operations Controller",
      period: "2024 - Present",
      description: "Ensures the continued flow of inventory management and logistics operations within the store. " +
      "Collaborates with cross-functional teams to optimize supply chain processes and enhance overall efficiency.",
    },
    {
      location: "Louis Vuitton",
      role: "Operations Associate",
      period: "2021 - 2023",
      description: "Managed inventory and logistics operations to ensure efficient store functioning. " +
      "Worked closely with various departments to streamline processes and improve customer satisfaction.",
    }]
  }
  // {
  //   name: "Personal",
  //   icon: User,
  //   experiences: [{
  //     location: "Gucci Americas Inc.",
  //     role: "Operations Associate",
  //     period: "2024 - Present",
  //     description: "I have 5 years of experience in software development.",
  //   }]
  // }
]

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-12">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold"><span className="gradient-text">About </span> Me</h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg p-4 grid-cols-1 gap-6">
        {categories.map((category, index) => (
          <div className="gradient-card mb-6 animate-fade-in" key={index}>
            <div className="gradient-card-inner container flex flex-cols md:flex-rows rounded-md bg-background gap-6">
              <div>
                <div className="flex flex-row items-left gap-2 mb-2">
                  <category.icon className="" size={30}/>
                  <h2 className="font-bold text-xl gradient-text max-w-fit">{category.name}</h2>
                </div>
                <div>
                  {category.experiences.map((experience, index) => (
                    <div key={index} className="pt-3">
                      <h4 className="items-left font-bold">{experience.location}</h4>
                      <div className="flex flex-row justify-between">
                        <h4 className="font-semibold">{experience.role}</h4>
                        <h4 className="font-semibold">{experience.period}</h4>
                      </div>
                      <p className="">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
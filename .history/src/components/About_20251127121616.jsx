import { GraduationCap, Briefcase, User } from "lucide-react"

const categories = [
  {
    name: "Education",
    icon: GraduationCap,
    experiences: [{
      location: "California State University, Fullerton",
      role: "Bachelor of Science in Computer Science",
      period: "2023 - 2025",
      description: [{
        1: "Pursued a Bachelor's degree in Computer Science with a focus on Full-Stack Web Development.",
        2: "Graduated in May 2025 with a strong foundation in software development principles and practices.",
        3: "Maintained a high GPA while balancing academic and extracurricular activities."
      }]
    },
    {
      location: "Orange Coast College",
      role: "Transfer to CSU Fullerton for Computer Science",
      period: "2019 - 2023",
      description: [{
        1: "Completed an Associate's degree with a focus on Computer Science coursework.",

        2: "Began my college journey in 2019 as a Nursing Major before switching to Computer Science in 2021. ",
        3: "Completed my general education courses and major prerequisites to transfer to CSU Fullerton."
      }]
    }]
  },
  {
    name: "Work Experience",
    icon: Briefcase,
    experiences: [ {
      location: "Gucci, Gucci Americas Inc.",
      role: "Operations Controller",
      period: "2024 - Present",
      description: [{
        1: "Oversees stockroom accuracy & inventory integrity.",
        2: "Ensures clear and consistent communication between clients and and the company.",
        3: "Executes shipping, receiving, transfers, repairs, damages.",
        4: "Maintains compliance docs & security procedures."
      }]
    },
    {
      location: "EOS Fitness, Fitness Alliance LLC",
      role: "Service Associate",
      period: "2024",
      description: [{
        1: "Creates loyal and lifelong member fans through upbeat and welcoming service.",
        2: "Ensures safety and cleanliness standards are consistently met throughout the facility.",
        3: "Utilizes MS Office and club systems to efficiently manage multiple tasks in a fast-paced environment.",
        4: "Demonstrates strong problem-solving skills, organization, optimism, and a team-focused attitude."
      }]
    },
    {
      location: "Louis Vuitton, Moët Hennessy Louis Vuitton SE",
      role: "Operations Associate",
      period: "2021 - 2023",
      description: "Secures organized stock, inventory accuracy, flow. " +
      "Supports client service with rapid BOH solutions. " +
      "Handles repairs, after sales & alterations. " +
      "Maintains facilities, systems, compliance, policy. " +
      "Supports financial processes & documentation. " +
      "Ensures adherence to brand standards & procedures. " +
      "Problem-solving, proactive, detail-focused. " +
      "Organized; drives continuous improvement. " +
      "Leverages training; pursues luxury ops career growth. " +
      "Embraces inclusive culture & brand heritage.",
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
    <section id="about" className="relative min-h-screen py-12 pt-20 md:pt-12">
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
                      <div className="flex flex-col md:flex-row justify-between">
                        <h4 className="font-semibold">{experience.role}</h4>
                        <h4 className="font-semibold">{experience.period}</h4>
                      </div>
                      <ul>
                        {experience.description.map((desc, idx) => (
                          typeof desc === 'string' ? (
                            <li key={idx} className="mt-2">{desc}</li>
                          ) : null
                        ))}
                      </ul>
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
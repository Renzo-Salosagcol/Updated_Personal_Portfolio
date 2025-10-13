import { GithubIcon, ExternalLink } from "lucide-react"

const project_info = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    github_link: "https://example.com/project-one",
    external_link: "https://example.com/project-one-live"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
    github_link: "https://example.com/project-two",
    external_link: "https://example.com/project-two-live"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
    github_link: "https://example.com/project-three",
    external_link: "https://example.com/project-three-live"}
]

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold">My <span className="gradient-text">Projects</span></h1>
      </div>
      <div className="px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project_info.map((project) => (
          <div key={project.id} className="gradient-card aspect-1/1 p-0">
            <img src={project.image} alt={project.title} className="aspect-2/1 object-cover mb-4 rounded-[inherit]" />
            <h2 className="font-bold text-xl mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center justify-between"> 
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><GithubIcon /></a>
              <a href={project.external_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><ExternalLink /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    description: "This is a brief description of Project One.",
    image: "https://via.placeholder.com/150",
    github_link: "https://example.com/project-one",
    external_link: "https://example.com/project-one-live"
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "https://via.placeholder.com/150",
    github_link: "https://example.com/project-two",
    external_link: "https://example.com/project-two-live"
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "https://via.placeholder.com/150",
    github_link: "https://example.com/project-three",
    external_link: "https://example.com/project-three-live"}
]

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold">My <span className="gradient-text">Projects</span></h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg p-4 grid-cols-1 gap-6">
        test
      </div>
    </section>
  )
}
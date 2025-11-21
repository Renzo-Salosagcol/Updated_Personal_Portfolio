import { GithubIcon, ExternalLink } from "lucide-react"

const project_info = [
  {
    id: 1,
    title: "Guild Table",
    description: "Guild Table is a unified web platform for D&D Dungeon Masters, consolidating character sheets, inventory, maps, notes, and collaborative tools into one interface." + "It provides a synchronized virtual tabletop for all players, simplifying remote session management and organization. " + "Linked notes and map generation streamline preparation and enhance the online play experience.",
    image: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    badges: ["Svelte", "TailwindCSS", "MongoDB", "Express"],
    github_link: "https://github.com/keillor/Guild-Table.git",
    external_link: ""
  },
  {
    id: 2,
    title: "Yap Sessions",
    description: "Yap Sessions is a secure, real-time WebSocket chat application for team communication. " +
    "It provides end-to-end encryption (client-side message encryption; only encrypted blobs stored), hashed credential-based login & registration, presence & typing indicators, emojis, file uploads, auto-reconnect with heartbeat/ping, uptime monitoring, and basic rate limiting, backed by Neon (PostgreSQL) and hosted on Render. " +
    "AI assistance was used for error checking, optimization, and styling.",
    image: "../../headshot.jpeg",
    badges: ["NextJS", "ExpressJS", "HTML5", "CSS3"],
    github_link: "https://github.com/Renzo-Salosagcol/Web-Socket-Communication.git",
    external_link: "https://web-socket-communication.onrender.com/"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Continuous improvement and development of new projects is underway. Stay tuned for exciting updates and releases in the near future!",
    image: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
    badges: [],
    github_link: "",
    external_link: ""
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold">My <span className="gradient-text">Projects</span></h1>
      </div>
      <div className="px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project_info.map((project) => (
          <div key={project.id} className="gradient-card max-w-8/10 h-full">
            <div className="gradient-card-inner">
              <img src={project.image} alt={project.title} className="aspect-2/1 object-cover mb-4 rounded-[inherit]" />
              <h2 className="font-bold text-xl mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map((badge, index) => (
                  <span key={index} className="bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">{badge}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors duration-300"><GithubIcon /></a>
                <a href={project.external_link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline transition-colors duration-300"><ExternalLink /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold"><span className="gradient-text">Contact </span>Me</h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg gradient-card">
        <div className="gradient-card-inner grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl gradient-text">Follow Me on Social Media</h2>
            <ul className="flex flex-col gap-6 text-lg items-left">
              <li className="flex items-left gap-4">
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-left gap-4"
                >
                <Facebook /> Facebook
                </a>
              </li>
              <li className="flex items-left gap-4">
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-left gap-4"
                >
                <Instagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-left gap-4"
                >
                <Twitter /> Twitter
                </a>
              </li>
              <li className="flex items-left gap-4">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                  className="flex items-left gap-4"
                >
                <Linkedin /> Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl gradient-text">Send Me a Message</h2>
            <form>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
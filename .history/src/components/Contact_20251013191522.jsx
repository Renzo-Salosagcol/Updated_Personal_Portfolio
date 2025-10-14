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
            <div>
              <div className="items-left inline"><Facebook /> Facebook</div>
              
              <Instagram /> Instagram
              <Twitter /> Twitter
              <Linkedin /> Linkedin
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl gradient-text">Send Me a Message</h2>
            
          </div>
        </div>
      </div>
    </section>
  )
}
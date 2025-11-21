import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react"
import { useState } from "react"

const SOCIAL_MEDIA = [
  { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/renzo.salosagcol/" },
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/renzosalosagcol/" },
  { name: "Twitter", icon: Twitter, link: "" },
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/renzo-salosagcol" },
]

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)

    setTimeout(() => {
      alert("Message sent successfully!")
      setIsSubmitting(false)
    }, 1500)
  }
  return (
    <section id="contact" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold"><span className="gradient-text">Contact </span>Me</h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg gradient-card">
        <div className="gradient-card-inner flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-xl font-semibold">Send Me A Message</h2>
            <form className="space-y-6 w-full items-center justify-center">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to..."
                />
              </div>
              <div className="w-full items-center">
                <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-button cursor-pointer w-full"
                onClick={handleSubmit}
                >
                  <div className="gradient-button-inner hover:gradient-text">
                    <h5 className="text-foreground p-2 py-1 hover:text-background inline-flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={18} className="mt-1"/>
                    </h5>
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="w-full items-center">
            <h2 className="flex flex-row items-center gap-4 w-full justify-center font-semibold">
              <div className="bg-foreground h-0.5 w-full mt-1"> </div>
              OR
              <div className="bg-foreground h-0.5 w-full mt-1"> </div>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl font-semibold">Follow Me on Social Media</h2>
            <ul className="flex md:flex-row sm:flex-col gap-6 text-lg items-left">
              {SOCIAL_MEDIA.map((platform) => (
                <li key={platform.name}>
                  <a href={platform.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-left gap-2">
                    <platform.icon size={20} className="mt-1"/> {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
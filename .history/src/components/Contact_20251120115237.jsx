import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react"
import { useState } from "react"

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
            <form className="space-y-6 w-full">
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
              <button type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 gradient-button cursor-pointer"
                onClick={handleSubmit}
              >
                <div className="gradient-button-inner inline-flex items-center gap-2 p-2 gradient-text">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </div>
              </button>
            </form>
          </div>
          <div className="w-full items-center">
            <h2 className="flex flex-row items-center w-full bg-red">
              <div className="font-stretch-expanded">-</div>
              OR
              <div className="font-stretch-expanded">-</div>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl font-semibold">Follow Me on Social Media</h2>
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
                <a href="https://www.linkedin.com/in/renzo-salosagcol" target="_blank" rel="noopener noreferrer"
                  className="flex items-left gap-4"
                >
                <Linkedin /> Linkedin
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
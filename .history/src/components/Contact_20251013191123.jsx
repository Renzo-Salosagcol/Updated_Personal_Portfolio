import { Facebook, Instagram, Twitter } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="flex items-center justify-center mb-12">
        <h1 className="font-bold"><span className="gradient-text">Contact </span>Me</h1>
      </div>
      <div className=" mx-auto max-w-6xl rounded-lg grid-cols-1 md:grid-cols-2 gap-6 gradient-card">
        <div className="gradient-card-inner">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl gradient-text">Get in Touch</h2>

          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-xl gradient-text">Send Me a Message</h2>
            <Facebook /> Facebook
            <Instagram /> Instagram
            <Twitter /> Twitter
          </div>
        </div>
      </div>
    </section>
  )
}
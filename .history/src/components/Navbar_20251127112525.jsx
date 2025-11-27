import clsx from 'clsx'
import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X } from 'lucide-react'

const items = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full p-1 flex items-center justify-between glassmorphism z-40 text-sm md:text-md text-foreground">
      <a href="#home" className="p-2"><span className="gradient-text">Renzo Salosagcol</span> Portfolio</a>

      {/* Desktop Navbar */}
      <ul className="hidden md:flex gap-6 p-2">
        {items.map(item => (
          <li key={item.name}
            className="hover:gradient-text transition-all duration-300 relative hover:gradient-card">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
        <li><ThemeToggle /></li>
      </ul>

      {/* Mobile Navbar */}

      <button 
        className="md:hidden p-2 z-50 focus:outline-none text-foreground"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={clsx("fixed md:hidden inset-0 p-2 flex flex-col items-center justify-center", 
      "backdrop-blur-md transition-all duration-300 my-auto z-40 bg-background/50 text-foreground",
      "min-h-screen min-w-screen mt-0",
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <div className="flex flex-col gap-8 text-xl items-center">
          {items.map((item, key) => (
            <a key={key}
              href={item.href}  
              className="hover:gradient-text transition-all duration-300 relative hover:gradient-card"
              onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}


const items = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-2 flex items-center justify-between glassmorphism z-40 text-sm md:text-md text-foreground">
      <a href="#home" className="p-2"><span className="gradient-text">Renzo Salosagcol</span> Portfolio</a>
      <ul className="flex gap-6 p-2">
        {items.map(item => (
          <li key={item.name}
            className="hover:gradient-text transition-all duration-300 relative">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
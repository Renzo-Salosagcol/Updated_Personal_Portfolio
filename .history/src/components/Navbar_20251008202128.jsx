

const items = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-center glassmorphism z-10">
      <h3><span className="gradient-text">Renzo Salosagcol</span> Portfolio</h3>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
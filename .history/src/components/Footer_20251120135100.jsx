import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className=" bg-primary relative border-t border-border p-4 flex flex-wrap justify-between items-center">
      <p className="text-small text-muted-foreground"> &copy; {new Date().getFullYear()} Renzo Salosagcol. All rights reserved.</p>
      <a href="#home" className="p-2 rounded-full bg-secondary/10 hover:bg-primary/20 text-foreground transition-colors"> <ArrowUp /></a>
    </footer>
  )
}
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      setIsDark(theme === "dark")
      document.documentElement.classList.toggle("dark", theme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", !isDark ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="max-sm:hidden z-50 p-2 rounded-full transition-color duration-300 focus:outline-hidden"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>

  )
}
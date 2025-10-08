

export const NotFound = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background w-screen h-screen">
      <div className="container flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl gradient-text">404 - Not Found</h1>
        <a href="/" className="bg-background relative hover:cursor-pointer gradient-border text-center rounded-full p-2 m-2 z-1">
            <span 
            className="relative gradient-text p-2"
            >Return to Home</span>
        </a>
      </div>
    </div>
  )
}


export const NotFound = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-3xl gradient-text">404 - Not Found</h1>
        <a href="/" className="z-0">
          <button
            className="bg-background relative hover:cursor-pointer gradient-border text-center rounded-full p-2 m-2"
          >
            <span 
            className="gradient-text p-2"
            >Return to Home</span>
          </button>
        </a>
      </div>
    </div>
  )
}
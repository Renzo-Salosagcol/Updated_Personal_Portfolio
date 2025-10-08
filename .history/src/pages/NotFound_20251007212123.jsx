

export const NotFound = () => {
  return (
    <div className="container bg-background m-auto flex flex-col items-center justify-center h-screen -z-10">
      <h1 className="text-3xl gradient-text">404 - Not Found</h1>
      <a href="/" className="">
        <button 
          className="bg-foreground relative hover:cursor-pointer gradient-border text-center border- p-2 m-2"
        >
          <span className="text-white">Return to Home</span>
        </button>
      </a>
    </div>
  )
}
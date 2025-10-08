

export const NotFound = () => {
  return (
    <div className="container bg-background m-auto flex flex-col items-center justify-center h-screen -z-10">
      <h1 className="text-3xl gradient-text">404 - Not Found</h1>
      <a href="/" className="">
        <button 
          className="bg-background relative hover:cursor-pointer gradient-border text-center rounded-full p-2 m-2"
        >
          <span className="gradient-text text-white">Return to Home</span>
        </button>
      </a>
    </div>
  )
}
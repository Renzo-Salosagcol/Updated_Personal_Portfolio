

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center max-w-10/12 rounded-md container z-0">
      <div className="z-0 relative gradient-border opacity-0 animate-fade-in">
        <div className="w-full h-full relative container flex justify-between gap-6 rounded-md p-6 bg-background">
          <div className="container flex flex-col gap-4">
            <h1 className="text-lg md:text-xl lg:text-2xl">Hello!</h1>
          </div>
          <div>
            <img 
            src="../../public/headshot.jpeg" 
            alt="Headshot Photo"
            className="rounded-md w-32 h-32 object-cover"
            />
          </div>
      </div>
      </div>
    </main>
  )
}
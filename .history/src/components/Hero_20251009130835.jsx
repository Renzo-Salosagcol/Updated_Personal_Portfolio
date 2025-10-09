

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center max-w-10/12 rounded-md container z-0">
      <div className="z-0 relative gradient-border opacity-0 animate-fade-in">
        <div className="w-full h-full relative container flex justify-between gap-6 rounded-md p-6 bg-background">
          <div className="container flex flex-col gap-1">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              <span className="gradient-text">Hello! </span>
              My Name is
              <span className="gradient-text"> Renzo Salosagcol</span>
            </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl">I am a <span className="gradient-text">Full-Stack Web Developer</span></h1>
            <h3 className="w-md md:w-lg lg:w-xl">Problem solving and critical thinking are some of my favorite and most rewarding activities. Coding is a way for me to express my creativity and bring ideas to life while consistently approaching and adapting to new challenges.</h3>
          </div>
          <div>
            <img 
            src="../../headshot.jpeg" 
            alt="Headshot Photo"
            className="rounded-md w-32 h-32 object-cover"
            />
          </div>
      </div>
      </div>
    </main>
  )
}

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex justify-center w-full rounded-md container z-0">
      <div className="gradient-card opacity-0 animate-fade-in">
        <div className="gradient-card-inner flex flex-col lg:flex-row justify-center gap-4 rounded-md bg-background w-full">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              <span className="gradient-text">Hello! </span>
              My Name is
              <span className="gradient-text"> Renzo Salosagcol</span>
            </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl">I am a <span className="gradient-text">Full-Stack Web Developer</span></h1>
            <h3 className="w-full md:w-lg lg:w-xl text-sm">
              <span className="font-bold">Problem solving</span> and
              <span className="font-bold"> critical thinking </span>
              are some of my favorite and most rewarding activities. Coding is a way for me to express my creativity and bring ideas to life while consistently approaching and adapting to new challenges.
            </h3>
            <h3 className="w-full md:w-lg lg:w-xl text-sm">Want to learn more about me?  
              <span className="gradient-text"> Click on the button</span> below or 
              <span className="gradient-text"> keep scrolling</span> to learn more!
            </h3>
            <a 
              href="#about"
              className="mt-4 inline-block text-center active:scale-[1.05]"
            >
              <button className="gradient-button cursor-pointer">
                <div className="gradient-button-inner hover:gradient-text active:scale-[1.05] active:bg-background">
                  <h5 className="text-foreground p-2 py-1 hover:text-background">Learn more...</h5>
                </div>
              </button>
            </a>
          </div>
          <div>
            <img 
            src="../../headshot.jpeg" 
            alt="Headshot Photo"
            className="rounded-md w-64 h-full object-center object-cover"
            />
          </div>
      </div>
      </div>
    </main>
  )
}
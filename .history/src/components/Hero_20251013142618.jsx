import GradientButton from "./GradientButton";

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center max-w-10/12 rounded-md container z-0">
      <div className="gradient-card opacity-0 animate-fade-in">
        <div className="gradient-card-inner flex flex-cols lg:flex-rows justify-between gap-6 rounded-md bg-background">
          <div className="container flex flex-col gap-1">
            <h1 className="text-lg md:text-xl lg:text-2xl">
              <span className="gradient-text">Hello! </span>
              My Name is
              <span className="gradient-text"> Renzo Salosagcol</span>
            </h1>
            <h1 className="text-lg md:text-xl lg:text-2xl">I am a <span className="gradient-text">Full-Stack Web Developer</span></h1>
            <h3 className="w-md md:w-lg lg:w-xl text-sm">
              <span className="font-bold">Problem solving</span> and
              <span className="font-bold"> critical thinking </span>
              are some of my favorite and most rewarding activities. Coding is a way for me to express my creativity and bring ideas to life while consistently approaching and adapting to new challenges.
            </h3>
            <h3 className="w-md md:w-lg lg:w-xl text-sm">Want to learn more about me?  
              <span className="gradient-text"> Click on the button</span> below or 
              <span className="gradient-text"> keep scrolling</span> to learn more!
            </h3>
            <a 
              href="#about"
              className="gradient-card p-0"
            >
                <button className="gradient-card-inner p-2">
                  <h5 className="gradient-text">Learn more...</h5>
                </button>
            </a>
          </div>
          <div>
            <img 
            src="../../headshot.jpeg" 
            alt="Headshot Photo"
            className="rounded-md w-64 h-64 object-cover"
            />
          </div>
      </div>
      </div>
    </main>
  )
}
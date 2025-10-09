

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center max-w-10/12 rounded-md container z-0">
      <div className="opacity-0 animate-fade-in relative container flex justify-between gap-6 rounded-full p-6 bg-background gradient-border">
        <div className="">
          <h1>Name</h1>
        </div>
        <div>
          <h1>Image</h1>
        </div>
      </div>
    </main>
  )
}
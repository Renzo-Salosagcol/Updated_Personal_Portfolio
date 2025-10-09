

export const Hero = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-red-100 max-w-10/12 rounded-md container">
      <div className="opacity-0 animate-fade-in flex justify-between gap-6">
        <div>
          <h1>Name</h1>
        </div>
        <div>
          <h1>Image</h1>
        </div>
      </div>
    </main>
  )
}
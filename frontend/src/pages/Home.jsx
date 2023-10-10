import { Navbar } from "../ui/Navbar"

export const Home = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="overflow-y-auto p-4">
        <h1>Home</h1>
      </main>
    </div>
  )
}

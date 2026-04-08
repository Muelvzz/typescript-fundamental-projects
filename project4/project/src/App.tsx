import { JSX } from "react"
import Calculator from "./components/Calculator"

function App(): JSX.Element {

  return (
    <>
      <header className="
        py-4 text-center  
      ">
        <h1 className="
          font-bold text-2xl md:text-3xl 
          lg:text-4xl
        ">Project #4: Calculator</h1>
      </header>
      <main className="
        min-h-screen flex justify-center items-center
      ">
        <Calculator />
      </main>
      <footer className="
        text-center py-4
      ">
        <p>Made by Muelvin Lopez @ 2026</p>
      </footer>
    </>
  )
}

export default App

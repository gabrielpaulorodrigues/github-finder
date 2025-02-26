import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

export function App() {

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"}/>

        <main className="container mx-auto px-3"> Content </main>

        <Footer/>
      </div>
    </Router>
  )
}

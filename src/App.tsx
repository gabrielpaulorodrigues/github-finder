import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Home } from "./pages/Home/Home";
import { UserProfile } from "./pages/UserProfile";

export function App() {

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"}/>

        <main className="container mx-auto px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:login" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer/>
      </div>
    </Router>
  )
}


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { Home } from "./pages/Home/Home";
import { UserProfile } from "./pages/UserProfile";
import { GithubProvider } from "./context/GithubContext";
import { Layout } from "./pages/Layout/Layout";

export function App() {

  return (
    <GithubProvider>
    <Router>
    <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:login" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </Layout>
    </Router>
    </GithubProvider>
  )
}

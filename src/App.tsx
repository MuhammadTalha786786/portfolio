import "./App.css";
import { Box } from "@chakra-ui/react";
import { useColors } from "./hooks/useColors";
import Nav from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const c = useColors();

  return (
    <Box className="noise-overlay" bg={c.bg} minH="100vh" transition="background 0.3s">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
}

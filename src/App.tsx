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
    <Box className="noise-overlay" bg={c.bg} minH="100vh" transition="background 0.4s ease" position="relative">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="100vh"
        pointerEvents="none"
        zIndex={0}
        bg={`radial-gradient(ellipse 80% 50% at 50% -20%, rgba(194, 168, 120, 0.04), transparent)`}
      />
      <Box position="relative" zIndex={1}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </Box>
  );
}

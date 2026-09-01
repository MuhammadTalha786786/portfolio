import "./App.css";
import { Box } from "@chakra-ui/react";
import { useColors } from "./hooks/useColors";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Main Application Component
 * Renders the portfolio layout with all sections
 */
export default function App() {
  const colors = useColors();

  return (
    <Box
      className="noise-overlay"
      bg={colors.bg}
      minH="100vh"
      transition="background 0.4s ease"
      position="relative"
    >
      {/* Background gradient overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="100vh"
        pointerEvents="none"
        zIndex={0}
        bg="radial-gradient(ellipse 80% 50% at 50% -20%, rgba(194, 168, 120, 0.04), transparent)"
      />

      {/* Main content */}
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

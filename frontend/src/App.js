import './App.css';
import { Toaster } from './components/ui/sonner.js';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Divisions from './components/sections/Divisions';
import Solutions from './components/sections/Solutions';
import Interiors from './components/sections/Interiors';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body transition-colors duration-300">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--card-foreground))',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <Solutions />
        <Projects />
        <Interiors />
        <Process />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
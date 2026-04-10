import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Team from './components/Team';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <main className="scroll-smooth pt-4 md:pt-20">
        <Hero />
        <About />
        <Programs />
        <Mission />
        <Impact />
        <Team />
        <Booking />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

export default App;


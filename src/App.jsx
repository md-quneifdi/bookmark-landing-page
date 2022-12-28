import React from 'react';
import DownloadEx from './Components/DownloadEx';
import FAQ from './Components/FAQ';
import Features from './Components/Features';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import JoinSection from './Components/JoinSection';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <Features />
      <DownloadEx />
      <FAQ />
      <JoinSection />
      <Footer />
    </div>
  )
}

export default App

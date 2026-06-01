import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SpaceBackground from './components/SpaceBackground'
import HologramSphere from './components/HologramSphere'
import Quadrant1 from './components/Quadrant1'
import Quadrant2 from './components/Quadrant2'
import Quadrant3 from './components/Quadrant3'
import Quadrant4 from './components/Quadrant4'
import { HiArrowLeft } from 'react-icons/hi'

function App() {
  const [activePage, setActivePage] = useState(null);
  const [showInnerSphere, setShowInnerSphere] = useState(false);

  // Scroll to sphere when going back, scroll to top when opening page
  const handleNavigate = (page) => {
    setActivePage(page);
    if (page === null) {
        setTimeout(() => {
            const sphereEl = document.getElementById('sphere-section');
            if (sphereEl) sphereEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <SpaceBackground />
      {!activePage && <Navbar />}
      
      <main className="relative z-10">
        {activePage === null ? (
           <>
             <Hero />
             <About />
             <div id="sphere-section" className="w-full py-16">
               <HologramSphere 
                 onNavigate={handleNavigate} 
                 showInner={showInnerSphere} 
                 setShowInner={setShowInnerSphere} 
               />
             </div>
           </>
        ) : (
           <div className="min-h-screen py-24 px-6 md:px-12">
             <div className="max-w-6xl mx-auto mb-12">
               <button 
                  onClick={() => handleNavigate(null)}
                  className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all uppercase tracking-widest text-xs font-heading"
               >
                 <HiArrowLeft className="text-xl" /> Back
               </button>
             </div>
             {activePage === 1 && <Quadrant1 />}
             {activePage === 2 && <Quadrant2 />}
             {activePage === 3 && <Quadrant3 />}
             {activePage === 4 && <Quadrant4 />}
           </div>
        )}
      </main>
    </div>
  )
}

export default App

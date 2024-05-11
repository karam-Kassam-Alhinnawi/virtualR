import './index.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Features from './components/features.js';
import Workflow from './components/Workflow.js';
import Pricing from './components/Pricing.js';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer.js';

function App() {
  return (
     <div className='app'>
       <Navbar/>
       <Hero/>
       <Features/>
       <Workflow/>
       <Pricing/>
       <Testimonials/>
       <Footer/>
     </div>
  );
}

export default App;

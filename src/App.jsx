import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Awards from './pages/Awards';

// Detail Pages
import MutualFunds from './pages/details/MutualFunds';
import TermInsurance from './pages/details/TermInsurance';
import CyberInsurance from './pages/details/CyberInsurance';
import EducationPlanning from './pages/details/EducationPlanning';
import FactoryInsurance from './pages/details/FactoryInsurance';
import RetirementPlanning from './pages/details/RetirementPlanning';
import LiabilityInsurance from './pages/details/LiabilityInsurance';
import TransitInsurance from './pages/details/TransitInsurance';
import CarInsurance from './pages/details/CarInsurance';
import DynamicServiceDetail from './pages/details/DynamicServiceDetail';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Service Details */}
        <Route path="/services/mutual-funds" element={<MutualFunds />} />
        <Route path="/services/term-insurance" element={<TermInsurance />} />
        <Route path="/services/cyber-insurance" element={<CyberInsurance />} />
        <Route path="/services/education-planning" element={<EducationPlanning />} />
        <Route path="/services/factory-insurance" element={<FactoryInsurance />} />
        <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
        <Route path="/services/liability-insurance" element={<LiabilityInsurance />} />
        <Route path="/services/transit-insurance" element={<TransitInsurance />} />
        <Route path="/services/car-insurance" element={<CarInsurance />} />
        
        {/* Fallback for Dynamic Services from Sanity */}
        <Route path="/services/:slug" element={<DynamicServiceDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Truck, Ship, Anchor, MapPin, Milestone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const TransitInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Package, Truck, Ship]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Logistics Protection</p>
          <h1 className="heading-xl">Open Policy for Transit</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Ensuring your goods reach their destination safely. Comprehensive 
            marine and inland transit coverage for businesses on the move.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Secure Shipment</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Sample Policy</Link>
          </div>
        </motion.div>
      </section>

      {/* Modes */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Inland Transit", icon: <Truck />, desc: "Coverage for goods transported via road and rail across India." },
            { title: "Marine Export/Import", icon: <Ship />, desc: "Protecting your international shipments against sea and air perils." },
            { title: "Open Policy Benefit", icon: <Package />, desc: "One-time declaration for multiple shipments, saving time and costs." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assurance */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <Milestone size={100} color="var(--secondary)" style={{ opacity: 0.2 }} />
              <h3>Safe Passage Guaranteed</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>Tailored transit insurance for every industry.</p>
           </div>
           <div style={{ paddingLeft: '40px' }}>
              <h2 className="heading-l">Moving World, Secure Goods</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                With 26 years of logistics risk advisory, we help businesses 
                optimize their transit insurance costs while maximizing coverage 
                limits. 
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Door-to-Door Coverage</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Loading & Unloading Protection</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><ShieldCheck size={18} color="var(--secondary)" /> Quick All-India Survey Assistance</li>
              </ul>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default TransitInsurance;

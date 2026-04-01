import React from 'react';
import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Flame, Zap, Package, CheckCircle2, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const FactoryInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Factory, Settings, Warehouse]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Industrial Protection</p>
          <h1 className="heading-xl">Factory & Assets Insurance</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Protecting your workforce, machinery, and industrial output with 
            comprehensive risk management solutions. Secure your enterprise.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Get Quote</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Site Visit</Link>
          </div>
        </motion.div>
      </section>

      {/* Coverage */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Fire & Special Perils", icon: <Flame />, desc: "Coverage against fire, lightining, and natural disasters." },
            { title: "Machinery Breakdown", icon: <Zap />, desc: "Protecting your core assets against operational failure." },
            { title: "Stock & Inventory", icon: <Package />, desc: "Insuring your raw materials and finished goods in transit or storage." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <Factory size={100} color="var(--secondary)" style={{ opacity: 0.2 }} />
              <h3>Business Continuity</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>We ensure your business stays running even after a crisis.</p>
           </div>
           <div style={{ paddingLeft: '40px' }}>
              <h2 className="heading-l">Complete Risk Advisory</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                With 26 years of industrial risk management, Sharma Insurance 
                provides more than just a policy; we provide a safety net for 
                your entire enterprise.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Burglary & Theft Clauses</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Public Liability Coverage</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><ShieldCheck size={18} color="var(--secondary)" /> Group Mediclaim for Workers</li>
              </ul>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '30px' }}>Consult Our Industrial Expert</Link>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default FactoryInsurance;

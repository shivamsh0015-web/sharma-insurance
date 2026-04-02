import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldAlert, Cpu, Network, ShieldCheck, Globe, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const CyberInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Lock, ShieldCheck, Globe]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Digital Security</p>
          <h1 className="heading-xl">Cyber Crime Insurance</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Protecting your business and personal digital assets in an era of 
            evolving cyber threats. Comprehensive coverage for the digital age.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Protect Now</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Free Risk Audit</Link>
          </div>
        </motion.div>
      </section>

      {/* Coverage */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Data Breach Cover", icon: <Lock />, desc: "Coverage for costs related to data theft and legal investigations." },
            { title: "Financial Loss", icon: <ShieldAlert />, desc: "Protection against unauthorized digital transactions and identity theft." },
            { title: "Cyber Extortion", icon: <Globe />, desc: "Support and coverage in case of ransomware attacks." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Importance */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div>
              <h2 className="heading-l">Why Modern Businesses Need It</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                In 2024, cyber threats are at an all-time high. Our specialized 
                cyber insurance policies ensure that a single breach doesn't 
                bankrupt your hard-earned legacy.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Legal & Forensic Support</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Brand Reputation Recovery</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> 24/7 Incident Response</li>
              </ul>
           </div>
           <div className="glass-panel" style={{ padding: '40px', border: '1px solid #ff4d4d' }}>
              <AlertTriangle size={50} color="#ff4d4d" style={{ marginBottom: '20px' }} />
              <h3 style={{ color: 'var(--white)' }}>Did You Know?</h3>
              <p style={{ color: '#ff4d4d', marginTop: '15px', fontWeight: 'bold' }}>
                60% of small businesses close within 6 months of a cyber attack. 
                Don't be a statistic. Plan with Sharma Insurance today.
              </p>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default CyberInsurance;

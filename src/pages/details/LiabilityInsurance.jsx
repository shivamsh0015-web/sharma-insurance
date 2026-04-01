import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Gavel, Briefcase, FileCheck, Landmark, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const LiabilityInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Scale, Landmark, Gavel]} count={5} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Professional Protection</p>
          <h1 className="heading-xl">Liability Insurance</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Protecting your business and professional reputation against 
            third-party claims and legal obligations. Specialized advisory 
            for modern enterprises.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Secure Business</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Policy Review</Link>
          </div>
        </motion.div>
      </section>

      {/* Coverage Grid */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Public Liability", icon: <Users size={24} />, desc: "Coverage for bodily injury or property damage to third parties on your premises." },
            { title: "Professional Indemnity", icon: <Briefcase />, desc: "Essential for doctors, CAs, and advisors against errors & omissions." },
            { title: "Director's Liability", icon: <Gavel />, desc: "Protecting key decision makers from legal fallout due to management decisions." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Aid */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div style={{ paddingRight: '40px' }}>
              <h2 className="heading-l">Why Liability Coverage?</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                In an increasingly litigious world, a single lawsuit can 
                drain your business assets. With 26 years of risk management, 
                we help you identify and insure against every potential liability.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Legal Defense Cost Coverage</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Settlement Expenses</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><ShieldCheck size={18} color="var(--secondary)" /> Worldwide & Jurisdiction Options</li>
              </ul>
           </div>
           <div className="glass-panel" style={{ padding: '40px', border: '1px solid #ffd700' }}>
              <AlertCircle size={50} color="#ffd700" style={{ marginBottom: '20px' }} />
              <h3 style={{ color: 'var(--white)' }}>Professional Shield</h3>
              <p style={{ color: '#ffd700', marginTop: '15px', fontWeight: 'bold' }}>
                Don't let a professional oversight destroy your legacy. 
                Get insured by the experts.
              </p>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default LiabilityInsurance;

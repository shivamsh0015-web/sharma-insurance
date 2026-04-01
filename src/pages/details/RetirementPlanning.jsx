import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, ShieldCheck, HeartPulse, Wallet, Calculator, TrendingUp, DollarSign, PiggyBank, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const RetirementPlanning = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Palmtree, Wallet, HeartPulse]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Financial Independence</p>
          <h1 className="heading-xl">Retirement Planning</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Ensuring your golden years are lived with dignity and financial freedom. 
            Guaranteed lifetime pensions and tax-free retirement corpus.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Start Planning</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Check Pensions</Link>
          </div>
        </motion.div>
      </section>

      {/* Strategies */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Lifetime Pension", icon: <DollarSign />, desc: "Guaranteed monthly income for life, protecting you against longevity risk." },
            { title: "Corpus Creation", icon: <PiggyBank />, desc: "Build a multi-crore corpus through tax-efficient LIC & Mutual Fund tools." },
            { title: "Legacy Planning", icon: <Briefcase />, desc: "Ensure your wealth is passed on to your loved ones seamlessly." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Retirement */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <Palmtree size={100} color="var(--secondary)" style={{ opacity: 0.2 }} />
              <h3>Don't Run Out of Money</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>Inflation-adjusted planning for your golden years.</p>
           </div>
           <div style={{ paddingLeft: '40px' }}>
              <h2 className="heading-l">Expert Advice (26 Years)</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                Retirement is not an age; it's a financial status. We help you 
                achieve that status early through disciplined need-based planning.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Guaranteed Returns (LIC)</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Market-Linked Upside (Mutual Funds)</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><TrendingUp size={18} color="var(--secondary)" /> Inflation Protection</li>
              </ul>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default RetirementPlanning;

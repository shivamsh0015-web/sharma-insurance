import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, ArrowUpRight, BarChart3, Target, Activity, Search, RefreshCw, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const MutualFunds = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const schemes = [
    { title: "Equity Funds", desc: "For long-term wealth creation with higher returns. Focused on blue-chip and growth sectors.", risk: "High" },
    { title: "Debt Funds", desc: "Stable returns with lower risk profile. Ideal for capital preservation.", risk: "Low to Moderate" },
    { title: "Hybrid Funds", desc: "Balanced approach for steady growth and safety. Monthly income options available.", risk: "Moderate" }
  ];

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[TrendingUp, PieChart, BarChart3]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Wealth Management</p>
          <h1 className="heading-xl">Mutual Fund Advisory</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Trusted by over 1000+ clients for goal-based wealth creation. We provide 
            unbiased advisory and research-driven fund selection for your future.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Start Investing</Link>
          </div>
        </motion.div>
      </section>

      {/* Schemes Grid */}
      <section id="schemes" style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <h2 className="heading-l" style={{ justifyContent: 'center' }}>Investment Categories</h2>
           <p style={{ color: 'var(--text-dim)' }}>Diverse solutions for every risk appetite and financial goal.</p>
        </div>
        <div className="grid grid-3">
          {schemes.map((item, i) => (
            <motion.div key={i} className="glass-panel" style={{ padding: '40px' }} whileHover={{ y: -5 }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}><PieChart /></div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', margin: '15px 0', fontSize: '15px' }}>{item.desc}</p>
              <div style={{ fontSize: '13px', color: 'var(--secondary)', fontWeight: 'bold' }}>Risk Level: {item.risk}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          <div>
            <h2 className="heading-l">Expert Wealth Advisory</h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
              With 26 years of market exposure, Sharma Insurance & Investments 
              brings an institutional-grade approach to retail wealth management.
            </p>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: <Target />, text: "Goal-Based Selection (Marriage, Education, Retirement)" },
                { icon: <BarChart3 />, text: "Regular Portfolio Review & Alpha Tracking" },
                { icon: <ArrowUpRight />, text: "Tax-Efficient Withdrawal Strategies & SWPs" },
                { icon: <FileText />, text: "Consolidated Statement & Performance Reporting" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--white)' }}>
                  <div style={{ color: 'var(--secondary)' }}>{item.icon}</div>
                  <span style={{ fontSize: '15px' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
             <TrendingUp size={200} color="var(--secondary)" style={{ opacity: 0.05, position: 'absolute', bottom: '-50px', right: '-50px' }} />
             <h2 style={{ fontSize: '72px', color: 'var(--secondary)', fontWeight: '800', lineHeight: 1 }}>1000+</h2>
             <p style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '12px', marginTop: '10px', color: 'var(--text-dim)' }}>Clients Trust Our Advice</p>
             <div style={{ height: '2px', background: 'var(--secondary)', width: '50px', margin: '30px auto' }}></div>
             <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Book Consultation</Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default MutualFunds;

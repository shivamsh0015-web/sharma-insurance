import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, ArrowUpRight, BarChart3, Target } from 'lucide-react';
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
    { title: "Equity Funds", desc: "For long-term wealth creation with higher returns.", risk: "High" },
    { title: "Debt Funds", desc: "Stable returns with lower risk profile.", risk: "Low to Moderate" },
    { title: "Hybrid Funds", desc: "Balanced approach for steady growth and safety.", risk: "Moderate" }
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
            unbiased advisory and research-driven fund selection.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Start Investing</Link>
            <a href="#schemes" className="btn btn-outline">Explore Schemes</a>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="schemes" style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {schemes.map((item, i) => (
            <motion.div key={i} className="glass-panel" style={{ padding: '40px' }} whileHover={{ y: -5 }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}><PieChart /></div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', margin: '15px 0' }}>{item.desc}</p>
              <div style={{ fontSize: '13px', color: 'var(--secondary)' }}>Risk Level: {item.risk}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="heading-l">Expert Portfolio Management</h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
              We don't just sell funds; we manage your financial health. Our 26 years of 
              experience helps us identify the right opportunities in any market cycle.
            </p>
            <ul style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: <Target />, text: "Goal-Based Selection (Marriage, Education, Retirement)" },
                { icon: <BarChart3 />, text: "Regular Portfolio Review & Rebalancing" },
                { icon: <ArrowUpRight />, text: "Tax-Efficient Investment Strategies" }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--white)' }}>
                  <div style={{ color: 'var(--secondary)' }}>{item.icon}</div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
             <TrendingUp size={100} color="var(--secondary)" style={{ opacity: 0.1, position: 'absolute', top: '10px', right: '10px' }} />
             <h2 style={{ fontSize: '60px', color: 'var(--secondary)' }}>1000+</h2>
             <p>Active Investors Trusted Our Advice</p>
             <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary" style={{ marginTop: '30px' }}>Get Free Portfolio Review</Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default MutualFunds;

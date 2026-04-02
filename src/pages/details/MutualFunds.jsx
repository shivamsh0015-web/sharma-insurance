import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, ShieldCheck, ArrowUpRight, BarChart3, Target, Activity, Search, RefreshCw, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const MutualFunds = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '70vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Activity, Search, RefreshCw]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Audit & Optimization</p>
          <h1 className="heading-xl">Portfolio Analysis Solutions</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Is your current investment plan actually working? We provide a comprehensive 
            audit of your existing portfolio to identify gaps, reduce hidden costs, 
            and provide a high-performance analyzed plan.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Request Free Audit</Link>
            <a href="#audit-process" className="btn btn-outline">Our Audit Process</a>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Audit Process - CRITICAL SECTION MOVED TO TOP */}
      <section id="audit-process" style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="heading-l" style={{ justifyContent: 'center' }}>Your 4-Step Analysis Framework</h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '700px', margin: '20px auto' }}>
            We don't just sell products; we give you an analyzed plan. Our audit 
            ensures your portfolio is optimized for current market realities.
          </p>
        </div>
        <div className="grid grid-4">
          {[
            { title: "Risk Alignment", icon: <Activity />, desc: "Is your current risk exposure matching your true financial capacity?" },
            { title: "Alpha Generation", icon: <Search />, desc: "Analyzing fund manager performance vs benchmarks to ensure high returns." },
            { title: "Cost Optimization", icon: <RefreshCw />, desc: "Identifying and eliminating high-cost, underperforming assets in your portfolio." },
            { title: "Analyzed Plan", icon: <FileText />, desc: "Receiving a detailed roadmap for rebalancing and wealth optimization." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <h4 style={{ marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-dim)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise & Benefit */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          <div>
            <h2 className="heading-l">Expert Analysis Outcomes</h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
              Most portfolios are built incrementally without a master plan. Our analysis 
              corrects structural flaws that could cost you years of growth.
            </p>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { icon: <CheckCircle2 />, text: "Conflict-Free Unbiased Advisory" },
                { icon: <CheckCircle2 />, text: "Detailed Diversification Assessment" },
                { icon: <CheckCircle2 />, text: "Tax-Efficiency & Exit Strategy Review" },
                { icon: <CheckCircle2 />, text: "Performance vs Life-Goal Mapping" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--white)' }}>
                  <div style={{ color: 'var(--secondary)' }}>{item.icon}</div>
                  <span style={{ fontSize: '15px' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', border: '1px solid var(--secondary)' }}>
             <AlertCircle size={40} color="var(--secondary)" style={{ marginBottom: '20px' }} />
             <h3 style={{ marginBottom: '10px' }}>Is your plan optimized?</h3>
             <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>A 1% difference in annual returns can change your retirement by decades. Get analyzed now.</p>
             <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Book Professional Audit</Link>
          </div>
        </div>
      </section>

      {/* Implementation Segments */}
      <section style={{ background: 'var(--primary-light)', padding: '100px 0' }}>
         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-l" style={{ justifyContent: 'center' }}>Optimized Implementation</h2>
            <p style={{ color: 'var(--text-dim)' }}>Post-analysis, we help you transition into high-quality implementation segments.</p>
         </div>
         <div className="grid grid-3">
            {[
               { title: "Equity Growth", desc: "Long-term wealth creation with focused alpha research.", risk: "High" },
               { title: "Stable Income", desc: "Preservation of capital with steady debt/hybrid returns.", risk: "Balanced" },
               { title: "Targeted Goals", desc: "Education & Retirement specific fund mapping.", risk: "Strategic" }
            ].map((s, i) => (
               <div key={i} className="glass-panel" style={{ padding: '40px' }}>
                  <PieChart color="var(--secondary)" style={{ marginBottom: '15px' }} />
                  <h4>{s.title}</h4>
                  <p style={{ color: 'var(--text-dim)', margin: '15px 0', fontSize: '14px' }}>{s.desc}</p>
                  <div style={{ fontSize: '12px', color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.risk} Strategy</div>
               </div>
            ))}
         </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default MutualFunds;

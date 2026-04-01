import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, CheckCircle2, Umbrella, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const TermInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[ShieldCheck, Umbrella, Heart]} count={5} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Pure Protection</p>
          <h1 className="heading-xl">Term Life Insurance</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Secure your family's financial future with the most affordable and 
            comprehensive protection plan. High coverage with low premiums.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Check Premium</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Free Consultation</Link>
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "High Sum Assured", icon: <ShieldCheck />, desc: "Get coverage up to 50x your annual income at minimal costs." },
            { title: "Critical Illness Rider", icon: <Heart />, desc: "Added protection against major life-threatening diseases." },
            { title: "Death Benefit", icon: <Umbrella />, desc: "Lump sum tax-free payment to your nominees in case of any eventuality." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Claims */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div className="glass-panel" style={{ padding: '60px', textAlign: 'center' }}>
              <CheckCircle2 size={80} color="var(--secondary)" style={{ marginBottom: '20px' }} />
              <h2 style={{ fontSize: '40px' }}>99.2%</h2>
              <p>Claim Settlement Ratio (LIC Excellence)</p>
           </div>
           <div style={{ paddingLeft: '40px' }}>
              <h2 className="heading-l">Why Buy From Sharma Insurance?</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                With 26 years of legacy, we don't just sell a policy; we ensure your 
                claims are settled with zero hassle. We stand with your family when they need it most.
              </p>
              <div style={{ display: 'grid', gap: '15px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><Clock size={18} color="var(--secondary)" /> 24/7 Claim Assistance</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><Users size={18} color="var(--secondary)" /> Personalized Documentation Support</div>
              </div>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default TermInsurance;

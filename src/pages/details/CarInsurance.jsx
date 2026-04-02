import React from 'react';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, LifeBuoy, Zap, FileText, CheckCircle2, History, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const CarInsurance = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[Car, ShieldCheck, Zap]} count={6} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Motor Protection</p>
          <h1 className="heading-xl">Car Insurance Solutions</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Protecting your vehicle and your peace of mind with 
            comprehensive motor insurance. Get the best-in-class 
            claims support and cashless repairs.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Get Instant Quote</Link>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-outline">Policy Renewal</Link>
          </div>
        </motion.div>
      </section>

      {/* Coverage Type */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Comprehensive Cover", icon: <ShieldCheck />, desc: "Complete protection against own-damage, theft, and third-party liabilities." },
            { title: "Third-Party Only", icon: <History />, desc: "Statutory legal requirement covering damage to other people's property or life." },
            { title: "Add-on Packages", icon: <Zap />, desc: "Zero depreciation, engine protection, and consumables cover for total security." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadside Assistance */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div style={{ paddingRight: '40px' }}>
              <h2 className="heading-l">24/7 Roadside Assistance</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                Never feel stranded. Our specialized motor insurance includes 
                round-the-clock roadside assistance across India. From flat 
                tires to towing, we've got you covered.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Spot Repairs</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Emergency Fuel Delivery</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Cashless Network Garages</li>
              </ul>
           </div>
           <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <LifeBuoy size={100} color="var(--secondary)" style={{ opacity: 0.2, marginBottom: '20px' }} />
              <h3>Instant Assistance</h3>
              <p style={{ color: 'var(--text-dim)', margin: '15px 0' }}>Help is just a call away, anywhere, anytime.</p>
              <a href="tel:+917011432254" className="btn btn-outline" style={{ marginTop: '10px' }}>Emergency Number</a>
           </div>
        </div>
      </section>

      {/* Claims Process */}
      <section style={{ background: 'var(--primary-light)', padding: '100px 0' }}>
         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-l">Stress-Free Claims</h2>
            <p style={{ color: 'var(--text-dim)' }}>We handle the paperwork, so you can focus on getting back on the road.</p>
         </div>
         <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
               { step: "01", title: "Notify Us", desc: "Inform us immediately after the incident." },
               { step: "02", title: "Assessment", desc: "Digital inspection or surveyor visit." },
               { step: "03", title: "Repair", desc: "Hassle-free repair at network garage." },
               { step: "04", title: "Settlement", desc: "Quick and transparent payout." }
            ].map((s, i) => (
               <div key={i} style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ color: 'var(--secondary)', fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>{s.step}</div>
                  <h4>{s.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-dim)', marginTop: '8px' }}>{s.desc}</p>
               </div>
            ))}
         </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default CarInsurance;

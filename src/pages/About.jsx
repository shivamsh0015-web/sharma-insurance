import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, ShieldCheck, History, Milestone } from 'lucide-react';
import Counter from '../components/Counter';
import TestimonialsSection from '../components/TestimonialsSection';

import { client, urlFor } from '../lib/sanity';
import { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    client.fetch('*[_type == "about"][0]').then(data => {
      if (data) setAboutData(data);
    }).catch(err => console.log("Sanity About not connected", err));
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const iconMap = {
    Milestone: <Milestone />,
    Users: <Users />,
    ShieldCheck: <ShieldCheck />,
    Award: <Award />,
    History: <History />
  };

  // Static Fallbacks
  const title = aboutData?.title || "26 Years of Advisory Legacy";
  const subtitle = aboutData?.subtitle || "Trust Transcending Generations";
  const description = aboutData?.description || "Established in 1999, Sharma Insurance has been at the forefront of necessity-based financial planning. We don't believe in one-size-fits-all products; we believe in comprehensive advisory that secures your family's future and your business's continuity through two and a half decades of market expertise.";
  
  const stats = aboutData?.stats || {
    years: "26",
    clients: "5000",
    settlement: "100"
  };

  const philosophy = aboutData?.philosophy || [
    { title: "Goal-Oriented", iconName: "Milestone", description: "Planning specifically for your life milestones." },
    { title: "Client Centric", iconName: "Users", description: "Dedicated support at every step of your journey." },
    { title: "Proven Integrity", iconName: "ShieldCheck", description: "26 years of transparent and ethical advisory." }
  ];

  return (
    <div className="about-page">
      <section style={{ overflow: 'visible' }}>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          {/* Left: Text Content */}
          <motion.div {...fadeIn} style={{ paddingRight: '12px' }}>
            <p className="hero-sub" style={{ opacity: 0.8 }}>{subtitle}</p>
            <h2 className="heading-xl" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>{title}</h2>
            <p style={{
              color: 'var(--text-dim)',
              marginBottom: '48px',
              fontSize: '18px',
              lineHeight: '1.9',
              maxWidth: '540px'
            }}>
              {description}
            </p>

            {/* Stats - Refined Executive Look */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '24px',
              borderTop: '1px solid var(--glass-border)',
              paddingTop: '40px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <Counter target={stats.years} suffix="+" />
                <p style={{ fontSize: '10px', color: 'var(--secondary)', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '8px' }}>Years Excellence</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Counter target={stats.clients} suffix="+" />
                <p style={{ fontSize: '10px', color: 'var(--secondary)', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '8px' }}>Trusting Clients</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Counter target={stats.settlement} suffix="%" />
                <p style={{ fontSize: '10px', color: 'var(--secondary)', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '8px' }}>Claim Settlement</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait Photo - Premium Frame */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            <div className="glass-panel" style={{
              width: '100%',
              maxWidth: '420px',
              padding: '16px',
              borderRadius: '32px',
              position: 'relative',
              background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.05) 0%, hsla(0, 0%, 100%, 0.01) 100%)',
            }}>
              {/* Decorative Glow */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'var(--secondary)',
                filter: 'blur(80px)',
                opacity: 0.1,
                zIndex: -1
              }} />
              
              <div style={{
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'var(--white)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <img
                  src={aboutData?.aboutImage ? urlFor(aboutData.aboutImage).width(1000).url() : '/hero.png'}
                  alt="Advisor"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(1.02)'
                  }}
                />
              </div>
              
              <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '0 10px 10px'
              }}>
                <p style={{ color: 'var(--secondary)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                  Founder & Principal Advisor
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy - Minimalist Premium */}
      <section style={{ maxWidth: '100%', position: 'relative' }}>
        {/* Background Accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'hsla(var(--primary-h), var(--primary-s), 14%, 0.4)', zIndex: -1 }} />
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.h2 className="heading-l" style={{ justifyContent: 'center' }} {...fadeIn}>
               Our Core Philosophy
            </motion.h2>
            <motion.p style={{ color: 'var(--text-dim)', fontSize: '18px', maxWidth: '640px', margin: '24px auto 0' }} {...fadeIn}>
              Prioritizing long-term financial health over short-term cycles. 
              Our advisory is rooted in three fundamental pillars of excellence.
            </motion.p>
          </div>
          
          <div className="grid grid-3">
             {philosophy.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="glass-panel" 
                  style={{ padding: '48px 32px' }}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="service-icon">{iconMap[item.iconName] || <ShieldCheck />}</div>
                  <h4 style={{ color: 'var(--white)', marginBottom: '16px', fontSize: '20px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.7' }}>{item.description || item.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Recognitions - Gallery Highlights */}
      <section>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '32px' }}>
            <div>
              <motion.h2 className="heading-l" {...fadeIn}>Recognitions & Accolades</motion.h2>
              <motion.p style={{ color: 'var(--text-dim)', maxWidth: '600px', fontSize: '17px' }} {...fadeIn}>
                Honored by the industry's most prestigious organizations. 
                These awards represent our high standards of ethical advisory.
              </motion.p>
            </div>
            <motion.div {...fadeIn}>
              <Link to="/awards" className="btn btn-outline">
                Explore Full Gallery <Award size={18} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-3" style={{ gap: '32px' }}>
            {[
              { title: "ZM Trophy 2025", desc: "Top Performance, LIC North Zone", img: "/awards/trophy1.jpg" },
              { title: "MDRT 2023", desc: "Million Dollar Round Table Honor", img: "/awards/mdrt.jpg" },
              { title: "MDRT Qualifier", desc: "International Financial Excellence", img: "/awards/trophy2.jpg" },
              { title: "MDRT Mahaveer", desc: "Persistence & Service Medal", img: "/awards/medal.jpg" },
              { title: "BNI Alchemist", desc: "Maximum TYFCB Performance", img: "/awards/bni1.jpg" },
              { title: "Best Presentation", desc: "BNI Alchemist Chapter Award", img: "/awards/bni2.jpg" }
            ].map((award, i) => (
              <motion.div 
                key={i}
                className="award-card glass-panel"
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: '32px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  background: 'var(--white)',
                  borderRadius: '20px',
                  marginBottom: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)',
                  border: '1px solid var(--glass-border)',
                }}>
                  <img 
                    src={award.img} 
                    alt={award.title}
                    style={{
                      maxWidth: '85%',
                      maxHeight: '85%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<div style="color:var(--secondary); font-size:12px; font-weight:800;">${award.title}</div>`;
                    }}
                  />
                </div>
                <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '18px' }}>{award.title}</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default About;

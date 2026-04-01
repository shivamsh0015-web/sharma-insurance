import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Medal, Shield, Star, Filter } from 'lucide-react';

const Awards = () => {
  const [filter, setFilter] = useState('All');

  const awardsData = [
    { id: 1, title: "ZM Trophy 2025", desc: "Top Performance, LIC North Zone", img: "/awards/trophy1.jpg", category: "LIC" },
    { id: 2, title: "MDRT 2023", desc: "Million Dollar Round Table Honor", img: "/awards/mdrt.jpg", category: "MDRT" },
    { id: 3, title: "MDRT Qualifier", desc: "International Financial Excellence", img: "/awards/trophy2.jpg", category: "MDRT" },
    { id: 4, title: "MDRT Mahaveer", desc: "Persistence & Service Medal", img: "/awards/medal.jpg", category: "HDFC Life" },
    { id: 5, title: "BNI Alchemist", desc: "Maximum TYFCB Performance", img: "/awards/bni1.jpg", category: "BNI" },
    { id: 6, title: "Best Presentation", desc: "BNI Alchemist Chapter Award", img: "/awards/bni2.jpg", category: "BNI" },
    { id: 7, title: "Bima Gaurav", desc: "Plaque of Honor, Delhi D.O. 2", img: "/awards/plaque.jpg", category: "LIC" },
    { id: 8, title: "Star Performer", desc: "Excellence in Client Service", img: "/awards/star.jpg", category: "Other" },
    { id: 9, title: "20 Years Service", desc: "Two Decades of Partnership", img: "/awards/trophy3.jpg", category: "HDFC Life" },
  ];

  const categories = ['All', 'LIC', 'MDRT', 'HDFC Life', 'BNI'];
  const filteredAwards = filter === 'All' ? awardsData : awardsData.filter(a => a.category === filter);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="awards-page">
      {/* Hero Section */}
      <section style={{ 
        background: 'radial-gradient(circle at top right, hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.08), transparent)',
        paddingTop: 'clamp(120px, 20vh, 180px)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p className="hero-sub" style={{ opacity: 0.8 }}>Professional Recognition</p>
          <h1 className="heading-xl" style={{ marginBottom: '32px' }}>A Legacy of Global Standards</h1>
          <p className="hero-desc" style={{ margin: '0 auto 60px', maxWidth: '680px' }}>
            Over 26 years of dedicated advisory has been honored by the industry's most 
            esteemed global organizations. These accolades are a testament to the trust our 
            clients place in us every day.
          </p>
        </div>
      </section>

      {/* Filter & Gallery Content */}
      <section style={{ paddingTop: '0' }}>
        {/* Category Filters - Refined Pill Style */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '16px',
          marginBottom: '80px',
          padding: '0 20px'
        }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ 
                padding: '12px 32px', 
                fontSize: '11px',
                minWidth: '120px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Improved Spacing & Card Depth */}
        <div className="grid grid-3" style={{ gap: '40px' }}>
          <AnimatePresence mode='popLayout'>
            {filteredAwards.map((award, index) => (
              <motion.div
                key={award.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="award-card glass-panel"
                style={{ 
                  padding: '40px 32px', 
                  textAlign: 'center'
                }}
              >
                {/* Award Image Container with Inner Glow */}
                <div style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  background: 'var(--white)',
                  borderRadius: '24px',
                  marginBottom: '32px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-md), inset 0 0 60px rgba(0,0,0,0.03)',
                  border: '1px solid var(--glass-border)',
                  position: 'relative'
                }}>
                  <img 
                    src={award.img} 
                    alt={award.title}
                    style={{
                      maxWidth: '85%',
                      maxHeight: '85%',
                      objectFit: 'contain',
                      transition: 'transform 0.5s ease'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<div style="color:var(--primary); font-size:14px; font-weight:800; opacity:0.6;">${award.title}</div>`;
                    }}
                  />
                </div>
                
                <p style={{ 
                  fontSize: '10px', 
                  color: 'var(--secondary)', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  marginBottom: '12px'
                }}>
                  {award.category}
                </p>
                <h4 style={{ color: 'var(--white)', marginBottom: '12px', fontSize: '20px' }}>{award.title}</h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.7' }}>{award.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Quote Section - Modern High-Contrast */}
      <section style={{ 
        textAlign: 'center', 
        background: 'hsla(var(--primary-h), var(--primary-s), 14%, 0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ 
              display: 'inline-flex', 
              padding: '20px', 
              borderRadius: '20px', 
              background: 'var(--secondary-muted)',
              marginBottom: '40px' 
            }}>
              <Award size={40} color="var(--secondary)" />
            </div>
            <h3 style={{ fontSize: '32px', color: 'var(--white)', marginBottom: '24px' }}>Excellence as a Standard</h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '19px', fontStyle: 'italic', lineHeight: '1.8' }}>
              "True advisory is measured by the peace of mind it provides across generations. 
              These awards represent our unwavering commitment to maintaining the highest 
              degree of integrity and professional excellence in every interaction."
            </p>
          </div>
          
          {/* Background Decorative Blur */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-100px', 
            right: '-100px', 
            width: '400px', 
            height: '400px', 
            background: 'var(--secondary)', 
            filter: 'blur(150px)', 
            opacity: 0.03 
          }} />
      </section>
    </div>
  );
};

export default Awards;

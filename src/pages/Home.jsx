import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Target, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import { initialTestimonials } from '../data/testimonials';
import { client, urlFor } from '../lib/sanity';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [heroData, setHeroData] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // 1. Load Testimonials
    const saved = localStorage.getItem('sharma_testimonials');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      localStorage.setItem('sharma_testimonials', JSON.stringify(initialTestimonials));
      setTestimonials(initialTestimonials);
    }

    // 2. Try Fetch Sanity Hero (If Configured)
    // 2. Try Fetch Sanity Hero with LQIP (Blur-up)
    client.fetch('*[_type == "hero"][0]{..., heroImage{asset->{metadata{lqip}, ...}}}').then(data => {
      if (data) {
        setHeroData(data);
        // Preload image for smoothness
        if (data.heroImage?.asset) {
          const img = new Image();
          img.src = urlFor(data.heroImage).width(1920).url();
          img.onload = () => setImageLoaded(true);
        } else {
          setImageLoaded(true);
        }
      }
    }).catch(err => console.log("Sanity not connected yet", err));
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="home-page">
      {/* Hero Experience - Refined Executive Presentation */}
      <header className="hero-section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        position: 'relative',
        background: 'var(--bg)',
        overflow: 'hidden'
      }}>
        {/* Dynamic Animated Background with Blur-up */}
        {heroData?.heroImage && (
          <>
            {!imageLoaded && heroData.heroImage.asset?.metadata?.lqip && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url(${heroData.heroImage.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(10px)',
                  zIndex: 0
                }}
              />
            )}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.88)), url(${urlFor(heroData.heroImage).width(1920).url()})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                zIndex: 0
              }}
            />
          </>
        )}

        <motion.div 
          className="container hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ maxWidth: '1300px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}
        >
          <p className="hero-sub">{heroData?.subtitle || 'Licensed LIC Advisor | Since 1999'}</p>
          <h1 className="heading-xl" style={{ lineHeight: '1.1' }}>
            {heroData?.title || 'Goal-Based Financial Planning'} 
            <br />
            <span style={{ color: 'var(--secondary)', filter: 'drop-shadow(0 0 30px hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.3))' }}>
              {heroData?.subtitle2 || 'for a Secure Tomorrow.'}
            </span>
          </h1>
          <p className="hero-desc">
            {heroData?.description || 'With 26 years of legacy, we specialize in bespoke financial planning to ensure your life milestones are met with absolute security and professional integrity.'}
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">
              Professional Advisory <ChevronRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Our Expertise
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Stats Section - High Contrast Executive Look */}
      <section style={{ 
        background: 'hsla(var(--primary-h), var(--primary-s), 14%, 0.6)', 
        padding: '100px 24px', 
        textAlign: 'center',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="grid" style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '40px'
        }}>
          <motion.div {...fadeIn}>
            <Counter target="5000" suffix="+" />
            <p style={{ color: 'var(--secondary)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '12px' }}>Satisfied Clients</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Counter target="26" suffix="+" />
            <p style={{ color: 'var(--secondary)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '12px' }}>Years Experience</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Counter target="1000" suffix="+" />
            <p style={{ color: 'var(--secondary)', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '12px' }}>Portfolio Managed</p>
          </motion.div>
        </div>
      </section>

      {/* Core Excellence Pillars */}
      <section style={{ maxWidth: '100%', background: 'var(--bg)' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 className="heading-l" style={{ justifyContent: 'center' }} {...fadeIn}>Architectural Security</motion.h2>
          <motion.p style={{ color: 'var(--text-dim)', fontSize: '18px', maxWidth: '600px', margin: '24px auto 0' }} {...fadeIn}>
            Engineered protection strategies designed for stability, growth, and 
            long-term continuity for your family and enterprise.
          </motion.p>
        </div>
        
        <div className="grid grid-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { 
              title: "Need-Based Planning", 
              icon: <Target size={32} />, 
              desc: "Bespoke strategies for children's higher education and comfortable retirement based on precise actuarial needs." 
            },
            { 
              title: "Specialized Risk Cover", 
              icon: <ShieldCheck size={32} />, 
              desc: "Enterprise-grade protection ranging from Industrial Factory complexes to advanced Cyber Liability insurance." 
            },
            { 
              title: "Settlement Excellence", 
              icon: <Award size={32} />, 
              desc: "Our 26-year legacy ensures a transparent, frictionless, and priority-driven claim settlement experience." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="service-card glass-panel" 
              style={{ padding: '48px 32px' }}
              {...fadeIn} 
              transition={{ delay: i * 0.1 }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--white)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '15px', lineHeight: '1.7' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials - Refined Social Proof */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;

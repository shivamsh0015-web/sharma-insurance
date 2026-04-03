import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import { initialTestimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Only show the strictly provided testimonials as requested
    const fetchedTestimonials = initialTestimonials.map(t => ({
      name: t.name,
      role: t.role,
      text: t.text,
      stars: t.stars,
      photo: t.photo, // static path
      init: t.init
    }));
    setTestimonials(fetchedTestimonials);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="testimonials-section">
      <div style={{ textAlign: 'center' }}>
        <motion.h2 className="heading-l" style={{ justifyContent: 'center' }} {...fadeIn}>Client Voice</motion.h2>
      </div>
      <div className="grid grid-3" style={{ marginTop: '50px' }}>
        {testimonials.map((t, i) => (
          <motion.div 
            key={i} 
            className="glass-panel testimonial-card" 
            {...fadeIn} 
            transition={{ delay: i * 0.1 }}
          >
            <div className="testimonial-quote">"</div>
            <div className="stars">
              {[...Array(Math.max(1, parseInt(t.stars) || 5))].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontSize: '15px' }}>{t.text}</p>
            <div className="client-info">
              <div className="client-avatar">
                {t.photo ? (
                  <img 
                    src={typeof t.photo === 'string' ? t.photo : urlFor(t.photo).width(40).height(40).url()} 
                    alt={t.name || "Client"} 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                ) : (
                  t.init || (t.name ? t.name[0] : 'C')
                )}
              </div>
              <div>
                <h4 style={{ fontSize: '14px' }}>{t.name}</h4>
                <p style={{ fontSize: '12px', color: 'var(--secondary)' }}>{t.role} | Verified</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

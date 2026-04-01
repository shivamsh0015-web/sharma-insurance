import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Mail, Phone } from 'lucide-react';
import { client, urlFor } from '../../lib/sanity';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const DynamicServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug }).then(data => {
      setService(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>Loading...</div>;
  if (!service) return <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h2 className="heading-l">Service not found</h2>
    <Link to="/services" className="btn btn-outline" style={{ marginTop: '20px' }}>Back to Services</Link>
  </div>;

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      {/* Hero */}
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
         <FloatingElements icons={[ShieldCheck]} count={5} />
         <motion.div {...fadeIn}>
           <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', marginBottom: '30px' }}>
             <ArrowLeft size={16} /> All Services
           </Link>
           <p className="hero-sub">{service.category === 'goal' ? 'Goal-Based Planning' : 'Specialized Risk Management'}</p>
           <h1 className="heading-xl">{service.title}</h1>
           <p className="hero-desc" style={{ margin: '0 auto 40px', maxWidth: '800px' }}>
             {service.description}
           </p>
           <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Request a Quote</Link>
           </div>
         </motion.div>
      </section>

      {/* Main Content */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
         <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
            {service.image && (
              <motion.img 
                src={urlFor(service.image).width(800).url()} 
                alt={service.title} 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--glass-border)', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)' }}
                {...fadeIn}
              />
            )}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
               <h2 className="heading-l" style={{ textAlign: 'left' }}>Overview</h2>
               <div style={{ color: 'var(--text-dim)', lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '16px' }}>
                  {service.details || "We provide professional advisory and customized insurance solutions tailored to your unique requirements. Our 26 years of market expertise ensures that you receive the best protection at most competitive rates."}
               </div>
               
               <div className="glass-panel" style={{ marginTop: '40px', padding: '30px' }}>
                  <h3 style={{ marginBottom: '20px' }}>Why Choose This Plan?</h3>
                  <div style={{ display: 'grid', gap: '15px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="var(--secondary)" /> Expert Risk Assessment</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="var(--secondary)" /> Licensed LIC/GIC Advisory</div>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="var(--secondary)" /> 24/7 Claim Commitment</div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* CTA Box */}
      <section>
         <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary-light), var(--bg))' }}>
            <h2 className="heading-l">Ready to Secure Your Future?</h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '40px', maxWidth: '600px', margin: '20px auto' }}>
              Connect with India's most trusted insurance advisor. We help you choose the right path for your family and business.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
               <a href="tel:+917011432254" className="btn btn-primary"><Phone size={18} /> Call +91-7011432254</a>
               <Link to="/contact" className="btn btn-outline"><Mail size={18} /> Email Inquiry</Link>
            </div>
         </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default DynamicServiceDetail;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Palmtree, 
  Factory, 
  Scale, 
  Lock, 
  Package, 
  Car, 
  CheckCircle2,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import FloatingElements from '../components/FloatingElements';
import TestimonialsSection from '../components/TestimonialsSection';
import { client, urlFor } from '../lib/sanity';
import { useState, useEffect } from 'react';

const Services = () => {
  const [dynamicServices, setDynamicServices] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "service"]').then(data => {
      if (data && data.length > 0) setDynamicServices(data);
    }).catch(err => console.log("Sanity Services not connected", err));
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const iconMap = {
    GraduationCap: <GraduationCap size={40} />,
    Palmtree: <Palmtree size={40} />,
    ShieldCheck: <ShieldCheck size={40} />,
    Factory: <Factory />,
    Scale: <Scale />,
    Lock: <Lock />,
    Package: <Package />,
    Car: <Car />,
    TrendingUp: <TrendingUp />,
    Shield: <ShieldCheck />,
    Heart: <ShieldCheck />
  };

  const staticGoalPlanning = [
    {
      title: "Children's Higher Ed",
      icon: <GraduationCap size={40} />,
      desc: "Creating a robust fund for your children's dreams. We plan according to future inflation.",
      path: "/services/education-planning",
      image: "/life_insurance.png"
    },
    {
      title: "Retirement Planning",
      icon: <Palmtree size={40} />,
      desc: "Ensuring financial independence in your golden years with guaranteed monthly returns.",
      path: "/services/retirement-planning",
      image: "/advisor.png"
    },
    {
      title: "Term Insurance",
      icon: <ShieldCheck size={40} />,
      desc: "Pure protection for your family at an affordable cost, ensuring they are always secure.",
      path: "/services/term-insurance",
      image: "/life_insurance.png"
    }
  ];

  const staticSpecialized = [
    { title: "Factory Insurance", icon: <Factory />, path: "/services/factory-insurance", desc: "Complete risk coverage for your industrial assets." },
    { title: "Liability Insurance", icon: <Scale />, path: "/services/liability-insurance", desc: "Professional liability protection for businesses." },
    { title: "Cyber Crime", icon: <Lock />, path: "/services/cyber-insurance", desc: "Protecting your digital assets and identity." },
    { title: "Open Policy Transit", icon: <Package />, path: "/services/transit-insurance", desc: "Safe transportation of goods with coverage." },
    { title: "Car Insurance", icon: <Car />, path: "/contact", state: { defaultTab: 'quote' }, desc: "Best-in-class motor insurance with 24/7 support." }
  ];

  // Merge Dynamic Services
  const goalPlanning = [
    ...staticGoalPlanning,
    ...dynamicServices.filter(s => s.category === 'goal').map(s => ({
      title: s.title,
      icon: iconMap[s.iconName || s.icon] || <ShieldCheck size={40} />,
      desc: s.description,
      path: s.slug?.current ? `/services/${s.slug.current}` : "/contact",
      image: s.image ? urlFor(s.image).url() : "/life_insurance.png"
    }))
  ];

  const specializedInsurance = [
    ...staticSpecialized,
    ...dynamicServices.filter(s => s.category === 'specialized' || !s.category).map(s => ({
      title: s.title,
      icon: iconMap[s.iconName || s.icon] || <ShieldCheck />,
      desc: s.description,
      path: s.slug?.current ? `/services/${s.slug.current}` : "/contact",
      image: null 
    }))
  ];

  return (
    <div className="services-page">
      {/* Goal-Based Planning */}
      <section style={{ position: 'relative' }}>
        <FloatingElements icons={[GraduationCap, Palmtree, ShieldCheck]} count={6} />
        <motion.h2 className="heading-l" {...fadeIn}>Goal-Based Financial Planning</motion.h2>
        <motion.p style={{ color: 'var(--text-dim)', marginBottom: '50px', maxWidth: '800px' }} {...fadeIn}>
          Our advisory work is centered around your life milestones. Click on any service to explore detailed planning strategies.
        </motion.p>

        <div className="grid grid-3" style={{ justifyContent: 'center' }}>
          {goalPlanning.map((service, i) => (
            <Link key={i} to={service.path} style={{ display: 'block' }}>
              <motion.div 
                className="service-card glass-panel" 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, borderColor: 'var(--secondary)' }}
              >
                <img src={service.image} alt={service.title} className="service-image" />
                <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p style={{ color: 'var(--text-dim)', marginTop: '10px', fontSize: '15px', flexGrow: 1 }}>{service.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', marginTop: '20px', fontSize: '14px', fontWeight: 'bold' }}>
                  Explore Details <ArrowRight size={16} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specialized Insurance Grid */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <FloatingElements icons={[Factory, Scale, Lock, Package, Car]} count={10} color="var(--primary)" />
          <motion.h2 className="heading-l" style={{ justifyContent: 'center' }} {...fadeIn}>Specialized Risk Management</motion.h2>
          <div className="grid grid-3" style={{ marginTop: '40px', justifyContent: 'center' }}>
            {specializedInsurance.map((item, i) => (
              <Link key={i} to={item.path} state={item.state} style={{ display: 'block' }}>
                <motion.div 
                  className="glass-panel" 
                  style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }} 
                  {...fadeIn} 
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, borderColor: 'var(--secondary)' }}
                >
                  <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
                  <h4 style={{ color: 'var(--white)', fontSize: '18px', marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '14px', flexGrow: 1 }}>{item.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--secondary)', marginTop: '15px', fontSize: '12px' }}>
                    View Coverage <ArrowRight size={14} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mutual Funds & Claim Settlement */}
      <section>
        <div className="grid grid-2" style={{ justifyContent: 'center' }}>
          <Link to="/services/mutual-funds" style={{ display: 'block' }}>
            <motion.div className="glass-panel" style={{ padding: '50px', height: '100%' }} {...fadeIn} whileHover={{ y: -8, borderColor: 'var(--secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <TrendingUp size={40} color="var(--secondary)" />
                <h3>Mutual Fund Advisory</h3>
              </div>
              <p style={{ color: 'var(--text-dim)', marginBottom: '20px' }}>
                Trusted by over 1000+ mutual fund clients for wealth creation. Click to see our portfolio strategies.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontWeight: 'bold' }}>
                Analyze Portfolio <ArrowRight size={16} />
              </div>
            </motion.div>
          </Link>

          <motion.div className="glass-panel" style={{ padding: '50px' }} {...fadeIn}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <HeartHandshake size={40} color="var(--secondary)" />
              <h3>Smooth Claim Settlements</h3>
            </div>
            <p style={{ color: 'var(--text-dim)', marginBottom: '20px' }}>
              Our commitment goes beyond planning. We provide hand-held assistance 
              during claims to ensure a smooth, worry-free settlement process.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--secondary)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} /> Transparent Process</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={18} /> 24/7 Claim Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calculator, Award, CheckCircle2, Milestone, Globe, Users, Trophy, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingElements from '../../components/FloatingElements';
import TestimonialsSection from '../../components/TestimonialsSection';

const EducationPlanning = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="detail-page" style={{ paddingBottom: '100px' }}>
      <section className="hero-content" style={{ minHeight: '60vh', textAlign: 'center', position: 'relative' }}>
        <FloatingElements icons={[GraduationCap, BookOpen, Trophy]} count={5} />
        <motion.div {...fadeIn}>
          <p className="hero-sub">Future Planning</p>
          <h1 className="heading-xl">Higher Education Planning</h1>
          <p className="hero-desc" style={{ margin: '0 auto 40px' }}>
            Building a inflation-proof corpus today to ensure your children 
            can pursue their dream careers anywhere in the world.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/contact" state={{ defaultTab: 'quote' }} className="btn btn-primary">Plan Now</Link>
          </div>
        </motion.div>
      </section>

      {/* Strategic Steps */}
      <section style={{ background: 'var(--primary-light)', maxWidth: '100%' }}>
        <div className="grid grid-3">
          {[
            { title: "Inflation Analysis", icon: <Calculator />, desc: "We calculate the future cost of education based on global trends." },
            { title: "Guaranteed Payouts", icon: <Award />, desc: "Secure the funds even in your absence with specialized LIC riders." },
            { title: "Flexible Tenure", icon: <Milestone />, desc: "Strategies that grow with your child's age and education milestones." }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
           <div style={{ paddingRight: '40px' }}>
              <h2 className="heading-l">Don't Compromise on Dreams</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                With 26 years of advisory, we have helped hundreds of students 
                achieve their higher education goals through disciplined 
                financial planning.
              </p>
              <ul style={{ display: 'grid', gap: '15px' }}>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Guaranteed Corpus</li>
                 <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white)' }}><CheckCircle2 size={18} color="var(--secondary)" /> Tax-Free Maturity Benefits</li>
              </ul>
           </div>
           <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
              <BookOpen size={80} color="var(--secondary)" style={{ marginBottom: '20px' }} />
              <h3>Start Early, Secure Big</h3>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '20px' }}>Consult with Sharma Advisor</Link>
           </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default EducationPlanning;

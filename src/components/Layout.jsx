import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Menu, X } from 'lucide-react';

import { client } from '../lib/sanity';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Fetch Global Settings
    client.fetch('*[_type == "settings"][0]').then(data => {
      if (data) setSettings(data);
    }).catch(err => console.log("Sanity Settings not connected", err));

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top and close menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Awards", path: "/awards" },
    { name: "Contact", path: "/contact" }
  ];

  const siteName = settings?.siteName || "SHARMA INSURANCE & INVESTMENTS";
  const contactPhone = settings?.phone || "+91 8130283126";
  const alternatePhone = settings?.alternatePhone || "";
  const contactEmail = settings?.email || "shivam.sh0023@gmail.com";
  const contactAddress = settings?.address || "12-A/4, Ground Floor, Old Rajinder Nagar, New Delhi - 110060";

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar - Premium Glass-morphism */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">
          <span style={{ color: 'var(--white)', opacity: 0.9 }}>SHARMA</span>
          <span style={{ color: 'var(--secondary)' }}>INSURANCE</span>
        </Link>
        
        {/* Desktop Links - Executive Spacing */}
        <div className="nav-links">
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--secondary)' : 'var(--text-dim)',
                transition: 'var(--transition)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-outline" style={{ 
            padding: '10px 24px', 
            marginLeft: '24px',
            fontSize: '11px' 
          }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Cinematic Entrance */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link, i) => (
            <Link 
              key={i} 
              to={link.path} 
              style={{ 
                fontSize: '28px', 
                fontWeight: '900', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: location.pathname === link.path ? 'var(--secondary)' : 'var(--white)'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '32px' }}>
            Free Consultation
          </Link>
        </div>
      </div>

      <main style={{ flex: '1 0 auto' }}>{children}</main>

      {/* Shared Footer - Executive Stationery Style */}
      <footer>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid grid-3" style={{ textAlign: 'left', marginBottom: '80px' }}>
            <div>
              <h4>Advisory Excellence</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-dim)', lineHeight: '1.8', marginBottom: '32px' }}>
                Securing legacy since 1999. We provide bespoke financial protective measures 
                tailored to individual and corporate life cycles.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Twitter"><Twitter size={16} /></a>
                <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="#" className="glass-panel" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Facebook"><Facebook size={16} /></a>
              </div>
            </div>
            
            <div style={{ paddingLeft: 'clamp(0px, 5vw, 40px)' }}>
              <h4>Expertise Layers</h4>
              <ul style={{ marginTop: '0' }}>
                <li><Link to="/services">Tier-1 Term Life</Link></li>
                <li><Link to="/services">Portfolio Strategy</Link></li>
                <li><Link to="/services">Goal-Based Wealth</Link></li>
                <li><Link to="/services">Corporate Risk</Link></li>
              </ul>
            </div>
            
            <div style={{ paddingLeft: 'clamp(0px, 5vw, 40px)' }}>
              <h4>Global Connect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={14} color="var(--secondary)" style={{ flexShrink: 0 }} /> 
                  <span>{contactPhone}{alternatePhone ? ` / ${alternatePhone}` : ''}</span>
                </p>
                <p style={{ fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={14} color="var(--secondary)" /> {contactEmail}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-dim)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={14} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                  {contactAddress}
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid var(--glass-border)', 
            paddingTop: '40px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
              &copy; {new Date().getFullYear()} {siteName}. All Rights Reserved.
            </p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <p style={{ fontSize: '11px', opacity: 0.5 }}>Licensed LIC Advisor (Estb. 1999)</p>
              <p style={{ fontSize: '11px', opacity: 0.5 }}>Amrit Mahotsav Honor</p>
            </div>
          </div>
          
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '10px', opacity: 0.4, maxWidth: '800px', margin: '0 auto' }}>
              Insurance is the subject matter of solicitation. Mutual Fund investments are subject to market risks. 
              Always read the scheme information and other related documents carefully before investing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

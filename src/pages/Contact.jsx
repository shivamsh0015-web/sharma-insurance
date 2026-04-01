import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Send, Info, CheckCircle2, Star, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { client } from '../lib/sanity';

const Contact = () => {
  const location = useLocation();
  const [formType, setFormType] = useState('general');
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    client.fetch('*[_type == "settings"][0]').then(setSettings);
  }, []);

  const countries = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA/Canada' },
    { code: '+44', name: 'UK' },
    { code: '+971', name: 'UAE' },
    { code: '+61', name: 'Australia' },
    { code: '+65', name: 'Singapore' },
    { code: '+', name: 'Other' }
  ];

  const handleNameChange = (e) => {
    const val = e.target.value;
    const capitalized = val.replace(/\b\w/g, char => char.toUpperCase());
    setName(capitalized);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/\D/g, ''); // Only digits
    const limit = countryCode === '+91' ? 10 : 15;
    if (val.length <= limit) {
      setPhone(val);
    }
  };

  useEffect(() => {
    if (location.state && location.state.defaultTab) {
      setFormType(location.state.defaultTab);
    }
  }, [location]);

  const services = [
    "Term Insurance",
    "Children's Higher Ed Planning",
    "Retirement Planning",
    "Mutual Fund Advisory",
    "Factory Insurance",
    "Cyber Crime Insurance",
    "Transit Open Policy",
    "Car/Motor Insurance"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Construct Message Data
    const formData = new FormData(e.target);
    const notes = formData.get('notes') || text;
    const fullPhone = `${countryCode} ${phone}`;
    
    const templateParams = {
      from_name: name,
      from_phone: fullPhone,
      from_email: formData.get('email') || 'Not Provided',
      request_type: formType,
      message: notes,
      service_type: formData.get('service') || 'General',
      to_email: settings?.email || 'shivam.sh0023@gmail.com'
    };

    try {
      // 1. Data Persistence (Feedback only)
      if (formType === 'feedback') {
        const saved = localStorage.getItem('sharma_testimonials');
        const testimonials = saved ? JSON.parse(saved) : [];
        const newFeedback = {
          name,
          role: "Verified Client",
          text,
          stars: rating,
          photo,
          init: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        };
        localStorage.setItem('sharma_testimonials', JSON.stringify([newFeedback, ...testimonials]));
      }

      // 3. Professional EmailJS Send
      await emailjs.send(
        'service_7bzuiap', 
        'template_a6x4s68', 
        templateParams,
        'VP8G54FGMfsA05Zf3'
      );

      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fail-safeFallback
      if (formType !== 'feedback') {
        const targetEmail = settings?.email || 'shivam.sh0023@gmail.com';
        const subject = `Sharma Insurance - ${formType.toUpperCase()} Request from ${name}`;
        const messageBody = `Name: ${name}\nPhone: ${fullPhone}\nRequest Type: ${formType}\nNotes: ${notes}`;
        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
      }
      setSubmitted(true);
    } finally {
      setIsSending(false);
      setTimeout(() => setSubmitted(false), 5000);
      setName('');
      setPhone('');
      setText('');
      setPhoto(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="contact-page">
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          <motion.div {...fadeIn}>
            <h1 className="heading-l">Connect With Us</h1>
            <p style={{ color: 'var(--text-dim)', marginBottom: '40px', fontSize: '17px' }}>
              Book your goal-based financial roadmap session or share your experience 
              with us. With 26 years of legacy, your feedback is our strength.
            </p>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '4px', color: 'var(--secondary)' }}><Phone size={20} /></div>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '15px' }}>Professional Helpline</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>{settings?.phone || '+91 7011432254'}</p>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: 'var(--primary-light)', padding: '12px', borderRadius: '4px', color: 'var(--secondary)' }}><Mail size={20} /></div>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '15px' }}>Email Inquiries</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '16px' }}>{settings?.email || 'shivam.sh0023@gmail.com'}</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px', color: 'var(--text-dim)', fontSize: '14px', display: 'flex', gap: '10px' }}>
              <Info size={18} color="var(--secondary)" />
              <p>Your data is secured and will only be used for professional advisory purposes.</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-panel" 
            style={{ padding: 'clamp(20px, 5vw, 40px)' }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
              <button 
                className={`btn ${formType === 'general' ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => setFormType('general')}
                style={{ fontSize: '11px', padding: '10px 12px', flex: 1 }}
              >General Inquiry</button>
              <button 
                className={`btn ${formType === 'quote' ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => setFormType('quote')}
                style={{ fontSize: '11px', padding: '10px 12px', flex: 1 }}
              >Get a Quote</button>
              <button 
                className={`btn ${formType === 'feedback' ? 'btn-primary' : 'btn-outline'}`} 
                onClick={() => setFormType('feedback')}
                style={{ fontSize: '11px', padding: '10px 12px', flex: 1 }}
              >Feedback</button>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', padding: '40px 0' }}
              >
                <CheckCircle2 size={60} color="var(--secondary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '10px' }}>{formType === 'feedback' ? 'Feedback Received' : 'Request Received'}</h3>
                <p style={{ color: 'var(--text-dim)' }}>Thank you for reaching out. We appreciate your time.</p>
                <button className="btn btn-outline" style={{ marginTop: '30px' }} onClick={() => setSubmitted(false)}>Submit Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    required 
                    value={name}
                    onChange={handleNameChange}
                    style={{ textTransform: 'capitalize' }}
                  />
                </div>
                
                {formType === 'feedback' ? (
                  <>
                    <div className="form-group">
                      <label>Rating</label>
                      <div className="stars" style={{ cursor: 'pointer' }}>
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star 
                            key={s} 
                            size={24} 
                            onClick={() => setRating(s)} 
                            fill={s <= rating ? "#ffab00" : "transparent"} 
                            color="#ffab00"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="email" type="email" className="form-input" placeholder="mail@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Share Your Experience</label>
                      <textarea 
                        className="form-input" 
                        rows="4" 
                        placeholder="How was your experience with Sharma Insurance?" 
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Upload Your Photo (Optional)</label>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '10px' }}>
                         <input 
                           type="file" 
                           accept="image/*" 
                           onChange={handleFileChange}
                           style={{ color: 'var(--text-dim)', fontSize: '13px' }}
                         />
                         {photo && (
                           <div className="client-avatar" style={{ width: '50px', height: '50px' }}>
                             <img src={photo} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                           </div>
                         )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-2" style={{ gap: '20px' }}>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <select 
                            value={countryCode} 
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="form-input" 
                            style={{ width: '130px' }}
                          >
                            {countries.map(c => (
                              <option key={c.code} value={c.code} style={{ background: 'var(--primary)', color: 'white' }}>{c.code} ({c.name})</option>
                            ))}
                          </select>
                          <input 
                            name="phone" 
                            type="tel" 
                            className="form-input" 
                            placeholder={countryCode === '+91' ? "70123 45678" : "Phone number"} 
                            required 
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={countryCode === '+91' ? 10 : 15}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email (Optional)</label>
                        <input name="email" type="email" className="form-input" placeholder="mail@example.com" />
                      </div>
                    </div>
                    {formType === 'quote' && (
                      <div className="form-group">
                        <label>Select Plan Category</label>
                        <select name="service" className="form-input">
                          {services.map((s, i) => (
                            <option key={i}>{s}</option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className="form-group">
                      <label>Additional Notes</label>
                      <textarea name="notes" className="form-input" rows="3" placeholder="Tell us more about your needs..."></textarea>
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSending}>
                  {isSending ? (
                    <><Loader2 className="animate-spin" size={16} /> Connecting...</>
                  ) : (
                    <>Submit {formType === 'feedback' ? 'Feedback' : 'Request'} <Send size={16} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

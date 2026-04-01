import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({ icons = [], count = 8, color = 'var(--secondary)' }) => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden', 
      pointerEvents: 'none',
      zIndex: 0,
      opacity: 0.1
    }}>
      {[...Array(count)].map((_, i) => {
        const Icon = icons[i % icons.length];
        const size = Math.random() * 40 + 20;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: '110%', 
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              y: '-10%', 
              rotate: 360,
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: duration, 
              repeat: Infinity, 
              delay: delay,
              ease: "linear"
            }}
            style={{ 
              position: 'absolute',
              color: color
            }}
          >
            {Icon && <Icon size={size} strokeWidth={1} />}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;

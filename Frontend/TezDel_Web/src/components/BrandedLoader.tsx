
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';

export default function BrandedLoader() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      width: '100vw',
      background: '#fff',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div style={{ position: 'relative' }}>
        {/* Liquid Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '160px',
            height: '160px',
            background: 'var(--color-primary)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Logo Mark */}
        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: '90px',
            height: '90px',
            background: 'var(--color-primary)',
            borderRadius: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2.25rem',
            fontWeight: '900',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(255, 61, 0, 0.3)',
            zIndex: 2
          }}
        >
          Tz
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '32px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', letterSpacing: '-0.5px' }}>TezDel</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
          <motion.div
            animate={{ x: [-20, 20] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ color: 'var(--color-primary)' }}
          >
            <Bike size={18} />
          </motion.div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>Fastest local delivery...</p>
        </div>
      </motion.div>
      
      {/* Premium Delivery Trail */}
      <div style={{ position: 'relative', width: '240px', height: '2px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', marginTop: '40px', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            position: 'absolute',
            width: '100px', 
            height: '100%', 
            background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
            borderRadius: '2px' 
          }}
        />
      </div>
    </div>
  );
}

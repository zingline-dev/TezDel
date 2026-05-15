
import { motion } from 'framer-motion';

export default function BrandedLoader() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      width: '100vw',
      background: 'var(--color-bg-light)',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div style={{ position: 'relative' }}>
        {/* Liquid Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '120px',
            height: '120px',
            background: 'var(--color-primary)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)'
          }}
        />
        
        {/* Logo Mark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '80px',
            height: '80px',
            background: 'var(--color-primary)',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            fontWeight: '900',
            position: 'relative',
            boxShadow: '0 10px 25px rgba(255, 61, 0, 0.3)'
          }}
        >
          Tz
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '24px', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-secondary)' }}>TezDel</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>Bhubaneswar's fastest local delivery...</p>
      </motion.div>
      
      {/* Delivery Progress Bar */}
      <div style={{ width: '200px', height: '4px', background: 'rgba(0,0,0,0.05)', borderRadius: '2px', marginTop: '32px', overflow: 'hidden' }}>
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '40%', height: '100%', background: 'var(--color-primary)', borderRadius: '2px' }}
        />
      </div>
    </div>
  );
}

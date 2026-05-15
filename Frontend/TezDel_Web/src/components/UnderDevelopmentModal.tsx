
import { motion, AnimatePresence } from 'framer-motion';
import { X, Hammer, Rocket, Bell } from 'lucide-react';

export default function UnderDevelopmentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 7000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(10px)'
            }}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              background: '#fff',
              borderRadius: '32px',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <button onClick={onClose} style={{ background: 'rgba(0,0,0,0.05)', border: 'none', padding: '8px', borderRadius: '50%', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '70px',
                height: '70px',
                background: 'rgba(255, 61, 0, 0.1)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'var(--color-primary)'
              }}
            >
              <Hammer size={32} />
            </motion.div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
              We're Crafting Excellence!
            </h2>
            
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
              TezDel is currently in the <span style={{ fontWeight: '700', color: 'var(--color-primary)' }}>Under Development</span> stage. We're fine-tuning the fastest delivery experience for Bhubaneswar.
            </p>

            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '20px', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Rocket size={16} /> Launching Soon
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '16px',
                background: 'var(--color-secondary)',
                color: '#fff',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <Bell size={18} /> Notify Me on Launch
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

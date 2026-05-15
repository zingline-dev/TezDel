
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Zap } from 'lucide-react';

export default function SuccessCelebration({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 5000,
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
              background: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(8px)'
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              background: '#fff',
              borderRadius: '32px',
              padding: '3rem 2rem',
              textAlign: 'center',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
          >
            {/* Success Burst Background */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,61,0,0.05) 0%, transparent 70%)',
                zIndex: 0
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--color-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: '#fff',
                  boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)'
                }}
              >
                <CheckCircle2 size={40} />
              </motion.div>
              
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--color-secondary)' }}>Order Placed!</h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '1rem' }}>
                Your neighbourhood captain is arriving in <span style={{ color: 'var(--color-primary)', fontWeight: '700' }}>18 mins</span>
              </p>
              
              {/* Fake Map Route Drawing */}
              <div style={{ 
                height: '100px', 
                background: '#f8fafc', 
                borderRadius: '16px', 
                marginTop: '2rem', 
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '0 2rem'
              }}>
                <MapPin size={20} color="var(--color-text-muted)" />
                <div style={{ flex: 1, height: '4px', background: '#e2e8f0', margin: '0 1rem', position: 'relative' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={{ height: '100%', background: 'var(--color-primary)', borderRadius: '2px' }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '-6px',
                      width: '16px',
                      height: '16px',
                      background: 'var(--color-primary)',
                      borderRadius: '50%',
                      border: '3px solid #fff'
                    }}
                  />
                </div>
                <Zap size={20} color="var(--color-primary)" />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                style={{
                  width: '100%',
                  marginTop: '2.5rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  background: 'var(--color-secondary)',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}
              >
                Track Live Status
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

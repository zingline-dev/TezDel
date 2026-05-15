
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, PackageCheck } from 'lucide-react';

const confettiColors = ['#FF3D00', '#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'];

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
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(12px)'
            }}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 5 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300, bounce: 0.4 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              background: '#fff',
              borderRadius: '40px',
              padding: '4rem 2rem 3rem',
              textAlign: 'center',
              boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
              overflow: 'hidden'
            }}
          >
            {/* Success Ripple Background */}
            <motion.div
              animate={{ 
                scale: [1, 2],
                opacity: [0.1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '15%',
                left: '50%',
                width: '120px',
                height: '120px',
                background: 'var(--color-accent)',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 0
              }}
            />

            {/* Confetti Particles */}
            {isOpen && Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  top: '40%', 
                  left: '50%', 
                  scale: 0,
                  rotate: 0,
                  opacity: 1 
                }}
                animate={{ 
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  scale: [0, 1, 0],
                  rotate: 360,
                  opacity: 0
                }}
                transition={{ 
                  duration: Math.random() * 2 + 1,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  background: confettiColors[i % confettiColors.length],
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                  zIndex: 0
                }}
              />
            ))}

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.2, 
                  type: 'spring', 
                  bounce: 0.5,
                  duration: 0.8
                }}
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--color-accent)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  color: '#fff',
                  boxShadow: '0 20px 40px rgba(16, 185, 129, 0.4)'
                }}
              >
                <CheckCircle2 size={56} strokeWidth={2.5} />
              </motion.div>
              
              <h2 style={{ fontSize: '2.25rem', fontWeight: '900', color: 'var(--color-secondary)', letterSpacing: '-1px' }}>Boom! Done.</h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '1.1rem', fontWeight: '500' }}>
                Arriving in <span style={{ color: 'var(--color-primary)', fontWeight: '800' }}>18 minutes</span>
              </p>
              
              <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                <h3 style={{ fontSize: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>Next Steps</h3>
                
                {[
                  { icon: <PackageCheck size={18} />, title: 'Order Confirmed', sub: 'Restaurant is preparing your food' },
                  { icon: <MapPin size={18} />, title: 'Assigning Captain', sub: 'Finding the fastest rider near you' },
                  { icon: <Phone size={18} />, title: 'Live Updates', sub: 'We\'ll notify you when it\'s out for delivery' }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--color-secondary)' }}>{step.title}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>{step.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.02, background: '#000' }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                style={{
                  width: '100%',
                  marginTop: '3.5rem',
                  padding: '1.25rem',
                  borderRadius: '20px',
                  background: 'var(--color-secondary)',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
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

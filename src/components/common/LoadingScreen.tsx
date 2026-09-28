import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a1426] text-white"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d1b164]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center px-6">
            {/* Monogram crest */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-[#d1b164]/40 flex items-center justify-center bg-[#0f1f38]/80 shadow-[0_0_30px_rgba(209,177,100,0.15)]"
            >
              <span className="font-serif text-3xl font-bold tracking-widest text-[#d1b164]">S</span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fafaf8]"
            >
              SRUTHY
            </motion.h1>

            {/* Delicate divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeInOut' }}
              className="h-[1px] w-28 mx-auto my-4 bg-gradient-to-r from-transparent via-[#d1b164] to-transparent"
            />

            {/* Subtle Subtitle Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xs sm:text-sm font-light tracking-[0.2em] text-[#d1b164] uppercase"
            >
              Protecting What Matters Most
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

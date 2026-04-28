import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoadingComplete }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(1);
  const [isZoomingOut, setIsZoomingOut] = useState(false);

  const images = [
    '/alyu pic.jpeg',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80', // Laptop/coding
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80', // Design/UI
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', // Mobile app development
    'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=600&q=80', // AR/VR technology
    '/alyu pic.jpeg',
  ];

  useEffect(() => {
    if (!isLoading) return;

    let currentProgress = 0;
    const totalDuration = 5000; // 5 seconds to reach 100%
    const updateInterval = 50; // Update every 50ms for smooth animation
    const totalSteps = totalDuration / updateInterval;
    const incrementPerStep = 100 / totalSteps;

    // Smooth loading from 1 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        currentProgress += incrementPerStep;
        
        if (currentProgress >= 100) {
          clearInterval(progressInterval);
          // Start zoom out after reaching 100%
          setTimeout(() => {
            setIsZoomingOut(true);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 1000); // 1 second for zoom out animation
          }, 300);
          return 100;
        }
        return Math.min(currentProgress, 100);
      });
    }, updateInterval);

    // Image carousel every 1 second
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isZoomingOut ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-[#fdfbf7] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-[#fdfbf7] to-emerald-50" />

      {/* Main circular reveal container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Outer circle background */}
        <motion.div
          className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-white shadow-2xl overflow-hidden border-8 border-emerald-100"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isZoomingOut ? 3 : 1,
            opacity: isZoomingOut ? 0 : 1
          }}
          transition={{ 
            scale: { duration: isZoomingOut ? 1 : 0.8, ease: isZoomingOut ? 'easeIn' : 'easeOut' },
            opacity: { duration: isZoomingOut ? 1 : 0.8 }
          }}
        >
          {/* Image carousel */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full protected-image-container"
          >
            <img
              src={images[currentImageIndex]}
              alt="Loading"
              className="w-full h-full object-cover protected-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onSelectStart={(e) => e.preventDefault()}
              onError={(e) => {
                e.currentTarget.src = '/alyu pic.jpeg';
              }}
            />
          </motion.div>

          {/* Circular overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-emerald-900/20"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Decorative circles */}
        <motion.div
          className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-emerald-200"
          animate={{ 
            rotate: 360,
            scale: isZoomingOut ? 3 : 1,
            opacity: isZoomingOut ? 0 : 1
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: isZoomingOut ? 1 : 0, ease: 'easeIn' },
            opacity: { duration: isZoomingOut ? 1 : 0 }
          }}
        />
        <motion.div
          className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-emerald-100"
          animate={{ 
            rotate: -360,
            scale: isZoomingOut ? 3 : 1,
            opacity: isZoomingOut ? 0 : 1
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: isZoomingOut ? 1 : 0, ease: 'easeIn' },
            opacity: { duration: isZoomingOut ? 1 : 0 }
          }}
        />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Loading text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-xl md:text-3xl serif font-bold text-emerald-900 mb-2">
              Loading Portfolio
            </h2>
            <p className="text-xs md:text-sm text-emerald-700 font-light tracking-widest uppercase">
              Alyushra's Creative Work
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-32 w-56 md:w-64 h-1 bg-emerald-100 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.p
            className="absolute bottom-24 text-xs md:text-sm font-semibold text-emerald-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full"
            animate={{
              x: [0, Math.cos((i / 6) * Math.PI * 2) * 150],
              y: [0, Math.sin((i / 6) * Math.PI * 2) * 150],
              opacity: isZoomingOut ? 0 : [0, 1, 0],
              scale: isZoomingOut ? 0 : 1
            }}
            transition={{
              x: { duration: 2, repeat: Infinity },
              y: { duration: 2, repeat: Infinity },
              opacity: { duration: 2, repeat: Infinity },
              scale: { duration: isZoomingOut ? 1 : 0, ease: 'easeIn' }
            }}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-4px',
              marginTop: '-4px',
            }}
          />
        ))}
      </div>

      {/* Bottom decorative text */}
      <motion.div
        className="absolute bottom-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1 }}
      >
        <p className="text-xs text-emerald-600 tracking-[0.3em] uppercase font-light">
          Crafting Digital Excellence
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;

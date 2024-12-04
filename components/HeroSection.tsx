'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const maxDistance = 150;
      const deltaX = (clientX - centerX) / 6;
      const deltaY = (clientY - centerY) / 6;
      
      const boundedX = Math.max(Math.min(deltaX, maxDistance), -maxDistance);
      const boundedY = Math.max(Math.min(deltaY, maxDistance), -maxDistance);
      
      mouseX.set(boundedX);
      mouseY.set(boundedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated glow effects */}
      <motion.div 
        className="absolute inset-0"
        style={{
          x: glowX,
          y: glowY,
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Main glow */}
          <div className="w-[600px] h-[600px] bg-emerald-500/20 dark:bg-emerald-500/30 rounded-full filter blur-[120px] animate-pulse-slow"></div>
          
          {/* Secondary glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full filter blur-[80px] animate-pulse-slow animation-delay-150"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/30 dark:bg-emerald-500/40 rounded-full filter blur-[40px] animate-pulse-slow animation-delay-300"></div>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="backdrop-blur-xl bg-white/10 dark:bg-black/30 rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-800/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Future of <span className="text-emerald-600 dark:text-emerald-400">AI Voice</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional AI-powered audio solutions for IVR systems, commercials, and audio branding.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-emerald-600 dark:bg-emerald-500 text-white rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white/10 dark:bg-black/30 border border-emerald-500/20 dark:border-emerald-400/20 text-black dark:text-white rounded-lg hover:bg-emerald-50/10 dark:hover:bg-emerald-900/10 transition-colors shadow-lg">
              Listen to Demos
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 z-50 h-[1px] bg-emerald-500/50"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
}
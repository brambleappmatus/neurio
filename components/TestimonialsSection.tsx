'use client';

import { motion } from 'framer-motion';

const companies = [
  'Microsoft',
  'Amazon',
  'Google',
  'IBM',
  'Oracle',
  'Intel',
  'Cisco',
  'Adobe',
  'Apple',
  'Meta',
];

export function TestimonialsSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="logos-container">
          <div className="flex space-x-16 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                className="flex-shrink-0 h-20 flex items-center justify-center px-8"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl font-semibold text-black dark:text-white opacity-40 hover:opacity-100 transition-opacity duration-300">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
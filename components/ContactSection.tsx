'use client';

import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/5 dark:bg-black/20 rounded-2xl p-8 relative overflow-hidden border border-white/20 dark:border-gray-800/50"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Start Your Project
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-gray-900 dark:text-white"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-gray-900 dark:text-white"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-6 py-4 bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none text-gray-900 dark:text-white"
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
                >
                  Get Started
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
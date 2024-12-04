'use client';

import { motion } from 'framer-motion';
import { MicrophoneIcon, SpeakerWaveIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'IVR Systems',
    description: 'Professional AI voices for interactive voice response systems that sound natural and engaging.',
    icon: SpeakerWaveIcon,
  },
  {
    title: 'Commercial Voiceovers',
    description: 'High-quality AI-generated voiceovers for commercials, advertisements, and promotional content.',
    icon: MicrophoneIcon,
  },
  {
    title: 'Audio Branding',
    description: 'Create a unique sonic identity for your brand with AI-powered voice and sound design.',
    icon: MusicalNoteIcon,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Transform your audio experience with our AI-powered solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-emerald-500/10 dark:border-emerald-400/10"
            >
              <div className="absolute -top-4 left-8">
                <div className="p-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mt-4 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, CloudIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Advanced AI Technology',
    description: 'Cutting-edge neural networks for ultra-realistic voice synthesis.',
    icon: SparklesIcon,
  },
  {
    title: 'Cloud Processing',
    description: 'Fast, scalable cloud infrastructure for real-time voice generation.',
    icon: CloudIcon,
  },
  {
    title: 'Quick Integration',
    description: 'Simple API integration with your existing systems.',
    icon: BoltIcon,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection.',
    icon: ShieldCheckIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Built with cutting-edge technology for optimal performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-emerald-500 text-white mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
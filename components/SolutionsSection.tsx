'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, HomeIcon, CogIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'Enterprise',
    description: 'Scalable AI voice solutions for large organizations with complex IVR needs.',
    icon: BuildingOfficeIcon,
    features: ['Custom voice creation', 'Multi-language support', 'Enterprise API access'],
  },
  {
    title: 'Small Business',
    description: 'Affordable AI voice solutions perfect for growing businesses.',
    icon: HomeIcon,
    features: ['Pre-trained voices', 'Simple integration', 'Pay-as-you-go pricing'],
  },
  {
    title: 'Custom Projects',
    description: 'Tailored AI voice solutions for unique requirements and specific industries.',
    icon: CogIcon,
    features: ['Dedicated support', 'Custom workflows', 'Specialized training'],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Solutions for Every Scale
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the perfect AI voice solution for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-emerald-500/10 dark:border-emerald-400/10"
            >
              <div className="absolute -top-4 left-8">
                <div className="p-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white">
                  <solution.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mt-4 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {solution.description}
              </p>
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
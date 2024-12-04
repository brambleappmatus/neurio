'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenu } from './MobileMenu';

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Services',
    href: '#services',
    submenu: [
      { label: 'IVR Systems', href: '#services' },
      { label: 'Commercial Voiceovers', href: '#services' },
      { label: 'Audio Branding', href: '#services' },
    ],
  },
  {
    label: 'Solutions',
    href: '#solutions',
    submenu: [
      { label: 'Enterprise', href: '#solutions' },
      { label: 'Small Business', href: '#solutions' },
      { label: 'Custom Projects', href: '#solutions' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveMenu(null);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Neurio
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  {item.label}
                </button>

                <AnimatePresence>
                  {activeMenu === item.label && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleNavigation(subItem.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors duration-150"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        menuItems={menuItems}
        onNavigate={handleNavigation}
      />
    </nav>
  );
}
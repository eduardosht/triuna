import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Nossa História', id: 'about' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#112129]/80 backdrop-blur-md border-b border-[#D0BEA2]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#D0BEA2] to-[#350508] rounded-full flex items-center justify-center">
              <span className="text-white">T</span>
            </div>
            <span className="text-[#D0BEA2] text-xl">Triuna</span>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-[#D0BEA2] transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D0BEA2]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-[#D0BEA2] transition-colors text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
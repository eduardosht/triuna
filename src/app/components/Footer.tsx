import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/triuna_joias', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/triunajoias', label: 'Facebook' },
    { icon: Mail, href: 'mailto:contato@triuna.com.br', label: 'Email' },
  ];

  return (
    <footer className="bg-[#1E2824] border-t border-[#D0BEA2]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D0BEA2] to-[#350508] rounded-full flex items-center justify-center">
                <span className="text-white">T</span>
              </div>
              <span className="text-[#D0BEA2] text-xl">Triuna</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Joias em prata e banhadas a ouro que celebram sua história única.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-[#D0BEA2] mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Nossa História', 'Galeria', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item.toLowerCase().replace(' ', '-');
                      const sectionMap: { [key: string]: string } = {
                        'início': 'home',
                        'nossa-história': 'about',
                        'galeria': 'gallery',
                        'depoimentos': 'testimonials',
                        'contato': 'contact',
                      };
                      document.getElementById(sectionMap[id])?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-[#D0BEA2] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-[#D0BEA2] mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[#24382D] rounded-full flex items-center justify-center border border-[#D0BEA2]/30 hover:border-[#D0BEA2] hover:bg-[#D0BEA2]/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-[#D0BEA2]" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 mt-4">
              Acompanhe nossas novidades e promoções exclusivas
            </p>
          </div>
        </div>

        <div className="border-t border-[#D0BEA2]/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Triuna Joias. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              Feito com <Heart size={16} className="text-[#D0BEA2] fill-[#D0BEA2]" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
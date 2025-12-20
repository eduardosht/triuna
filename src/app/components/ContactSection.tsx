import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@triuna.com.br',
      link: 'mailto:contato@triuna.com.br',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999',
      link: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP',
      link: '#',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-[#112129] relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D0BEA2] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#350508] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#D0BEA2]">Entre em Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D0BEA2] to-transparent mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a joia perfeita
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#D0BEA2] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#24382D] border border-[#D0BEA2]/30 rounded-lg focus:border-[#D0BEA2] focus:outline-none text-white transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#D0BEA2] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#24382D] border border-[#D0BEA2]/30 rounded-lg focus:border-[#D0BEA2] focus:outline-none text-white transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#D0BEA2] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#24382D] border border-[#D0BEA2]/30 rounded-lg focus:border-[#D0BEA2] focus:outline-none text-white transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#D0BEA2] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#24382D] border border-[#D0BEA2]/30 rounded-lg focus:border-[#D0BEA2] focus:outline-none text-white transition-colors resize-none"
                  placeholder="Como podemos ajudar você?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D0BEA2] to-[#350508] text-white rounded-lg hover:opacity-90 transition-all shadow-lg shadow-[#D0BEA2]/30 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#24382D] rounded-xl border border-[#D0BEA2]/20 hover:border-[#D0BEA2]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D0BEA2] to-[#350508] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-[#D0BEA2] mb-1">{info.title}</h4>
                  <p className="text-gray-300">{info.content}</p>
                </div>
              </motion.a>
            ))}

            {/* Instagram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8"
            >
              <motion.a
                href="https://www.instagram.com/triuna_joias"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl shadow-lg shadow-pink-500/50 group"
              >
                <Instagram size={32} className="text-white group-hover:rotate-12 transition-transform" />
                <div className="text-left">
                  <p className="text-white text-sm">Siga-nos no Instagram</p>
                  <p className="text-white">@triuna_joias</p>
                </div>
              </motion.a>
              <p className="text-center text-gray-400 mt-4">
                Acompanhe nossos lançamentos e promoções exclusivas!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
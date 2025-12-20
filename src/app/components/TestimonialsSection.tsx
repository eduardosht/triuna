import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      location: 'São Paulo, SP',
      text: 'Comprei um colar banhado a ouro para meu aniversário e simplesmente apaixonei! A qualidade é excepcional e o brilho continua perfeito mesmo após meses de uso. A Triuna superou todas as minhas expectativas!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    },
    {
      name: 'Mariana Oliveira',
      location: 'Rio de Janeiro, RJ',
      text: 'As joias da Triuna são verdadeiras obras de arte! Recebi tantos elogios pelo meu anel de prata que voltei para comprar mais peças. O atendimento é impecável e a entrega super rápida. Recomendo de olhos fechados!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana',
    },
    {
      name: 'Juliana Costa',
      location: 'Belo Horizonte, MG',
      text: 'Presenteei minha mãe com um conjunto de brincos e pulseira e ela ficou emocionada! O acabamento é perfeito e o design é elegante e moderno. A Triuna se tornou minha joalheria favorita!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
    },
    {
      name: 'Beatriz Santos',
      location: 'Curitiba, PR',
      text: 'Qualidade incomparável! Uso minhas joias Triuna diariamente e elas continuam lindas. O banho de ouro não descasca e a prata não oxida. Valeu cada centavo investido!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz',
    },
    {
      name: 'Camila Rodrigues',
      location: 'Brasília, DF',
      text: 'Encontrei exatamente o que procurava: joias elegantes, de alta qualidade e com preço justo. A experiência de compra foi incrível do início ao fim. Já sou cliente fiel!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camila',
    },
    {
      name: 'Fernanda Lima',
      location: 'Porto Alegre, RS',
      text: 'As peças são ainda mais bonitas pessoalmente! O cuidado com os detalhes é notável. Comprei para mim e já estou planejando presentear minhas amigas. Triuna é sinônimo de sofisticação!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fernanda',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-[#1E2824]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#D0BEA2]">O Que Nossas Clientes Dizem</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D0BEA2] to-transparent mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            A satisfação de quem já escolheu Triuna
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#24382D] p-6 rounded-xl border border-[#D0BEA2]/20 hover:border-[#D0BEA2]/50 transition-all relative"
            >
              <Quote className="text-[#D0BEA2]/30 absolute top-4 right-4" size={48} />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-[#D0BEA2]/10"
                />
                <div>
                  <h4 className="text-[#D0BEA2]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#D0BEA2] text-[#D0BEA2]" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed relative z-10">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-[#24382D] px-8 py-4 rounded-full border border-[#D0BEA2]/30">
            <div className="flex items-center gap-2">
              <Star className="fill-[#D0BEA2] text-[#D0BEA2]" size={24} />
              <span className="text-2xl text-[#D0BEA2]">4.9/5.0</span>
              <span className="text-gray-400">• Mais de 500 avaliações</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
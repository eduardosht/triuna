import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Cada peça é criada com amor e dedicação aos detalhes',
    },
    {
      icon: Sparkles,
      title: 'Qualidade',
      description: 'Materiais premium em prata 925 e banho de ouro de alta durabilidade',
    },
    {
      icon: Award,
      title: 'Exclusividade',
      description: 'Designs únicos que destacam sua personalidade',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-[#1E2824]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#D0BEA2]">Nossa História</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D0BEA2] to-transparent mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl text-[#D0BEA2] mb-6">
              Onde Tradição Encontra Modernidade
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A Triuna nasceu do sonho de transformar momentos especiais em joias eternas. 
              Fundada em 2020, nossa marca combina técnicas tradicionais de ourivesaria 
              com designs contemporâneos, criando peças que transcendem tendências.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Cada joia Triuna é cuidadosamente elaborada por artesãos especializados, 
              utilizando prata 925 de alta qualidade e banhos de ouro que garantem 
              durabilidade e brilho duradouro.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Acreditamos que joias são mais do que acessórios - são expressões de 
              personalidade, símbolos de conquistas e tesouros que passam de geração em geração.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D0BEA2]/20 to-transparent rounded-2xl blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1764861127777-a4022156402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjYyNjc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Joias Triuna"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl text-[#D0BEA2] mb-4">Nossa Visão</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ser referência em joias de prata e banhadas a ouro, reconhecida pela 
            excelência em design, qualidade e atendimento personalizado. Queremos 
            estar presente nos momentos mais importantes da sua vida, criando peças 
            que celebram sua individualidade e contam sua história única.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="text-center p-6 rounded-xl bg-[#24382D] border border-[#D0BEA2]/20 hover:border-[#D0BEA2]/50 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D0BEA2] to-[#350508] rounded-full mb-4">
                <value.icon className="text-white" size={32} />
              </div>
              <h4 className="text-xl text-[#D0BEA2] mb-3">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1764861127777-a4022156402c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjYyNjc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Coleção Prata',
    },
    {
      url: 'https://images.unsplash.com/photo-1670541481909-0b2c047fb45a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGxhdGVkJTIwamV3ZWxyeXxlbnwxfHx8fDE3NjYyNjc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Banho de Ouro',
    },
    {
      url: 'https://images.unsplash.com/photo-1631050165122-626a1377fbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwcmluZ3MlMjBuZWNrbGFjZXxlbnwxfHx8fDE3NjYyNjc5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Anéis e Colares',
    },
    {
      url: 'https://images.unsplash.com/photo-1761479250428-f84d4522a9c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5nc3xlbnwxfHx8fDE3NjYyNjc5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Brincos Exclusivos',
    },
    {
      url: 'https://images.unsplash.com/photo-1761222101900-9c9e34fac2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwYnJhY2VsZXR8ZW58MXx8fHwxNzY2MjY3OTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Pulseiras Delicadas',
    },
    {
      url: 'https://images.unsplash.com/photo-1761717410058-5a2c296d0893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjByaW5nJTIwY2xvc2V8ZW58MXx8fHwxNzY2MjY3OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Detalhes em Prata',
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 bg-[#112129]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#D0BEA2]">Galeria de Artes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D0BEA2] to-transparent mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore nossa coleção exclusiva de joias em prata 925 e banhadas a ouro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#112129]/80 via-[#112129]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-[#D0BEA2] p-6 text-xl">{image.title}</p>
              </div>
              <div className="absolute inset-0 border-2 border-[#D0BEA2]/0 group-hover:border-[#D0BEA2]/50 transition-all duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal para imagem ampliada */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#112129]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-[#D0BEA2] hover:text-[#D0BEA2]/70"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={galleryImages[selectedImage].url}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
          />
        </motion.div>
      )}
    </section>
  );
}
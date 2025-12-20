import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-[#112129]/60" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-7xl md:text-9xl bg-gradient-to-r from-[#D0BEA2] via-white to-[#D0BEA2] bg-clip-text text-transparent"
        >
          Triuna
        </motion.h1>
      </div>
    </section>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'backOut',
      },
    },
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              variants={itemVariants}
            >
              <motion.span
                className="block text-slate-900 dark:text-white"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Olá, eu sou
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Kleber Silva
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais incríveis
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => scrollToSection('projetos')}
              >
                Ver Projetos
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contato')}
              >
                Entre em Contato
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/Raqui333', delay: 0.1 },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/kleber333/',
                delay: 0.2,
              },
              {
                icon: Mail,
                href: 'mailto:klebersilva2025@gmail.com',
                delay: 0.3,
              },
            ].map(({ icon: Icon, href, delay }, index) => (
              <motion.div
                key={index}
                variants={socialVariants}
                custom={delay}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={href} target="_blank">
                  <Icon className="h-6 w-6" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, duration: 0.8 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                },
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection('sobre')}
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

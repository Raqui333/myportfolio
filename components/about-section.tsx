'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Brain } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  };

  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Sobre Mim
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Desenvolvedor Full Stack focado em criar soluções robustas, seguras
            e escaláveis.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              className="text-slate-700 dark:text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              Me chamo Kleber, sou desenvolvedor fullstack com mais de 5 anos de
              experiência. Domino o ecossistema Node.js, com React, Next.js,
              NestJS, PostgreSQL, Docker e AWS, com foco na performance,
              escalabilidade e segurança. Meu propósito é transformar ideias
              complexas em soluções reais, funcionais e impactantes.
            </motion.p>
            <motion.p
              className="text-slate-700 dark:text-slate-300 leading-relaxed"
              variants={itemVariants}
            >
              Já trabalhei com projetos para clientes, sempre com foco em
              resultado e boa comunicação com o time. Tenho um perfil analítico,
              sou proativo na resolução de problemas e sempre busco entregar
              código limpo, escalável e com foco no produto.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {[
                'TypeScript',
                'Javascript',
                'Node.js',
                'React',
                'Next.js',
                'Material UI',
                'Radix UI',
                'Lucide Icons',
                'Express.js',
                'NestJS',
                'JWT',
                'PrismaORM',
                'Docker',
                'PostgreSQL',
                'MongoDB',
                'Git',
                'Swagger',
                'AWS',
                'Jest',
                'CI/CD (Github Actions)',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1,
                    ease: 'backOut',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {[
              {
                icon: Code,
                title: 'Frontend',
                desc: 'React, Next.js, Vite, etc...',
                color: 'text-blue-600',
              },
              {
                icon: Database,
                title: 'Backend',
                desc: 'Node.js, NestJS, APIs, etc...',
                color: 'text-green-600',
              },
              {
                icon: Globe,
                title: 'DevOps',
                desc: 'AWS, Git/Github, CI/CD etc...',
                color: 'text-purple-600',
              },
              {
                icon: Brain,
                title: 'Interesses',
                desc: 'Kubernetes, Microserviços, Golang',
                color: 'text-orange-600',
              },
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <motion.div
                key={title}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`h-12 w-12 ${color}  mx-auto mb-4`} />
                    </motion.div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Finance Dashboard',
      description:
        'Dashboard de assets financeiros com visualizações interativas e relatórios em tempo real.',
      image: '/financedashboardscreenshot.png',
      technologies: [
        'Typescript',
        'NestJS',
        'PostgreSQL',
        'PrismaORM',
        'Next.js',
        'Material UI',
        'Redux Toolkit',
        'Docker',
        'Git',
        'Jest',
      ],
      github: 'https://github.com/Raqui333/finance',
      demo: '#',
    },
    {
      title: 'E-Ticket Platform',
      description:
        'Uma plataforma web de e-ticket para gerar, gerenciar e verificar ingressos digitais.',
      image: '/eticketscreenshot.png',
      technologies: [
        'Typescript',
        'React',
        'Vite',
        'Radix UI',
        'Lucide Icons',
        'Zod',
        'pdf-lib',
        'qrcode + html5-qrcode',
        'Supabase',
        'Serverless Backend',
      ],
      github: 'https://github.com/Raqui333/eticketplataform',
      demo: '#',
    },
  ];

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

  const cardVariants: Variants = {
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

  return (
    <section
      id="projetos"
      className="py-20 bg-white dark:bg-slate-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          isInView
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{
                          delay: 0.5 + index * 0.1 + techIndex * 0.05,
                          duration: 0.3,
                        }}
                      >
                        <Badge variant="secondary">{tech}</Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href={project.github} target="_blank">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </Button>
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

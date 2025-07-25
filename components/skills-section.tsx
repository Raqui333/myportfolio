'use client';

import { Progress } from '@/components/ui/progress';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useEffect, useState } from 'react';

export function SkillsSection() {
  const t = useTranslations('SkillsSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedValues, setAnimatedValues] = useState<number[]>([]);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'NestJS', level: 80 },
    { name: 'Node.js + Express.js', level: 85 },
    { name: 'PostgreSQL/MongoDB', level: 85 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 40 },
    { name: 'Linux', level: 100 },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedValues(skills.map((skill) => skill.level));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="habilidades"
      className="py-20 bg-slate-50 dark:bg-slate-800"
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
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-slate-500 dark:text-slate-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress
                    value={animatedValues[index] || 0}
                    className="h-2"
                  />
                  <motion.div
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

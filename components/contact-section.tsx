'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircleIcon, Mail, MapPin, Phone } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { toast } from '@/hooks/use-toast';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

export function ContactSection() {
  const t = useTranslations('ContactSection');

  const ref = useRef(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = recaptchaRef.current?.getValue();

      if (!token) {
        setErrorMessage(t('errorReCaptcha'));
        setLoading(false);
        return;
      }

      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, token }),
      });
    } catch (error) {
      setErrorMessage(t('errorSending'));
      setLoading(false);
    }

    setFormData({ name: '', email: '', message: '' });
    setErrorMessage(null);
    recaptchaRef.current?.reset();

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'klebersilva2025@gmail.com',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    },
    {
      icon: MapPin,
      title: t('address'),
      info: `Natal/RN, ${t('country')}`,
      color:
        'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <section
      id="contato"
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

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('cta')}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                {t('paragraph')}
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, info, color }, index) => (
                <motion.div
                  key={title}
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={`p-3 rounded-full ${color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      {title}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{t('formTitle')}</CardTitle>
                  <CardDescription>{t('formDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.5 }}
                    >
                      <Input
                        name="name"
                        placeholder={t('formNameInput')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.6 }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('formEmailInput')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.7 }}
                    >
                      <Textarea
                        name="message"
                        placeholder={t('formMessageInput')}
                        rows={5}
                        maxLength={2000}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? (
                          <LoaderCircleIcon className="animate-spin" />
                        ) : (
                          <span>{t('formSubmit')}</span>
                        )}
                      </Button>
                    </motion.div>
                    <div className="flex flex-col mt-4 justify-center items-center">
                      <ReCAPTCHA
                        sitekey={SITE_KEY as string}
                        ref={recaptchaRef}
                      />
                      {errorMessage && (
                        <p className="text-red-500 text-sm mt-2">
                          {errorMessage}
                        </p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

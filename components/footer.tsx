import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-slate-400 mt-2">Desenvolvedor Full Stack</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/Raqui333" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kleber333" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:klebersilva2025@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center text-sm">
            Copyright © 2025 Kleber Silva
          </p>
        </div>
      </div>
    </footer>
  );
}

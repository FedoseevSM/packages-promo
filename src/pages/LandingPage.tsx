import React from 'react';
import { Instagram } from 'lucide-react';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Strategies } from '../components/Strategies';
import { Packages } from '../components/Packages';
import { CTA } from '../components/CTA';
export function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <div id="strategies">
        <Strategies />
      </div>
      <div id="packages">
        <Packages />
      </div>
      <div id="consultation">
        <CTA />
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О компании</h3>
              <p className="text-gray-400">
                Специализируемся на рекламных кампаниях для франшиз с
                существующей аудиторией. Работаем по модели фричайзинга.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('strategies')} className="text-gray-400 hover:text-white transition-colors text-left">
                    Реферальные программы
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('strategies')} className="text-gray-400 hover:text-white transition-colors text-left">
                    Контент-сторителлинг
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('strategies')} className="text-gray-400 hover:text-white transition-colors text-left">
                    Lookalike таргетинг
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('consultation')} className="text-gray-400 hover:text-white transition-colors text-left">
                    Консультации по масштабированию
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <a href="https://instagram.com/hippie" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@hippie</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; 2024 Все права защищены. Рекламные кампании для франшиз.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}
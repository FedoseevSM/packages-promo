import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">
              Работаем с существующей аудиторией
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Рекламные кампании для франшиз через аудиторию{' '}
            <span className="text-blue-200">друзей друзей</span>
          </h1>

          <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
            Мы работаем с компаниями, у которых уже есть аудитория. Не создаем
            базу с нуля — масштабируем то, что у вас уже работает.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button onClick={() => scrollToSection('consultation')} className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Получить консультацию
            </button>
            <button onClick={() => scrollToSection('packages')} className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500/30 transition-colors">
              Смотреть пакеты
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm text-blue-100 mb-12">
            <span>← Бесплатный анализ вашей аудитории</span>
            <span className="hidden sm:inline">•</span>
            <span>Подробнее о тарифах и услугах →</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Target className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-2xl font-bold mb-1">3 стратегии</div>
              <div className="text-blue-100 text-sm">Проверенные методы</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-2xl font-bold mb-1">Друзья друзей</div>
              <div className="text-blue-100 text-sm">Теплая аудитория</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-2xl font-bold mb-1">Рост продаж</div>
              <div className="text-blue-100 text-sm">Измеримый результат</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
}
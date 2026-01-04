import React from 'react';
import { Check, Star } from 'lucide-react';
export function Packages() {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const packages = [{
    name: 'Старт',
    price: '150 000',
    period: 'месяц',
    description: 'Для франшиз с небольшой аудиторией',
    features: ['Реферальная программа', 'Базовый контент-план (8 постов/месяц)', 'Настройка lookalike аудиторий', 'Ежемесячный отчет', 'Поддержка в рабочие часы'],
    cta: 'Выбрать пакет',
    popular: false
  }, {
    name: 'Рост',
    price: '300 000',
    period: 'месяц',
    description: 'Оптимальный вариант для масштабирования',
    features: ['Все из пакета "Старт"', 'Расширенный контент-план (16 постов/месяц)', 'A/B тестирование кампаний', 'Работа с UGC контентом', 'Еженедельные отчеты', 'Приоритетная поддержка 24/7', 'Персональный менеджер'],
    cta: 'Выбрать пакет',
    popular: true
  }, {
    name: 'Максимум',
    price: 'от 500 000',
    period: 'месяц',
    description: 'Для крупных франшизных сетей',
    features: ['Все из пакета "Рост"', 'Премиум контент-план (24+ постов/месяц)', 'Видео-контент и сторителлинг', 'Работа с инфлюенсерами', 'Автоматизация реферальных процессов', 'Интеграция с CRM', 'Выделенная команда', 'Стратегические сессии'],
    cta: 'Обсудить условия',
    popular: false
  }];
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Пакеты рекламных кампаний
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий уровень поддержки для вашей франшизы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden ${pkg.popular ? 'ring-4 ring-blue-500 relative' : ''}`}>
              {pkg.popular && <div className="bg-blue-500 text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Популярный выбор
                </div>}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">₽</span>
                  </div>
                  <div className="text-gray-500 text-sm">{pkg.period}</div>
                </div>

                <button onClick={scrollToConsultation} className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {pkg.cta}
                </button>

                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Нужно индивидуальное решение?</p>
          <button onClick={scrollToConsultation} className="text-blue-600 font-semibold hover:text-blue-700 underline">
            Свяжитесь с нами для персонального предложения
          </button>
        </div>
      </div>
    </section>;
}
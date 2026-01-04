import React from 'react';
import { Users, BookOpen, Target } from 'lucide-react';
export function Strategies() {
  const strategies = [{
    icon: Users,
    title: 'Реферальные программы',
    description: 'Превращаем ваших клиентов в амбассадоров бренда',
    features: ['Система вознаграждений за рекомендации', 'Автоматизация реферальных ссылок', 'Отслеживание эффективности каждого реферала', 'Мотивация через бонусы и скидки'],
    color: 'blue'
  }, {
    icon: BookOpen,
    title: 'Контент-сторителлинг',
    description: 'Создаем вовлекающий контент для социальных сетей',
    features: ['Истории успеха франчайзи', 'Закулисье бизнеса и процессов', 'Образовательный контент для аудитории', 'UGC от довольных клиентов'],
    color: 'purple'
  }, {
    icon: Target,
    title: 'Lookalike таргетинг',
    description: 'Находим аудиторию, похожую на ваших лучших клиентов',
    features: ['Анализ существующей клиентской базы', 'Создание lookalike аудиторий', 'Таргетированная реклама на "двойников"', 'Постоянная оптимизация кампаний'],
    color: 'green'
  }];
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-600'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-600'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      accent: 'bg-green-600'
    }
  };
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Три проверенные стратегии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный подход к привлечению клиентов через аудиторию «друзей
            друзей»
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
          const Icon = strategy.icon;
          const colors = colorClasses[strategy.color];
          return <div key={index} className={`${colors.bg} border-2 ${colors.border} rounded-xl p-8 hover:shadow-xl transition-shadow`}>
                <div className={`${colors.accent} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {strategy.title}
                </h3>

                <p className="text-gray-600 mb-6">{strategy.description}</p>

                <ul className="space-y-3">
                  {strategy.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>)}
                </ul>
              </div>;
        })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Все три стратегии работают синергично и усиливают друг друга
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
            <span className="text-blue-900 font-semibold">Результат:</span>
            <span className="text-blue-700">
              Постоянный поток теплых лидов из сети «друзей друзей»
            </span>
          </div>
        </div>
      </div>
    </section>;
}
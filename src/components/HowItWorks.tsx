import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
export function HowItWorks() {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наш подход основан на использовании вашей существующей аудитории для
            привлечения новых клиентов через сеть «друзей друзей»
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Мы работаем с вами, если:
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  У вас уже есть клиентская база
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Есть активные подписчики в соцсетях
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Франшиза уже работает и приносит результаты
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Хотите масштабировать успешную модель
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Мы НЕ работаем, если:
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Аудитория отсутствует полностью
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Нужно создавать базу с нуля
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Франшиза еще не запущена</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  Нет понимания целевой аудитории
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}
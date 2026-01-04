import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      franchise: formData.get('franchise'),
      audience: formData.get('audience')
    };
    // Here you would typically send data to your backend
    console.log('Form submitted:', data);
    // Show success message
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      e.currentTarget.reset();
    }, 3000);
  };
  return <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Готовы масштабировать вашу франшизу?
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Получите бесплатную консультацию и узнайте, как мы можем помочь вам
          привлечь больше клиентов через существующую аудиторию
        </p>

        <div className="bg-white rounded-xl p-8 text-left max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Оставьте заявку
          </h3>

          {submitted ? <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Заявка отправлена!
              </h4>
              <p className="text-gray-600">
                Мы свяжемся с вами в течение 24 часов
              </p>
            </div> : <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ваше имя
                </label>
                <input type="text" name="name" placeholder="Иван Иванов" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Телефон
                </label>
                <input type="tel" name="phone" placeholder="+7 (999) 123-45-67" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" name="email" placeholder="ivan@example.com" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Название франшизы
                </label>
                <input type="text" name="franchise" placeholder="Моя франшиза" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Размер текущей аудитории
                </label>
                <select name="audience" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                  <option value="">Выберите размер аудитории</option>
                  <option>До 1 000 человек</option>
                  <option>1 000 - 5 000 человек</option>
                  <option>5 000 - 10 000 человек</option>
                  <option>10 000 - 50 000 человек</option>
                  <option>Более 50 000 человек</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Отправить заявку
              </button>

              <p className="text-sm text-gray-500 text-center">
                Мы свяжемся с вами в течение 24 часов
              </p>
            </form>}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              Или напишите нам напрямую:
            </p>
            <div className="flex justify-center">
              <a href="https://instagram.com/hippie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                <Instagram className="w-6 h-6" />
                <span>@hippie</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
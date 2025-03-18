'use client';

import Link from "next/link";

export default function ThemeSwitcher() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-2xl mx-auto p-6">
          {/* Кнопка переключения темы */}
          <div className="flex justify-between">
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Переключить тему
            </button>

                <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
                    ← Назад
                </Link>
          </div>
          
  
          {/* Контент для демонстрации */}
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Заголовок
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Пример текста, который меняет цвет в зависимости от темы.
            </p>
          </div>
        </div>
      </div>
    );
  }
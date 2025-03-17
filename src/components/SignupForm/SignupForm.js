'use client';
import { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  });

  // Динамическая валидация
  const getErrors = () => ({
    name: touched.name && form.name.length < 3,
    email: touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: touched.password && form.password.length < 6,
    repeatPassword: touched.repeatPassword && form.password !== form.repeatPassword
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const errors = getErrors();
  const isValid = !Object.values(errors).some(Boolean);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-xl shadow-md">

        <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
            ← Назад
        </Link>

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Регистрация
      </h2>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* Поле имени */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Имя пользователя
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <span className="text-red-500 text-sm mt-1">Минимум 3 символа</span>}
        </div>

        {/* Поле email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">Email не верный</span>}
        </div>

        {/* Поле пароля */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.password && <span className="text-red-500 text-sm mt-1">Минимум 6 символов</span>}
        </div>

        {/* Подтверждение пароля */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Подтвердите пароль
          </label>
          <input
            type="password"
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.repeatPassword && <span className="text-red-500 text-sm mt-1">Пароли не совпадают</span>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
'use client';
import { useState } from "react";
import Link from "next/link";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    setTasks(prev => [...prev, {
      id: Date.now(),
      title: inputValue,
      isDone: false
    }]);
    setInputValue('');
  };

  const removeTask = (e) => {
    const id = Number(e.currentTarget.dataset.id);
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? {...task, isDone: !task.isDone} : task
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">

      <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
        ← Назад
      </Link>

      <h1 className="text-2xl font-bold mb-4 text-blue-600">Todo List</h1>
      <div className="space-y-2">
        {tasks.map(item => (
          <div key={item.id} className="flex items-center p-2 bg-white rounded shadow">
            <input 
              type="checkbox" 
              className="mr-2" 
              checked={item.isDone}
              onChange={() => toggleTask(item.id)}
            />
            <span className={`flex-1 ${item.isDone ? 'line-through opacity-50' : ''}`}>
              {item.title}
            </span>
            <button 
              data-id={item.id}
              onClick={removeTask} 
              className="text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={addTask} className="mt-4 flex">
        <input
          type="text"
          placeholder="Новая задача..."
          className="flex-1 p-2 border rounded-l"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
'use client';

import { useState } from "react";
import Link from "next/link";

export default function Tabs() {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: "Контент вкладки 1",
            content: "Привет, это первая вкладка! 🚀",
            isActive: true
        },
        {
            id: 2,
            title: "Контент вкладки 2",
            content: "Здесь второй контент... 🌟",
            isActive: false
        },
        {
            id: 3,
            title: "Контент вкладки 3",
            content: "А это третья вкладка! 💡",
            isActive: false
        },
    ])

    const toglleTabs = (id) => {
        setTabs((prev) => {
            return prev.map((item) => {
                return item.id === id? {...item, isActive: true} : {...item, isActive: false}
            })
        })
    }

    return (
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-50 rounded-lg">
        <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
            ← Назад
        </Link>
        <div className="flex space-x-2 border-b">
            {tabs.map(({id, isActive}, index) => {
                return (
                    <button key={id} className={`px-4 py-2 ${isActive? 'bg-blue-500 text-white': 'hover:bg-blue-100'} rounded-t-lg`} onClick={() => toglleTabs(id)}>
                        Вкладка {index + 1}
                    </button>
                )
            })}
        </div>
        
        <div className="mt-4 p-4 bg-white rounded-b-lg shadow">
        {tabs.map(({id, title, content, isActive}) => {
                return (
                    <div key={id} className={isActive? 'block' : 'hidden'}>{title}: {content}</div>
                )
            })}
        </div>
      </div>
    );
  }
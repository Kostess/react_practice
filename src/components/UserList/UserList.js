'use client';

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)

    const fetchData = async () => {
        try {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(data);
        } catch(error) {
            console.error(error.message);
            setIsError(true);
        } finally {
            setIsLoading(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = () => {
        setUsers([]);
        setIsError(false);
        setIsLoading(false);
        fetchData();
    }

    return (
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-50 rounded-lg">

        <div className="flex justify-between">
            <Link href="/" className="mb-4 inline-block text-blue-600 hover:text-blue-800">
                ← Назад
            </Link>
            
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer" onClick={handleSubmit}>
                Обновить
            </button>
        </div>
        

        <h2 className="text-2xl font-bold mb-6 text-blue-600">Список пользователей</h2>
        
        {/* Состояние загрузки */}
        {isLoading || <div className="text-center py-4">Загрузка...</div>}
  
        {/* Состояние ошибки */}
        {
            isError && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                    Ошибка при загрузке данных
                </div>
            )
        }
        
  
        {/* Успешная загрузка */}
        <div className="space-y-3">
            {users.map(({id, name, email}) => {
                return (
                    <div key={id} className="p-3 bg-white rounded-lg shadow">
                        <div className="font-medium">{name}</div>
                        <div className="text-gray-600">{email}</div>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
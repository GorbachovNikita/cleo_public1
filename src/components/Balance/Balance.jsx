import React, { useEffect, useState, useContext } from 'react';
import {Context} from '../../index';

const Balance = () => {
    const { user } = useContext(Context);
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState('');

   // Функция для получения баланса при монтировании компонента
    useEffect(() => {
        const fetchBalance = async () => {
            const result = await user.getBalance(); // Вызов метода getBalance из MainStore
            if (user.latestError) { // Проверка наличия ошибки
                setError(user.latestError); // Установка ошибки
            } else {
                setBalance(result); // Установка баланса
            }
        };

        fetchBalance();
    }, [user])

    return (
        <div>
            {/* {error ? (
                <p>{error}</p>
            ) : ( */}
                <p>Balance: <span>{balance}$</span></p>
            {/* )} */}
        </div>
    );
};

export default Balance;
import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
    {
        title: 'Главная',
        to: '/',
    },
    {
        title: 'Дрифт-такси',
        to: '/drift',
    },
    {
        title: 'Time Attack',
        to: '/timeattack',
    },
    {
        title: 'Forza Karting',
        to: '/forza',
    }
];

export default function Menu() {
    return (
        <nav className="menu">
            {
                menuItems.map(item => (
                    <NavLink className="menu__item" to={item.to}>{item.title}</NavLink>
                ))
            }
        </nav>
    )
}
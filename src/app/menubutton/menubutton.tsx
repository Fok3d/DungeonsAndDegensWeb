'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [active, setActive] = useState('home');

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.path}>
          <button
            className={`px-4 py-2 rounded-lg text-white transition-all duration-300 ${
              active === item.name.toLowerCase() ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-700'
            }`}
            onClick={() => setActive(item.name.toLowerCase())}
          >
            {item.name}
          </button>
        </Link>
      ))}
    </nav>
  );
}

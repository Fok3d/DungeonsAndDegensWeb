'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Menu() {
  const [active, setActive] = useState('home');

  const menuItems = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Services', path: '#' },
    { name: 'Contact', path: '#' },
  ];

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
     
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

      {/* Náhled tlačítka MenuButton */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">Ukázka MenuButton</h2>
        <Link href="/menubutton">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg hover:bg-blue-700 transition-all duration-300">
            Přejít na MenuButton
          </button>
        </Link>
      </div>
    </div>
  );
}

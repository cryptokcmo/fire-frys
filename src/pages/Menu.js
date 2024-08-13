// src/pages/Menu.js
import React from 'react';

const menuItems = [
  { name: 'Signature Fire-Frys', description: 'Our famous spicy fries with a fiery kick!', price: '$5.99' },
  { name: 'Pickle Fries', description: 'Crispy, tangy pickle fries, a fan favorite!', price: '$4.99' },
  { name: 'Waffle Fries', description: 'Golden, crispy waffle fries, perfect for dipping.', price: '$4.99' },
  { name: 'Steak Fries', description: 'Thick-cut steak fries, hearty and delicious.', price: '$5.49' },
  { name: 'Seasoned Fries', description: 'Fries with a perfect blend of spices.', price: '$4.99' },
  { name: 'Sweet Potato Fries', description: 'Sweet and savory fries, a tasty twist!', price: '$5.49' },
  { name: 'Garlic Parmesan Fries', description: 'Fries tossed in garlic butter and Parmesan cheese.', price: '$5.99' },
  { name: 'Cajun Fries', description: 'Spicy Cajun-seasoned fries with a kick.', price: '$4.99' },
  { name: 'Truffle Fries', description: 'Fries drizzled with truffle oil and topped with Parmesan.', price: '$6.99' },
];

const Menu = () => {
  return (
    <div className="bg-red-600 text-white min-h-screen">
      <div className="bg-yellow-500 py-12 shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-10">Our Menu</h1>
      </div>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white text-red-600 p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-lg mb-4">{item.description}</p>
              <p className="text-xl font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-red-600 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white text-red-600 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us for Catering & Events</h1>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-lg" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-3 border rounded-lg" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" className="w-full p-3 border rounded-lg" placeholder="Your Phone Number" />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="event-type">Event Type</label>
            <select id="event-type" className="w-full p-3 border rounded-lg">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
              <option>Festival</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="message">Additional Information</label>
            <textarea id="message" className="w-full p-3 border rounded-lg" rows="4" placeholder="Tell us more about your event..."></textarea>
          </div>
          <button type="submit" className="bg-yellow-500 text-red-600 py-3 px-6 rounded-lg font-bold hover:bg-yellow-600 transition duration-300 w-full">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

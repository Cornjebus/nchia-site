'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Log to console (client-side only as per requirements)
    console.log('Contact form submission:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Thank you for your message!
        </h3>
        <p className="text-green-700">
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-[#2D3E8C] font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#1A1A1A] mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D3E8C] focus:border-transparent outline-none transition-all"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#1A1A1A] mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D3E8C] focus:border-transparent outline-none transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-[#1A1A1A] mb-1"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D3E8C] focus:border-transparent outline-none transition-all"
          placeholder="What is this regarding?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#1A1A1A] mb-1"
        >
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2D3E8C] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}

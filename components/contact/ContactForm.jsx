"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSuccess(false); // Reset the success state when the form data changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch('https://express-mail-server.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error - Please try again later.');
        }
      })
      .then((data) => {
        console.log(data);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 1000); // Reset the success state after 1 second
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

    return (
        <form id="contact-form" className="space-y-8 reveal-element" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
            />
     <div className="rounded-full overflow-hidden">
        <button
          type="submit"
          className="w-full relative flex h-12 items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-200 before:bg-gradient-to-b before:transition before:duration-300 dark:before:border-gray-700 dark:before:bg-sky-500"
          disabled={isLoading}
        >
          <span className="relative text-base font-semibold text-sky-800 dark:text-white">
            {isLoading ? <div class="flex items-center justify-center gap-x-2 rounded-full">
    <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-sky-950 dark:text-white rounded-full" role="status" aria-label="Sending">
     
    </div>
    <span >Sending...</span>
    </div> : isSuccess ? 'Thank You' : 'Send Message'}
          </span>
        </button>
      </div>
    
    </form>
    );
}
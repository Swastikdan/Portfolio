"use client";

import React, { useState } from "react";
import sendMail from "./formbacked";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [iserror, setIserror] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    honeyPot: "",
  });
  const [prevFormData, setPrevFormData] = useState({ ...formData });

  const handleChange = (e) => {
    setPrevFormData({ ...formData });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.comment) {
      setMessage("Please fill in all fields.");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    }
    // Honeypot validation
    if (formData.honeyPot) {
      return;
    }
    setLoading(true);
    try {
      const response = await sendMail(formData);

      // console.log(response);

      if (!response.success) {
        setIserror(true);
        setMessage(response.message);
      } else {
        setMessage(response.message);
        setFormData({
          name: "",
          email: "",
          comment: "",
          honeyPot: "",
        });
      }
    } catch (error) {
      // console.error(error);
      setMessage("Something went wrong. Please try again.");
      setIserror(true);
      setFormData(prevFormData);
    } finally {
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto max-w-2xl mt-10 md:mt-0">
      <div className="p-4 relative z-10 border-[2px] rounded-xl sm:mt-10 md:p-10 border-gray-600">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-8">
            <input
              type="text"
              name="honeyPot"
              value={formData.honeyPot}
              onChange={handleChange}
              placeholder="Leave this field empty if you are a human."
              className="sr-only"
            />

            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
            />
          </div>

          <div className="mb-4 sm:mb-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
            />
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium dark:text-white"
            >
              Comment
            </label>
            <div className="mt-1">
              <textarea
                id="comment"
                name="comment"
                rows="5"
                className="py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-gray-400 focus:ring-gray-600 resize-none"
                placeholder="Leave your comment here..."
                value={formData.comment}
                onChange={handleChange}
                aria-multiline="true"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 grid">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              aria-disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-x-2 rounded-full">
                  <div
                    className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white dark:text-black rounded-full"
                    role="status"
                    aria-label="Sending"
                  ></div>
                </div>
              ) : (
                <span>Send</span>
              )}
            </button>
            {message && (
              <div
                className={`mt-4 text-sm text-center ${
                  iserror ? "text-red-500" : "text-green-500"
                } `}
                role="alert"
              >
                {message}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

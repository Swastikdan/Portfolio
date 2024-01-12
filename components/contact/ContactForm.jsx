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
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsSuccess(false); // Reset the success state when the form data changes
    setIsError(false); // Reset the error state when the form data changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://express-mail-server.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error - Please try again later.");
        }
      })
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000); // Reset the success state after 2 seconds
      })
      .catch((error) => {
        setIsError(true);
        setTimeout(() => setIsError(false), 2000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      
      <form onSubmit={handleSubmit} class="space-y-4 md:space-y-8 w-full  justify-center">
        <div>
          <label
            for="name"
            class="block mb-2 text-base font-semibold font-heading text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="your Name"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-base font-semibold font-heading text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-base font-semibold font-heading text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let me know how I can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-base font-semibold font-heading text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
        type="submit"
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary w-full hover:bg-primary- focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        disabled={isLoading}
      >
        {isLoading ? (
          <div class="flex items-center justify-center gap-x-2 rounded-full">
            <div
              class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-sky-950 dark:text-white rounded-full"
              role="status"
              aria-label="Sending"
            ></div>
            <span>Sending...</span>
          </div>
        ) : isError ? (
          "Something went wrong"
        ) : isSuccess ? (
          "Thank You"
        ) : (
          "Send Message"
        )}
      </button>
      </form>
    </>
  );
}













// import React, { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setIsSuccess(false); // Reset the success state when the form data changes
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     fetch("https://express-mail-server.onrender.com/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Error - Please try again later.");
//         }
//       })
//       .then((data) => {
//         // console.log(data);
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//         setIsSuccess(true);
//         setTimeout(() => setIsSuccess(false), 2000); // Reset the success state after 1 second
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <>
      
//       <form onSubmit={handleSubmit} class="space-y-8 w-full  justify-center">
//         <div>
//           <label
//             for="name"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//             placeholder="your Name"
//             required
//           />
//         </div>
//         <div>
//           <label
//             for="email"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//             placeholder="name@example.com"
//             required
//           />
//         </div>
//         <div>
//           <label
//             for="subject"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Subject
//           </label>
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//             placeholder="Let me know how I can help you"
//             required
//           />
//         </div>
//         <div class="sm:col-span-2">
//           <label
//             for="message"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//           >
//             Your message
//           </label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="6"
//             class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//             placeholder="Leave a comment..."
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary w-full hover:bg-primary- focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div class="flex items-center justify-center gap-x-2 rounded-full">
//               <div
//                 class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-sky-950 dark:text-white rounded-full"
//                 role="status"
//                 aria-label="Sending"
//               ></div>
//               <span>Sending...</span>
//             </div>
//           ) : isSuccess ? (
//             "Thank You"
//           ) : (
//             "Send Message"
//           )}
//         </button>
//       </form>
//     </>
//   );
// }


import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="text-center p-8 rounded-2xl shadow-lg bg-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-300">Feel free to reach out</p>
        <div className="space-y-4">
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:tejasripasala6486@gmail.com"
              className="text-blue-400 hover:underline"
            >
              tejasripasala6486@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a
              href="tel:+917093099316"
              className="text-blue-400 hover:underline"
            >
              +91 70930 99316
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/feed/?trk=404_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://www.linkedin.com/feed/?trk=404_page
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Contact;

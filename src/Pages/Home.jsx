import React from 'react';

function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hello, I'm <span className="text-blue-400">Teja Sri</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Computer Science Student
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
      Passionate about crafting visually appealing, responsive, and intuitive web applications. With a strong foundation in computer science and exposure to web development, I enjoy turning ideas into user-friendly interfaces. Continuously learning new technologies to enhance my skills.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-5 py-3 rounded-md hover:bg-blue-600 transition  text-decoration-none"
        >
          View Resume
        </a>
        <a
          href="/Resume.pdf"
          download
          className="bg-white text-gray-900 px-5 py-3 rounded-md hover:bg-gray-100 transition text-decoration-none"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;

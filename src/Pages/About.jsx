import React from 'react';

function About() {
  return (
    <section className="min-h-screen pt-24 flex items-center bg-gray-900 text-white px-4 pb-12" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            I am a passionate and curious Computer Science student with a love for building user-centric web applications. 
            I enjoy blending logic and creativity to develop responsive, clean, and dynamic interfaces. My academic journey 
            has strengthened my problem-solving abilities and technical foundation, and I’m constantly seeking opportunities 
            to grow, collaborate, and make meaningful contributions to real-world projects.
          </p>

          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="space-y-6">
            {/* Bachelor's Degree */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-medium">B.Tech in Computer Science</h4>
              <p className="text-gray-300 text-sm">Pragati Engineering College, Surampalem</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-900 text-blue-100 px-2 py-1 rounded-full text-xs">
                  2020–2024 | CGPA: 8.7
                </span>
              </div>
            </div>

            {/* Intermediate */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-medium">Intermediate Education</h4>
              <p className="text-gray-300 text-sm">Tirumala Mahila Jr. College, Katheru</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-900 text-blue-100 px-2 py-1 rounded-full text-xs">
                  2018–2020 | CGPA: 9.98
                </span>
              </div>
            </div>

            {/* Secondary School */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-medium">Secondary Education</h4>
              <p className="text-gray-300 text-sm">Mandapeta Public School</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-900 text-blue-100 px-2 py-1 rounded-full text-xs">
                  2017–2018 | CGPA: 9.5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

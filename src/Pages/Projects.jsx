import React from 'react';
import { FaReact, FaFire, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiFirebase } from 'react-icons/si';

function Projects() {
  const projects = [
    {
      title: "Task Mate – Real-Time Task Management App",
      description: "A real-time task management app built with React 19, CSS, and Firebase. Supports individual and team workflows with role-based authentication.",
      features: [
        "Firebase Realtime Database for instant updates",
        "Secure authentication via Email/Google",
        "Responsive UI with React component architecture"
      ],
      technologies: [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        { icon: <FaHtml5 className="text-orange-500"/>, name:"html5"},
        {icon: <FaJs className="text-yellow-400"/>,name:"JavaScript"},
        {icon: <FaBootstrap className="text-purple-500"/>,name:"Bootstrap"},
        {icon: <SiTailwindcss className="text-blue-400"/>,name:"Tailwind"},
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" }
      ],
      links: {
        live: "https://taskmate-no32.vercel.app/",
        code: "https://github.com/cse20a31a0519/Taskmate"
      }
    },
    {
      title: "EduSpark – Interactive Learning Platform",
      description: "An interactive learning platform providing engaging, responsive, and secure learning environment.",
      features: [
        "Real-time updates with Firebase",
        "Personalized user login system",
        "Dynamic functionality with JavaScript"
      ],
      technologies: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind" },
        { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
        { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" }
      ],
      links: {
        live: "https://eduspark-learn-4hpv.vercel.app/",
        code: "https://github.com/cse20a31a0519/Eduspark-learn"
      }
    },
    {
      title: "Neeman's — Static Responsive website",
      description: "A static e-commerce website focusing on visually appealing and user-friendly interfaces.",
      features: [
        "Mobile-first responsive design",
        "Modern e-commerce layout",
        "Cross-device compatibility"
      ],
      technologies: [
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
        {icon: <FaBootstrap className="text-purple-500" />, name: "Bootstrap" },
      ],
      links: {
        live: "https://cse20a31a0519.github.io/Neemans/",
        code: "https://github.com/cse20a31a0519/Neemans"
      }
    }
  ];

  return (
    <section className="pt-24 pb-12 px-4 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105 h-full">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-200 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-200 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-200">
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-md transition text-decoration-none"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-md transition flex items-center justify-center gap-1 text-decoration-none"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

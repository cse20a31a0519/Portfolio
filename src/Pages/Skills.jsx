import React from 'react';
function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "Bootstrap" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js" },
        { name: "Core Java" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB" },
        { name: "Firebase" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "VS Code" }
      ]
    }
  ];
  const certifications = [

    {name:"Oasis Infobyte - Web Development Internshi", link:"https://drive.google.com/file/d/1hgg_Mop5VRHx9D6iGMM3mbrTeJm9OftH/view?usp=drivesdk"},
    {name:"Data Analytics with Python", link:"https://drive.google.com/file/d/1LOhuQq7y97oKWrfS8IE_TTTrqNFOet3U/view?usp=drivesdk"},
    {name:"Azure Fundamentals", link:"https://drive.google.com/file/d/1ZXE9-yb5Nwx2poG2nEyNTKEioroCtTH7/view?usp=drivesdk "},
    {name:"Power Platform Fundamentals", link:"https://drive.google.com/file/d/1ZbsBHJq7-19Lg1eAiHhH1b6dTGBg65FJ/view?usp=drivesdk "}
  ];

  return (
    <>
    <section className="py-24 px-4 bg-gray-900 text-white" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My <span className="text-blue-600">Skills </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4 border-b pb-2">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-3 bg-gray-700 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="text-sm font-medium text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className='py-10 px-4 bg-gray-900 text-white' id='certifications'>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          My <span className="text-blue-600">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-white mb-4 border-b pb-2">
                {certification.name}
              </h3>
             <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
             <a href={certification.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-decoration-none">
                View Certificate
              </a>
             </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Skills;

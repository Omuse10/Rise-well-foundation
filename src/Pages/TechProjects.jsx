import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const TechProjects = () => {
  const techProjects = [
    {
      title: 'Robotics and Arduino',
      description: 'Learn how to build and program robots using Arduino technology.',
      image: 'https://i.postimg.cc/HkknxZkR/Companion-robot.jpg',
    },
    {
      title: '3D Printing',
      description: 'Hands-on experience with 3D printing to create innovative designs.',
      image: 'https://i.postimg.cc/vBkfLRcg/Cute-Ghost-Pen-Holder-for-Desk-Halloween-Pencil-Organizer-Funny-Office-Decor-Accessory-Adorable.jpg',
    },
    {
      title: 'Digital Entrepreneurship',
      description: 'Empowering youth with skills to thrive in the digital economy.',
      image: 'https://i.postimg.cc/CMCx4TZr/Entrepreneurship.jpg',
    },
    {
      title: 'Coding Workshops',
      description: 'Interactive coding workshops for beginners and advanced learners.',
      image: 'https://i.postimg.cc/SNpzyf8s/Coding-for-First-Graders.jpg',
    },
    {
      title: 'Tech Career Guidance',
      description: 'Providing guidance and resources for youth interested in tech careers.',
      image: 'https://i.postimg.cc/GhBSCrkS/How-Do-I-Help-My-Students-Plan-Their-Careers-Cult-of-Pedagogy.jpg',
    },
    {
      title: 'Blockchain Basics',
      description: 'Learn how to build and program robots using blockchain.',
      image: 'https://i.postimg.cc/Dyjhq8LS/IMG-8189-Copy.jpg',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Tech Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default TechProjects;
import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const EntertainmentProjects = () => {
  const entertainmentProjects = [
    {
      title: 'Robotics and Arduino',
      description: 'Learn how to build and program robots using Arduino technology.',
      image: 'https://i.postimg.cc/Dyjhq8LS/IMG-8189-Copy.jpg',
    },
    {
      title: '3D Printing',
      description: 'Hands-on experience with 3D printing to create innovative designs.',
      image: 'https://i.postimg.cc/L6rCKSp6/IMG-8297.jpg',
    },
    {
      title: 'Digital Entrepreneurship',
      description: 'Empowering youth with skills to thrive in the digital economy.',
      image: 'https://i.postimg.cc/QNBN0gNw/Mental-Health-E-Book.jpg',
    },
    {
      title: 'Mental Health Awareness',
      description: 'Promoting mental health awareness and providing resources for youth.',
      image: 'https://i.postimg.cc/8cH6mRJc/IMG-3094.jpg',
    },
    {
      title: 'Tech Career Guidance',
      description: 'Providing guidance and resources for youth interested in tech careers.',
      image: 'https://i.postimg.cc/NF14q2yg/DSC-0175.jpg',
    },
    {
      title: 'Robotics and Arduino',
      description: 'Learn how to build and program robots using Arduino technology.',
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
            Entertainment Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {entertainmentProjects.map((project, index) => (
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

export default EntertainmentProjects;
import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const EntertainmentProjects = () => {
  const entertainmentProjects = [
    {
      title: 'Music Production and Media',
      description: 'We provide a platform for youths to express their creativity through podcasting and singing.',
      image: 'https://i.postimg.cc/Y0yXcDnZ/IMG-9889-Copy.jpg',
    },
    {
      title: 'Acting club and Stage Play',
      description: 'We encourage youths to develop their acting skills in a fun and safe way.',
      image: 'https://i.postimg.cc/L6rCKSp6/IMG-8297.jpg',
    },
    {
      title: 'Painting and Crafts',
      description: 'We provide a space for youths to express their creativity through painting and crafts.',
      image: 'https://i.postimg.cc/br2ybWtQ/20221205-124314.jpg',
    },
    {
      title: 'Boxing',
      description: 'Boxing classes to teach discipline, self-defense, and physical fitness in a supportive environment.',
      image: 'https://i.postimg.cc/8cH6mRJc/IMG-3094.jpg',
    },
    {
      title: 'Film Making and Photography',
      description: 'Fostering creativity and self-expression through Filming and photography for Youths.',
      image: 'https://i.postimg.cc/DwQqLYrq/IMG-9667-Copy-2.avif',
    },
    {
      title: 'Dance and Fashion',
      description: 'We provide a platform for youths to express their creativity through dance and Fashion.',
      image: 'https://i.postimg.cc/NF14q2yg/DSC-0175.jpg',
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
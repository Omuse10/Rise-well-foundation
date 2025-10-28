import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Menu, X, Users, Target, Mail, Phone, MapPin, ArrowRight, Globe, Star } from 'lucide-react';
import Logo from './assets/Logo.png';

function App() {
  const form = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use emailjs for form submission
    emailjs
      .sendForm('service_sapsowe', 'template_6uwu43m', form.current, 'VBEB9vOTtWbtL9WDj')
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form data
          setIsSubmitting(false); // Reset loading state

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false); // Reset loading state
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={Logo} 
                alt="Rise-well Foundation Logo" 
                className="h-24 w-28 mt-4" 
              />
              <h1 className="text-4xl md:text-2xl font-black leading-tight">
                Rise-well Foundation Kenya
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors">Programs</a>
              <a href="#impact" className="text-gray-700 hover:text-emerald-600 transition-colors">Impact</a>
              <a href="#team" className="text-gray-700 hover:text-emerald-600 transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">About</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Programs</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Impact</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
              <button className="w-full text-left bg-orange-600 text-white px-3 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-[#DB9F75] to-[#FFDAB9] text-white"> {/* Updated gradient colors */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Lives Through 
              <span className="text-orange-400"> Community Impact</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Empowering communities across Kenya through education, healthcare, and sustainable development programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                Join Our Mission
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">20+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building a Better Kenya, One Community at a Time
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Rise-well Foundation Kenya was established with a vision to create lasting positive change 
                in communities across Kenya. We believe that sustainable development starts from within 
                communities, empowering local leaders and fostering self-reliance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive approach combines education, healthcare, economic empowerment, and 
                environmental conservation to address the root causes of poverty and inequality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Mission</h3>
                  <p className="text-gray-600">To empower communities through sustainable programs that promote education, health, and economic growth.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">Our Vision
                  To build a self-reliant and thriving society where every individual has the opportunity to learn, live healthy, and prosper.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/g0jGK2Zr/9.jpg" // Replace with the path to your image file, e.g., "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=compress&cs=tinysrgb&w=800" 
                alt="Community gathering" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">1+</div>
                <div className="text-sm">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We run comprehensive programs designed to address the most pressing needs in Kenyan communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Education program" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education & Literacy</h3>
                <p className="text-gray-600 mb-4">
                  Providing quality education resources, building schools, and training teachers to ensure 
                  every child has access to learning opportunities.
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                  View Projects <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/6647093/pexels-photo-6647093.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare program" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare Access</h3>
                <p className="text-gray-600 mb-4">
                  Establishing health clinics, providing medical supplies, and training community 
                  health workers to improve healthcare access in rural areas.
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                  View projects <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Economic empowerment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Economic Empowerment</h3>
                <p className="text-gray-600 mb-4">
                  Supporting small businesses, providing microfinance, and teaching vocational 
                  skills to help communities become economically self-sufficient.
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
                  View projects <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from the communities we serve, showcasing the transformative power of collective action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Rise-well Foundation helped us build a clean water well in our village. Now our children 
                don't have to walk 5 kilometers for water and can focus on their education instead."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8815985/pexels-photo-8815985.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Community leader" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Raphael Kanini</div>
                  <div className="text-gray-600">Children's garden home and school student, Uthiru</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Thanks to the Rise-well Foundation, we now have access to affordable healthcare. The mobile 
                clinic visits have saved countless lives in our community."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8815516/pexels-photo-8815516.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Community member" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Grace Mwende</div>
                  <div className="text-gray-600">Community Health Advocate, Machakos</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The Rise-well vocational training program gave me the skills to start my own carpentry business. 
                I am now able to provide for my family and train others in the community."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8815149/pexels-photo-8815149.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Program beneficiary" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">John Kamau</div>
                  <div className="text-gray-600">Carpenter, Eldoret</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The vocational training program gave me the skills to start my own tailoring business. 
                I can now support my family and employ three other women from our community."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/8815516/pexels-photo-8815516.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Program beneficiary" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Mercy Waithira</div>
                  <div className="text-gray-600">Children's garden home and school student, Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals and volunteers working together to create lasting change in Kenyan communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://i.postimg.cc/qM0497Dx/vicky.jpg" 
                alt="Executive Director" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Victor Kibe</h3>
              <p className="text-emerald-600 font-medium mb-3">Chief Executive Director</p>
              <p className="text-gray-600 text-sm">
              Responsible for guiding the organization’s strategic direction, overseeing operations, and working with the team to achieve its mission and long-term goals.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://i.postimg.cc/YCvk7phZ/IMG-20250126-WA0004.jpg" 
                alt="Program Manager" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Geoffrey Omuse</h3>
              <p className="text-emerald-600 font-medium mb-3">ICT Manager</p>
              <p className="text-gray-600 text-sm">
              Skilled in managing technology systems, website development, and IT solutions that support the organization’s digital growth and innovation.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://i.postimg.cc/FKxSQgfM/Whats-App-Image-2025-10-23-at-11-36-35-AM.jpg" 
                alt="Community Coordinator" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gregory Isaac</h3>
              <p className="text-emerald-600 font-medium mb-3">Organising Secretary</p>
              <p className="text-gray-600 text-sm">
              Efficient in planning, coordinating, and managing organizational activities, ensuring smooth operations and effective communication within the team.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/8815515/pexels-photo-8815515.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Healthcare Specialist" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Isaac Arabu</h3>
              <p className="text-emerald-600 font-medium mb-3">ICT Specialist</p>
              <p className="text-gray-600 text-sm">
              Enthusiastic about robotics and technology integration, driving innovation through creative tech solutions that enhance learning and digital advancement within the organization
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/8815148/pexels-photo-8815148.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Volunteer Coordinator" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stella Kwamboka</h3>
              <p className="text-emerald-600 font-medium mb-3">Legal Officer</p>
              <p className="text-gray-600 text-sm">
              Knowledgeable in legal matters, ensuring the organization complies with laws and regulations while protecting its interests.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.postimg.cc/cCHnMG7N/paul.jpg" 
                alt="Volunteer Coordinator" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paul Owindo</h3>
              <p className="text-emerald-600 font-medium mb-3">Entertainment coordinator</p>
              <p className="text-gray-600 text-sm">
              Creative and energetic in planning, organizing, and managing entertainment activities that bring people together and make every event lively and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-50 Py-20"> {/* Updated colors */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white-100 max-w-2xl mx-auto">
            Join us in our mission to transform lives and build stronger communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Donate Today
            </button>
            <button className="border-2 border-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Become a Volunteer
            </button>
          </div>

          {/* Volunteers Section */}
          <div className=" mt-12 pb-20">
            <h3 className="text-2xl font-bold mb-6">Meet Our Volunteers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Volunteer 1: Saad */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://via.placeholder.com/150" // Replace with Saad's image URL
                    alt="Al-Adhami, Saad" 
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Al-Adhami, Saad</h4>
                  </div>
                </div>
                <p className="text-gray-600">
                  Saad is a dedicated volunteer who works tirelessly to support our mission of empowering communities across Kenya. His passion for community service inspires us all.
                </p>
              </div>

              {/* Volunteer 2: Zeyad */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://via.placeholder.com/150" // Replace with Zeyad's image URL
                    alt="Zeyad" 
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Zeyad</h4>
                  </div>
                </div>
                <p className="text-gray-600">
                  A passionate volunteer who dedicates his time to teaching 3D printing and inspiring children to explore creativity through technology. His commitment to nurturing young innovators reflects our mission of empowering the next generation.
                </p>
              </div>

              {/* Volunteer 3: Luca */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://via.placeholder.com/150" // Replace with Luca's image URL
                    alt="Luca" 
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Luca</h4>
                  </div>
                </div>
                <p className="text-gray-600">
                  A creative volunteer who contributed to designing and developing our newsletter. His dedication to clear communication and engaging storytelling helps us share our impact and connect with the community more effectively.
                </p>
              </div>

              {/* Volunteer 4: Yasmine */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://via.placeholder.com/150" // Replace with Yasmine's image URL
                    alt="Yasmine" 
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">Yasmine</h4>
                  </div>
                </div>
                <p className="text-gray-600">
                  A driven volunteer who has contributed to our community outreach initiatives. Her expertise and passion for making a difference in the lives of others inspire us all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to partner with us or learn more about our work? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <div className="font-semibold">Our Office</div>
                    <div className="text-gray-300">Naivasha Road, Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+254 743 402 87</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@risewellfoundationkenya.org</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <div className="font-semibold">Website</div>
                    <div className="text-gray-300">www.risewellfoundationkenya.org</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitSuccess && (
                  <p className="text-emerald-400 mt-4">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={Logo}
                  alt="Rise-well Foundation Logo" 
                  className="h-28 w-32 ml-0 mr-0" 
                />
                <span className="text-xl font-bold text-white">Rise-well Foundation Kenya</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming communities across Kenya through sustainable development programs 
                that empower local leaders and foster long-term growth.
              </p>
              <div className="flex space-x-4">
                <a href="#team" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                  <Users className="h-5 w-5" />
                </a>
                <a href="mailto:info@risewellfoundationkenya.org" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://www.risewellfoundationkenya.org" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-emerald-400 transition-colors">Our Programs</a></li>
                <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Impact Stories</a></li>
                <li><a href="#team" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Corporate Giving</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Annual Reports</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Rise-well Foundation Kenya. All rights reserved. | Reg. No: NPO/123/2010
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
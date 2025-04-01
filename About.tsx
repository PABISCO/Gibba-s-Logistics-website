import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About Gibba's Logistics
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over two decades of experience in the logistics industry, Gibba's Logistics has established itself as a leading provider of comprehensive cargo solutions. Our commitment to excellence and customer satisfaction sets us apart in the global logistics landscape.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-600">20+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-600">100+</h3>
                  <p className="text-gray-600">Global Partners</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-600">50+</h3>
                  <p className="text-gray-600">Countries Served</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-600">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Logistics Operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
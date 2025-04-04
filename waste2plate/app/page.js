import React from 'react';

const FoodAlertLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <header className="py-6 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-orange-600">FoodAlert</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover Delicious Food Near You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with local food providers or find hungry customers. FoodAlert brings fresh food options right to your fingertips!
          </p>
        </section>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Consumer Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Delicious food display" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Are you a Consumer?</h3>
              <p className="text-gray-600 mb-6">
                Discover local food deals, special offers, and fresh meals delivered to your doorstep.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Get In
              </button>
            </div>
          </div>
          
          {/* Provider Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Restaurant kitchen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Are you a Provider?</h3>
              <p className="text-gray-600 mb-6">
                Reach more customers, reduce food waste, and grow your food business with our platform.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Get In
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} FoodAlert. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default null;
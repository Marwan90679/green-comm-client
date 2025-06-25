import React from 'react';

const TermsAndConditions = () => {
    return  (
        <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-500 text-center mb-4">
              <em>This is a dummy Terms & Conditions page created for an assignment project.</em>
            </p>
    
            <section className="space-y-5 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-green-600">1. Introduction</h2>
                <p>
                  Welcome to our garden-themed website. This project is designed for academic/demo purposes only and does not represent a real business.
                </p>
              </div>
    
              <div>
                <h2 className="text-xl font-semibold text-green-600">2. Use of Content</h2>
                <p>
                  All images, text, and design elements are used for educational illustration. No real products or services are offered.
                </p>
              </div>
    
              <div>
                <h2 className="text-xl font-semibold text-green-600">3. User Data</h2>
                <p>
                  We do not collect or store user data. Any forms or inputs are purely functional with no backend storage.
                </p>
              </div>
    
              <div>
                <h2 className="text-xl font-semibold text-green-600">4. Liability</h2>
                <p>
                  This website is not liable for any misunderstanding due to its content, as it is meant solely for learning and development.
                </p>
              </div>
    
              <div>
                <h2 className="text-xl font-semibold text-green-600">5. Contact</h2>
                <p>
                  If you have questions about this project, please contact the assignment creator or instructor. Do not send personal information here.
                </p>
              </div>
            </section>
    
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Garden Project. For demo purposes only.
              </p>
            </div>
          </div>
        </div>
      );
};

export default TermsAndConditions;
import React from 'react';

const TermsAndConditions = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">Terms & Conditions</h1>
        
        <p className="text-gray-300 mb-6">
          <strong>Effective Date:</strong> {date}
        </p>
        
        <p className="text-gray-300 mb-6">
          Welcome to <span className="text-indigo-400 font-semibold">SupportCreators</span>. By accessing or using our website, you agree to be bound by the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. User Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>Provide accurate and complete registration and payment information.</li>
          <li>Maintain the confidentiality of your account credentials.</li>
          <li>Abide by all applicable laws while using the platform.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">2. Prohibited Activities</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>Engaging in any fraudulent or deceptive behavior.</li>
          <li>Harassing, threatening, or harming others.</li>
          <li>Posting or sharing inappropriate or illegal content.</li>
          <li>Using the platform to launder money or engage in unlawful transactions.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
        <p className="text-gray-300 mb-6">
          All content on this website, including logos, images, text, and code, is the intellectual property of <span className="text-indigo-400 font-semibold">SupportCreators</span> or its partners. Unauthorized use is strictly prohibited.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Platform Disclaimer</h2>
        <p className="text-gray-300 mb-6">
          <span className="text-red-400 font-semibold">SupportCreators</span> is a platform that facilitates support between creators and their audiences. We do not guarantee the performance or actions of any creator. All support contributions are made voluntarily and at your own risk.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
        <p className="text-gray-300 mb-6">
          We reserve the right to suspend or terminate access to the platform at any time for violations of these terms or misuse of our services.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Changes to These Terms</h2>
        <p className="text-gray-300 mb-6">
          We may update our Terms & Conditions from time to time. Continued use of the platform implies acceptance of the revised terms. Users will be notified of significant changes.
        </p>

        <p className="text-gray-300 mb-10">
          For any questions or concerns, please contact us at <a href="mailto:support@supportcreators.com" className="text-blue-500 hover:underline">support@supportcreators.com</a>.
        </p>

        <div className="absolute top-0 left-0 z-0 h-1/3 w-full" style={{
          backgroundImage: "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}></div>

        <div className="absolute top-0 right-0 z-0 h-1/3 w-full" style={{
          backgroundImage: "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}></div>
      </div>
    </div>
  );
}

export default TermsAndConditions;

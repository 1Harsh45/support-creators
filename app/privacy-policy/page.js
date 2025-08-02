import React from 'react';

const PrivacyPolicy = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black py-16 px-6 md:px-20 text-white relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.1), transparent), radial-gradient(circle at 80% 80%, rgba(220,38,38,0.1), transparent)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-300 text-center mb-8">
          <strong>Effective Date:</strong> {year}
        </p>

        <p className="text-gray-300 mb-6">
          At <strong>SupportCreators</strong>, your privacy is a top priority. This Privacy Policy outlines how we collect, use, protect, and disclose your personal information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
          <li>Personal Data: Your name, email address, username, and phone number (if provided).</li>
          <li>Payment Information: Securely processed via Razorpay. We do not store your payment details.</li>
          <li>Usage Data: How you interact with the platform, including pages visited, clicks, and other analytics.</li>
          <li>Cookies: Small data files to enhance user experience and remember your preferences.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
          <li>To create and manage your account on SupportCreators.</li>
          <li>To process transactions and donations.</li>
          <li>To send updates, respond to inquiries, or provide support.</li>
          <li>To monitor and analyze usage patterns and improve the platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
        <p className="text-gray-300 mb-6">
          We may use trusted third-party tools like Razorpay for payment processing and analytics providers to understand user engagement. These services comply with industry-standard privacy and security practices.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="text-gray-300 mb-6">
          We use encryption and secure protocols to safeguard your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-300">
          <li>Access: You can request a copy of your personal information.</li>
          <li>Correction: You can update or correct your data anytime.</li>
          <li>Deletion: You may request the deletion of your data by contacting us.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
        <p className="text-gray-300 mb-6">
          We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, but some features of the platform may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
        <p className="text-gray-300 mb-6">
          We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page and notify users if the changes are significant.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p className="text-gray-300 mb-2">
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="text-blue-400 mb-6">
          <a href="mailto:support@supportcreators.com" className="hover:underline">
            support@supportcreators.com
          </a>
        </p>

        {/* Divider */}
        <div className="bg-white h-0.5 opacity-10 my-16 mx-auto w-3/4"></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

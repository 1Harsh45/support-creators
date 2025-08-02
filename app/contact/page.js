import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.1), transparent), radial-gradient(circle at 80% 80%, rgba(220,38,38,0.1), transparent)",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-4">Contact Us</h2>
        <p className="text-center font-semibold text-lg mb-8">
          We&apos;d love to hear from you!
        </p>

        <p className="text-center text-gray-300 mb-6">
          If you have any questions, feedback, or need support, feel free to reach out to us:
        </p>

        {/* Contact Info */}
        <div className="text-center text-gray-300 mb-10 space-y-2">
          <p>Email: <a href="mailto:support@supportcreators.com" className="text-blue-400 hover:underline">support@supportcreators.com</a></p>
          <p>Phone: +1-800-123-4567</p>
          <p>Address: 123 Creator Lane, Innovation City, CA 90210</p>
        </div>

        {/* Social Media */}
        <div className="text-center text-gray-300 space-y-3">
          <p className="font-medium">Follow us on social media for the latest updates:</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">Instagram</a>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-white h-0.5 opacity-10 my-16 mx-auto w-3/4"></div>
      </div>
    </div>
  );
};

export default ContactUs;

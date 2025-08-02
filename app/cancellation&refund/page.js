import React from 'react';

const CancellationRefundPolicies = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">Cancellation & Refund Policy</h1>

        <p className="text-gray-300 mb-6">
          <strong>Effective Date:</strong> {date}
        </p>

        <p className="text-gray-300 mb-6">
          At <span className="text-indigo-400 font-semibold">SupportCreators</span>, we aim to foster transparency and trust between creators and their supporters. Please review our cancellation and refund policy below:
        </p>

        <h2 className="text-2xl font-bold mb-4">For Contributors</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>All contributions made on the platform are considered final and generally non-refundable.</li>
          <li>If you suspect a campaign is fraudulent, contact us immediately at <a href="mailto:support@supportcreators.com" className="text-blue-500 hover:underline">support@supportcreators.com</a>.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">For Campaign Creators</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>If you wish to cancel your campaign, please contact our support team at the earliest opportunity.</li>
          <li>Any funds already disbursed may not be eligible for return or reversal.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Refund Exceptions</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
          <li>If a campaign fails to meet its funding goal and qualifies for a refund under our guidelines, contributions may be returned to supporters.</li>
        </ul>

        <p className="text-gray-300 mb-10">
          For any questions or special refund requests, feel free to contact us at <a href="mailto:support@supportcreators.com" className="text-blue-500 hover:underline">support@supportcreators.com</a>. We’re here to help!
        </p>

        {/* Background gradients */}
        <div
          className="absolute top-0 left-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicies;

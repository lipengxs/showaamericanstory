'use client';

import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            Learn how we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8">
            <p className="text-gray-400 mb-8">
              Last updated: March 15, 2025
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Showa American Story. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Identity Data includes first name, last name, username or similar identifier.</li>
                  <li>Contact Data includes email address and telephone numbers.</li>
                  <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li>Usage Data includes information about how you use our website, products and services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                <p className="text-gray-300 mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Your Legal Rights</h2>
                <p className="text-gray-300 mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="text-gray-300">
                  Email: privacy@nekcomgames.com
                </p>
                <p className="text-gray-300">
                  NEKCOM Games<br />
                  Showa American Story Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
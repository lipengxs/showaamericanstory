'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: 'First Official SAS Merch Available Now!',
      excerpt: 'Today we are thrilled to announce that we are launching our brand new online store with the first-ever collection of official SAS merch, hand-crafted by our talented artists!',
      image: '/images/SAS-Merch-Announcement.png',
      date: 'January 4, 2024',
      category: 'Merch',
      link: 'https://showaamericanstory.com/blog/2024/01/04/first-official-sas-merch-available-now/',
    },
    {
      id: 2,
      title: 'Creative Director Interview With IGN Japan',
      excerpt: 'At the recent ChinaJoy conference in Shanghai, our Creative Director and Executive Producer, Xiangyu Luo, had the opportunity to sit down for an interview with the folks at IGN Japan!',
      image: '/images/Motorcycle.jpeg',
      date: 'September 12, 2023',
      category: 'Interviews',
      link: 'https://showaamericanstory.com/blog/2023/09/12/creative-director-interview-with-ign-japan/',
    },
    {
      id: 3,
      title: 'Announcing A Special Focus Group Session For Fans!',
      excerpt: 'We are excited to reveal that NEKCOM Games is partnering with the NYU Game Center to host our first ever focus group study for Showa American Story!',
      image: '/images/Shotgun.jpeg',
      date: 'May 3, 2023',
      category: 'Focus Groups',
      link: 'https://showaamericanstory.com/blog/2023/05/03/focus-group-session-announced/',
    }
    
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Latest News
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and behind-the-scenes content from the world of Showa American Story.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <div className="aspect-video relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-red-400 font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors duration-200"
                  >
                    Read More
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to receive the latest updates about Showa American Story directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 
'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CountdownTimer from '../components/CountdownTimer'

export default function HomePage() {
  const features = [
    {
      title: 'Visceral Combat',
      description: 'Experience free-flowing and brutal combat as Chouko carves through hordes of enemies with a variety of melee and ranged weapons.',
      image: '/images/Chouko-960x540.jpeg',
    },
    {
      title: 'Rewarding Exploration',
      description: 'Explore the unique scenery of post-apocalyptic "Showa America" while discovering engaging stories through main and side quests.',
      image: '/images/Home-960x540.jpeg',
    },
    {
      title: '80s Nostalgia',
      description: 'Immerse yourself in the unmistakable energy and unique aesthetic of both American and Japanese 80s pop culture.',
      image: '/images/Sunset-960x540.jpeg',
    },
    {
      title: 'B-Movie Flavor',
      description: 'Experience the campiness of B-movies with exaggerated gore, dark humor, and larger-than-life characters.',
      image: '/images/Neo-Yokohama-960x540.jpeg',
    },
  ]

  const screenshots = [
    '/images/Chouko-Desert-600x338.jpeg',
    '/images/Motorcycle-600x338.jpeg',
    '/images/Statue-of-Liberty-600x338.jpeg',
    '/images/Jizo-Statues-600x338.jpeg',
    '/images/Zombie-Bike-600x338.jpeg',
    '/images/Chouko-600x338.jpeg',
    '/images/Billboards-600x338.jpeg',
    '/images/GEX-600x338.jpeg',
    '/images/Pool-600x338.jpeg',
    '/images/Shibata-Family-2-e1670413893164-600x338.jpeg',
    '/images/Sunset-600x338.jpeg',
    '/images/Fireworks-600x338.jpeg',
  ]

  const faqs = [
    {
      question: 'What is Showa American Story?',
      answer: 'Showa American Story is a post-apocalyptic action RPG that blends Japanese and American culture in a unique setting where Japan has bought out most of the United States, creating a fascinating fusion of cultures.',
    },
    {
      question: 'When will Showa American Story be released?',
      answer: 'The game is currently in development and will be released on PlayStation 4, PlayStation 5, and PC. The exact release date will be announced soon.',
    },
    {
      question: 'What platforms will Showa American Story be available on?',
      answer: 'Showa American Story will be available on PlayStation 4, PlayStation 5, and PC via Steam.',
    },
    {
      question: 'Who is the main character?',
      answer: 'The main character is Chouko, a 19-year-old stuntwoman who embarks on a revenge-fueled journey across Route 50 of the United States to find her sister.',
    },
    {
      question: 'What type of combat system does the game feature?',
      answer: 'The game features a free-flowing and brutal combat style with a variety of melee weapons, ranged weapons, and supernatural abilities that players can use against different types of enemies.',
    },
    {
      question: 'Can I customize my character or vehicle?',
      answer: 'Yes! Players can customize and upgrade their RV (recreational vehicle) throughout the road trip, and enhance Chouko\'s stats and unlock new abilities by completing various activities.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Motorcycle.jpeg"
            alt="Showa American Story Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experience the Rise of Showa America
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            A post-apocalyptic action RPG where Japanese and American cultures collide in a world of revenge, survival, and supernatural powers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Wishlist on Steam
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=-D86NcserWk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
        </div>
      </section>

      {/* Game Introduction */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to Showa America
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Showa 66. Japan has bought out most of the United States with its strong economic power and a surge of immigration has firmly planted Japanese culture within the American continent.
                </p>
                <p>
                  The United States, once a world leader, is now an unofficial colony of Japan and the two cultures rapidly meld together. Although conflicts are inevitable, citizens gradually adapt to a life they never could have imagined.
                </p>
                <p>
                  Enter Chouko, a 19-year-old stuntwoman whose dreams of stardom are shattered when she's assassinated and dumped in the wilderness. But death is not the end - she rises from the soil with supernatural powers and embarks on a revenge-fueled journey across Route 50.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-D86NcserWk?si=wTReyM6GuCcOXmkz"
                  title="Showa American Story Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            How to Play
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-400 mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Master Combat</h3>
              <p className="text-gray-300">
                Learn to use Chouko's supernatural abilities and master the free-flowing combat system against various enemies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-400 mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Explore & Survive</h3>
              <p className="text-gray-300">
                Navigate the post-apocalyptic world, gather resources, and upgrade your RV as you travel across Route 50.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-red-400 mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Uncover the Truth</h3>
              <p className="text-gray-300">
                Discover what happened to your sister and the world while seeking revenge against those who wronged you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Screenshots
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={screenshot}
                  alt={`Showa American Story Screenshot ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Showa America?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Chouko on her epic journey of revenge and discovery in this unique blend of Japanese and American culture.
          </p>
          <Link
            href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
          >
            Wishlist Now
          </Link>
        </div>
      </section>
    </div>
  )
} 
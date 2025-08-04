import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GuidesPage() {
  const systemRequirements = {
    minimum: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4460 or AMD FX-8350',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GeForce GTX 760 or AMD Radeon R7 260x',
      directX: 'Version 11',
      storage: '50 GB available space',
      additional: 'Requires a 64-bit processor and operating system',
    },
    recommended: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7-4790 or AMD Ryzen 5 1600',
      memory: '16 GB RAM',
      graphics: 'NVIDIA GeForce GTX 1060 or AMD Radeon RX 580',
      directX: 'Version 12',
      storage: '50 GB available space',
      additional: 'SSD recommended for optimal performance',
    },
  }

  const platforms = [
    {
      name: 'Steam',
      logo: '/images/steam.png',
      link: 'https://store.steampowered.com/app/1687540/Showa_American_Story/',
      description: 'Available for Windows PC',
    },
    {
      name: 'PlayStation 5',
      logo: '/images/playstation_logos.png',
      link: '#',
      description: 'Coming soon to PS5',
    },
    {
      name: 'PlayStation 4',
      logo: '/images/playstation_logos.png',
      link: '#',
      description: 'Coming soon to PS4',
    },
  ]

  const publisherGames = [
  
    {
      title: 'Other NEKCOM Games',
      description: 'Explore more titles from NEKCOM Games, known for innovative storytelling and unique gameplay experiences.',
      image: '/images/Home-960x540.jpeg',
      link: 'https://nekcomgames.com/',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Game Information
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Showa American Story - system requirements, platforms, and how to get the game.
          </p>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Minimum Requirements</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">OS:</span>
                  <span className="ml-2">{systemRequirements.minimum.os}</span>
                </div>
                <div>
                  <span className="text-gray-400">Processor:</span>
                  <span className="ml-2">{systemRequirements.minimum.processor}</span>
                </div>
                <div>
                  <span className="text-gray-400">Memory:</span>
                  <span className="ml-2">{systemRequirements.minimum.memory}</span>
                </div>
                <div>
                  <span className="text-gray-400">Graphics:</span>
                  <span className="ml-2">{systemRequirements.minimum.graphics}</span>
                </div>
                <div>
                  <span className="text-gray-400">DirectX:</span>
                  <span className="ml-2">{systemRequirements.minimum.directX}</span>
                </div>
                <div>
                  <span className="text-gray-400">Storage:</span>
                  <span className="ml-2">{systemRequirements.minimum.storage}</span>
                </div>
                <div>
                  <span className="text-gray-400">Additional Notes:</span>
                  <span className="ml-2">{systemRequirements.minimum.additional}</span>
                </div>
              </div>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Recommended Requirements</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">OS:</span>
                  <span className="ml-2">{systemRequirements.recommended.os}</span>
                </div>
                <div>
                  <span className="text-gray-400">Processor:</span>
                  <span className="ml-2">{systemRequirements.recommended.processor}</span>
                </div>
                <div>
                  <span className="text-gray-400">Memory:</span>
                  <span className="ml-2">{systemRequirements.recommended.memory}</span>
                </div>
                <div>
                  <span className="text-gray-400">Graphics:</span>
                  <span className="ml-2">{systemRequirements.recommended.graphics}</span>
                </div>
                <div>
                  <span className="text-gray-400">DirectX:</span>
                  <span className="ml-2">{systemRequirements.recommended.directX}</span>
                </div>
                <div>
                  <span className="text-gray-400">Storage:</span>
                  <span className="ml-2">{systemRequirements.recommended.storage}</span>
                </div>
                <div>
                  <span className="text-gray-400">Additional Notes:</span>
                  <span className="ml-2">{systemRequirements.recommended.additional}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Available Platforms
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={120}
                    height={60}
                    className="mx-auto h-12 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-gray-300 mb-4">{platform.description}</p>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  {platform.name === 'Steam' ? 'Wishlist Now' : 'Coming Soon'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publisher Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About NEKCOM Games
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/nekcom.svg"
                alt="NEKCOM Games"
                width={200}
                height={100}
                className="mb-6"
              />
              <p className="text-lg text-gray-300 mb-6">
                NEKCOM Games is a renowned game development studio known for creating innovative and immersive gaming experiences. With a focus on unique storytelling and cutting-edge gameplay mechanics, NEKCOM has established itself as a leader in the gaming industry.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Showa American Story represents our latest venture into the action RPG genre, combining our passion for storytelling with innovative gameplay design to create an unforgettable gaming experience.
              </p>
              <a
                href="https://nekcomgames.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Visit NEKCOM Games
              </a>
            </div>
            <div className="grid gap-6">
              {publisherGames.map((game, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{game.title}</h3>
                    <p className="text-gray-300 mb-4">{game.description}</p>
                    <a
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Play Showa American Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Chouko on her epic journey across post-apocalyptic America. Wishlist the game now and be the first to experience this unique blend of Japanese and American culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Wishlist on Steam
            </a>
    
          </div>
        </div>
      </section>
    </div>
  )
} 
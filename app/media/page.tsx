import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MediaPage() {
  const videos = [
    {
      id: 1,
      title: 'Showa American Story - Reveal Trailer',
      thumbnail: '/images/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=-D86NcserWk',
      duration: '2:45',
      description: 'Experience the unique blend of Japanese and American culture in this post-apocalyptic action RPG.',
    },
    {
      id: 2,
      title: 'Showa American Story - Gameplay Trailer',
      thumbnail: '/images/hqdefault(1).jpg',
      url: 'https://www.youtube.com/watch?v=GUBlPT81rsk',
      duration: '1:30',
      description: 'Watch Chouko in action as she battles through the wastelands of Showa America.',
    },
    {
      id: 3,
      title: 'Showa American Story - Story Trailer',
      thumbnail: '/images/Chouko-960x540.jpeg',
      url: 'https://www.youtube.com/watch?v=-D86NcserWk',
      duration: '3:15',
      description: 'Discover the compelling story of revenge and survival in a world where Japan has bought America.',
    },
    {
      id: 4,
      title: 'Showa American Story - Combat Showcase',
      thumbnail: '/images/Neo-Yokohama-960x540.jpeg',
      url: 'https://www.youtube.com/watch?v=GUBlPT81rsk',
      duration: '2:20',
      description: 'Master the brutal combat system with supernatural abilities and devastating weapons.',
    },
  ]

  const screenshots = [
    {
      src: '/images/Chouko-Desert-600x338.jpeg',
      title: 'Chouko in the Desert',
      description: 'The main character exploring the vast wastelands'
    },
    {
      src: '/images/Motorcycle-600x338.jpeg',
      title: 'Motorcycle Journey',
      description: 'Travel across Route 50 on your trusty motorcycle'
    },
    {
      src: '/images/Statue-of-Liberty-600x338.jpeg',
      title: 'Statue of Liberty',
      description: 'Iconic landmarks in the post-apocalyptic world'
    },
    {
      src: '/images/Jizo-Statues-600x338.jpeg',
      title: 'Jizo Statues',
      description: 'Japanese cultural elements blend with American landscape'
    },
    {
      src: '/images/Zombie-Bike-600x338.jpeg',
      title: 'Zombie Bike',
      description: 'Encounters with supernatural enemies'
    },
    {
      src: '/images/Chouko-600x338.jpeg',
      title: 'Chouko Portrait',
      description: 'The 19-year-old stuntwoman seeking revenge'
    },
    {
      src: '/images/Billboards-600x338.jpeg',
      title: 'Neon Billboards',
      description: '80s aesthetic meets post-apocalyptic setting'
    },
    {
      src: '/images/GEX-600x338.jpeg',
      title: 'GEX Building',
      description: 'Corporate dystopia in Showa America'
    },
    {
      src: '/images/Pool-600x338.jpeg',
      title: 'Abandoned Pool',
      description: 'Atmospheric locations throughout the journey'
    },
    {
      src: '/images/Shibata-Family-2-e1670413893164-600x338.jpeg',
      title: 'Shibata Family',
      description: 'Key characters in the story'
    },
    {
      src: '/images/Sunset-600x338.jpeg',
      title: 'Sunset View',
      description: 'Beautiful vistas of the transformed America'
    },
    {
      src: '/images/Fireworks-600x338.jpeg',
      title: 'Fireworks',
      description: 'Celebration and hope in dark times'
    },
  ]

  const wallpapers = [
    {
      src: '/images/Motorcycle.jpeg',
      title: 'Desert Road',
      description: 'Available in 1920x1080, 2560x1440, and 3840x2160',
      downloadUrl: '#'
    },
    {
      src: '/images/Sunset-960x540.jpeg',
      title: 'Neo Yokohama Sunset',
      description: 'Available in 1920x1080, 2560x1440, and 3840x2160',
      downloadUrl: '#'
    },
    {
      src: '/images/Chouko-960x540.jpeg',
      title: 'Chouko Portrait',
      description: 'Available in 1920x1080, 2560x1440, and 3840x2160',
      downloadUrl: '#'
    },
    {
      src: '/images/Neo-Yokohama-960x540.jpeg',
      title: 'Neo Yokohama City',
      description: 'Available in 1920x1080, 2560x1440, and 3840x2160',
      downloadUrl: '#'
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Media Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the world of Showa American Story through our collection of trailers, gameplay videos, and stunning screenshots.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <div className="aspect-video relative group">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="bg-red-600 rounded-full p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-3 text-lg">{video.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{video.description}</p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-200 inline-flex items-center"
                  >
                    Watch Now
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Screenshots
            </h2>
            <p className="text-gray-300 mb-6">
              Looking to download them all? Why not grab the press kit:
            </p>
            <a
              href="https://drive.google.com/drive/folders/1WjgGr0trt8ivT2uwyNTFalrUmeQ9kSED?zx=dnsgm0ywt3gi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Press Kit
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-transform duration-200">
                <div className="aspect-video relative">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-gray-300 text-sm">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wallpapers Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wallpapers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {wallpapers.map((wallpaper, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={wallpaper.src}
                    alt={wallpaper.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-3 text-lg">{wallpaper.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {wallpaper.description}
                  </p>
                  <a
                    href={wallpaper.downloadUrl}
                    className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-200 inline-flex items-center"
                  >
                    Download
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
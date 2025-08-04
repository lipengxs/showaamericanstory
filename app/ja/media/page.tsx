import React from 'react'
import Image from 'next/image'

export default function JapaneseMediaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            メディアギャラリー
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            トレーラー、ゲームプレイ動画、美しいスクリーンショットを通じて昭和アメリカンストーリーの世界を探索してください。
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            動画
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/hqdefault.jpg"
                  alt="公式発表トレーラー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">公式発表トレーラー</h3>
                <a
                  href="https://youtube.com/watch?v=-D86NcserWk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-200"
                >
                  今すぐ見る
                </a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/hqdefault(1).jpg"
                  alt="ティーザートレーラー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">ティーザートレーラー</h3>
                <a
                  href="https://youtube.com/watch?v=GUBlPT81rsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors duration-200"
                >
                  今すぐ見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              スクリーンショット
            </h2>
            <p className="text-gray-300 mb-6">
              すべてダウンロードしたいですか？プレスキットを入手してみませんか：
            </p>
            <a
              href="https://drive.google.com/drive/folders/1WjgGr0trt8ivT2uwyNTFalrUmeQ9kSED?zx=dnsgm0ywt3gi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              プレスキット
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="aspect-video relative rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={`/images/Chouko-Desert-600x338.jpeg`}
                  alt={`昭和アメリカンストーリースクリーンショット ${index}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
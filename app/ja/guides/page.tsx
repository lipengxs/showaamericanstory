import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function JapaneseGuidesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ゲーム情報
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            昭和アメリカンストーリーについて知っておくべきすべて - システム要件、プラットフォーム、ゲームの入手方法。
          </p>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            システム要件
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-red-400">最小要件</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">OS:</span>
                  <span className="ml-2">Windows 10 64-bit</span>
                </div>
                <div>
                  <span className="text-gray-400">プロセッサ:</span>
                  <span className="ml-2">Intel Core i5-4460 or AMD FX-8350</span>
                </div>
                <div>
                  <span className="text-gray-400">メモリ:</span>
                  <span className="ml-2">8 GB RAM</span>
                </div>
                <div>
                  <span className="text-gray-400">グラフィックス:</span>
                  <span className="ml-2">NVIDIA GeForce GTX 760 or AMD Radeon R7 260x</span>
                </div>
                <div>
                  <span className="text-gray-400">ストレージ:</span>
                  <span className="ml-2">50 GB available space</span>
                </div>
              </div>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-green-400">推奨要件</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400">OS:</span>
                  <span className="ml-2">Windows 10/11 64-bit</span>
                </div>
                <div>
                  <span className="text-gray-400">プロセッサ:</span>
                  <span className="ml-2">Intel Core i7-4790 or AMD Ryzen 5 1600</span>
                </div>
                <div>
                  <span className="text-gray-400">メモリ:</span>
                  <span className="ml-2">16 GB RAM</span>
                </div>
                <div>
                  <span className="text-gray-400">グラフィックス:</span>
                  <span className="ml-2">NVIDIA GeForce GTX 1060 or AMD Radeon RX 580</span>
                </div>
                <div>
                  <span className="text-gray-400">ストレージ:</span>
                  <span className="ml-2">50 GB available space (SSD推奨)</span>
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
            利用可能なプラットフォーム
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/images/steam.png"
                  alt="Steam"
                  width={120}
                  height={60}
                  className="mx-auto h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Steam</h3>
              <p className="text-gray-300 mb-4">Windows PCで利用可能</p>
              <a
                href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                今すぐウィッシュリスト
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/images/playstation_logos.png"
                  alt="PlayStation 5"
                  width={120}
                  height={60}
                  className="mx-auto h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">PlayStation 5</h3>
              <p className="text-gray-300 mb-4">PS5で近日リリース予定</p>
              <a
                href="#"
                className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                近日リリース
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4">
                <Image
                  src="/images/playstation_logos.png"
                  alt="PlayStation 4"
                  width={120}
                  height={60}
                  className="mx-auto h-12 w-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">PlayStation 4</h3>
              <p className="text-gray-300 mb-4">PS4で近日リリース予定</p>
              <a
                href="#"
                className="inline-block bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                近日リリース
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            昭和アメリカンストーリーをプレイする準備はできましたか？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ポストアポカリプスアメリカを横断するチョウコの壮大な旅に参加してください。今すぐゲームをウィッシュリストに追加して、日本とアメリカ文化のユニークな融合を最初に体験してください。
          </p>
          <a
            href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Steamでウィッシュリスト
          </a>
        </div>
      </section>
    </div>
  )
} 
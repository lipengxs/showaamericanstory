'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function JapaneseHomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Motorcycle.jpeg"
            alt="昭和アメリカンストーリー背景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Image
            src="/images/showa-logo.svg"
            alt="昭和アメリカンストーリー"
            width={400}
            height={100}
            className="mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            昭和アメリカの台頭を体験しよう
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            日本とアメリカの文化が衝突するポストアポカリプスアクションRPG。復讐、生存、超自然的な力の世界で。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Steamでウィッシュリスト
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=-D86NcserWk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              トレーラーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Game Introduction */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                昭和アメリカへようこそ
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  昭和66年。日本は強力な経済力でアメリカの大部分を買収し、移民の急増により日本文化がアメリカ大陸に確実に根付いています。
                </p>
                <p>
                  かつて世界のリーダーだったアメリカは、今や日本の非公式な植民地となり、二つの文化が急速に融合しています。対立は避けられませんが、市民は徐々に想像もつかなかった生活に適応していきます。
                </p>
                <p>
                  チョウコは、スターになる夢が暗殺されて荒野に捨てられることで打ち砕かれた19歳のスタントウーマンです。しかし死は終わりではありません - 彼女は土から蘇り、超自然的な力を得て、ルート50を横断する復讐の旅に出ます。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-D86NcserWk?si=wTReyM6GuCcOXmkz"
                  title="昭和アメリカンストーリートレーラー"
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

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            昭和アメリカを体験する準備はできましたか？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            日本とアメリカの文化のユニークな融合であるこの世界で、チョウコの壮大な復讐と発見の旅に参加してください。
          </p>
          <Link
            href="https://store.steampowered.com/app/1687540/Showa_American_Story/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
          >
            今すぐウィッシュリスト
          </Link>
        </div>
      </section>
    </div>
  )
} 
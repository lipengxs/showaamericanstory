'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function JapaneseNewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: '初回公式SASグッズ販売開始！',
      excerpt: '本日、私たちの才能あるアーティストが手作りした初回公式SASグッズコレクションを扱う新しいオンラインストアの立ち上げを発表できることを嬉しく思います！',
      image: '/images/SAS-Merch-Announcement.png',
      date: '2024年1月4日',
      category: 'グッズ',
      link: 'https://showaamericanstory.com/blog/2024/01/04/first-official-sas-merch-available-now/',
    },
    {
      id: 2,
      title: 'クリエイティブディレクターIGN Japanインタビュー',
      excerpt: '先日上海で開催されたChinaJoyカンファレンスで、私たちのクリエイティブディレクター兼エグゼクティブプロデューサー、羅翔宇がIGN Japanの皆さんとインタビューの機会を得ました！',
      image: '/images/Motorcycle.jpeg',
      date: '2023年9月12日',
      category: 'インタビュー',
      link: 'https://showaamericanstory.com/blog/2023/09/12/creative-director-interview-with-ign-japan/',
    },
    {
      id: 3,
      title: 'ファン向け特別フォーカスグループセッション発表！',
      excerpt: 'NEKCOM GamesがNYU Game Centerとパートナーシップを結び、昭和アメリカンストーリー初のフォーカスグループ研究を開催することを発表できることを嬉しく思います！',
      image: '/images/Shotgun.jpeg',
      date: '2023年5月3日',
      category: 'フォーカスグループ',
      link: 'https://showaamericanstory.com/blog/2023/05/03/focus-group-session-announced/',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            最新ニュース
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            昭和アメリカンストーリーの世界からの最新ニュース、発表、舞台裏コンテンツをチェックしてください。
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
                    続きを読む
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
            最新情報をお届け
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            昭和アメリカンストーリーの最新アップデートをメールで受け取るためにニュースレターに登録してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              登録
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 
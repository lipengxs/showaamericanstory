'use client'

import React from 'react'

export default function JapanesePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            プライバシーポリシー
          </h1>
          <p className="text-xl text-gray-300">
            個人情報の収集、使用、保護方法について学ぶ
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8">
            <p className="text-gray-400 mb-8">
              最終更新日: 2025年3月15日
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. はじめに</h2>
                <p className="text-gray-300 leading-relaxed">
                  昭和アメリカンストーリーへようこそ。私たちはあなたのプライバシーを尊重し、個人データの保護に取り組んでいます。このプライバシーポリシーは、当ウェブサイトを訪問する際の個人データの取り扱い方法と、プライバシー権利および法律による保護について説明します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. 収集するデータ</h2>
                <p className="text-gray-300 mb-4">
                  私たちは、以下のように分類された異なる種類の個人データを収集、使用、保存、転送する場合があります：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>身元データには、名、姓、ユーザー名または類似の識別子が含まれます。</li>
                  <li>連絡先データには、メールアドレスと電話番号が含まれます。</li>
                  <li>技術データには、インターネットプロトコル（IP）アドレス、ログインデータ、ブラウザの種類とバージョン、タイムゾーン設定と場所、ブラウザプラグインの種類とバージョン、オペレーティングシステムとプラットフォーム、およびこのウェブサイトにアクセスするために使用するデバイスのその他の技術が含まれます。</li>
                  <li>使用データには、ウェブサイト、製品、サービスの使用方法に関する情報が含まれます。</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. データの使用方法</h2>
                <p className="text-gray-300 mb-4">
                  私たちは、法律が許可する場合にのみ個人データを使用します。最も一般的に、以下の状況で個人データを使用します：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>あなたと締結しようとしている、または締結した契約を履行する必要がある場合。</li>
                  <li>私たちの正当な利益（または第三者の利益）のために必要で、あなたの利益と基本的権利がそれらの利益を上回らない場合。</li>
                  <li>法的義務を遵守する必要がある場合。</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. データセキュリティ</h2>
                <p className="text-gray-300 leading-relaxed">
                  私たちは、個人データが偶発的に失われたり、不正に使用されたり、アクセスされたり、変更されたり、開示されたりすることを防ぐために、適切なセキュリティ対策を実施しています。さらに、個人データへのアクセスを、ビジネス上の必要性がある従業員、エージェント、請負業者、その他の第三者に限定しています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. あなたの法的権利</h2>
                <p className="text-gray-300 mb-4">
                  特定の状況下では、データ保護法に基づいて個人データに関して以下の権利があります：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>個人データへのアクセスを要求する権利</li>
                  <li>個人データの訂正を要求する権利</li>
                  <li>個人データの削除を要求する権利</li>
                  <li>個人データの処理に異議を唱える権利</li>
                  <li>個人データの処理の制限を要求する権利</li>
                  <li>個人データの転送を要求する権利</li>
                  <li>同意を撤回する権利</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. お問い合わせ</h2>
                <p className="text-gray-300 mb-4">
                  このプライバシーポリシーまたは私たちのプライバシー慣行についてご質問がある場合は、以下までお問い合わせください：
                </p>
                <p className="text-gray-300">
                  メール: privacy@nekcomgames.com
                </p>
                <p className="text-gray-300">
                  NEKCOM Games<br />
                  昭和アメリカンストーリーチーム
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
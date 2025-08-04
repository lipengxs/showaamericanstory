'use client'

import React from 'react'

export default function JapaneseTermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            利用規約
          </h1>
          <p className="text-xl text-gray-300">
            昭和アメリカンストーリーの利用に関する規約と条件を読む
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
                <h2 className="text-2xl font-bold mb-4">1. 規約の承諾</h2>
                <p className="text-gray-300 leading-relaxed">
                  昭和アメリカンストーリーにアクセスまたは使用することにより、あなたはこれらの利用規約およびすべての適用される法律および規制に拘束されることに同意します。これらの規約のいずれかに同意しない場合、このサイトの使用またはアクセスは禁止されています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. 使用ライセンス</h2>
                <p className="text-gray-300 mb-4">
                  昭和アメリカンストーリーのコピーをデバイスごとに1つ、個人的、非商業的な一時的な閲覧目的でのみ一時的にダウンロードする許可が与えられます。これはライセンスの付与であり、所有権の譲渡ではなく、このライセンスの下で以下を行うことはできません：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>資料を変更またはコピーする</li>
                  <li>資料を商業目的で使用する</li>
                  <li>昭和アメリカンストーリーに含まれるソフトウェアを逆コンパイルまたはリバースエンジニアリングしようとする</li>
                  <li>資料から著作権またはその他の所有権表示を削除する</li>
                  <li>資料を他の人に転送する、または他のサーバーに資料を「ミラーリング」する</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. ユーザーアカウント</h2>
                <p className="text-gray-300 leading-relaxed">
                  昭和アメリカンストーリーの特定の機能にアクセスするには、アカウントを作成する必要がある場合があります。あなたは、アカウント情報の機密性を維持し、アカウントで発生するすべての活動に対して責任を負います。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. ユーザー行為</h2>
                <p className="text-gray-300 mb-4">
                  あなたは以下に同意します：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>昭和アメリカンストーリーを違法な目的で使用しない</li>
                  <li>他の人を嫌がらせたり、虐待したり、危害を加えたりしない</li>
                  <li>人またはエンティティになりすまさない</li>
                  <li>サービスまたはサーバーを妨害または混乱させない</li>
                  <li>サービスのいかなる部分にも不正アクセスしようとしない</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. 知的財産</h2>
                <p className="text-gray-300 leading-relaxed">
                  昭和アメリカンストーリーに関連するコンテンツ、構成、グラフィックス、デザイン、その他の事項は、適用される著作権およびその他の所有権法によって保護されています。そのようなコンテンツのコピー、再配布、使用、または公開は、私たちの明示的な許可なしに禁止されています。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. 免責事項</h2>
                <p className="text-gray-300 leading-relaxed">
                  昭和アメリカンストーリーの資料は「現状のまま」提供されます。私たちは、明示的または暗黙的な保証を行わず、商品性、特定の目的への適合性、知的財産の非侵害性、または権利の他の侵害を含むがこれらに限定されない、その他のすべての保証を否認し、否定します。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. 制限</h2>
                <p className="text-gray-300 leading-relaxed">
                  いかなる場合でも、昭和アメリカンストーリーまたはその供給者は、昭和アメリカンストーリーの資料の使用または使用不能から生じる損害（データまたは利益の損失、または事業中断による損害を含むがこれらに限定されない）について責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. 連絡先情報</h2>
                <p className="text-gray-300 mb-4">
                  これらの利用規約についてご質問がある場合は、以下までお問い合わせください：
                </p>
                <p className="text-gray-300">
                  メール: legal@nekcomgames.com
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
import { Check } from "lucide-react";

const TargetAudienceSection = () => {
  const items = [
    "キャリアに真剣に向き合いたい",
    "就活の時期だけど何から始めたらいいかわからない",
    "業界や会社規模のメリデメ比較をしたい",
    "気軽に相談し合える就活友達が欲しい",
  ];

  return (
    // ▼ 変更1：上下余白を py-20 から py-12 に縮小 ▼
    <section className="py-12 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* セクションタイトル */}
        {/* ▼ 変更2：下の余白を mb-12 から mb-8 に短縮 ▼ */}
        <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             こんな人におすすめ
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">RECOMMENDED FOR</p>
        </div>

        {/* チェックリストカード */}
        {/* ▼ 変更3：カード内の余白を p-8 md:p-12 から p-6 md:p-10 に少し縮小 ▼ */}
        <div className="bg-white rounded-2xl border-2 border-[#0B1E46]/10 shadow-xl p-6 md:p-10 relative">
            {/* 上部のゴールドアクセント */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#B8860B] rounded-b-full"></div>

            {/* ▼ 変更4：リスト間の隙間を gap-6 から gap-5 に微調整 ▼ */}
            <div className="flex flex-col gap-5 max-w-lg mx-auto">
                {items.map((text, index) => (
                    <div key={index} className="flex items-start group">
                        {/* チェックアイコン */}
                        <div className="flex-shrink-0 mr-4 mt-1">
                            <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center group-hover:bg-[#B8860B] transition-colors duration-300 shadow-sm">
                                <Check className="w-5 h-5 text-white stroke-[3px]" />
                            </div>
                        </div>
                        {/* テキスト */}
                        <p className="text-lg md:text-xl font-bold text-[#0B1E46] leading-relaxed group-hover:text-[#B8860B] transition-colors duration-300 pt-0.5">
                            {text}
                        </p>
                    </div>
                ))}
            </div>

            {/* 装飾用の背景円 */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#B8860B]/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0B1E46]/5 rounded-full blur-2xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudienceSection;
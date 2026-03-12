import { CalendarDays, Clock } from "lucide-react";

const NextEventSection = () => {
  return (
    <section className="py-8 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        {/* ▼▼▼ リンク先がないため、<a>タグではなく<div>タグに変更しています ▼▼▼ */}
        <div className="block bg-gradient-to-br from-white to-purple-50/30 border border-[#B8860B]/30 shadow-sm rounded-2xl p-8 md:p-10 relative overflow-hidden">
          
          {/* キラキラ装飾 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B8860B]/10 to-transparent rounded-bl-full z-0 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-tr-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center gap-5">
            
            {/* ラベル */}
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1 bg-white border border-slate-100 px-4 py-2 rounded-full shadow-sm">
              <CalendarDays className="w-4 h-4 text-[#B8860B]" />
              4月26日の日程が合わない方へ
            </span>
            
            {/* 見出し */}
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1E46] leading-relaxed">
              <span className="text-[#B8860B] pb-1 mr-1">5月</span> <br />
              開催枠も現在準備中です
            </h3>
            
            {/* 説明文 */}
            <p className="text-[13px] md:text-sm text-slate-500 font-medium mb-2">
              別日程でも同規模の特別座談会を開催予定です。<br className="md:hidden" />
              詳細の公開まで今しばらくお待ちください。
            </p>

            {/* ▼▼▼ Coming Soonボタン（クリック不可のグレーアウト仕様） ▼▼▼ */}
            <div className="w-full sm:w-auto flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 bg-slate-200 text-slate-500 px-8 py-4 rounded-full font-bold text-sm shadow-inner cursor-not-allowed w-full sm:w-auto whitespace-nowrap">
                <Clock className="w-4 h-4" />
                5月開催の詳細 Coming Soon...
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextEventSection;
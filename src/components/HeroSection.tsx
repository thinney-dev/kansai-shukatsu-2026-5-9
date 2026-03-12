import { useState, useEffect } from "react";
import { ChevronRight, Users, MapPin, Ticket, CalendarClock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/Herosection-4.png",
  "/Herosection-1.png",
  "/Herosection-2.png"
];

// ▼▼▼ 4月LP用：メイン企業ロゴとその他の企業名リスト ▼▼▼
const mainCompanies = [
  {
    id: "logo1",
    name: "JCB", // 1社目の社名
    // ▼ publicフォルダにある1社目の画像ファイル名に書き換えてください
    logoSrc: "/logo-JCB.png", 
  },
  {
    id: "logo2",
    name: "野村證券", // 2社目の社名
    // ▼ publicフォルダにある2社目の画像ファイル名に書き換えてください
    logoSrc: "/logo-野村證券.png",
  },
];

const otherCompanies = [
   "三井住友海上火災保険株式会社", "日本新薬株式会社", "株式会社ナハト", "AnyMind Group株式会社"
];
// ▲▲▲ 追加ここまで ▲▲▲

const HeroSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <section className="relative w-full pt-6 pb-16 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* 画像バナー */}
        <div className="w-full flex justify-center mb-3 animate-in fade-in slide-in-from-top-4 duration-700">
            <img
            src="/LP_header_28.png"
            alt="28卒限定"
            className="w-[60%] h-auto object-contain"
            />
        </div>

        {/* ヘッダーテキスト部分 */}
        <div className="mb-12 md:mb-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0B1E46] leading-tight mb-5 drop-shadow-sm">
            質の高い就活を
          </h1>
          <div className="mt-1 w-full flex justify-center">
            <p className="text-[11px] sm:text-sm md:text-lg font-serif text-[#0B1E46] tracking-[0.1em] font-medium opacity-90 whitespace-nowrap">
              少人数だからこそ、優良企業と深く話せる座談会
            </p>
          </div>

          <div className="mt-10 md:mt-16 flex justify-center w-full animate-in fade-in zoom-in duration-1000 delay-200">
             <div className="inline-flex items-center gap-2 md:gap-3">
                <CalendarClock className="w-6 h-6 md:w-8 md:h-8 text-[#B8860B] drop-shadow-sm" />
                <span className="text-2xl md:text-3xl font-serif font-bold text-[#0B1E46] tracking-widest drop-shadow-sm">
                   4/26<span className="text-lg md:text-xl mx-1 text-[#0B1E46] opacity-80">(日)</span>13:00~
                </span>
             </div>
          </div>

          <div className="mt-2 flex justify-center w-full animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="inline-flex items-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B8860B] drop-shadow-sm" />
                <span className="text-lg md:text-xl font-serif font-bold text-[#0B1E46] tracking-wider drop-shadow-sm">
                AP大阪茶屋町 ルームH・I
                </span>
             </div>
          </div>

          <div className="mt-3 md:mt-4 flex flex-col items-center w-full animate-in fade-in zoom-in duration-1000 delay-400">
             <p className="text-base md:text-xl font-serif font-bold text-[#0B1E46] tracking-wide leading-tight drop-shadow-sm flex flex-wrap items-baseline justify-center gap-1">
                <span className="text-[#B8860B] text-lg md:text-2xl mx-1">超有名企業</span>
                <span>参加決定</span>
             </p>
          </div>
        </div>

        {/* 企業ロゴセクション */}
        <div className="w-screen md:w-full max-w-5xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 bg-white py-6 md:py-8 md:rounded-2xl border-y md:border border-slate-200/80 shadow-sm flex flex-col justify-center items-center px-4 sm:px-8">
            
            {/* 上段：メインロゴ2社 */}
            <div className="flex justify-center items-center gap-6 md:gap-12 w-full max-w-2xl mb-4 md:mb-6 px-2">
               {mainCompanies.map((company) => (
                 <div key={company.id} className="flex-1 flex justify-center">
                   <img 
                     src={company.logoSrc} 
                     alt={`${company.name} ロゴ`}
                     onError={(e) => {
                       e.currentTarget.src = `https://placehold.co/400x160/e2e8f0/64748b?text=${encodeURIComponent(company.name)}`;
                       e.currentTarget.className = "w-full max-w-[140px] md:max-w-[200px] h-auto object-contain opacity-70 rounded-md";
                     }}
                     // ▼▼▼ 修正: 3月版に合わせ、mix-blend-multiply を削除 ▼▼▼
                     className="w-full max-w-[140px] md:max-w-[200px] h-auto object-contain"
                   />
                 </div>
               ))}
            </div>

            {/* 下段：その他の社名テキスト */}
            <div className="w-full max-w-3xl flex flex-wrap justify-center items-center gap-x-3 gap-y-2 md:gap-x-6 md:gap-y-3">
                {otherCompanies.map((name, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-xs md:text-sm font-bold text-[#0B1E46] whitespace-nowrap tracking-wide">
                      {name}
                    </span>
                    {/* 最後の要素以外は区切り線を表示 */}
                    {index < otherCompanies.length - 1 && (
                      <span className="hidden md:inline-block ml-6 text-slate-300">/</span>
                    )}
                  </div>
                ))}
            </div>

        </div>

        {/* 写真エリア */}
        <div className="relative w-full max-w-4xl mx-auto mb-10 shadow-2xl overflow-hidden border border-slate-200/60 rounded-xl">
          <div className="overflow-hidden bg-slate-100 aspect-[16/9]" ref={emblaRef}>
            <div className="flex h-full">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                  <img
                    src={src}
                    alt={`関西就活 Scene ${index + 1}`} // ▼▼▼ 修正: alt属性を変更 ▼▼▼
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* イベントの特徴（3つの丸） */}
        <div className="w-full max-w-lg md:max-w-xl mx-auto mb-12 px-2">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            
            {/* Limit */}
            <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
               <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                  <Users size={14} />
               </div>
               <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">LIMIT</p>
                  <p className="text-sm font-bold text-[#0B1E46]">30名限定</p>
               </div>
            </div>

            {/* Style */}
            <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-3 py-2 shadow-sm whitespace-nowrap justify-center">
               <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                  <Ticket size={14} />
               </div>
               <div className="text-left">
                  <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">STYLE</p>
                  <p className="text-sm font-bold text-[#0B1E46]">招待制</p>
               </div>
            </div>

            {/* Target */}
            <div className="col-span-2 flex justify-center">
              <div className="flex items-center bg-white border border-[#B8860B]/30 rounded-full px-8 py-2 shadow-sm whitespace-nowrap">
                 <div className="w-8 h-8 rounded-full bg-[#0B1E46] flex items-center justify-center mr-2 text-white shrink-0">
                    <MapPin size={14} />
                 </div>
                 <div className="text-left">
                    {/* ▼▼▼ 修正: 対象者の詳細を明記し、改行を追加 ▼▼▼ */}
                    <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">TARGET</p>
                    <p className="text-sm font-bold text-[#0B1E46]">京大・阪大・神大・海外大・<br />国公立大学院・海外大学院の28卒生</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
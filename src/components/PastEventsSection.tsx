import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Calendar, Building2, ChevronLeft, ChevronRight, ChevronRightCircle, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const PastEventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // 安全対策
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      const menuBtn = document.getElementById('mobile-menu-btn');
      if (menuBtn) {
        menuBtn.style.opacity = '1';
        menuBtn.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const openModal = (event: any) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '0';
      menuBtn.style.pointerEvents = 'none';
    }
  };

  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
    
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '1';
      menuBtn.style.pointerEvents = 'auto';
    }
  };

  // ▼▼▼ 過去のイベントデータ（3月と4月のみ） ▼▼▼
  const pastEvents = [
    { 
      id: 1, 
      date: "2026年3月28日(土)", 
      title: "第1回 関西就活",
      themeColor: "#ebf1d8", // 3月のテーマカラー
      thumbnail: "/past_3.28_1.png", // 一覧用の1枚画像
      images: [
        "/past_3.28_1.png",
        "/past_3.28_2.png",
        "/past_3.28_3.png",
        "/past_3.28_4.png",
        "/past_3.28_5.png",
      ],
      url: "https://career-summit-2026-3-28.pages.dev/",
      companies: "デロイト トーマツ ベンチャーサポート、DeNA、シンプレクス、ナハト、レイスグループ、株式会社NES",
      tags: ["満員御礼", "6社参加"]
    },
    { 
      id: 2, 
      date: "2026年4月26日(日)", 
      title: "第2回 関西就活",
      themeColor: "#cedef9", // 4月のテーマカラー
      thumbnail: "/Herosection-2.png", // 一覧用の1枚画像（※本番画像に差し替え）
      images: [
        "/Herosection-2.png" 
      ],
      url: "https://career-summit-2026-4-26.pages.dev/",
      companies: "Kubota、船井総合研究所、クスリのアオキ、AnyMind Group、他",
      tags: ["募集中", "豪華企業"]
    }
  ];

  return (
    <section id="past-events" className="py-16 px-4 md:px-8 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* ヘッダーエリア */}
        <div className="text-center mb-12">
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               過去実績
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               PAST EVENTS
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6 bg-white inline-block px-5 py-2 rounded-full shadow-sm border border-slate-200">
             各イベントをタップすると、当日の様子や詳細を確認できます
           </p>
        </div>

        {/* ▼▼▼ イベント一覧（2列ではなく、縦積みの2行レイアウト） ▼▼▼ */}
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* 3月・4月のカード */}
          {pastEvents.map((event: any) => (
            <div 
              key={event.id} 
              className="rounded-2xl border border-slate-200 flex flex-col md:flex-row shadow-sm w-full overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: event.themeColor }}
              onClick={() => openModal(event)}
            >
              {/* 左側：サムネイル画像 */}
              <div className="w-full md:w-2/5 h-48 md:h-auto bg-slate-100 relative overflow-hidden">
                <img 
                  src={event.thumbnail} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* 画像に薄い黒のオーバーレイをかけ、ホバーで明るくする演出 */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              {/* 右側：テキスト情報（概要） */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center relative">
                 <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-slate-700" />
                    <span className="text-sm font-bold text-slate-700">{event.date}</span>
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E46] mb-5">{event.title}</h3>
                 
                 <div className="flex flex-wrap gap-2 mb-2">
                    {event.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 border border-slate-200/50 rounded-md bg-white/70 text-slate-700 font-bold whitespace-nowrap shadow-sm">
                            {tag}
                        </span>
                    ))}
                 </div>

                 {/* 詳細を見る誘導 */}
                 <div className="absolute bottom-4 right-5 md:bottom-6 md:right-8 flex items-center text-[#0B1E46] font-bold text-xs md:text-sm opacity-60 group-hover:opacity-100 transition-opacity bg-white/50 px-3 py-1.5 rounded-full">
                    詳細を見る <ChevronRight className="w-4 h-4 ml-0.5" />
                 </div>
              </div>
            </div>
          ))}

          {/* ▼▼▼ 6月（準備中）の特別デザインカード ▼▼▼ */}
          <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center mt-4">
             <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-6 bg-white border border-slate-100 px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                5月9日の日程が合わない方へ
             </span>
             
             <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#0B1E46] leading-relaxed mb-6">
                <span className="text-[#B8860B] text-3xl md:text-5xl mr-1">6月</span> <br />
                開催枠も現在準備中です
             </h3>
             
             <p className="text-sm md:text-base text-slate-500 font-medium mb-8 leading-relaxed">
                別日程でも同規模の特別座談会を開催予定です。<br className="hidden md:block" />
                詳細の公開まで今しばらくお待ちください。
             </p>
             
             <div className="inline-flex items-center justify-center gap-2 bg-slate-200 text-slate-500 px-8 py-4 rounded-full font-bold text-sm shadow-inner cursor-not-allowed w-full sm:w-auto">
                <Clock className="w-4 h-4" />
                6月開催の詳細 Coming Soon...
             </div>
          </div>

        </div>

      </div>

      {/* ▼▼▼ 詳細モーダル（タップした時のみ表示） ▼▼▼ */}
      {selectedEvent && typeof document !== 'undefined'
        ? createPortal(
            <div 
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
              style={{ zIndex: 9999 }} 
              onClick={closeModal}
            >
              <div 
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* モーダル内のスライダー */}
                <EventImageSlider images={selectedEvent.images} title={selectedEvent.title} closeModal={closeModal} />

                {/* モーダルコンテンツ */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-1">{selectedEvent.date}</p>
                    <h3 className="text-2xl font-bold text-[#0B1E46]">{selectedEvent.title}</h3>
                  </div>

                  {/* 参加企業 */}
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-[#B8860B]" />
                      <h4 className="font-bold text-[#0B1E46] text-sm">参加企業</h4>
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedEvent.companies}
                    </p>
                  </div>
                </div>

                {/* フッター（過去LPへのリンク） */}
                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <a 
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#0B1E46] hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    この時のイベント詳細（LP）を見る
                    <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>,
            document.body 
          )
        : null}

    </section>
  );
};


// ▼▼▼ スライダー用のコンポーネント（モーダル内でのみ利用） ▼▼▼
const EventImageSlider = ({ images, title, closeModal }: { images: string[], title: string, closeModal: () => void }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full h-56 md:h-64 bg-slate-100 overflow-hidden group">
      {/* 閉じるボタン */}
      <button 
        onClick={(e) => { e.stopPropagation(); closeModal(); }}
        className="absolute top-3 right-3 z-20 p-2 bg-black/40 text-white hover:bg-black/60 rounded-full transition-colors backdrop-blur-sm"
      >
        <X className="w-5 h-5" />
      </button>

      {/* スライダー本体 */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src: string, index: number) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={src}
                alt={`${title} 画像${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 左右の矢印ボタン（画像が複数ある場合のみ表示） */}
      {images.length > 1 && (
        <>
          <button 
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-5 h-5 pr-0.5" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/30 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-5 h-5 pl-0.5" />
          </button>
          
          {/* インジケーター（現在の画像の枚数表示） */}
          <div className="absolute bottom-3 right-4 bg-black/40 px-2.5 py-1 rounded-full text-[10px] text-white font-bold tracking-widest backdrop-blur-sm z-10 pointer-events-none">
            Slide
          </div>
        </>
      )}
    </div>
  );
};

export default PastEventsSection;
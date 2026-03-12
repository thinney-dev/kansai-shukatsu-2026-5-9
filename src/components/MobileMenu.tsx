import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ▼▼▼ 修正：メニュー項目の順番をご指定の通りに変更 ▼▼▼
  const menuItems = [
    { id: "top", label: "ページトップ", en: "TOP" },
    { id: "features", label: "イベントの特徴", en: "FEATURES" },
    { id: "companies", label: "出展企業", en: "COMPANIES" },
    { id: "benefits", label: "参加者限定 特別ルート", en: "SPECIAL ROUTE" },
    { id: "timetable", label: "タイムテーブル", en: "TIMETABLE" },
    { id: "participate", label: "参加方法", en: "HOW TO PARTICIPATE" },
    { id: "campaign", label: "キャンペーン", en: "CAMPAIGN" },
    { id: "overview", label: "開催概要", en: "OVERVIEW" },
    { id: "voice", label: "学生の声", en: "VOICE OF STUDENTS" },
    { id: "faq", label: "よくある質問", en: "FAQ" },
  ];

  // スクロール処理
  const scrollToSection = (id: string) => {
    setIsOpen(false); // メニューを閉じる
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // スクロール禁止制御
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 p-3 bg-[#0B1E46] text-white rounded-full shadow-lg lg:hidden hover:bg-[#0B1E46]/90 transition-colors"
        aria-label="メニューを開く"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* メニューオーバーレイ */}
      <div
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 lg:hidden flex flex-col ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* 閉じるボタン */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* メニューリスト */}
        <div className="flex-1 overflow-y-auto py-4 px-6">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group text-left border-b border-slate-100 pb-2 last:border-0"
              >
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-[#0B1E46] group-hover:text-purple-600 transition-colors font-serif">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#B8860B] uppercase mt-1">
                    {item.en}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* CVボタン */}
          <div className="mt-8 pb-8 space-y-4">
            <button
                // ▼▼▼ リンク修正 ▼▼▼
                onClick={() => window.open('https://forms.gle/9RX66kmnapDjiokf9', '_blank')}
                className="w-full bg-purple-600 text-white font-bold py-4 rounded-lg shadow-md active:scale-95 transition-transform"
            >
                ENTRYはこちら
            </button>
            <p className="text-center text-xs text-slate-400">
                簡単1分でエントリー完了
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
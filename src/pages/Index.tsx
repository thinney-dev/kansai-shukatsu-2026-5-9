import { useState, useEffect } from "react";
// ▼ 修正：ChevronRight を追加 ▼
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import CompaniesSection from "@/components/CompaniesSection";
import TimetableSection from "@/components/TimetableSection";
import BenefitsSection from "@/components/BenefitsSection";
import VoiceSection from "@/components/VoiceSection";
import ParticipateSection from "@/components/ParticipateSection";
import OverviewSection from "@/components/OverviewSection";
import FAQSection from "@/components/FAQSection";
import CompanyInfoCard from "@/components/CompanyInfoCard";
import StickyFooter from "@/components/StickyFooter";
import MobileMenu from "@/components/MobileMenu";
import CampaignSection from "@/components/CampaignSection";
import NextEventSection from "@/components/NextEventSection";
import PastEventsSection from "@/components/PastEventsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("top");

  // スクロール連動機能
  useEffect(() => {
    const sectionIds = [
      "top", "features", "companies", "benefits", "timetable",
      "participate", "campaign", "overview", "past-events", "voice", "faq"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
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
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "top", label: "ページトップ", en: "TOP" },
    { id: "features", label: "イベントの特徴", en: "FEATURES" },
    { id: "companies", label: "出展企業", en: "COMPANIES" },
    { id: "benefits", label: "参加者限定 特別ルート", en: "SPECIAL ROUTE" },
    { id: "timetable", label: "タイムテーブル", en: "TIMETABLE" },
    { id: "participate", label: "参加方法", en: "HOW TO PARTICIPATE" },
    { id: "campaign", label: "キャンペーン", en: "CAMPAIGN" },
    { id: "overview", label: "開催概要", en: "OVERVIEW" },
    { id: "faq", label: "よくある質問", en: "FAQ" },
  ];

  return (
    <div className="flex min-h-screen w-full bg-transparent font-sans text-[#0B1E46] selection:bg-purple-100 relative justify-center">
      
      {/* スマホ用メニュー */}
      <MobileMenu />

      {/* 背景画像 */}
      <div 
        className="fixed inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: 'url("/bg-pattern.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* 左カラム */}
      <aside className="hidden lg:flex flex-1 min-w-0 sticky top-0 h-screen flex-col justify-center items-center z-10 px-6">
        <div className="flex flex-col justify-between items-center w-full h-[75vh] min-h-[680px] py-10">
            <div className="flex-1 flex items-center justify-center w-full">
                <img 
                src="/image_0.png" 
                alt="関西就活 2026 ロゴ" 
                className="w-full max-w-[80%] object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="w-full flex flex-col items-center translate-y-4 xl:translate-y-8">
                
                {/* ===== PC版 SNS導線 ===== */}
                <div className="flex flex-col items-center gap-3 mb-5 px-2 w-full">
                  <p className="text-xs xl:text-sm text-[#0B1E46] font-bold tracking-wide text-center">
                    最新の登壇企業情報や就活対策を配信中！
                  </p>
                  <div className="flex flex-row gap-2 xl:gap-3 justify-center w-full">
                    {/* X (旧Twitter) */}
                    <a
                      href="https://x.com/kansai_mlc?s=21&t=axJ02Uz3Tn08l-b1j33" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-[100px] xl:w-[120px] h-[44px] xl:h-[48px] bg-black hover:opacity-80 transition-opacity rounded-lg shadow-sm group"
                    >
                      <img src="/logo-X.png" alt="Xロゴ" className="h-4 xl:h-5 w-auto object-contain group-hover:scale-110 transition-transform" />
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/kansaishukatsu_mlc/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-[100px] xl:w-[120px] h-[44px] xl:h-[48px] bg-white hover:opacity-80 transition-opacity border border-slate-200 rounded-lg shadow-sm group"
                    >
                      <img src="/logo-instagram.png" alt="Instagramロゴ" className="h-5 xl:h-6 w-auto object-contain group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                <CompanyInfoCard />
            </div>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 lg:flex-1 min-w-0 relative z-20 shadow-none lg:shadow-2xl bg-transparent lg:bg-white/90 lg:backdrop-blur-md pb-32">
          
          <div id="top"><HeroSection /></div>
          <div id="features"><FeaturesSection /></div>
          <TargetAudienceSection /> 
          <div id="companies"><CompaniesSection /></div>
          <div id="benefits"><BenefitsSection /></div>
          <div id="timetable"><TimetableSection /></div>
          <div id="participate"><ParticipateSection /></div>
          <div id="campaign"><CampaignSection /></div>
          <div id="overview"><OverviewSection /></div>
          <NextEventSection />
          
          <div id="past-events"><PastEventsSection /></div>

          <div id="voice"><VoiceSection /></div>
          <div id="faq"><FAQSection /></div>

          {/* ▼ 修正：スマホ版 SNS導線を追加（CompanyInfoCardの上） ▼ */}
          <div className="lg:hidden w-full px-4 pt-8 pb-12 flex flex-col items-center gap-8 bg-transparent">
            
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="text-sm font-bold text-[#0B1E46] tracking-wide text-center">
                最新の登壇企業情報や就活対策を配信中！
              </p>
              <div className="flex flex-row gap-4 justify-center w-full">
                <a
                  href="https://x.com/kansai_mlc?s=21&t=axJ02Uz3Tn08l-b1j33" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[130px] h-[50px] bg-black hover:opacity-80 transition-opacity rounded-xl shadow-sm group"
                >
                  <img src="/logo-X.png" alt="Xロゴ" className="h-5 w-auto object-contain group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/kansaishukatsu_mlc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[130px] h-[50px] bg-white hover:opacity-80 transition-opacity border border-slate-200 rounded-xl shadow-sm group"
                >
                  <img src="/logo-instagram.png" alt="Instagramロゴ" className="h-6 w-auto object-contain group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <CompanyInfoCard />
          </div>
      </main>

      {/* 右カラム */}
      <aside className="hidden lg:flex flex-1 min-w-0 sticky top-0 h-screen flex-col justify-center pl-8 xl:pl-12 z-10">
        <div className="w-full max-w-xs space-y-10">
            <nav className="space-y-5 border-l-2 border-slate-300 pl-6">
            {navItems.map((item) => (
                <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex flex-col items-start text-left transition-all duration-300 ${
                    activeSection === item.id ? "opacity-100 translate-x-1" : "opacity-50 hover:opacity-80"
                }`}
                >
                <span className={`text-lg font-bold flex items-center gap-3 transition-colors duration-300 ${activeSection === item.id ? "text-purple-600 scale-105 origin-left" : "text-[#0B1E46]"}`}>
                    <span className="font-serif">{item.label}</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-sans">
                    {item.en}
                </span>
                </button>
            ))}
            </nav>

            <div className="space-y-3 pt-4">
                {/* ▼▼▼ 修正：PC版右カラムのボタンを募集終了のデザインに変更 ▼▼▼ */}
                <div className="w-full bg-[#4a4a4a] text-white font-bold h-14 rounded shadow-lg flex items-center justify-between px-4 cursor-not-allowed">
                    <div className="flex items-center gap-3">
                      <span className="bg-white text-[#333333] text-xs px-2 py-1 font-bold">満員御礼</span>
                      <span className="text-lg tracking-widest">募集終了</span>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white" />
                </div>

                <Button 
                    variant="outline"
                    className="w-full bg-white hover:bg-amber-50 text-[#0B1E46] border-amber-400 font-bold h-12 rounded shadow transition-colors"
                    onClick={() => scrollToSection('campaign')}
                >
                    <span className="text-amber-600 mr-2">●</span>
                    キャンペーン実施中
                </Button>
            </div>
        </div>
      </aside>

      {/* スマホフッター */}
      <div className="lg:hidden relative z-50">
        <StickyFooter />
      </div>

    </div>
  );
};

export default Index;
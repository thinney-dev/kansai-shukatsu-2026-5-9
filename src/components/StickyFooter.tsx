// ▼▼▼ 変更点1: ArrowRight を ExternalLink に変更 ▼▼▼
import { ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyFooter = () => {
  
  // キャンペーンセクションへスクロールする関数
  const scrollToCampaign = () => {
    const element = document.getElementById("campaign");
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 pb-6 md:pb-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto max-w-md flex items-center gap-3">
        
        {/* ▼ 修正：募集終了のデザインに変更 ▼ */}
        <div className="flex-1 bg-[#4a4a4a] text-white font-bold h-14 rounded-xl shadow-lg flex items-center justify-between px-3 md:px-4 cursor-not-allowed">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="bg-white text-[#333333] text-[10px] md:text-xs px-2 py-1 font-bold">満員御礼</span>
            <span className="text-base md:text-lg tracking-widest">募集終了</span>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>

        {/* キャンペーンボタン */}
        <button
          onClick={scrollToCampaign}
          className="h-14 min-w-[100px] bg-white border-2 border-[#F59E0B] text-[#F59E0B] rounded-xl font-bold flex flex-col items-center justify-center shadow-sm active:bg-orange-50 transition-colors leading-tight"
        >
          <span className="text-[10px] font-bold">キャンペーン</span>
          <span className="text-base font-bold">実施中</span>
        </button>

      </div>
    </div>
  );
};

export default StickyFooter;
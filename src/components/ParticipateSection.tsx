import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ParticipateSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             参加方法
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">HOW TO PARTICIPATE</p>
        </div>

        {/* 参加方法フローカード */}
        <div className="bg-white rounded-xl border border-[#B8860B]/30 shadow-lg overflow-hidden p-6 md:p-10 relative">
           {/* 背景装飾 */}
           <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B1E46] via-[#B8860B] to-[#0B1E46]"></div>
          {/* ▼▼▼ シンプルなテキスト ▼▼▼ */}
          <div className="w-full text-center mb-8 md:mb-10">
             <p className="text-slate-600 font-medium text-[13px] md:text-sm tracking-wide">
               ※対象大学/大学院の学生であれば、誰でもご参加可能です。
             </p>
           </div>
           {/* STEP 1 */}
           <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-2">
                <span className="text-[#B8860B] mr-2">STEP 1</span>
                申込フォームを送信
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-medium">
                現在、当イベントの募集は終了しております。
              </p>
              {/* ▼ 修正：募集終了のデザインに変更 ▼ */}
              <div className="w-full max-w-sm bg-[#4a4a4a] text-white font-bold h-14 rounded-md shadow-md flex items-center justify-between px-4 cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <span className="bg-white text-[#333333] text-xs md:text-sm px-2 py-1 font-bold">満員御礼</span>
                  <span className="text-lg tracking-widest">募集終了</span>
                </div>
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
           </div>

           {/* 矢印 */}
           <div className="flex justify-center my-6">
              <ChevronDown className="w-8 h-8 text-[#B8860B]/50" />
           </div>

           {/* STEP 2 */}
           <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-2">
                <span className="text-[#B8860B] mr-2">STEP 2</span>
                公式LINE追加
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-medium">
                イベントの最新情報や連絡を受け取るために<br className="md:hidden"/>公式LINEを追加してください。
              </p>
              
              <Button 
                className="w-full max-w-sm bg-[#06C755] hover:bg-[#05b54d] text-white font-bold h-12 rounded shadow-md text-xl transition-transform hover:scale-105 pl-6 pr-4 flex justify-center items-center gap-2"
                // ▼▼▼ リンク修正：公式LINEのURLを設定 ▼▼▼
                onClick={() => window.open('https://lin.ee/26VxKEf', '_blank')}
              >
                <span>公式LINEを追加する</span>
                <img 
                  src="/LINElogo.png" 
                  alt="LINE" 
                  className="h-10 w-10 object-contain ml-2" 
                />
              </Button>
           </div>

           {/* 矢印 */}
           <div className="flex justify-center my-6">
              <ChevronDown className="w-8 h-8 text-[#B8860B]/50" />
           </div>

           {/* STEP 3 */}
           <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-2">
                <span className="text-[#B8860B] mr-2">STEP 3</span>
                個別事前選考面談
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md">
                現役の４年生と1対1で選考対策や就活相談を行い、<br className="hidden md:block"/>
                当日企業様に提出する推薦文を作成します。
              </p>
           </div>

           {/* 矢印 */}
           <div className="flex justify-center my-6">
              <ChevronDown className="w-8 h-8 text-[#B8860B]/50" />
           </div>

           {/* STEP 4 */}
           <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-2">
                <span className="text-[#B8860B] mr-2">STEP 4</span>
                当日イベント参加
              </h3>
              <p className="text-sm text-slate-600 font-medium">
                選考を通過された方は、当日会場へお越しください。<br />
                最高の出会いがあなたを待っています。
              </p>
           </div>

        </div>

      </div>
    </section>
  );
};

export default ParticipateSection;
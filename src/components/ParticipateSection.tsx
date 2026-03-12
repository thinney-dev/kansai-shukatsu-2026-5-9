import { ChevronDown, ExternalLink } from "lucide-react";
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

           {/* STEP 1 */}
           <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-serif font-bold text-[#0B1E46] mb-2">
                <span className="text-[#B8860B] mr-2">STEP 1</span>
                申込フォームを送信
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-medium">
                下のボタンをタップして申込フォームを記入・送信。
              </p>
              <Button 
                className="w-full max-w-sm bg-purple-600 hover:bg-purple-500 text-white font-bold h-12 rounded shadow-md text-xl transition-transform hover:scale-105"
                // フォームのリンク（前回設定済み）
                onClick={() => window.open('https://forms.gle/xjLXrbdL2yo4htW48', '_blank')}
              >
                ENTRYはこちら
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
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
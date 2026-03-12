import { Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VoiceSection = () => {
  const voices = [
    {
      id: "01",
      title: "圧倒的なタイパと早期内定",
      text: "研究で忙しく時間が取れない中、1日で複数の有名企業から『早期選考パス（オファーカード）』をいただけたのは本当に大きかったです。人事の方だけでなく現場の社員さんともお話しでき、効率よく企業理解と選考対策が進みました。優秀な学生なら、ここに来るのが最短ルートだと思います。"
    },
    {
      id: "02",
      title: "社風を感じる「対面」の価値",
      text: "オンライン説明会では分からない、社員の方の『立ち居振る舞い』や『社員同士の空気感』を肌で感じられたのが最大の収穫です。人事の方と現場のエース社員の方が連携している姿を見て、実際の社風がクリアになりました。着席型でじっくり話せるので、疑問をその場で全て解消できました。"
    },
    {
      id: "03",
      title: "京阪神限定のハイレベルな空間",
      text: "『京阪神大生30名限定』というだけあって、周りの学生のレベルが高く刺激を受けました。 同じような志を持つ優秀な仲間と繋がれたことは、就活中の大きな支えになりました。大規模イベントのような騒がしさがなく、選ばれた空間で企業の方と落ち着いて対話できるのが魅力です。"
    },
    {
      id: "04",
      title: "自分を深く見てもらえる安心感",
      text: "30名という少人数制なので、企業の方が学生一人ひとりにしっかりと時間を割いてくれます。 ガクチカや強みを深く聞いてもらえた上で、自分に合った特別ルートを案内してもらえました。『その他大勢』にならず、個として評価してもらえるこのイベントは、参加する価値があります。"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-10">
           {/* ▼▼▼ 修正箇所：タイトルを「学生の声」に変更 ▼▼▼ */}
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-2 tracking-wide">
             学生の声
           </h2>
           {/* ▼▼▼ 修正箇所：英語も STUDENTS に合わせました ▼▼▼ */}
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-4">
             VOICE OF STUDENTS
           </p>
           
           <p className="text-sm md:text-base font-bold text-[#0B1E46]">
             クリックして詳細を確認できます
           </p>
        </div>

        {/* アコーディオンリスト */}
        <Accordion type="single" collapsible className="space-y-4">
          {voices.map((voice) => (
            <AccordionItem 
                key={voice.id} 
                value={`voice-${voice.id}`} 
                className="bg-white border border-slate-200 rounded-xl px-0 shadow-sm data-[state=open]:shadow-md transition-all duration-300"
            >
                <AccordionTrigger className="px-5 py-5 hover:no-underline group text-left">
                    <div className="flex items-center gap-4 w-full pr-4">
                        
                        {/* Voice番号バッジ */}
                        <div className="flex flex-col items-center justify-center bg-[#0B1E46] text-white w-10 h-10 rounded-full flex-shrink-0 shadow-sm group-hover:bg-[#C5A059] transition-colors duration-300">
                            <span className="text-[8px] font-sans tracking-wider opacity-70">Voice</span>
                            <span className="text-sm font-serif font-bold leading-none">{voice.id}</span>
                        </div>

                        {/* タイトル */}
                        <div className="flex-1">
                            <h3 className="text-base md:text-lg font-serif font-bold text-[#0B1E46] group-hover:text-[#B8860B] transition-colors">
                                {voice.title}
                            </h3>
                        </div>
                    </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6 pt-0 text-slate-600 font-medium leading-relaxed pl-[4.5rem]">
                    <div className="border-t border-slate-100 pt-3 mt-1 relative">
                        {/* 装飾：引用アイコン（薄く配置） */}
                        <Quote className="absolute -top-2 -left-4 text-slate-100 w-8 h-8 transform rotate-180" />
                        <p className="relative z-10 text-justify">
                            {voice.text}
                        </p>
                    </div>
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default VoiceSection;
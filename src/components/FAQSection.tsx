import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "参加費用はかかりますか？",
      answer: "無料です。お気軽にご参加ください。"
    },
    {
      question: "事前選考の基準を教えてください。",
      answer: "主に「社会人としての基礎的なマナー」と「就職活動への前向きな姿勢」を確認させていただきます。高度なスキルや実績を厳しく審査するものではありませんので、安心してご応募ください。"
    },
    {
      question: "オファーカードとは何ですか？",
      answer: "企業様が気になった学生に対して、特別ルートへ招待するオファーカードを渡す仕組みです。"
    },
    {
      question: "当日の服装に指定はありますか？",
      answer: "なんでもOKですが、オフィスカジュアル（綺麗め）な服装が好ましいです。"
    },
    {
      question: "途中参加・途中退席はできますか？",
      answer: "少人数で着座で深く話せるイベントですので、原則として不可です。どうしても途中参加・退出が必要な場合は、事前に運営スタッフまでご連絡ください。"
    },
    {
      question: "当日の持ち物は？",
      answer: "筆記用具、スマートフォンをお持ちください。"
    }
    
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             よくある質問
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">FAQ</p>
        </div>

        {/* アコーディオン（FAQリスト） */}
        {/* ▼▼▼ 修正箇所：外側の枠線と背景色を削除 ▼▼▼ */}
        <div className="">
            <Accordion type="single" collapsible className="w-full space-y-0">
                {faqs.map((faq, index) => (
                // ▼▼▼ 修正箇所：各項目の背景・枠を削除し、下線のみに変更 ▼▼▼
                <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    // border-bで下線を追加、last:border-noneで最後の線だけ消す
                    className="border-b border-slate-100 last:border-none transition-all px-2"
                >
                    <AccordionTrigger className="py-5 hover:no-underline hover:text-[#B8860B] transition-colors text-left group">
                        <span className="text-sm md:text-base font-bold text-[#0B1E46] group-hover:text-[#B8860B] flex gap-4 items-start md:items-center">
                            {/* Qアイコンのデザインを少しシンプルに調整 */}
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B1E46]/10 text-[#0B1E46] flex items-center justify-center text-xs font-serif font-bold group-hover:bg-[#B8860B]/10 group-hover:text-[#B8860B] transition-colors mt-0.5 md:mt-0">Q.</span>
                            {faq.question}
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0 text-sm text-slate-600 font-medium leading-relaxed pl-10">
                        <span className="font-bold text-[#B8860B] mr-3">A.</span>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
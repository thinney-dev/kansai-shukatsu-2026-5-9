import { MapPin } from "lucide-react";

const OverviewSection = () => {
  const overviewItems = [
    {
      label: "開催日時",
      content: "2026/04/26 (日) 13:00 ~ 18:30"
    },
    {
      label: "開催場所",
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1">ミーティングスペースAP大阪茶屋町ルームH・I</p>
            <p className="text-sm text-slate-500">
              〒530-0013 大阪府大阪市北区茶屋町１−２７ ABC-MART梅田ビル 8F
            </p>
            <p className="text-xs text-[#B8860B] mt-1 flex items-center gap-1 font-bold">
              <MapPin className="w-3 h-3" />
              大阪梅田駅 1分 / 大阪駅 3分
            </p>
          </div>
          {/* Googleマップ埋め込み */}
          <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.0053472253137!2d135.49698449839477!3d34.7049102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e693c9434093%3A0x4ebbe9d36594c0a8!2z44Of44O844OG44Kj44Oz44Kw44K544Oa44O844K5QVDlpKfpmKrojLblsYvnlLo!5e0!3m2!1sja!2sjp!4v1769416781372!5m2!1sja!2sjp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ミーティングスペースAP大阪茶屋町 地図"
            ></iframe>
          </div>
        </div>
      )
    },
    {
      label: "参加対象",
      content: (
        <ul className="list-disc list-outside pl-4 space-y-2">
          {/* ▼▼▼ 修正：参加対象を3月版のフォーマットに合わせる ▼▼▼ */}
          <li>京大・阪大・神大・海外大・国公立大学院・海外大学院に通う学生</li>
          <li>2027年4月から2028年3月に大学・大学院を卒業または卒業見込みの方</li>
          <li>
            個別事前選考面談に参加できる方
            <span className="block text-xs text-[#B8860B] mt-1 font-bold">＊オンラインで15〜30分程度</span>
          </li>
        </ul>
      )
    },
    {
      label: "参加定員",
      content: "30名（選考面談あり）"
    },
    {
      label: "参加費",
      content: "無料"
    },
    {
      label: "締め切り",
      content: "前日まで（定員に達し次第終了）"
    },
    {
      label: "服装",
      content: "オフィスカジュアル（綺麗め）な服装が好ましいです。"
    },
    {
      label: "持ち物",
      content: "筆記用具、スマートフォン"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-12">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             開催概要
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">EVENT OVERVIEW</p>
        </div>

        {/* 概要カード */}
        <div className="bg-white rounded-xl border border-[#B8860B]/30 shadow-lg overflow-hidden">
          {/* 上部のゴールドライン装飾 */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0B1E46] via-[#B8860B] to-[#0B1E46]"></div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 gap-y-0">
              
              {overviewItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row py-6 border-b border-slate-100 last:border-0 ${index === 0 ? 'pt-0' : ''} ${index === overviewItems.length - 1 ? 'pb-0' : ''}`}
                >
                  {/* ラベルエリア */}
                  <div className="w-full md:w-20 flex-shrink-0 mb-2 md:mb-0">
                    <h3 className="text-base font-bold text-[#0B1E46] flex items-start md:pt-0 h-full whitespace-nowrap">
                      {item.label}
                    </h3>
                  </div>

                  {/* コンテンツエリア */}
                  <div className="flex-1 text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-400 text-right mt-4 mr-2">
          ※内容は予告なく変更になる場合がございます。
        </p>

      </div>
    </section>
  );
};

export default OverviewSection;
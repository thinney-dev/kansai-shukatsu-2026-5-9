const TimetableSection = () => {
  const schedule = [
    {
      time: "12:45",
      title: "受付開始",
      description: ""
    },
    {
      time: "13:15",
      title: "オープニング挨拶",
      description: ""
    },
    {
      time: "13:20", 
      title: "企業様ごとのピッチ",
      description: "各企業の事業内容や強み、本日の座談会で話せるテーマについてプレゼンいただきます。"
    },
    {
      time: "14:35",
      title: "少人数座談会",
      description: "学生数名と企業担当者による濃密な座談会。ローテーション形式で全ての企業と話せます。"
    },
    {
      time: "17:25",
      title: "懇親会",
      description: "座談会よりもフランクな雰囲気で、社員様や他の参加学生と交流を深められます。"
    },
    {
      time: "18:30",
      title: "閉会",
      description: ""
    }
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-10">
           <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
             タイムテーブル
           </h2>
           <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase mb-3">TIMETABLE</p>
        </div>

        {/* タイムテーブル本体 */}
        <div className="space-y-8">
            
            {/* 第1部 */}
            <div>
                <div className="flex items-center gap-3 mb-4 pl-1">
                    <div className="w-1 h-6 bg-[#B8860B]"></div>
                    <h3 className="text-lg font-serif font-bold text-[#0B1E46]">第１部</h3>
                </div>

                <div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    {schedule.map((item, index) => (
                        <div key={index} className="flex border-b border-slate-100 last:border-b-0 min-h-[70px]">
                            
                            {/* 時刻エリア */}
                            <div className="w-20 md:w-24 bg-[#0B1E46] text-white flex items-center justify-center p-2 flex-shrink-0">
                                <span className="font-serif text-lg md:text-xl font-medium tracking-wider">
                                    {item.time}
                                </span>
                            </div>

                            {/* 内容エリア */}
                            <div className="flex-1 bg-white p-3 md:p-5 flex flex-col justify-center">
                                <h4 className="font-bold text-[#0B1E46] text-sm md:text-base leading-tight">
                                    {item.title}
                                </h4>
                                {item.description && (
                                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5 font-medium">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default TimetableSection;
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Building2, Lightbulb } from "lucide-react";

const CompaniesSection = () => {
  const [selectedCompany, setSelectedCompany] = useState<any | null>(null);

  // 安全対策：画面遷移時などにスクロールやメニュー非表示が戻らなくなるのを防ぐ
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

  const openModal = (company: any) => {
    // ComingSoonの場合は開かない（念のためのガード）
    if (company.isComingSoon) return;

    setSelectedCompany(company);
    document.body.style.overflow = 'hidden';
    
    // スマホメニューボタンを隠す
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '0';
      menuBtn.style.pointerEvents = 'none';
    }
  };

  const closeModal = () => {
    setSelectedCompany(null);
    document.body.style.overflow = 'unset';
    
    // スマホメニューボタンを再表示
    const menuBtn = document.getElementById('mobile-menu-btn');
    if (menuBtn) {
      menuBtn.style.opacity = '1';
      menuBtn.style.pointerEvents = 'auto';
    }
  };

  const companies = [
    { 
      id: 1, 
      name: "Kubota", 
      tags: ["食料・水・環境", "グローバル"], 
      logoImage: "/logo-Kubota.png",
      url: "https://www.kubota.co.jp/",
      details: {
        catchphrase: "食料・水・環境の課題解決で、地球と人類の未来を支える",
        stats: [
          { label: "売上高", value: "3兆163億円（2024年12月期実績）" },
          { label: "従業員数", value: "52,094名（2024年12月末現在・連結）" },
          { label: "グローバル展開", value: "海外売上高比率 79.0%（世界120カ国以上）" },
          { label: "成長環境", value: "若手からグローバルな社会課題解決に挑める環境" }
        ],
        strength: "農業機械や鋳鉄管などで国内トップクラス、世界有数のシェアを誇るグローバルメーカー。年間3兆円規模の売上と約80%の海外売上比率という強固な経営基盤を持ちながら、世界的な食料問題や環境問題といった人類の根幹に関わる課題解決に直結するビジネスを展開している。入社早期からグローバルな舞台での活躍や、社会インフラを支えるダイナミックな事業に携わるチャンスが豊富に用意されている。"
      }
    },
    { 
      id: 2, 
      name: "Leverages", 
      tags: ["急成長", "ベンチャー"], 
      logoImage: "/logo-Leverages.png",
      url: "https://leverages.jp/",
      details: {
        catchphrase: "社会課題をビジネスで解決し、若手から圧倒的成長を実現する",
        stats: [
          { label: "売上高", value: "非公開（創業以来黒字経営を継続）" },
          { label: "従業員数", value: "約2,000名規模（グループ全体）" },
          { label: "事業領域", value: "医療・IT・若年層キャリア・海外など複数領域で展開" },
          { label: "成長環境", value: "年次関係なく裁量を持ち、事業開発・営業・企画に挑戦可能" }
        ],
        strength: "レバレジーズは、医療・介護、IT、若年層キャリア、海外領域など社会課題が存在する分野に特化し、事業を多角的に展開する急成長企業である。人材紹介にとどまらず、メディア運営やSaaSなど複数のビジネスモデルを組み合わせることで、課題に対して本質的な解決策を提供している点が特徴である。創業以来黒字経営を継続しながら事業拡大を続けており、安定性と成長性を兼ね備えている。若手にも大きな裁量が与えられ、早期から事業責任者レベルの経験を積むことができる環境が整っているため、圧倒的なスピードで成長したい人材にとって非常に魅力的な企業である。"
      }
    },
    { 
      id: 3, 
      name: "オムロングループ", 
      tags: ["センシング技術", "制御機器"], 
      logoImage: "/logo-omron.png",
      url: "https://www.omron.com/jp/ja/",
      details: {
        catchphrase: "センシング＆制御技術で、社会システムの進化と人々のより良い暮らしを支える",
        stats: [
          { label: "売上高", value: "8,018億円（2025年3月期実績）" },
          { label: "従業員数", value: "26,614名（2025年3月31日時点・グループ）" },
          { label: "事業領域", value: "制御機器・ヘルスケア・社会システム・電子部品など幅広く展開" },
          { label: "成長環境", value: "技術と事業の両面から社会課題解決に挑める環境" }
        ],
        strength: "オムロンは、制御機器、ヘルスケア、社会システム、電子部品など多様な事業を展開するグローバルメーカーである。独自のセンシング＆コントロール技術を強みに、工場の自動化、駅の自動改札、血圧計をはじめとする医療・ヘルスケア機器など、人々の生活や社会インフラに密接に関わる領域で価値を提供している。売上高8,018億円、グループ従業員数26,614名規模の事業基盤を持ちながら、単なる製品提供にとどまらず、社会課題の解決を起点に新たな価値創造を進めている点が大きな特徴である。技術開発だけでなく、企画、営業、事業推進など多様な立場から社会を支える実感を得られるため、スケールの大きなテーマに挑戦したい人材にとって非常に魅力的な企業である。"
      }
    },
    { 
      id: 4, 
      name: "船井総合研究所", 
      tags: ["経営コンサル", "若手裁量"], 
      logoImage: "/logo-船井総研.png",
      url: "https://www.funaisoken.co.jp/",
      details: {
        catchphrase: "中堅・中小企業の「サステナグロース（持続的成長）」を実現する",
        stats: [
          { label: "売上高", value: "306億4,500万円（2024年12月期実績・グループ連結）" },
          { label: "従業員数", value: "1,535名（2024年12月末現在・グループ連結）" },
          { label: "クライアント規模", value: "国内数千社の中堅・中小企業" },
          { label: "成長環境", value: "早期から経営者と対峙し圧倒的な場数を踏める環境" }
        ],
        strength: "日本最大級のコンサルティングファームとして、国内の中堅・中小企業の経営者と直接対峙し、業績向上や組織課題の解決を支援している。「業種別×テーマ別」の専門特化型コンサルティング体制を敷いており、入社早期から経営層への直接提案を行うことで圧倒的な場数を踏むことが可能。「新卒から3年で日本一のコンサルタント」を目指せるなど、高い専門性とコンサルティングスキルを身につけ、プロフェッショナルとして自立できる環境が整っている。"
      }
    },
    { 
      id: 5, 
      name: "クスリのアオキ", 
      tags: ["食料＆医薬品", "1000店舗超"], 
      logoImage: "/logo-クスリのアオキ.png",
      url: "https://www.kusuri-aoki.co.jp/",
      details: {
        catchphrase: "「健康と美と衛生」を通しての社会貢献と、近くて便利な生活拠点づくり",
        stats: [
          { label: "売上規模", value: "5,014億7,000万円（2025年5月期実績）" },
          { label: "従業員数", value: "5,627名（2025年5月期現在・常勤社員）" },
          { label: "事業規模", value: "1,000店舗達成（2025年3月時点）" },
          { label: "成長環境", value: "早期から店舗マネジメントを経験しキャリアを拓く環境" }
        ],
        strength: "2025年に全国1,000店舗を達成し、売上高5,000億円規模を誇る急成長中のドラッグストアチェーン。医薬品や日用品だけでなく、生鮮食品の取り扱いや調剤薬局の併設（併設率66%超）により、地域のインフラとして確固たる地位を築いている。入社1年目から店舗運営のマネジメントを経験し、その後は店長やエリアマネージャー、本社の中枢部署へとキャリアを広げていく実践的かつスピード感のある成長環境が強み。"
      }
    },
    
    { id: 6, name: "Coming Soon", tags: ["？？？", "？？？"], isComingSoon: true },
  ];

  return (
    <section className="py-12 px-6 md:px-10 bg-slate-50 relative">
      <div className="max-w-3xl mx-auto">
        
        {/* ヘッダーエリア */}
        <div className="text-center mb-10">
           <div className="mb-6">
             <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#0B1E46] mb-3 tracking-wide">
               出展企業
             </h2>
             <p className="text-[#B8860B] font-serif italic text-xs tracking-widest uppercase">
               COMPANIES
             </p>
           </div>
           
           <p className="text-sm font-bold text-slate-500 mb-6 bg-white inline-block px-4 py-1.5 rounded-full shadow-sm border border-slate-200">
             タップすると各企業の詳細データを確認できます
           </p>

           <p className="text-sm md:text-base font-bold text-[#0B1E46] leading-loose tracking-tight mt-2">
             <span className="inline-block whitespace-nowrap">業界最大手からスタートアップまで</span>
             <br />
             <span className="inline-block whitespace-nowrap">幅広い企業が出展</span>
           </p>
        </div>

        {/* 企業ロゴカード一覧 */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 mb-8">
          {companies.map((company: any) => {
            // ▼ 修正：isComingSoonがtrueの場合はdivタグにしてアクションを無効化 ▼
            if (company.isComingSoon) {
              return (
                <div
                  key={company.id} 
                  className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-sm h-44 md:h-48 w-full overflow-hidden"
                >
                  <div className="w-full h-14 md:h-16 flex items-center justify-center px-2">
                    <span className="font-black text-2xl md:text-3xl text-slate-300">
                      {company.name}
                    </span>
                  </div>
                  
                  <div className="w-full space-y-2 text-center shrink-0 opacity-50">
                     <div className="flex justify-center gap-1 w-full px-1">
                        {company.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[100px]">
                                {tag}
                            </span>
                        ))}
                     </div>
                     <p className="text-xs md:text-sm font-bold text-slate-400 mt-1 truncate w-full">
                        {company.name}
                     </p>
                  </div>
                </div>
              );
            }

            // 通常の企業（タップできるボタン）
            return (
              <button
                key={company.id} 
                onClick={() => openModal(company)}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all h-44 md:h-48 w-full cursor-pointer group overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50"
              >
                <div className="w-full h-14 md:h-16 flex items-center justify-center px-2">
                  {company.logoImage ? (
                    <img 
                      src={company.logoImage} 
                      alt={`${company.name} ロゴ`}
                      className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply" 
                    />
                  ) : (
                    <span className="font-black text-2xl md:text-3xl text-slate-300 group-hover:text-slate-400 transition-colors">
                      {company.name}
                    </span>
                  )}
                </div>
                
                <div className="w-full space-y-2 text-center shrink-0">
                   <div className="flex justify-center gap-1 w-full px-1">
                      {company.tags.map((tag: string, i: number) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 border border-slate-200 rounded bg-slate-50 text-slate-500 font-bold whitespace-nowrap flex-shrink-0 truncate max-w-[100px]">
                              {tag}
                          </span>
                      ))}
                   </div>
                   <p className="text-xs md:text-sm font-bold text-slate-600 mt-1 truncate w-full">
                      {company.name}
                   </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-[10px] text-slate-400 text-center font-medium">
            ＊参加企業は変更になる可能性があります。
        </p>
      </div>

      {/* ▼▼▼ 企業詳細モーダル（3月版の完全版ロジック） ▼▼▼ */}
      {selectedCompany && typeof document !== 'undefined'
        ? createPortal(
            <div 
              className="fixed inset-0 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
              style={{ zIndex: 9999 }} 
              onClick={closeModal}
            >
              {/* モーダル本体 */}
              <div 
                className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* モーダルヘッダー */}
                <div className="relative pt-8 pb-4 px-6 border-b border-slate-100 flex flex-col items-center bg-slate-50/50">
                  <button 
                    onClick={closeModal}
                    className="absolute top-3 right-3 z-10 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="h-12 md:h-16 w-full max-w-[80%] flex justify-center mb-3">
                    <img 
                      src={selectedCompany.logoImage} 
                      alt={selectedCompany.name} 
                      className="h-full w-auto object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E46] text-center">{selectedCompany.name}</h3>
                  <p className="text-xs font-bold text-[#B8860B] mt-1.5 text-center px-4">{selectedCompany.details.catchphrase}</p>
                </div>

                {/* モーダルコンテンツ（スクロール可能） */}
                <div className="p-6 overflow-y-auto space-y-5 flex-1 bg-white">
                  
                  <div className="grid grid-cols-2 gap-3">
                    {selectedCompany.details.stats.map((stat: any, i: number) => (
                      <div key={i} className="bg-white border border-[#B8860B]/20 rounded-lg p-3 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#B8860B]/70"></div>
                        <p className="text-[10px] font-bold text-slate-400 mb-1 pl-1">{stat.label}</p>
                        <p className="text-[11px] sm:text-[13px] font-bold text-[#0B1E46] leading-snug pl-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* 強み・特徴エリア */}
                  <div className="bg-[#0B1E46]/5 rounded-lg p-4 border border-[#0B1E46]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[#B8860B]" />
                      <h4 className="font-bold text-[#0B1E46] text-sm">ここが強み・特徴</h4>
                    </div>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedCompany.details.strength}
                    </p>
                  </div>

                  {/* タグエリア */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedCompany.tags.map((tag: string, i: number) => (
                      <span key={i} className="text-xs px-2.5 py-1 border border-slate-200 rounded-md bg-slate-50 text-slate-500 font-bold">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* フッター（HPリンク） */}
                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <a 
                    href={selectedCompany.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-[#0B1E46] text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm"
                  >
                    <Building2 className="w-4 h-4" />
                    企業ホームページを見る
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

export default CompaniesSection;
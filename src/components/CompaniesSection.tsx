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

  // ▼▼▼ 4月LP用：出展企業リスト（魅力的な数値をリサーチして組み込みました） ▼▼▼
  const companies = [
    { 
      id: 1, 
      name: "JCB", 
      tags: ["決済サービス", "国際ブランド"], 
      logoImage: "/logo-JCB.png",
      url: "https://www.jcb.co.jp/?link_id=cojp_logo",
      details: {
        catchphrase: "日本発唯一の国際ブランドとして、世界の決済インフラを創る",
        stats: [
          { label: "年間取扱高", value: "50兆2,091億円（2024年度実績）" },
          { label: "従業員数", value: "4,531名（2025年9月末現在）" },
          { label: "会員数", value: "1億6,977万会員（2025年3月末現在）" },
          { label: "成長環境", value: "若手からグローバルに活躍できる環境" }
        ],
        strength: "年間50兆円規模の取扱高と世界約7,100万店の加盟店という圧倒的な大企業の安定基盤を持ちつつ、日本発唯一の国際カードブランドとして世界中の巨大競合と戦うベンチャー気質を併せ持っています。約4,500名という少数精鋭体制のため、若手からスケールの大きな決済インフラの構築やダイナミックな新規事業に関わるチャンスが豊富です。"
      }
    },
    { 
      id: 2, 
      name: "野村證券", 
      tags: ["国内最大手証券", "金融"], 
      logoImage: "/logo-野村證券.png",
      url: "https://www.nomura.co.jp/",
      details: {
        catchphrase: "国内トップの顧客基盤とグローバル網で、資本市場の未来を創る",
        stats: [
          { label: "純営業収益", value: "7,238億円（2025年3月期実績）" },
          { label: "従業員数", value: "13,775名（2025年3月末時点）" },
          { label: "顧客資産残高", value: "約144兆円（2025年3月末）" },
          { label: "平均年収", value: "約1,000万円" }
        ],
        strength: "約144兆円の顧客資産と国内約4割のIPO主幹事シェアという、他社の追随を許さない大企業の強固な安定基盤を誇ります。日本経済の血流である金融の最前線で、スタートアップの創出からグローバル企業の成長支援まで、スケールの大きな社会課題解決に直結するダイナミックな仕事です。"
      }
    },
    { 
      id: 3, 
      name: "三井住友海上火災保険", 
      tags: ["損害保険", "メガソンポ"], 
      logoImage: "/logo-三井住友海上火災保険.png",
      url: "https://www.ms-ins.com/",
      details: {
        catchphrase: "グローバルに展開する国内トップクラスの損保",
        stats: [
          { label: "正味収入保険料", value: "1兆6,233億円（2024年3月期実績）" },
          { label: "従業員数", value: "12,143名（2024年3月現在）" },
          { label: "海外ネットワーク", value: "41カ国・地域に展開（駐在員約240名）" },
          { label: "働き方", value: "多様なキャリアパスと柔軟な働き方" }
        ],
        strength: "総資産約28兆円、グループ売上4.6兆円を誇るMS&ADグループの中核として、いかなる巨大リスクも引き受けられる圧倒的な安定基盤が最大の武器です。一方で、世界41カ国・地域への展開やASEAN市場でのトップシェア獲得、さらには宇宙ビジネスやサイバー領域など最先端の保険開発に挑むベンチャー的な開拓精神も併せ持ちます。"
      }
    },
    { 
      id: 4, 
      name: "日本新薬", 
      tags: ["医薬品", "研究開発"], 
      logoImage: "/logo-日本新薬.png",
      url: "https://www.nippon-shinyaku.co.jp/",
      details: {
        catchphrase: "難病・希少疾患に挑む、独自性の高い創業100年超の創薬型企業",
        stats: [
          { label: "売上規模", value: "1,602億3,200万円（2024年度連結実績）" },
          { label: "従業員数", value: "2,243名（2025年3月末現在・連結）" },
          { label: "研究開発費", value: "売上の約15〜20%を投資（研究開発費343億円／2024年度実績）" },
          { label: "社風", value: "患者さん第一の誠実で温かいカルチャー" }
        ],
        strength: "難病や希少疾患に苦しむ世界中の患者さんを救うという、社会貢献度の高いミッションを追究し続けています。100年以上の歴史に裏打ちされた大企業としての強固な安定基盤を持ち、医薬品と機能食品という独自性のある2本柱で盤石な経営を続けています。約2,200名という少数精鋭の規模感だからこそ、組織の歯車にならず、若手から革新的なプロジェクトに手触り感を持って携わることができるのが最大の魅力です。"
      }
    },
    { 
      id: 5, 
      name: "ナハト", 
      tags: ["マーケティング", "急成長"], 
      logoImage: "/logo-ナハト.png",
      url: "https://nahato.co.jp/",
      details: {
        catchphrase: "SNSマーケティングを牽引する急成長ベンチャー",
        stats: [
          { label: "売上規模", value: "130〜290億円規模（推定）" },
          { label: "従業員数", value: "約450名規模" },
          { label: "成長性", value: "設立数年で売上100億円を突破" },
          { label: "若手の活躍", value: "平均年齢26.7歳、早期管理職多数" }
        ],
        strength: "圧倒的な成長率を誇る急成長ベンチャーです。入社1〜2年でマネージャーへ早期昇格する実績が多数あり、若手が組織の中核を担って事業を牽引しています。"
      }
    },
    { 
      id: 6, 
      name: "AnyMind Group", 
      tags: ["マーケティング", "ITメガベン"], 
      logoImage: "/logo-anymind.png",
      url: "https://anymindgroup.com/ja/",
      details: {
        catchphrase: "アジアを起点に世界を牽引するテクノロジーカンパニー",
        stats: [
          { label: "売上規模", value: "507.1億円（2024年度連結実績）" },
          { label: "従業員数", value: "2,000名以上（2024年時点）" },
          { label: "グローバル", value: "アジアを中心に15ヵ国・地域、25拠点を展開" },
          { label: "直近成長率", value: "売上高成長率+52%（2024年度実績）" }
        ],
        strength: "2016年の創業からわずか8年で売上507億円を叩き出す桁外れのベンチャー的成長性と、アジア15カ国に広がる25拠点のネットワークというグローバルな安定基盤を両立しているのが最大の強みです。ブランドの企画から生産、EC構築、マーケティング、物流までをワンストップで支援する独自のプラットフォームを展開しており、若手のうちから国境を越えたビジネスやダイナミックな新規事業に手触り感を持って挑むことができます。"
      }
    },
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
          {companies.map((company: any) => (
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
          ))}
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
import { Mail, ExternalLink } from "lucide-react";

const CompanyInfoCard = () => {
  return (
    // ▼▼▼ 修正1: 外側のパディングを減らす (p-6 md:p-8 → p-5 md:p-6) ▼▼▼
    <div className="bg-white rounded-xl shadow-xl p-5 md:p-6 w-full max-w-sm text-center border border-slate-100 relative overflow-hidden group">
      
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1E46] via-[#B8860B] to-[#0B1E46]"></div>
      
      {/* ▼▼▼ 修正2: 下のマージンを減らす (mb-3 → mb-2) ▼▼▼ */}
      <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-2">
        OPERATED BY
      </p>
      
      {/* ▼▼▼ 修正3: 下のマージンを減らす (mb-2 → mb-1) ▼▼▼ */}
      <h3 className="text-2xl font-serif font-bold text-[#0B1E46] mb-1 tracking-wide">
        THINNEY株式会社
      </h3>
      
      {/* ▼▼▼ 修正4: 下のマージンを大幅に減らす (mb-6 → mb-4) ▼▼▼ */}
      <a 
        href="https://thinney.co.jp/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-bold text-[#B8860B] hover:text-[#9a7009] transition-colors mb-4"
      >
        コーポレートサイト
        <ExternalLink className="ml-1 w-3 h-3" />
      </a>

      {/* ▼▼▼ 修正5: 上下のパディングを少し減らす (py-3.5 → py-3) ▼▼▼ */}
      <div className="w-full bg-[#0B1E46] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 text-sm shadow-md cursor-default">
         <Mail className="w-4 h-4" />
         <span className="tracking-wide">support@thinney.co.jp</span>
      </div>

    </div>
  );
};

export default CompanyInfoCard;

import { Users, Search } from 'lucide-react';



export const Header = ({ totalCount, searchTerm, onSearchChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-xl shadow-lg">
            <Users size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">لوحة التحكم</h1>
            <p className="text-slate-500 text-sm">إدارة المحامين المسجلين</p>
          </div>
        </div>
        

        <div className="text-left">
          <div className="text-sm text-slate-500">المجموع</div>
          <div className="text-3xl font-bold text-slate-800">{totalCount}</div>
        </div>
      </div>


      <div className="relative">
        <input
          type="text"
          placeholder="الإسم أو الرقم المهني..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-3 pr-12 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-yellow-500 transition-colors"
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
      </div>
    </div>
  );
};
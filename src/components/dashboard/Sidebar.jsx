
import { LogOut, Users, FileText, BookOpen, Bell, File, Lightbulb, Settings, Mail } from 'lucide-react';
import { SIDEBAR_ITEMS } from '../../constants';
import { useAuth } from '../../context/AuthContext';

const iconMap = {
  Users,
  FileText,
  BookOpen,
  Bell,
  File,
  Lightbulb,
  Settings,
  Mail
};

export const Sidebar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-80 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-6 shadow-2xl">

      <div className="text-center mb-8 pb-6 border-b border-slate-700">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-3">
          <div className="relative">
            <div className="text-white text-5xl font-bold">M</div>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-3 border-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="text-yellow-500 text-sm">هيئة المحامين بطنجة</div>
      </div>

      <nav className="space-y-2">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = iconMap[item.icon];
          
          return (
            <a
              key={item.id}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-yellow-600 hover:bg-yellow-700'
                  : 'hover:bg-slate-700 opacity-50 cursor-not-allowed'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="w-full mt-8 flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg"
      >
        <LogOut size={20} />
        <span>تسجيل الخروج</span>
      </button>
    </div>
  );
};
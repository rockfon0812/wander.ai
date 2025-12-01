import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { id: AppRoute.EXPLORE, icon: MapPin, label: 'Explore' },
    { id: AppRoute.PLAN, icon: Calendar, label: 'Plan Trip' },
    { id: AppRoute.SAVED, icon: Heart, label: 'Saved' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 pb-safe pt-2 px-6 z-50">
      {/* Changed max-w-md to max-w-2xl to match Layout */}
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-4 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
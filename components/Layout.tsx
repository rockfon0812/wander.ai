import React, { ReactNode } from 'react';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-[100dvh] bg-slate-50 relative flex flex-col">
      {/* 
        We use min-h-[100dvh] to ensure full mobile screen height usage.
        The BottomNav is fixed, so pages must handle their own bottom padding.
      */}
      <main className="max-w-2xl mx-auto w-full min-h-[100dvh] bg-white shadow-2xl shadow-slate-200 relative border-x border-slate-100 flex flex-col">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
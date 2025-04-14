import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[9999]">
      <div className="w-12 h-12 border-4 border-lime-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

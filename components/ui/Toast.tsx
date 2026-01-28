"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}

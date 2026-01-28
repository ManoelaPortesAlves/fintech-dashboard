"use client";

export function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl min-w-[300px]">
        {children}
        <button
          className="mt-4 text-sky-400"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

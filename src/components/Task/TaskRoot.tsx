import { ReactNode } from 'react';

export function TaskRoot({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      {children}
    </div>
  );
}

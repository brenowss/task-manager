import { ReactNode } from 'react';

export function TaskContent({ children }: { children: ReactNode }) {
  return <div className="flex-1">{children}</div>;
}

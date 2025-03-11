import { ReactNode } from 'react';

export function TaskActions({ children }: { children: ReactNode }) {
  return <div className="flex gap-2">{children}</div>;
}

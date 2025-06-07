export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

// interface/index.ts
export interface PageRouteProps {
  pageRoute: string;
}

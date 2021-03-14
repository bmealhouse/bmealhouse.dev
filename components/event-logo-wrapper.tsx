import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

export const EventLogoWrapper = ({ children, backgroundColor }: Props) => (
  <div className="relative">
    <div
      className="h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-700 dark:ring-gray-900 overflow-hidden"
      style={backgroundColor && { backgroundColor }}
    >
      {children}
    </div>
  </div>
);

import { ReactNode } from "react";

interface Props {
  items: string[];
}

export const ContactInfo = ({ items }: Props) => (
  <ul className="flex items-center space-x-6">
    {items.map((text) => (
      <li key={text}>
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 h-5 w-5 text-gray-300"
            xmlns="http:www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
          </svg>
          <span className="ml-6 text-xs font-medium">{text}</span>
        </div>
      </li>
    ))}
  </ul>
);

// function Item({ children, icon }) {
//   return (
// <li>
//   <div className="flex items-center">
//     <svg
//       className="flex-shrink-0 h-5 w-5 text-gray-300"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       aria-hidden="true"
//     >
//       <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
//     </svg>
//     <a
//       href="#"
//       className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//     >
//       bmealhouse@gmail.com
//     </a>
//   </div>
// </li>
// <li>
//   <div className="flex items-center">
//     <svg
//       className="flex-shrink-0 h-5 w-5 text-gray-300"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       aria-hidden="true"
//     >
//       <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
//     </svg>
//     <a
//       href="#"
//       className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
//     >
//       651-755-5209
//     </a>
//   </div>
// </li>
//   );
// }

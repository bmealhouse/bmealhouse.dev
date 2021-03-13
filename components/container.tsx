import { ReactNode, useEffect } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
}

export const Container = ({ children, ...metaOverrides }: Props) => {
  const meta = {
    title: "Brent Mealhouse – JavaScript Developer",
    description:
      "Independent consultant specializing in full-stack React and Node.js development",
    type: "website",
    ...metaOverrides,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-7 pb-28 tracking-tight bg-white text-gray-900 dark:text-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
      </Head>
      <div className="max-w-2xl">{children}</div>
    </div>
  );
};

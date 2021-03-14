import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

export const Container = ({ children, ...metaOverrides }: Props) => {
  const router = useRouter();

  const meta = {
    title: "Brent Mealhouse – JavaScript Developer",
    description:
      "Independent consultant specializing in cloud-based React and Node.js development.",
    type: "website",
    image: "https://bmealhouse.dev/banner.png",
    ...metaOverrides,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-7 pb-28 tracking-tight bg-white text-gray-900 dark:text-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://bmealhouse.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://bmealhouse.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Brent Mealhouse" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bmealhouse" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="max-w-2xl">{children}</div>
    </div>
  );
};

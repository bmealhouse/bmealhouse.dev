import Head from "next/head";
import { BackToTopRocket, DarkModeToggle, Timeline } from "../components";
import { resume, Job, Milestone } from "../resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-7 pb-28 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <Head>
        <title>Brent Mealhouse</title>
        <meta
          name="description"
          content="Independent consultant specializing in full-stack React and Node.js development"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `const element = document.querySelector("html");
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  element.classList.add('dark');
} else {
  element.classList.remove('dark')
}
          `,
          }}
        /> */}
      </Head>
      <div className="max-w-2xl pl-3 tracking-tight">
        <div className="mr-6 flex justify-end items-center space-x-5">
          <a
            className="py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
            href="https://github.com/bmealhouse"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 496 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              role="img"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            className="py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
            href="/bmealhouse-resume-2021.pdf"
            target="_blank"
          >
            <span className="sr-only">PDF resume</span>
            <svg
              className="w-6 h-6"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              role="img"
            >
              <path
                fill="currentColor"
                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"
              />
            </svg>
          </a>
          <DarkModeToggle />
        </div>
        <main className="mt-20">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl -ml-0.5 sm:-ml-1 font-bold uppercase">
            <span className="block">{resume.firstName}</span>
            <span className="block">{resume.lastName}</span>
          </h1>
          <section className="mt-0.5 md:mt-1.5 text-sm font-medium">
            <a className="link" href={`mailto:${resume.email}`}>
              {resume.email}
            </a>
          </section>
          <div className="pr-8">
            <section className="mt-12">
              {resume.summary.map((text, index) => (
                <p key={index} className="mt-4">
                  {text}
                </p>
              ))}
            </section>
            <section>
              <h2 className="mt-12 text-4xl xs:text-5xl sm:text-6xl md:text-2xl font-extrabold uppercase">
                Skills
              </h2>
              <div className="mt-1">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "styled-components",
                  "tailwindcss",
                  "Jest",
                  "React Testing Library",
                  "Node.js",
                  "GraphQL",
                  "Babel",
                  "Webpack",
                  "Rollup",
                  "XO",
                  "CI/CD",
                ].map((skill) => (
                  <span className="mr-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-200 text-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <Timeline>
              {resume.timeline.map((event, index) => {
                const job = event as Job;
                if (job.employer) {
                  return <Timeline.Job key={index} {...job} />;
                }

                const milestone = event as Milestone;
                if (milestone.milestone) {
                  return <Timeline.Milestone key={index} {...milestone} />;
                }

                return null;
              })}
            </Timeline>
          </div>
        </main>
      </div>
      <BackToTopRocket />
    </div>
  );
}

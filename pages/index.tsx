import Head from "next/head";
import { BackToTopRocket, Timeline } from "../components";
import { DarkModeToggle } from "../components/dark-mode-toggle";
import { resume, Job, Milestone } from "../resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-7 pb-28 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <Head>
        <title>Brent Mealhouse</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>"
        />
        <meta
          name="description"
          content="Independent consultant specializing in full-stack React and Node.js development"
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
          {/* <a
            className="py-1 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
            href="#"
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
          </a> */}
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
            <section>
              {resume.summary.map((text, index) => (
                <p key={index} className="mt-10">
                  {text}
                </p>
              ))}
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

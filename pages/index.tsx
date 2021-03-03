import Head from "next/head";
import { BackToTopRocket, Timeline } from "../components";
import { resume, Job, Milestone } from "../resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
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
      </Head>
      <main className="max-w-2xl pl-3 tracking-tight">
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
      <BackToTopRocket />
    </div>
  );
}

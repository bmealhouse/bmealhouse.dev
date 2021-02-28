import Head from "next/head";
import { ContactInfo, Timeline } from "../components";
import { resume, Job, Milestone } from "../resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-28 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
      <Head>
        <title>Brent Mealhouse</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main className="max-w-2xl px-3 tracking-tight">
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold uppercase">
          <span className="block">{resume.firstName}</span>
          <span className="block">{resume.lastName}</span>
        </h1>
        {/* <section className="mt-3">
          <ContactInfo items={[resume.location, resume.email, resume.phone]} />
        </section> */}
        <section>
          {resume.summary.map((text, index) => (
            <p key={index} className="mt-10">
              {text}
            </p>
          ))}
        </section>
        <Timeline>
          {resume.timeline.map((event) => {
            const job = event as Job;
            if (job.employer) {
              return (
                <Timeline.Job
                  key={job.employer + job.title + job.company}
                  {...job}
                />
              );
            }

            const milestone = event as Milestone;
            if (milestone.milestone) {
              return (
                <Timeline.Milestone key={milestone.milestone} {...milestone} />
              );
            }

            return null;
          })}
          <Timeline.Milestone
            icon={<img src="baby-solid.svg" alt="baby" />}
            milestone="Born"
            date={new Date("***REMOVED***")}
            connectorVisibile={false}
          />
        </Timeline>
      </main>
    </div>
  );
}

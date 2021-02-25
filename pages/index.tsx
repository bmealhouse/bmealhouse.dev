import Head from "next/head";
import { resume, Contract, FulltimeJob, Milestone } from "../resume";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Brent Mealhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">{resume.name}</h1>
        <p className="mt-3 text-2xl">{resume.location}</p>
        {resume.summary.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <section>
          <h2>Timeline</h2>
          {resume.timeline.map((event) => {
            const contract = event as Contract;
            if (contract.client) {
              return <p>{contract.client}</p>;
            }

            const fulltimeJob = event as FulltimeJob;
            if (fulltimeJob.company) {
              return <p>{fulltimeJob.company}</p>;
            }

            const milestone = event as Milestone;
            if (milestone.milestone) {
              return <p>{milestone.milestone}</p>;
            }

            return "";
          })}
        </section>
      </main>
    </div>
  );
}

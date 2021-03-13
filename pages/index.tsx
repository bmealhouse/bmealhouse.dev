import { Layout } from "@/components/layout";
import { Timeline } from "@/components/timeline";
import { resume, Job, Milestone } from "../resume";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl -ml-0.5 sm:-ml-1 font-bold uppercase">
        {resume.firstName}
        <br />
        {resume.lastName}
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
          <h2 className="mt-12 text-2xl font-extrabold uppercase">Skills</h2>
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
              <span
                key={skill}
                className="mr-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-200 text-gray-800"
              >
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
    </Layout>
  );
}

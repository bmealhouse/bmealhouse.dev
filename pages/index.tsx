import { Layout } from "@/components/layout";
import { Job } from "@/components/job";
import { Milestone } from "@/components/milestone";
import { resume } from "@/lib/resume";

export default function Home() {
  return (
    <Layout>
      <h1 className="-ml-0.5 sm:-ml-1 font-bold uppercase text-5xl xs:text-6xl sm:text-7xl md:text-8xl">
        {resume.firstName}
        <br />
        {resume.lastName}
      </h1>
      <div className="mt-0.5 md:mt-1.5 text-sm font-medium">
        <a className="link" href={`mailto:${resume.email}`}>
          {resume.email}
        </a>
      </div>
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
              "React Query",
              "Next.js",
              "styled-components",
              "tailwindcss",
              "Jest",
              "React Testing Library",
              "Node.js",
              "AWS",
              "Serverless",
              "DynamoDB",
              "ElastiCache",
              "Webpack",
              "Rollup",
              "Babel",
              "XO",
              "Prettier",
              "CI/CD",
              "GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center mr-1 px-2 py-0.5 rounded text-xs font-medium bg-yellow-200 text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section className="flow-root">
          <h2 className="mt-12 text-2xl font-extrabold uppercase">
            Experience
          </h2>
          <ul className="mt-4 -mb-8">
            {resume.timeline.map((event, index) => {
              let Event;

              if (event.type === "JOB") {
                Event = Job;
              } else if (event.type === "MILESTONE") {
                Event = Milestone;
              }

              return <Event key={index} {...event} />;
            })}
          </ul>
        </section>
      </div>
    </Layout>
  );
}

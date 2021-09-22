import { ReactNode } from "react";

import { AmanoMcGannLogo } from "@/logos/amano-mcgann";
import { BestBuyLogo } from "@/logos/best-buy";
import { GeneralMillsLogo } from "@/logos/general-mills";
import { ImationLogo } from "@/logos/imation";
import { QubedLogo } from "@/logos/qubed";
import { SecurianLogo } from "@/logos/securian";

interface Resume {
  firstName: string;
  lastName: string;
  email: string;
  summary: ReactNode[];
  timeline: Event[];
}

export const resume: Resume = {
  firstName: "Brent",
  lastName: "Mealhouse",
  email: "bmealhouse@gmail.com",
  summary: [
    <>
      I’m an independent consultant specializing in full-stack JavaScript
      development. I am passionate about web technologies, open-source,
      continuous delivery, code quality, and automation. I am committed to
      delivering value to my customers and leading teams to success.
    </>,
    <>
      I am currently interested in cloud-based React and Node.js projects using
      serverless architecture. Let me know how I can help.
    </>,
    <>
      When I&apos;m not building software, I enjoy golfing and spending time
      with my wife and two daughters at our northern Minnesota lake home.
    </>,
  ],
  timeline: [
    {
      type: "JOB",
      title: "Lead JavaScript Developer",
      company: "Securian",
      startDate: new Date("03/01/2018"),
      endDate: new Date("04/01/2021"),
      employer: "Independent",
      employmentType: "Consultant",
      description: (
        <>
          Mentored a small team of talented developers, building Benefit Scout –
          an educational tool that has grown to support 1.7M users and has
          directly contributed to $5 million of Securian’s annual enrollment
          revenue.
        </>
      ),
      bullets: [
        <>
          Led full-stack development across several repositories using React,
          React Query, TypeScript, Node.js, Serverless, DynamoDB, and
          ElastiCache
        </>,
        <>
          Regularly contributed to Securian’s design system built with React,
          styled-components, and Storybook
        </>,
        <>
          Deployed as often as possible through CI/CD using feature flags to
          keep our main branch deployable
        </>,
        <>
          Created a robust integration test suite on top of Jest and React
          Testing Library with automatic mocking and client emulation
        </>,
        <>
          Supported and enhanced our chatbot, Scout, using Amazon Lex and Amazon
          SageMaker
        </>,
        <>Pair programmed or mobbed on stories when it provided value</>,
      ],
      technologies: [
        "JavaScript",
        "Babel",
        "React",
        "Redux",
        "Rematch",
        "styled-components",
        "HTML",
        "CSS",
        "Node.js",
        "Next.js",
        "Jest",
        "React Testing Library",
        "Webpack",
        "Rollup",
        "XO",
        "Prettier",
        "Yarn",
        "GitHub",
        "Serverless",
        "AWS",
        "DynamoDB",
        "CloudFront",
        "CloudFormation",
      ],
      logo: SecurianLogo,
      logoBackgroundColor: "#0c7b40",
    },
    {
      type: "JOB",
      title: "Lead JavaScript Developer",
      company: "Amano McGann",
      startDate: new Date("01/01/2017"),
      endDate: new Date("02/01/2018"),
      employer: "Independent",
      employmentType: "Consultant",
      description: (
        <>
          Architecture for Amano McGann’s future frontend platform and design
          system built on top of Next.js and styled-components.
        </>
      ),
      bullets: [
        <>
          Developed a simple GraphQL proof of concept to aggregate data from
          REST services, a MongoDB data store, and client storage (in- memory
          cache)
        </>,
        <>
          Built an interactive visualization using React, Redux, and SVG to help
          customers understand how to configure their parking rates
        </>,
        <>
          Used Yarn workspaces to create small internal packages for reuse{" "}
          between projects
        </>,
      ],
      technologies: [
        "JavaScript",
        "Babel",
        "React",
        "Redux",
        "Redux Thunk",
        "Redux-Saga",
        "Reselect",
        "Immutable",
        "styled-components",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "Next.js",
        "React-docgen",
        "Jest",
        "Enzyme",
        "Webpack",
        "Rollup",
        "Parcel",
        "@std/esm",
        "XO",
        "Prettier",
        "Yarn",
        "Docker",
        "VSTS Git",
        "VSTS CI/CD",
        "Azure",
      ],
      logo: AmanoMcGannLogo,
      logoBackgroundColor: "#006ba6",
    },
    {
      type: "JOB",
      title: "Lead JavaScript Developer",
      company: "Best Buy",
      startDate: new Date("12/01/2014"),
      endDate: new Date("11/01/2016"),
      employer: "Independent",
      employmentType: "Consultant",
      description: (
        <>
          Developed A/B tests across bestbuy.com to determine what features
          provide the best user experience and increase the overall site
          conversion.
        </>
      ),
      bullets: [
        <>
          Transformed legacy A/B testing code into a maintainable architecture
          using Babel, Webpack, Node.js, and Karma
        </>,
        <>
          Moved the A/B testing team to Best Buy’s standard release management
          process, which reduced risk and provided more visibility for artifacts
          deployed to production
        </>,
        <>
          Optimized development workflow for fast feedback and increased{" "}
          developer productivity
        </>,
        <>
          Consistently evaluated dependency upgrades to ensure our team could
          leverage the latest features and prevent our stack from becoming stale
        </>,
      ],
      technologies: [
        "JavaScript",
        "Babel",
        "Backbone.js",
        "Dust.js",
        "Bluebird",
        "jQuery",
        "HTML",
        "LESS",
        "Node.js",
        "Express",
        "gulp",
        "Grunt",
        "Karma",
        "Mocha",
        "Chai",
        "Sinon",
        "Webpack",
        "JavaScript Standard Style",
        "npm",
        "Git",
        "OpenStack",
      ],
      logo: BestBuyLogo,
      logoBackgroundColor: "#0046be",
    },
    {
      type: "JOB",
      title: "Lead JavaScript Developer",
      company: "Imation",
      startDate: new Date("08/01/2014"),
      endDate: new Date("12/01/2014"),
      employer: "Independent",
      employmentType: "Consultant",
      description: (
        <>
          Built a lightweight JavaScript architecture around Eloqua’s email
          marketing system with support for automatic form population and{" "}
          progressing profiling.
        </>
      ),
      bullets: [
        <>
          Worked with Lodash, Jasmine, Greensock, WOW.js, CSS animations, and
          Foundation
        </>,
        <>
          Helped the imation.com redesign project release on-time by assisting
          with EPiServer development
        </>,
        <>
          Implemented internally hosted WebAPI OData feed to load news articles
          on imation.com dynamically
        </>,
      ],
      technologies: [
        "JavaScript",
        "Lodash",
        "Greensock",
        "WOW.js",
        "Foundation",
        "HTML",
        "CSS",
        "Node.js",
        "gulp",
        "Jasmine",
        "C#",
        "ASP.NET Web API OData",
        "Git",
        "Jenkins",
        "Eloqua",
      ],
      logo: ImationLogo,
      logoBackgroundColor: "#cf152d",
    },
    {
      type: "JOB",
      title: "JavaScript Developer",
      company: "General Mills",
      startDate: new Date("11/01/2013"),
      endDate: new Date("08/01/2014"),
      employer: "Independent",
      employmentType: "Consultant",
      description: (
        <>
          Contributed to General Mills’ shared component library used by
          bettycrocker.com, pillsbury.com, tablespoon.com, and more.
        </>
      ),
      bullets: [
        <>
          Enhanced frontend components using Knockout, Jasmine, and Sitecore for{" "}
          multilingual content
        </>,
        <>
          Practiced agile scrum methodologies using TFS Application Lifecycle{" "}
          Management (ALM) tools
        </>,
        <>
          Collaborated with a UX Planner to rewrite a mobile-friendly coupons
          experience
        </>,
        <>Performed daily deployments for US Factory teams as a build master</>,
      ],
      technologies: [
        "JavaScript",
        "Knockout",
        "HTML",
        "LESS",
        "Node.js",
        "gulp",
        "Jasmine",
        "C#",
        "Moq",
        "NuGet",
        "TFS",
        "Sitecore",
      ],
      logo: GeneralMillsLogo,
      logoBackgroundColor: "#0d5195",
    },
    {
      type: "MILESTONE",
      milestone: "Founded Qubed, Inc.",
      date: new Date("08/01/2013"),
      description: (
        <>
          Started this company to create high-quality JavaScript applications
          and begin my quest for ultimate freedom.
        </>
      ),
      technologies: [],
      logo: QubedLogo,
      logoBackgroundColor: "#27272a",
      connectorVisibile: false,
    },
  ],
};

type Event = JobEvent | MilestoneEvent;

interface BaseEvent {
  type: "JOB" | "MILESTONE";
  description: ReactNode;
  technologies: string[];
  logo?: ReactNode;
  logoBackgroundColor?: string;
  connectorVisibile?: boolean;
}

export interface JobEvent extends BaseEvent {
  title: string;
  company?: string;
  startDate: Date;
  endDate?: Date;
  employer: string;
  employmentType: "Consultant" | "Contract" | "FTE" | "Internship" | "Owner";
  bullets: ReactNode[];
}

export interface MilestoneEvent extends BaseEvent {
  icon?: ReactNode;
  milestone: ReactNode;
  date: Date;
}

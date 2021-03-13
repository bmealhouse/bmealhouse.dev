import { ReactNode } from "react";
import { AwardIcon } from "./icons";
import {
  AmanoMcGannLogo,
  BestBuyLogo,
  DefaultLogo,
  GeneralMillsLogo,
  GnReSoundLogo,
  HbFullerLogo,
  ImationLogo,
  LandOLakesLogo,
  MnWildLogo,
  QubedLogo,
  RbaLogo,
  ScholarshipAmericaLogo,
  SecurianLogo,
  TargetLogo,
  TCheckLogo,
} from "./logos";

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
  ],
  timeline: [
    {
      icon: <img src="browser-duotone.svg" alt="browser" />,
      milestone: (
        <>
          Launched{" "}
          <a
            className="link"
            href="https://fideldywelldrilling.com"
            target="_blank"
          >
            fideldywelldrilling.com
          </a>
        </>
      ),
      date: new Date("08/01/2020"),
      description: (
        <>
          Redesigned Fideldy Bros Well Drilling website to be mobile-friendly,
          fast, and reliable.
        </>
      ),
    },
    {
      icon: <img src="home-heart-duotone.svg" alt="home heart" />,
      milestone: "Moved to forever home",
      date: new Date("06/22/2019"),
      description: (
        <>
          We live in the house my wife grew up in, enjoying the lake view,
          starry nights, and fresh air of northern Minnesota.
        </>
      ),
    },
    {
      icon: <img src="laptop-code-duotone.svg" alt="shifty" />,
      milestone: (
        <>
          Released{" "}
          <a
            className="link"
            href="https://marketplace.visualstudio.com/items?itemName=bmealhouse.shifty"
            target="_blank"
          >
            shifty
          </a>
        </>
      ),
      date: new Date("04/12/2019"),
      description: (
        <>
          VS Code extension that shifts your color theme and font automatically.
          <ul className="mt-2 ml-7 list-disc text-sm  text-gray-800 dark:text-gray-300">
            <li>Favorite or ignore color themes and fonts</li>
            <li>Shifts your color theme and font every 30 minutes</li>
            <li>
              Works across multiple VS code instances without conflict and
              displays a timer in the status bar
            </li>
          </ul>
        </>
      ),
    },
    {
      logo: SecurianLogo,
      logoBackgroundColor: "#0c7b40",
      title: "Lead JavaScript Developer",
      company: "Securian",
      startDate: new Date("03/01/2018"),
      endDate: new Date("04/01/2021"),
      employer: "Independent",
      type: "Consultant",
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
          Led full-stack development across several repositories using React
          Query, TypeScript, Node.js, Serverless, DynamoDB, and ElastiCache
        </>,
        <>
          Regularly contributed to Securian’s design system built with React,
          styled-components, and Storybook
        </>,
        <>
          Deployed as often as possible through CI/CD using feature flags to
          keep our master branches deployable
        </>,
        <>
          Created a powerful integration test suite on top of Jest and React
          Testing Library with automatic mocking and client emulation
        </>,
        <>
          Supported and enhanced our chatbot, Scout, using Amazon Lex and Amazon
          SageMaker
        </>,
        <>
          Usually, pair programmed or mobbed on stories when it provided value
        </>,
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
    },
    {
      logo: AmanoMcGannLogo,
      logoBackgroundColor: "#006ba6",
      title: "Lead JavaScript Developer",
      company: "Amano McGann",
      startDate: new Date("01/01/2017"),
      endDate: new Date("02/01/2018"),
      employer: "Independent",
      type: "Consultant",
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
    },
    {
      icon: <img src="browser-duotone.svg" alt="browser" />,
      milestone: (
        <>
          Launched{" "}
          <a
            className="link"
            href="https://hillcitymnag.church"
            target="_blank"
          >
            hillcitymnag.church
          </a>
        </>
      ),
      date: new Date("12/10/2016"),
      description: (
        <>
          Blazing fast Jamstack site for a local church built with Gatsby and
          Prismic.
        </>
      ),
    },
    {
      logo: BestBuyLogo,
      logoBackgroundColor: "#0046be",
      title: "Lead JavaScript Developer",
      company: "Best Buy",
      startDate: new Date("12/01/2014"),
      endDate: new Date("11/01/2016"),
      employer: "Independent",
      type: "Consultant",
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
    },
    {
      logo: ImationLogo,
      logoBackgroundColor: "#cf152d",
      title: "Lead JavaScript Developer",
      company: "Imation",
      startDate: new Date("08/01/2014"),
      endDate: new Date("12/01/2014"),
      employer: "Independent",
      type: "Consultant",
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
    },
    {
      logo: GeneralMillsLogo,
      logoBackgroundColor: "#0d5195",
      title: "JavaScript Developer",
      company: "General Mills",
      startDate: new Date("11/01/2013"),
      endDate: new Date("08/01/2014"),
      employer: "Independent",
      type: "Consultant",
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
    },
    {
      logo: QubedLogo,
      logoBackgroundColor: "#27272a",
      milestone: "Founded Qubed, Inc.",
      date: new Date("08/01/2013"),
      description: (
        <>
          Started this company to create high-quality JavaScript applications
          and begin my quest for ultimate freedom.
        </>
      ),
    },
    {
      logo: ScholarshipAmericaLogo,
      logoBackgroundColor: "#dad9d6",
      title: "Web Developer",
      company: "Scholarship America",
      startDate: new Date("09/01/2013"),
      endDate: new Date("11/01/2013"),
      employer: "RBA",
      type: "Consultant",
      description: (
        <>
          Worked with a small, internal RBA team doing initial design and
          development for a dynamic form builder/viewer.
        </>
      ),
      bullets: [
        <>
          Used Knockout on the frontend to render an interactive form building
          experience
        </>,
        <>
          Designed a dynamic validation system in MVC 4 using custom server-side
          data annotations, client-side validation, and code reuse
        </>,
      ],
      technologies: [
        "JavaScript",
        "Knockout",
        "HTML",
        "CSS",
        "C#",
        "ASP.NET MVC",
        "ASP.NET Web API",
        "TFS",
      ],
    },
    {
      logo: HbFullerLogo,
      logoBackgroundColor: "#14379f",
      title: "Web Developer",
      company: "H.B. Fuller",
      startDate: new Date("10/01/2011"),
      endDate: new Date("09/01/2013"),
      employer: "RBA",
      type: "Consultant",
      description: (
        <>
          Joined and eventually led new development efforts for Innovation
          Portal – a project management tool for the R&amp;D group.
        </>
      ),
      bullets: [
        <>
          Refactored existing business logic to improve developer productivity,
          unit testing, code maintainability, and overall system stability
        </>,
        <>
          Implemented Entity Framework to simplify data access patterns and
          speed up queries
        </>,
        <>Configured TCP endpoints to increase WCF service performance</>,
        <>
          Built extensive suite PowerShell scripts to automate deployments for{" "}
          all environments
        </>,
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "C#",
        "Entity Framework",
        "LINQ",
        "WCF",
        "Moq",
        "SQL Server",
        "NuGet",
        "TFS",
        "PowerShell",
        "SharePoint",
        "InfoPath",
      ],
    },
    {
      logo: TCheckLogo,
      logoBackgroundColor: "#fff",
      title: "Web Developer",
      company: "T-Chek",
      startDate: new Date("06/01/2012"),
      endDate: new Date("12/01/2012"),
      employer: "RBA",
      type: "Consultant",
      description: (
        <>
          Joined a large-scale, multi-team development effort empowering
          companies to manage their fuel and general business spending in{" "}
          different ways.
        </>
      ),
      bullets: [
        <>
          WCF service development using SOLID design patterns, LINQ, and Moq{" "}
          unit testing
        </>,
        <>ASP.NET MVC 3 development using JavaScript, jQuery, and Kendo UI</>,
      ],
      technologies: [
        "JavaScript",
        "jQuery",
        "Kendo UI",
        "HTML",
        "CSS",
        "C#",
        "ASP.NET MVC",
        "LINQ",
        "WCF",
        "Moq",
        "NuGet",
        "TFS",
      ],
    },
    {
      logo: LandOLakesLogo,
      logoBackgroundColor: "#ec1f32",
      title: "Web Developer",
      company: "Land O’Lakes",
      startDate: new Date("02/01/2011"),
      endDate: new Date("10/01/2011"),
      employer: "RBA",
      type: "Consultant",
      description: (
        <>
          Worked with multiple dev teams to enhance existing web applications
          and migrate to more modern technologies.
        </>
      ),
      bullets: [
        <>
          New feature development and internal API improvements for a heavily
          used KPI dashboard
        </>,
        <>
          Finished the remaining dev work, UAT and production deploy for a
          jQuery and Entity Framework project
        </>,
        <>Migrated a classic ASP solution to an MVP-based ASP.NET website</>,
      ],
      technologies: [
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "C#",
        "Entity Framework",
        "ASP.NET",
        "SQL Server",
        "OpenXML",
        "TFS",
      ],
    },
    {
      logo: RbaLogo,
      logoBackgroundColor: "#c7242d",
      milestone: "Joined RBA",
      date: new Date("02/01/2011"),
      description: (
        <>
          Worked directly with RBA clients building custom enterprise software.
          <p className="mt-2 ml-2 text-sm text-gray-800 dark:text-gray-300">
            <AwardIcon className="inline-block mr-1.5 text-yellow-400" />
            2012 President’s Club award winner (as one of the highest billing
            consultants)
          </p>
        </>
      ),
    },
    {
      logo: GnReSoundLogo,
      logoBackgroundColor: "#aa1835",
      title: "Web Developer",
      company: "GN ReSound",
      startDate: new Date("09/01/2010"),
      endDate: new Date("02/01/2011"),
      employer: "TEKsystems",
      type: "Contract",
      description: (
        <>
          Supported five SharePoint sites and two ASP.NET e-commerce solutions.
        </>
      ),
      bullets: [
        <>
          Built command-line tools to automate everyday SharePoint operations
        </>,
        <>
          Helped out with greenfield development when support tickets didn’t{" "}
          need attention
        </>,
        <>Worked extensively with Google Analytics and Google Maps API</>,
      ],
      technologies: [
        "Google Analytics",
        "Google Maps API",
        "C#",
        "ASP.NET",
        "AJAX Control Toolkit",
        "TFS",
        "SharePoint",
      ],
    },
    {
      icon: <img src="diploma-duotone.svg" alt="diploma" />,
      milestone: "Bachelor of Science, Software Engineering",
      date: new Date("08/01/2010"),
      description: "Brown College, August 2010",
    },
    {
      logo: MnWildLogo,
      logoBackgroundColor: "#124734",
      title: "Web Developer",
      employer: "Minnesota Wild",
      startDate: new Date("04/01/2010"),
      endDate: new Date("09/01/2010"),
      type: "Internship",
      description: (
        <>
          Worked alongside the Director of IT to design and develop various{" "}
          programming projects.
        </>
      ),
      bullets: [
        <>
          Built a web application from scratch using ASP.NET and SQL Server to
          manage voucher requests and distribute employee tickets
        </>,
        <>
          Streamlined business processes by integrating systems using custom{" "}
          cron jobs
        </>,
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "C#",
        "ASP.NET",
        "LINQ",
        "SQL Server",
      ],
    },
    {
      logo: MnWildLogo,
      logoBackgroundColor: "#124734",
      title: "Helpdesk Specialist",
      employer: "Minnesota Wild",
      startDate: new Date("04/01/2008"),
      endDate: new Date("09/01/2010"),
      type: "FTE",
      description: (
        <>
          Hardware, software, and event support for SPAC and Minnesota Wild
          employees and coaching staff. Go Wild!
        </>
      ),
      bullets: [
        <>
          Scripted a fully automated operating system and software installation
          process
        </>,
        <>
          Built a dynamic login script for file and printer mappings using
          Active Directory group filtering
        </>,
      ],
      technologies: ["Altiris", "batch scripting"],
    },
    {
      logo: TargetLogo,
      logoBackgroundColor: "rgb(204, 0, 0)",
      title: "Rollout Room Technician",
      company: "Target",
      startDate: new Date("01/01/2006"),
      endDate: new Date("04/01/2008"),
      employer: "Ajilon",
      type: "Contract",
      description: (
        <>
          Remotely guided several hardware and software rollouts to Target
          stores around the United States.
        </>
      ),
      bullets: [
        <>Scripted repetitive tasks to prevent human error</>,
        <>
          Developed custom tools using C# to assist in fluid software rollouts
        </>,
      ],
      technologies: ["C#", "batch scripting"],
    },
    {
      logo: DefaultLogo,
      title: "Co-founder",
      employer: "Hybrid Computer Technologies",
      startDate: new Date("05/01/2005"),
      endDate: new Date("03/01/2007"),
      type: "Owner",
      description: (
        <>
          Started this company to help small businesses in Anoka, MN, connect
          with customers on the web.
        </>
      ),
      bullets: [
        <>
          Designed and developed an innovative website to market our services
        </>,
        <>
          Reorganized Postmatic's website for ease of use and introduced a
          web-based contact form
        </>,
        <>
          Designed and developed a professional and resourceful website for CPR
          Professionals
        </>,
      ],
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
    },
    {
      icon: <img src="diploma-duotone.svg" alt="diploma" />,
      milestone: "Associates of Arts, Information Technology",
      date: new Date("12/01/2005"),
      description: "Brown College, December 2005",
    },
    {
      icon: <img src="calculator-duotone.svg" alt="calculator" />,
      milestone: "First computer program",
      date: new Date("01/01/2000"),
      description: (
        <>
          Wrote my first computer program in BASIC to solve high school math
          problems on a TI-86 graphing calculator.
        </>
      ),
      connectorVisibile: false,
    },
  ],
};

export interface Job {
  logo?: ReactNode;
  logoBackgroundColor?: string;
  title: string;
  company?: string;
  startDate: Date;
  endDate?: Date;
  employer: string;
  type: "Consultant" | "Contract" | "FTE" | "Internship" | "Owner";
  description: ReactNode;
  bullets: ReactNode[];
  technologies: string[];
}

export interface Milestone {
  logo?: ReactNode;
  logoBackgroundColor?: string;
  icon?: ReactNode;
  milestone: ReactNode;
  date?: Date;
  description?: ReactNode;
  connectorVisibile?: boolean;
}

type Event = Job | Milestone;

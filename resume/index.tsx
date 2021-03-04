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
  location: string;
  email: string;
  phone: string;
  summary: ReactNode[];
  timeline: Event[];
}

export const resume: Resume = {
  firstName: "Brent",
  lastName: "Mealhouse",
  location: "***REMOVED***",
  email: "bmealhouse@gmail.com",
  phone: "***REMOVED***",
  summary: [
    <>
      I’m an independent consultant specializing in{" "}
      <span className="whitespace-nowrap">full-stack</span> JavaScript
      development. <span className="whitespace-nowrap">I am</span> passionate
      about web technologies, open-source, continuous delivery, code quality,
      and automation. <span className="whitespace-nowrap">I am</span> committed
      to delivering value to my customers and leading teams{" "}
      <span className="whitespace-nowrap">to success.</span>
    </>,
    <>
      I am currently interested in cloud-based React and Node.js projects using
      serverless architecture. Let me know how I{" "}
      <span className="whitespace-nowrap">can help.</span>
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
          fast, <span className="whitespace-nowrap">and reliable.</span>
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
          starry nights, and fresh air of{" "}
          <span className="whitespace-nowrap">northern Minnesota.</span>
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
          VS Code extension that shifts your color theme and{" "}
          <span className="whitespace-nowrap">font automatically.</span>
          <ul className="mt-2 ml-7 list-disc text-sm  text-gray-800 dark:text-gray-300">
            <li>
              Favorite or ignore color themes{" "}
              <span className="whitespace-nowrap">and fonts</span>
            </li>
            <li>
              Shifts your color theme and font every{" "}
              <span className="whitespace-nowrap">30 minutes</span>
            </li>
            <li>
              Works across multiple VS code instances without conflict and
              displays a timer in the{" "}
              <span className="whitespace-nowrap">status bar</span>
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
      employer: "Qubed",
      type: "Consultant",
      description: (
        <>
          Mentored a small team of talented developers, building Benefit Scout –
          an educational tool that has grown to support{" "}
          <span className="whitespace-nowrap">1.7M users</span> and has directly
          contributed to <span className="whitespace-nowrap">$5 million</span>{" "}
          of Securian’s annual{" "}
          <span className="whitespace-nowrap">enrollment revenue.</span>
        </>
      ),
      bullets: [
        <>
          Led full-stack development across several repositories using React
          Query, TypeScript, Node.js, Serverless, DynamoDB,{" "}
          <span className="whitespace-nowrap">and ElastiCache</span>
        </>,
        <>
          Regularly contributed to Securian’s design system built with React,
          styled-components,{" "}
          <span className="whitespace-nowrap">and Storybook</span>
        </>,
        <>
          Deployed as often as possible through CI/CD using feature flags to
          keep our master{" "}
          <span className="whitespace-nowrap">branches deployable</span>
        </>,
        <>
          Created a powerful integration test suite on top of Jest and React
          Testing Library with automatic mocking and{" "}
          <span className="whitespace-nowrap">client emulation</span>
        </>,
        <>
          Supported and enhanced our chatbot, Scout, using Amazon Lex and{" "}
          <span className="whitespace-nowrap">Amazon SageMaker</span>
        </>,
        <>
          Usually, pair programmed or mobbed on stories when it{" "}
          <span className="whitespace-nowrap">provided value</span>
        </>,
      ],
      technologies: [
        "JavaScript, Babel, React, Redux, Rematch, styled-components, HTML, CSS, Node.js, Next.js, Jest, React Testing Library, Webpack, Rollup, XO, Prettier, Yarn, GitHub, Serverless, AWS, DynamoDB, CloudFront, CloudFormation",
      ],
    },
    {
      logo: AmanoMcGannLogo,
      logoBackgroundColor: "#006ba6",
      title: "Lead JavaScript Developer",
      company: "Amano McGann",
      startDate: new Date("01/01/2017"),
      endDate: new Date("02/01/2018"),
      employer: "Qubed",
      type: "Consultant",
      description: (
        <>
          Architecture for Amano McGann’s future frontend platform and design
          system built on top of Next.js and{" "}
          <span className="whitespace-nowrap">styled-components.</span>
        </>
      ),
      bullets: [
        <>
          Developed a simple GraphQL proof of concept to aggregate data from
          REST services, a MongoDB data store, and client storage (in-
          <span className="whitespace-nowrap">memory cache)</span>
        </>,
        <>
          Built an interactive visualization using React, Redux, and SVG to help
          customers understand how to configure their{" "}
          <span className="whitespace-nowrap">parking rates</span>
        </>,
        <>
          Used Yarn workspaces to create small internal packages for reuse{" "}
          <span className="whitespace-nowrap">between projects</span>
        </>,
      ],
      technologies: [
        "JavaScript, Babel, React, Redux, Redux Thunk, Redux-Saga, Reselect, Immutable, styled-components, HTML, CSS, Node.js, Express, Next.js, React-docgen, Jest, Enzyme, Webpack, Rollup, Parcel, @std/esm, XO, Prettier, Yarn, Docker, VSTS Git, VSTS CI/CD, Azure",
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
          Blazing fast Jamstack site for a local church built with Gatsby{" "}
          <span className="whitespace-nowrap">and Prismic.</span>
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
      employer: "Qubed",
      type: "Consultant",
      description: (
        <>
          Developed A/B tests across bestbuy.com to determine what features
          provide the best user experience and increase the overall{" "}
          <span className="whitespace-nowrap">site conversion.</span>
        </>
      ),
      bullets: [
        <>
          Transformed legacy A/B testing code into a maintainable architecture
          using Babel, Webpack, Node.js,{" "}
          <span className="whitespace-nowrap">and Karma</span>
        </>,
        <>
          Moved the A/B testing team to Best Buy’s standard release management
          process, which reduced risk and provided more visibility for artifacts
          deployed <span className="whitespace-nowrap">to production</span>
        </>,
        <>
          Optimized development workflow for fast feedback and increased{" "}
          <span className="whitespace-nowrap">developer productivity</span>
        </>,
        <>
          Consistently evaluated dependency upgrades to ensure our team could
          leverage the latest features and prevent our stack from{" "}
          <span className="whitespace-nowrap">becoming stale</span>
        </>,
      ],
      technologies: [
        "JavaScript, Babel, Backbone.js, Dust.js, Bluebird, jQuery, HTML, LESS, Node.js, Express, gulp, Grunt, Karma, Mocha, Chai, Sinon, Webpack, JavaScript Standard Style, npm, Git, OpenStack",
      ],
    },
    {
      logo: ImationLogo,
      logoBackgroundColor: "#cf152d",
      title: "Lead JavaScript Developer",
      company: "Imation",
      startDate: new Date("08/01/2014"),
      endDate: new Date("12/01/2014"),
      employer: "Qubed",
      type: "Consultant",
      description: (
        <>
          Built a lightweight JavaScript architecture around Eloqua’s email
          marketing system with support for automatic form population and{" "}
          <span className="whitespace-nowrap">progressing profiling.</span>
        </>
      ),
      bullets: [
        <>
          Worked with Lodash, Jasmine, Greensock, WOW.js, CSS animations,{" "}
          <span className="whitespace-nowrap">and Foundation</span>
        </>,
        <>
          Helped the imation.com redesign project release on-time by assisting
          with <span className="whitespace-nowrap">EPiServer development</span>
        </>,
        <>
          Implemented internally hosted WebAPI OData feed to load news articles
          on <span className="whitespace-nowrap">imation.com dynamically</span>
        </>,
      ],
      technologies: [
        "JavaScript, Lodash, Greensock, WOW.js, Foundation, HTML, CSS, Node.js, gulp, Jasmine, C#, ASP.NET Web API OData, Git, Jenkins, Eloqua",
      ],
    },
    {
      logo: GeneralMillsLogo,
      logoBackgroundColor: "#0d5195",
      title: "JavaScript Developer",
      company: "General Mills",
      startDate: new Date("11/01/2013"),
      endDate: new Date("08/01/2014"),
      employer: "Qubed",
      type: "Consultant",
      description: (
        <>
          Contributed to General Mills’ shared component library used by
          bettycrocker.com, pillsbury.com, tablespoon.com,{" "}
          <span className="whitespace-nowrap">and more.</span>
        </>
      ),
      bullets: [
        <>
          Enhanced frontend components using Knockout, Jasmine, and Sitecore for{" "}
          <span className="whitespace-nowrap">multilingual content</span>
        </>,
        <>
          Practiced agile scrum methodologies using TFS Application Lifecycle{" "}
          <span className="whitespace-nowrap">Management (ALM) tools</span>
        </>,
        <>
          Collaborated with a UX Planner to rewrite a mobile-friendly{" "}
          <span className="whitespace-nowrap">coupons experience</span>
        </>,
        <>
          Performed daily deployments for US Factory teams as a{" "}
          <span className="whitespace-nowrap">build master</span>
        </>,
      ],
      technologies: [
        "JavaScript, Knockout, HTML, LESS, Node.js, gulp, Jasmine, C#, Moq, NuGet, TFS, Sitecore",
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
          and begin my quest for{" "}
          <span className="whitespace-nowrap">ultimate freedom.</span>
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
          development for a dynamic{" "}
          <span className="whitespace-nowrap">form builder/viewer.</span>
        </>
      ),
      bullets: [
        <>
          Used Knockout on the frontend to render an interactive form{" "}
          <span className="whitespace-nowrap">building experience</span>
        </>,
        <>
          Designed a dynamic validation system in MVC 4 using custom server-side
          data annotations, client-side validation, and{" "}
          <span className="whitespace-nowrap">code reuse</span>
        </>,
      ],
      technologies: [
        "JavaScript, Knockout, HTML, CSS, C#, ASP.NET MVC, ASP.NET Web API, TFS",
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
          Portal – a project management tool for{" "}
          <span className="whitespace-nowrap">R&amp;D projects.</span>
        </>
      ),
      bullets: [
        <>
          Refactored existing business logic to improve developer productivity,
          unit testing, code maintainability, and overall{" "}
          <span className="whitespace-nowrap">system stability</span>
        </>,
        <>
          Implemented Entity Framework to simplify data access patterns and
          speed <span className="whitespace-nowrap">up queries</span>
        </>,
        <>
          Configured TCP endpoints to increase{" "}
          <span className="whitespace-nowrap">WCF service performance</span>
        </>,
        <>
          Built extensive suite PowerShell scripts to automate deployments for{" "}
          <span className="whitespace-nowrap">all environments</span>
        </>,
      ],
      technologies: [
        "JavaScript, HTML, CSS, C#, Entity Framework, LINQ, WCF, Moq, SQL Server, NuGet, TFS, PowerShell, SharePoint, InfoPath",
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
          <span className="whitespace-nowrap">different ways.</span>
        </>
      ),
      bullets: [
        <>
          WCF service development using SOLID design patterns, LINQ, and Moq{" "}
          <span className="whitespace-nowrap">unit testing</span>
        </>,
        <>
          ASP.NET MVC 3 development using JavaScript, jQuery, and{" "}
          <span className="whitespace-nowrap">Kendo UI</span>
        </>,
      ],
      technologies: [
        "JavaScript, jQuery, Kendo UI, HTML, CSS, C#, ASP.NET MVC, LINQ, WCF, Moq, NuGet, TFS",
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
          and migrate to more{" "}
          <span className="whitespace-nowrap">modern technologies.</span>
        </>
      ),
      bullets: [
        <>
          New feature development and internal API improvements for a heavily
          used <span className="whitespace-nowrap">KPI dashboard</span>
        </>,
        <>
          Finished the remaining dev work, UAT and production deploy for a
          jQuery and Entity{" "}
          <span className="whitespace-nowrap">Framework project</span>
        </>,
        <>
          Migrated a classic ASP solution to an MVP-based{" "}
          <span className="whitespace-nowrap">ASP.NET website</span>
        </>,
      ],
      technologies: [
        "JavaScript, jQuery, HTML, CSS, C#, Entity Framework, ASP.NET, SQL Server, OpenXML, TFS",
      ],
    },
    {
      logo: RbaLogo,
      logoBackgroundColor: "#c7242d",
      milestone: "Joined RBA",
      date: new Date("02/01/2011"),
      description: (
        <>
          Worked directly with RBA clients building custom{" "}
          <span className="whitespace-nowrap">enterprise software.</span>
          <p className="mt-2 ml-2 text-sm text-gray-800 dark:text-gray-300">
            <AwardIcon className="inline-block mr-1.5 text-yellow-400" />
            2012 President’s Club award winner (as one of the highest{" "}
            <span className="whitespace-nowrap">billing consultants)</span>
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
          Supported five SharePoint sites and two ASP.NET{" "}
          <span className="whitespace-nowrap">e-commerce solutions.</span>
        </>
      ),
      bullets: [
        <>
          Built command-line tools to automate everyday{" "}
          <span className="whitespace-nowrap">SharePoint operations</span>
        </>,
        <>
          Helped out with greenfield development when support tickets didn’t{" "}
          <span className="whitespace-nowrap">need attention</span>
        </>,
        <>
          Worked extensively with Google Analytics and{" "}
          <span className="whitespace-nowrap">Google Maps API</span>
        </>,
      ],
      technologies: [
        "Google Analytics, Google Maps API, C#, ASP.NET, AJAX Control Toolkit, TFS, SharePoint",
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
          <span className="whitespace-nowrap">programming projects.</span>
        </>
      ),
      bullets: [
        <>
          Built a web application from scratch using ASP.NET and SQL Server to
          manage voucher requests and distribute{" "}
          <span className="whitespace-nowrap">employee tickets</span>
        </>,
        <>
          Streamlined business processes by integrating systems using custom{" "}
          <span className="whitespace-nowrap">cron jobs</span>
        </>,
      ],
      technologies: ["JavaScript, HTML, CSS, C#, ASP.NET, LINQ, SQL Server"],
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
          employees and coaching staff.{" "}
          <span className="whitespace-nowrap">Go Wild!</span>
        </>
      ),
      bullets: [
        <>
          Scripted a fully automated operating system and software{" "}
          <span className="whitespace-nowrap">installation process</span>
        </>,
        <>
          Built a dynamic login script for file and printer mappings using
          Active Directory{" "}
          <span className="whitespace-nowrap">group filtering</span>
        </>,
      ],
      technologies: ["Altiris, batch scripting"],
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
          stores around the{" "}
          <span className="whitespace-nowrap">United States.</span>
        </>
      ),
      bullets: [
        <>
          Scripted repetitive tasks to prevent{" "}
          <span className="whitespace-nowrap">human error</span>
        </>,
        <>
          Developed custom tools using C# to assist in fluid{" "}
          <span className="whitespace-nowrap">software rollouts</span>
        </>,
      ],
      technologies: ["C#, batch scripting"],
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
          with customers on <span className="whitespace-nowrap">the web.</span>
        </>
      ),
      bullets: [
        <>
          Designed and developed an innovative website to market{" "}
          <span className="whitespace-nowrap">our services</span>
        </>,
        <>
          Reorganized Postmatic's website for ease of use and introduced a
          web-based <span className="whitespace-nowrap">contact form</span>
        </>,
        <>
          Designed and developed a professional and resourceful website for{" "}
          <span className="whitespace-nowrap">CPR Professionals</span>
        </>,
      ],
      technologies: ["JavaScript, HTML, CSS, PHP"],
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
          problems on a <span className="whitespace-nowrap">TI-86</span>{" "}
          <span className="whitespace-nowrap">graphing calculator.</span>
        </>
      ),
    },
    {
      icon: <img src="baby-duotone.svg" alt="baby" />,
      milestone: "Born",
      date: new Date("***REMOVED***"),
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

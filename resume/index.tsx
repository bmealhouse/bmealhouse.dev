import { ReactNode } from "react";
import {
  AmanoMcGannLogo,
  BestBuyLogo,
  DefaultLogo,
  GeneralMillsLogo,
  GnReSoundLogo,
  ImationLogo,
  LandOLakesLogo,
  MnWildLogo,
  QubedLogo,
  RbaLogo,
  ScholarshipAmericaLogo,
  SecurianLogo,
  TargetLogo,
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
      <span className="whitespace-nowrap">full-stack</span> JavaScript web
      development. I am passionate about web technologies, open-source,
      continuous delivery, code quality, and automation. I am committed to
      delivering value to my customers and leading teams to success.
    </>,
    <>
      I am currently interested in React and Node.js projects deployed to the
      cloud on serverless architecture. Let me know how I can help.
    </>,
  ],
  timeline: [
    // {
    //   // TODO
    //   icon: "browser-solid.svg",
    //   milestone: "https://fideldywelldrilling.com",
    //   startDate: new Date(), // TODO
    // },
    // {
    //   // TODO
    //   icon: "home-lg-solid.svg",
    //   milestone: "Moved to forever home",
    //   description: "My family and I moved to the house my wife grew up in.",
    //   date: new Date("08/01/2019"), // TODO
    // },
    // {
    //   // TODO
    //   icon: "code-solid.svg",
    //   milestone: "Published shifty VS Code extension",
    //   startDate: new Date(), // TODO
    // },
    // {
    //   // TODO
    //   icon: "camera-movie-solid.svg",
    //   milestone: "Published axios-record-replay-adapter",
    //   startDate: new Date(), // TODO
    // },
    {
      logo: SecurianLogo,
      logoBackgroundColor: "#0c7b40",
      title: "Lead JavaScript Developer",
      company: "Securian",
      startDate: new Date("03/01/2018"),
      endDate: new Date("04/01/2021"),
      employer: "QUBED",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [],
      technologies: [],
    },
    // {
    //   // TODO
    //   icon: "browser-solid.svg",
    //   milestone: "Published https://hillcitymnag.church",
    //   startDate: new Date(), // TODO
    // },
    {
      logo: AmanoMcGannLogo,
      logoBackgroundColor: "#006ba6",
      title: "Lead JavaScript Developer",
      company: "Amano McGann",
      startDate: new Date("01/01/2017"),
      endDate: new Date("02/01/2018"),
      employer: "QUBED",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Architected Amano McGann’s future front-end platform with a development workflow focused on minimal configuration, consistency, and intuitive code patterns using Next.js, Redux, Prettier, and XO.",
        "Built an interactive visualization using React, Redux, and SVG to help customers understand how to configure their parking rates.",
        "Normalized the rates data model to support front-end UX changes while still supporting exports to the denormalized specification.",
        "Developed a simple GraphQL proof of concept to aggregate data from REST services, a MongoDB data store, and client storage (in-memory cache).",
        "Improved code quality by using a Git-based pull request workflow.",
        "Used Yarn workspaces to create small internal packages for easy reuse between projects.",
        "Optimized development workflow for fast feedback and increased developer productivity.",
      ],
      technologies: [
        "JavaScript, Babel, React, Redux, Redux Thunk, Redux-Saga, Reselect, Immutable, styled-components, HTML, CSS, Node.js, Express, Next.js, React-docgen, Jest, Enzyme, Webpack, Rollup, Parcel, @std/esm, XO, Prettier, Yarn, Docker, VSTS Git, VSTS CI/CD, Azure",
      ],
    },
    {
      logo: BestBuyLogo,
      logoBackgroundColor: "#0046be",
      title: "Lead JavaScript Developer",
      company: "Best Buy",
      startDate: new Date("12/01/2014"),
      endDate: new Date("11/01/2016"),
      employer: "QUBED",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Developed A/B tests across many pages of bestbuy.com to determine what features provide the best user experience and increase the overall site conversion.",
        "Transformed A/B testing legacy code to a maintainable architecture using Best Buy’s preferred technologies: Babel, ES2015, Karma, Node.js, Webpack, and more.",
        "Optimized development workflow for fast feedback and increased developer productivity.",
        "Consistently updated internal and external npm packages to ensure our team could leverage the latest features and prevent our stack from becoming stale.",
        "Moved the A/B testing team to Best Buy’s standard release management process, which reduced risk and provided more visibility for artifacts deployed to production.",
        "Introduced basic Agile concepts (backlog, sprint planning, and story points) to improve communication between project managers, developers, and analysts.",
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
      employer: "QUBED",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Architected an Eloqua email marketing system with support for auto-population and progressive profiling. I designed the system to be lightweight using vanilla JavaScript for DOM manipulation, Lodash, IE8 polyfills, and Jasmine for unit testing.",
        "Helped the imation.com redesign project release on-time by assisting with EPiServer development. Worked with the Foundation grid system, WOW.js, Greensock, and CSS3 animations.",
        "Implemented internally hosted WebAPI OData feed for supporting API calls to load news articles on imation.com dynamically.",
        "Improved iteration times by creating and maintaining automated builds on a Jenkins continuous integration server.",
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
      employer: "QUBED",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Contributed to the internal shared component framework used by core websites such as bettycrocker.com, pillsbury.com, tablespoon.com, and more.",
        "Enhanced front-end components using responsive HTML and CSS, Knockout, Jasmine, and Sitecore for multilingual content management.",
        "Collaborated with a UX Planner to build a mobile-friendly Coupons experience.",
        "Followed a strict development workflow for all code changes: create branch, complete code reviews, merge changes, build NuGet package(s), deploy to test environment, and update documentation.",
        "Practiced Agile software development using TFS Application Lifecycle Management (ALM) tools.",
        "Used semantic versioning standards for NuGet packaging.",
        "Performed daily deployments for US Factory teams as Build Master.",
      ],
      technologies: [
        "JavaScript, Knockout, HTML, LESS, Node.js, gulp, Jasmine, C#, Moq, NuGet, TFS, Sitecore",
      ],
    },
    {
      logo: QubedLogo,
      logoBackgroundColor: "#27272a",
      milestone: "Founded QUBED, INC",
      date: new Date("08/01/2013"),
      // TODO
      description: "",
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
      // TODO
      description: "",
      bullets: [
        "Used Knockout to build a client-side data-driven form builder and viewer.",
        "Used JSON.NET to perform serialization and deserialization between Knockout, MVC, and Web API.",
        "Designed a dynamic validation system in MVC 4 that takes advantage of custom server-side data annotations, client-side validation, and code reuse.",
      ],
      technologies: [
        "JavaScript, Knockout, HTML, CSS, C#, ASP.NET MVC, ASP.NET Web API, TFS",
      ],
    },
    {
      // TODO
      title: "Web Developer",
      company: "H.B. Fuller",
      startDate: new Date("10/01/2011"),
      endDate: new Date("09/01/2013"),
      employer: "RBA",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Refactored existing business logic to improve developer productivity, unit testing capabilities, code maintainability, and overall system stability.",
        "Implemented TFS build definitions for continuous integration and NuGet package deployments.",
        "Implemented local NuGet package store for better dependency management and improved productivity between Visual Studio solutions.",
        "Configured TCP endpoints on WCF services for additional performance benefits.",
        "Implemented Entity Framework to increase performance for data access patterns.",
        "Participated and eventually led new development efforts of the Innovation Portal using SharePoint 2010, InfoPath forms services, and WCF services.",
        "Refactored the existing InfoPath forms business logic into a more consistent API using a helper class for code reuse and easier debugging.",
        "Built extensive PowerShell scripts to automate the application deployment to QA, UAT, and production.",
      ],
      technologies: [
        "JavaScript, HTML, CSS, C#, Entity Framework, LINQ, WCF, Moq, SQL Server, NuGet, TFS, PowerShell, SharePoint, InfoPath",
      ],
    },
    {
      // TODO
      title: "Web Developer",
      company: "T-Chek",
      startDate: new Date("06/01/2012"),
      endDate: new Date("12/01/2012"),
      employer: "RBA",
      type: "Consultant",
      // TODO
      description: "",
      bullets: [
        "Enterprise-based WCF service development using SOLID design patterns and Moq unit testing.",
        "Extensive use of LINQ for handling complex collection-based business logic.",
        "ASP.NET MVC 3 development using JavaScript, jQuery, AJAX, and Telerik JavaScript components.",
        "Contributed to internal frameworks by fixing bugs and implementing enhancements.",
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
      // TODO
      description: "",
      bullets: [
        "Participated in the new development of a KPI dashboard using VB.NET and ASP.NET 4.0.",
        "Refactored dashboard charting system into a dynamic and consistent solution using ASP.NET 4.0 Charting.",
        "Built crosstab SQL queries and user-defined functions to create complex data sets for reporting.",
        "Refactored dashboard export capabilities to use OpenXML 2.0 for building dynamic XLSX spreadsheets.",
        "Built an MVP-based, ASP.NET 4.0 website to migrate a classic ASP solution.",
        "Completed remaining development, UAT, and deployment to production for an ASP.NET 4.0 project using jQuery and Entity Framework.",
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
      // TODO
      description: "",
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
      // TODO
      description: "",
      bullets: [
        "Supported five SharePoint sites and two ASP.NET e-commerce solutions.",
        "Built command line-based tools to automate everyday SharePoint operations.",
        "Participated in a new SharePoint project using the MVP pattern for web parts and user controls.",
        "Used the AJAX Control Toolkit to create rich web-based user controls for a better user experience.",
        "Worked with Google Analytics and Google Maps API.",
      ],
      technologies: [
        "Google Analytics, Google Maps API, C#, ASP.NET, AJAX Control Toolkit, TFS, SharePoint",
      ],
    },
    {
      icon: <img src="graduation-cap-solid.svg" alt="graduation-cap" />,
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
      // TODO
      description: "",
      bullets: [
        "Gained experience in the full software development life cycle.",
        "Built a web application to manage voucher requests and distribute employee tickets.",
        "Wrote dynamic crosstab SQL queries to provide external organizations access to our data.",
        "Built a console application that requested XML data from an external API and then normalized it to populate a relational database.",
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
          employees and coaching staff. Go Wild!
        </>
      ),
      bullets: [
        "Scripted a fully automated operating system and software installation process",
        "Built a dynamic login script for file and printer mappings using Active Directory group filtering",
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
          stores around the United States.
        </>
      ),
      bullets: [
        "Scripted repetitive tasks to prevent human error",
        "Developed custom tools using C# to assist in fluid software rollouts",
      ],
      technologies: ["C#, batch scripting"],
    },
    {
      logo: DefaultLogo,
      title: "Co-founder",
      employer: "Hybrid Computer Technologies, LLC",
      startDate: new Date("05/01/2005"),
      endDate: new Date("03/01/2007"),
      type: "Owner",
      description: (
        <>
          Started this company to help small businesses in the Anoka, MN area
          connect with their customers over the web.
        </>
      ),
      bullets: [
        "Designed and developed an innovative website to market our services",
        "Reorganized Postmatic's website for ease of use and introduced a web-based contact form",
        "Designed and developed a professional and resourceful website for CPR Professionals",
      ],
      technologies: ["JavaScript, HTML, CSS, PHP"],
    },
    {
      icon: <img src="graduation-cap-solid.svg" alt="graduation-cap" />,
      milestone: "Associates of Arts, Information Technology",
      date: new Date("12/01/2005"),
      description: "Brown College, December 2005",
    },
    {
      icon: <img src="calculator-solid.svg" alt="calculator" />,
      milestone: "First computer program",
      date: new Date("01/01/2000"),
      description: (
        <>
          Wrote my first computer program in BASIC to solve high school math
          problems on a <span className="whitespace-nowrap">TI-86</span>{" "}
          graphing calculator.
        </>
      ),
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
  bullets: string[];
  technologies: string[];
}

export interface Milestone {
  logo?: ReactNode;
  logoBackgroundColor?: string;
  icon?: ReactNode;
  milestone: string;
  date?: Date;
  description?: ReactNode;
  connectorVisibile?: boolean;
}

type Event = Job | Milestone;

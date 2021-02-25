interface Resume {
  name: string;
  location: string;
  summary: string[];
  timeline: Event[];
}

export const resume: Resume = {
  name: "Brent Mealhouse",
  location: "***REMOVED***",
  summary: [
    "I am an independent consultant specializing in full-stack web development. I am passionate about web technologies, automation, and open-source. I continuously evaluate tools to increase my productivity and create more reliable and consistent software. I am committed to delivering value to my customers and leading teams to success.",
    "I am currently interested in React and serverless Node.js projects.  Let me know how I can help.",
  ],
  timeline: [
    {
      milestone: "bmealhouse.dev",
      startDate: new Date(), // TODO
    },
    {
      milestone: "Fideldy Bros Well Drilling",
      startDate: new Date(), // TODO
    },
    {
      milestone: "Published shifty",
      startDate: new Date(), // TODO
    },
    {
      milestone: "Published axios-record-replay-adapter",
      startDate: new Date(), // TODO
    },
    {
      milestone: "Hill City Assembly of God Church",
      startDate: new Date(), // TODO
    },
    {
      client: "Securian",
      company: "QUBED, INC",
      startDate: new Date("03/01/2018"),
      // endDate: new Date("04/01/2021"),
      bullets: [],
      technologies: [],
    },
    {
      client: "Amano McGann",
      company: "QUBED, INC",
      startDate: new Date("01/01/2017"),
      endDate: new Date("02/01/2018"),
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
      client: "Best Buy",
      company: "QUBED, INC",
      startDate: new Date("12/01/2014"),
      endDate: new Date("11/01/2016"),
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
      client: "Imation",
      company: "QUBED, INC",
      startDate: new Date("08/01/2014"),
      endDate: new Date("12/01/2014"),
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
      client: "General Mills",
      company: "QUBED, INC",
      startDate: new Date("11/01/2013"),
      endDate: new Date("08/01/2014"),
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
      milestone: "Founded QUBED, INC",
      startDate: new Date("08/01/2013"), // TODO: verify this date
    },
    {
      client: "Scholarship America",
      company: "RBA",
      startDate: new Date("09/01/2013"),
      endDate: new Date("11/01/2013"),
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
      client: "H.B. Fuller",
      company: "RBA",
      startDate: new Date("10/01/2011"),
      endDate: new Date("09/01/2013"),
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
      client: "T-Chek",
      company: "RBA",
      startDate: new Date("06/01/2012"),
      endDate: new Date("12/01/2012"),
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
      client: "Land O’Lakes",
      company: "RBA",
      startDate: new Date("02/01/2011"),
      endDate: new Date("10/01/2011"),
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
      milestone: "Joined RBA",
      startDate: new Date("02/01/2011"),
    },
    {
      client: "GN ReSound",
      company: "TEKsystems",
      startDate: new Date("09/01/2010"),
      endDate: new Date("02/01/2011"),
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
      milestone: "Bachelor of Science, Software Engineering",
      startDate: new Date("01/01/2010"),
      // institution: "Brown College",
      // startDate: new Date("01/01/2008"),
      // endDate: new Date("01/01/2010"),
    },
    {
      company: "Minnesota Wild",
      title: "Web developer intern",
      startDate: new Date("04/01/2010"),
      endDate: new Date("09/01/2010"),
      bullets: [
        "Gained experience in the full software development life cycle.",
        "Built a web application to manage voucher requests and distribute employee tickets.",
        "Wrote dynamic crosstab SQL queries to provide external organizations access to our data.",
        "Built a console application that requested XML data from an external API and then normalized it to populate a relational database.",
      ],
      technologies: ["JavaScript, HTML, CSS, C#, ASP.NET, LINQ, SQL Server"],
    },
    {
      company: "Minnesota Wild",
      title: "Helpdesk specialist",
      startDate: new Date("04/01/2008"),
      endDate: new Date("09/01/2010"),
      bullets: [
        "Scripted a fully automated operating system and software installation process.",
        "Built a dynamic login script for file and printer mappings using Active Directory group filtering.",
      ],
      technologies: ["Altiris, batch scripting"],
    },
    {
      client: "Target",
      company: "Ajilon",
      startDate: new Date("01/01/2006"),
      endDate: new Date("04/01/2008"),
      bullets: [
        "Scripted everyday tasks to prevent human error while completing repetitive tasks.",
        "Developed tools using C# to assist in fluent software rollouts to Target stores around the US.",
      ],
      technologies: ["C#, batch scripting"],
    },
    {
      company: "Hybrid Computer Technologies, LLC",
      title: "Co-founder / Web developer",
      startDate: new Date("05/01/2005"),
      endDate: new Date("03/01/2007"),
      bullets: [
        "Designed and developed an innovative website to market our services.",
        "Reorganized Postmatic, Inc. website, ensuring a user-friendly environment and additional contact method.",
        "Designed and developed a professional and resourceful website for CPR Professionals, allowing their target audience to communicate with them over the web.",
      ],
      technologies: ["JavaScript, HTML, CSS, PHP"],
    },
    {
      milestone: "Co-founded Hybrid Computer Technologies, LLC",
      startDate: new Date("05/01/2005"),
    },
    {
      milestone: "Associates of Arts, Information Technology",
      startDate: new Date("01/01/2005"),
      // institution: "Brown College",
      // startDate: new Date("01/01/2003"),
      // endDate: new Date("01/01/2005"),
    },
    {
      milestone: "Wrote my first computer program",
      startDate: new Date("01/01/2000"),
    },
  ],
};

type Event = Contract | FulltimeJob | Milestone | SideProject;

interface BaseEvent {
  startDate: Date;
  endDate?: Date;
}

export interface Contract extends BaseEvent {
  client: string;
  company: string;
  bullets: string[];
  technologies: string[];
}

export interface FulltimeJob extends BaseEvent {
  company: string;
  title: string;
  bullets: string[];
  technologies: string[];
}

export interface Milestone extends BaseEvent {
  milestone: string;
}

interface SideProject extends BaseEvent {}

interface Degree {
  institution: string;
  startDate: Date;
  endDate: Date;
  degree: string;
}

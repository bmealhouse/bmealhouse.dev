import React, { ReactNode } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { Job, Milestone } from "../resume";
import { DefaultLogo } from "../resume/logos";

interface Props {
  children: ReactNode;
}

export const Timeline = ({ children }: Props) => (
  <div className="flow-root">
    <h2 className="mt-12 text-4xl xs:text-5xl sm:text-6xl md:text-2xl font-extrabold uppercase">
      Timeline
    </h2>
    <ul className="mt-4 -mb-8">{children}</ul>
  </div>
);

Timeline.Job = ({
  logo = DefaultLogo,
  logoBackgroundColor,
  company,
  employer,
  title,
  startDate,
  endDate,
  type,
  description,
  bullets,
}: Job) => {
  // const slug = `${(company || employer)
  //   .replace(/[’\.]/g, "")
  //   .replace(/\s/g, "-")
  //   .toLowerCase()}-${startDate.getFullYear()}`;

  const tenure = `${format(startDate, "MMM yyyy")} – ${
    endDate ? format(endDate, "MMM yyyy") : "present"
  }`;

  let employmentType: string = type;
  if (type === "Consultant") {
    employmentType = `${employer} ${type.toLowerCase()}`;
  } else if (type === "Contract") {
    employmentType = `${employer} ${type.toLowerCase()}`;
  }

  return (
    <li>
      <div className="relative pb-8">
        <Connector />
        <div className="relative flex items-start space-x-3">
          <LogoWrapper backgroundColor={logoBackgroundColor}>
            {logo}
          </LogoWrapper>
          <div className="min-w-0 flex-1">
            <div className="font-bold leading-tight">
              {/* <a className="anchor-link" href={`#${slug}`}> */}
              {title}, {company ? company : employer}
              {/* </a> */}
            </div>
            <div className="text-sm text-gray-500">
              {tenure} /&nbsp;{employmentType}
            </div>
            <div className="mt-1 font-light">
              <p>{description}</p>
              {bullets.length > 0 ? (
                <ul className="mt-2 ml-7 list-disc text-sm text-gray-800 dark:text-gray-300">
                  {bullets.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Timeline.Milestone = ({
  logo,
  logoBackgroundColor,
  icon,
  milestone,
  description,
  date,
  connectorVisibile = true,
}: Milestone) => {
  // let source = milestone;

  // if (React.isValidElement(milestone)) {
  //   source = React.Children.map(milestone.props.children, (value) =>
  //     typeof value === "string" ? value : value.props.children
  //   ).join();
  // }

  // let slug = `${source
  //   .toString()
  //   .replace(/,/g, "")
  //   .replace(/[\.\s]/g, "-")
  //   .toLowerCase()}-${date.getFullYear()}`;

  return (
    <>
      <li>
        <div className="relative pb-8">
          {connectorVisibile ? <Connector /> : null}
          <div className="relative flex items-start space-x-3">
            {logo ? (
              <LogoWrapper backgroundColor={logoBackgroundColor}>
                {logo}
              </LogoWrapper>
            ) : icon ? (
              <IconWrapper>{icon}</IconWrapper>
            ) : null}
            <div className={`min-w-0 flex-1 ${logo ? "py-2.5" : "py-1.5"}`}>
              <p
                className="font-bold text-lg leading-tight"
                // className="font-bold text-lg leading-tight anchor-link cursor-pointer"
                // onClick={() => {
                //   window.location.hash = slug;
                // }}
              >
                {milestone}
                {date ? (
                  <span className="font-normal text-sm text-gray-500">
                    {" "}
                    /&nbsp;{formatDistanceToNow(date)} ago
                  </span>
                ) : null}
              </p>
              {description ? (
                <div className="mt-1 font-light">{description}</div>
              ) : null}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

function Connector() {
  return (
    <span
      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-300 dark:bg-gray-700"
      aria-hidden="true"
    />
  );
}

interface LogoWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
}

function LogoWrapper({ children, backgroundColor }: LogoWrapperProps) {
  return (
    <div className="relative">
      <div
        className="h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-700 dark:ring-gray-900 overflow-hidden"
        style={backgroundColor && { backgroundColor }}
      >
        {children}
      </div>
    </div>
  );
}
interface IconWrapperProps {
  children: ReactNode;
}

function IconWrapper({ children }: IconWrapperProps) {
  return (
    <div className="relative px-1">
      <div className="h-8 w-8 px-2 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-100 dark:ring-gray-900">
        {children}
      </div>
    </div>
  );
}

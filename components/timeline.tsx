import { ReactNode } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { Job, Milestone } from "../resume";
import { DefaultLogo } from "../resume/logos";

const DEFAULT_CONNECTOR_COLOR = "bg-gray-300";

interface Props {
  children: ReactNode;
}

export const Timeline = ({ children }: Props) => (
  <div className="flow-root mt-12">
    <ul className="-mb-8">{children}</ul>
  </div>
);

Timeline.Job = ({
  logo = DefaultLogo,
  logoBackgroundColor,
  connectorColor,
  company,
  employer,
  title,
  startDate,
  endDate,
  type,
  description,
  bullets,
}: Job) => {
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
        <Connector backgroundColor={connectorColor} />
        <div className="relative flex items-start space-x-3">
          <LogoWrapper backgroundColor={logoBackgroundColor}>
            {logo}
          </LogoWrapper>
          <div className="min-w-0 flex-1 py-0.5">
            <div className="font-bold leading-tight">
              {title}, {company ? company : employer}
            </div>
            <div className="-mt-0.5 text-sm text-gray-500">
              {tenure}&nbsp;/&nbsp;{employmentType}
            </div>
            <div className="mt-1 font-light">
              <p>{description}</p>
              {bullets.length > 0 ? (
                <ul className="mt-2 ml-7 list-disc text-sm text-gray-800">
                  {bullets.map((text) => (
                    <li key={text}>{text}</li>
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
  icon,
  logo,
  logoBackgroundColor,
  milestone,
  description,
  date,
  connectorVisibile = true,
}: Milestone) => (
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
            <p className="font-bold text-lg leading-tight">
              {milestone}
              {date ? (
                <span className="font-normal text-sm text-gray-500 dark:text-gray-600">
                  &nbsp;/&nbsp;{formatDistanceToNow(date)} ago
                </span>
              ) : null}
            </p>
            {description ? (
              <p className="mt-1 font-light">{description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  </>
);

interface ConnectorProps {
  backgroundColor?: string;
}

function Connector({ backgroundColor }: ConnectorProps) {
  return (
    <span
      className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-300"
      style={backgroundColor && { backgroundColor }}
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
        className="h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-200 dark:ring-gray-900 overflow-hidden"
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

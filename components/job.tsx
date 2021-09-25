import { format } from "date-fns";

import { EventConnector } from "@/components/event-connector";
import { EventLogoWrapper } from "@/components/event-logo-wrapper";
import { JobEvent } from "@/lib/resume";
import { DefaultLogo } from "@/logos/default";

export const Job = ({
  title,
  company,
  startDate,
  endDate,
  employer,
  employmentType,
  description,
  bullets,
  logo = DefaultLogo,
  logoBackgroundColor,
  connectorVisibile = true,
}: JobEvent) => {
  const tenure = `${format(startDate, "MMM yyyy")} – ${
    endDate ? format(endDate, "MMM yyyy") : "present"
  }`;

  let employmentTypeText: string;
  switch (employmentType) {
    case "Consultant":
    case "Contract":
      employmentTypeText = `${employer} ${employmentType.toLowerCase()}`;
      break;
    case "FTE":
      employmentTypeText = undefined;
      break;
    default:
      employmentTypeText = employmentType;
      break;
  }

  return (
    <li>
      <div className="relative pb-8">
        {connectorVisibile && <EventConnector />}
        <div className="relative flex items-start space-x-3">
          <EventLogoWrapper backgroundColor={logoBackgroundColor}>
            {logo}
          </EventLogoWrapper>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold leading-tight">
              {title}, {company ? company : employer}
            </h3>
            <div className="text-sm text-gray-500">
              {tenure}
              {employmentTypeText && (
                <>
                  &nbsp;<span aria-hidden="true">/</span>&nbsp;
                  {employmentTypeText}
                </>
              )}
            </div>
            <div className="mt-1 font-light">
              <p>{description}</p>
              {bullets.length > 0 && (
                <ul className="mt-2 ml-7 list-disc text-sm text-gray-800 dark:text-gray-300">
                  {bullets.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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

  let employmentTypeText: string = employmentType;
  if (employmentType === "Consultant") {
    employmentTypeText = `${employer} ${employmentType.toLowerCase()}`;
  } else if (employmentType === "Contract") {
    employmentTypeText = `${employer} ${employmentType.toLowerCase()}`;
  }

  return (
    <li>
      <div className="relative pb-8">
        {connectorVisibile ? <EventConnector /> : null}
        <div className="relative flex items-start space-x-3">
          <EventLogoWrapper backgroundColor={logoBackgroundColor}>
            {logo}
          </EventLogoWrapper>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold leading-tight">
              {title}, {company ? company : employer}
            </h3>
            <div className="text-sm text-gray-500">
              {tenure} /&nbsp;{employmentTypeText}
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

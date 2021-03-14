import { ReactNode } from "react";
import { formatDistanceToNow } from "date-fns";

import { MilestoneEvent } from "@/lib/resume";
import { EventConnector } from "@/components/event-connector";
import { EventLogoWrapper } from "@/components/event-logo-wrapper";

export const Milestone = ({
  milestone,
  date,
  description,
  icon,
  logo,
  logoBackgroundColor,
  connectorVisibile = true,
}: MilestoneEvent) => (
  <>
    <li>
      <div className="relative pb-8">
        {connectorVisibile ? <EventConnector /> : null}
        <div className="relative flex items-start space-x-3">
          {logo ? (
            <EventLogoWrapper backgroundColor={logoBackgroundColor}>
              {logo}
            </EventLogoWrapper>
          ) : icon ? (
            <EventIconWrapper>{icon}</EventIconWrapper>
          ) : null}
          <div className={`min-w-0 flex-1 ${logo ? "py-2.5" : "py-1.5"}`}>
            <h3 className="inline font-bold text-lg leading-tight">
              {milestone}
            </h3>
            <span className="font-normal text-sm text-gray-500">
              {" "}
              <span aria-hidden="true">/</span>&nbsp;
              {formatDistanceToNow(date)} ago
            </span>
            <p className="mt-1 font-light">{description}</p>
          </div>
        </div>
      </div>
    </li>
  </>
);

interface EventIconWrapperProps {
  children: ReactNode;
}

function EventIconWrapper({ children }: EventIconWrapperProps) {
  return (
    <div className="relative px-1">
      <div className="h-8 w-8 px-2 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-100 dark:ring-gray-900">
        {children}
      </div>
    </div>
  );
}

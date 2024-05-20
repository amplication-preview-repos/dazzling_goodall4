import { Tickets as TTickets } from "../api/tickets/Tickets";

export const TICKETS_TITLE_FIELD = "subject";

export const TicketsTitle = (record: TTickets): string => {
  return record.subject?.toString() || String(record.id);
};

import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";
import { User } from "@/domain/user/entities/user.entity";
import { ServiceStep } from "./service-step";
import { ServiceTree } from "./service-tree.entity";

export enum TicketStatus {
  PENDENT = "PENDENT",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
export interface TicketProps {
  serviceTree: ServiceTree;
  status: TicketStatus;
  steps: ServiceStep;
  requester: User;
  currentAttendant: User;
  createdAt: Date;
}

export class Ticket extends Entity<TicketProps> {
  static create(
    props: Optional<TicketProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const ticket = new Ticket(
      {
        ...props,
        status: props.status ?? TicketStatus.PENDENT,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return ticket;
  }
}

import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";
import { User } from "@/domain/user/entities/user.entity";
import { ServiceStep } from "./service-step";
import { ServiceTree } from "./service-tree.entity";

export interface TicketProps {
	serviceTree: ServiceTree;
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
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		return ticket;
	}
}

import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";

export interface PositionProps {
	name: string;
	active?: boolean;
	createAt: Date;
}

export class Position extends Entity<PositionProps> {
	static create(
		props: Optional<PositionProps, "createAt">,
		id?: UniqueEntityID,
	) {
		const position = new Position(
			{
				...props,
				active: props.active ?? true,
				createAt: props.createAt ?? new Date(),
			},
			id,
		);

		return position;
	}
}

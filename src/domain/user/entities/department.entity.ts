import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";

export interface DepartmentProps {
	name: string;
	active?: boolean;
	createdAt: Date;
}

export class Department extends Entity<DepartmentProps> {
	static create(
		props: Optional<DepartmentProps, "createdAt">,
		id?: UniqueEntityID,
	) {
		const department = new Department(
			{
				...props,
				active: props.active ?? true,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		return department;
	}
}

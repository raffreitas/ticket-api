import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";
import { Department } from "./department.entity";
import { Position } from "./position.entity";

export interface UserProps {
	name: string;
	department: Department;
	position: Position;
	active?: boolean;
	createdAt: Date;
}

export class User extends Entity<UserProps> {
	static create(props: Optional<UserProps, "createdAt">, id?: UniqueEntityID) {
		const user = new User(
			{
				...props,
				active: props.active ?? true,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		return user;
	}
}

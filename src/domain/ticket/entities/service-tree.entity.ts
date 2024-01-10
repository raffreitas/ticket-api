import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";
import { Question } from "./question.entity";
import { ServiceStep } from "./service-step";

export interface ServiceTreeProps {
	name: string;
	departmentId: UniqueEntityID;
	questions: Question[];
	createdAt: Date;
	serviceStep: ServiceStep;
}

export class ServiceTree extends Entity<ServiceTreeProps> {
	public get name() {
		return this._props.name;
	}

	static create(
		props: Optional<ServiceTreeProps, "createdAt">,
		id?: UniqueEntityID,
	) {
		const serviceTree = new ServiceTree(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		return serviceTree;
	}
}

import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";

export interface ServiceStepProps {
	raw: string;
}

export class ServiceStep extends Entity<ServiceStepProps> {
	static create(props: ServiceStepProps, id?: UniqueEntityID) {
		const serviceSteps = new ServiceStep(
			{
				...props,
			},
			id,
		);

		return serviceSteps;
	}
}

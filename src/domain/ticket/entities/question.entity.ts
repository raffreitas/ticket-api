import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";

export interface QuestionProps {
	name: string;
	createdAt: Date;
}

export class Question extends Entity<QuestionProps> {
	public get name() {
		return this._props.name;
	}

	static create(
		props: Optional<QuestionProps, "createdAt">,
		id?: UniqueEntityID,
	) {
		const question = new Question(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		);

		return question;
	}
}

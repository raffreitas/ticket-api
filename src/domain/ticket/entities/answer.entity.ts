import { Entity } from "@/domain/@shared/entities/base.entity";
import { UniqueEntityID } from "@/domain/@shared/entities/unique-entity-id";
import { Optional } from "@/domain/@shared/types";
import { Question } from "./question.entity";

export interface AnswerProps {
  question: Question;
  value: unknown;
  createdAt: Date;
}

export class Answer extends Entity<AnswerProps> {
  public get question() {
    return this._props.question;
  }

  static create(
    props: Optional<AnswerProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const answer = new Answer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return answer;
  }
}

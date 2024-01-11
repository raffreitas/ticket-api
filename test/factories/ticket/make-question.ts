import { Question } from "@/domain/ticket/entities/question.entity";

export function makeQuestion(overrides?: Partial<Question>) {
	const question = Question.create({
		name: "Fake Question",
		...overrides,
	});

	return question;
}

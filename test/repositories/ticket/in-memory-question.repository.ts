import { Question } from "@/domain/ticket/entities/question.entity";
import { QuestionRepository } from "@/domain/ticket/repositories/question.repository";

export class InMemoryQuestionRepository implements QuestionRepository {
	items: Question[] = [];

	async create(question: Question) {
		this.items.push(question);
	}

	async findManyByIds(ids: string[]): Promise<Question[]> {
		const questions = this.items.filter((question) =>
			ids.includes(question.id.toString()),
		);
		return questions;
	}
}

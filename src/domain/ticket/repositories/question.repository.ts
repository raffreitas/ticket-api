import { Question } from "../entities/question.entity";

export interface QuestionRepository {
	create(question: Question): Promise<void>;
	findManyByIds(ids: string[]): Promise<Question[]>;
}

import { Question } from "../entities/question.entity";
import { QuestionRepository } from "../repositories";

interface CreateQuestionInput {
  name: string;
}

type CreateQuestionOutput = { question: Question };

export class CreateQuestionUseCase {
  constructor(private readonly questionRepository: QuestionRepository) {}

  async execute({ name }: CreateQuestionInput): Promise<CreateQuestionOutput> {
    const question = Question.create({ name });

    await this.questionRepository.create(question);

    return { question };
  }
}

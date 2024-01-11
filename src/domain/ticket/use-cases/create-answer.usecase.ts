import { Answer } from "../entities/answer.entity";
import { QuestionRepository } from "../repositories";
import { AnswerRepository } from "../repositories/answer-repository";

export interface CreateAnswerInput {
  questionId: string;
  value: string;
}

export class CreateAnswerUseCase {
  constructor(
    private readonly answerRepository: AnswerRepository,
    private readonly questionRepository: QuestionRepository,
  ) {}

  async execute({ questionId, value }: CreateAnswerInput) {
    const question = await this.questionRepository.findById(questionId);

    if (!question) {
      throw new Error("Question not exists.");
    }

    const answer = Answer.create({
      question,
      value,
    });

    await this.answerRepository.create(answer);

    return { answer };
  }
}

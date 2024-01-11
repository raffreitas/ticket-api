import { Answer } from "@/domain/ticket/entities/answer.entity";
import { AnswerRepository } from "@/domain/ticket/repositories/answer.repository";

export class InMemoryAnswerRepository implements AnswerRepository {
  items: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.items.push(answer);
  }
}

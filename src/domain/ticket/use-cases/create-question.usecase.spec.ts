import { InMemoryQuestionRepository } from "@test/repositories/ticket/in-memory-question.repository";
import { CreateQuestionUseCase } from "./create-question.usecase";

let sut: CreateQuestionUseCase;
let inMemoryQuestionRepository: InMemoryQuestionRepository;

describe("Create Question Use Case", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository);
  });

  it("should be able to create a question", async () => {
    const input = {
      name: "Test Question",
    };

    await sut.execute(input);

    expect(inMemoryQuestionRepository.items[0].name).toEqual(input.name);
  });
});

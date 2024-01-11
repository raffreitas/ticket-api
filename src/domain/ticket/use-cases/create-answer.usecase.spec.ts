import { makeQuestion } from "@test/factories/ticket";
import {
  InMemoryAnswerRepository,
  InMemoryQuestionRepository,
} from "@test/repositories/ticket";
import { CreateAnswerUseCase } from "./create-answer.usecase";

let inMemoryQuestionRepository: InMemoryQuestionRepository;
let inMemoryAnswerRepository: InMemoryAnswerRepository;

let sut: CreateAnswerUseCase;

describe("Create Answer UseCase", () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    inMemoryAnswerRepository = new InMemoryAnswerRepository();
    sut = new CreateAnswerUseCase(
      inMemoryAnswerRepository,
      inMemoryQuestionRepository,
    );
  });
  it("should be able to create a answer", async () => {
    const question = makeQuestion();
    inMemoryQuestionRepository.create(question);

    const input = {
      questionId: question.id.toString(),
      value: "Fake Answer Value",
    };

    await sut.execute(input);

    expect(
      inMemoryAnswerRepository.items[0].question.equals(question),
    ).toBeTruthy();
  });
});

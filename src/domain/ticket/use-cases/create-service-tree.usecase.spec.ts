import { makeQuestion } from "@test/factories/ticket";
import { makeServiceStep } from "@test/factories/ticket/make-service-steps";
import { makeDepartment } from "@test/factories/user";
import {
  InMemoryQuestionRepository,
  InMemoryServiceStepRepository,
  InMemoryServiceTreeRepository,
} from "@test/repositories/ticket";
import { InMemoryDepartmentRepository } from "@test/repositories/user/in-memory-department.repository";
import { CreateServiceTreeUseCase } from "./create-service-tree.usecase";

let inMemoryServiceTreeRepository: InMemoryServiceTreeRepository;
let inMemoryQuestionRepository: InMemoryQuestionRepository;
let inMemoryDepartmentRepository: InMemoryDepartmentRepository;
let inMemoryServiceStepRepository: InMemoryServiceStepRepository;
let sut: CreateServiceTreeUseCase;

describe("Create Service Tree Use Case", () => {
  beforeEach(() => {
    inMemoryServiceTreeRepository = new InMemoryServiceTreeRepository();
    inMemoryQuestionRepository = new InMemoryQuestionRepository();
    inMemoryDepartmentRepository = new InMemoryDepartmentRepository();
    inMemoryServiceStepRepository = new InMemoryServiceStepRepository();

    sut = new CreateServiceTreeUseCase(
      inMemoryServiceTreeRepository,
      inMemoryQuestionRepository,
      inMemoryDepartmentRepository,
      inMemoryServiceStepRepository,
    );
  });

  it("should be able to create a service tree", async () => {
    const department = makeDepartment();
    const question1 = makeQuestion();
    const question2 = makeQuestion();
    const serviceStep = makeServiceStep();

    inMemoryDepartmentRepository.create(department);
    inMemoryQuestionRepository.create(question1);
    inMemoryQuestionRepository.create(question2);
    inMemoryServiceStepRepository.create(serviceStep);

    const input = {
      name: "Testing Service Tree",
      departmentId: department.id.toString(),
      questionsIds: [question1.id.toString(), question2.id.toString()],
      stepId: serviceStep.id.toString(),
    };

    await sut.execute(input);

    expect(inMemoryServiceTreeRepository.items[0].name).toEqual(input.name);
  });
});

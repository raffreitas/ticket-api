import { DepartmentRepository } from "@/domain/user/repositories";
import { ServiceTree } from "../entities/service-tree.entity";
import {
	QuestionRepository,
	ServiceStepRepository,
	ServiceTreeRepository,
} from "../repositories";

interface CreateServiceTreeInput {
	name: string;
	departmentId: string;
	questionsIds: string[];
	stepId: string;
}

export class CreateServiceTreeUseCase {
	constructor(
		private readonly serviceTreeRepository: ServiceTreeRepository,
		private readonly questionRepository: QuestionRepository,
		private readonly departmentRepository: DepartmentRepository,
		private readonly serviceStepRepository: ServiceStepRepository,
	) {}

	async execute(input: CreateServiceTreeInput) {
		const { name, departmentId, questionsIds, stepId } = input;

		const [questions, department, serviceStep] = await Promise.all([
			this.questionRepository.findManyByIds(questionsIds),
			this.departmentRepository.findById(departmentId),
			this.serviceStepRepository.findById(stepId),
		]);

		if (questions.length !== questionsIds.length) {
			//
			throw new Error("Question not found");
		}

		if (!department) {
			//
			throw new Error("Department not found.");
		}

		if (!serviceStep) {
			//
			throw new Error("Service step not found.");
		}

		const serviceTree = ServiceTree.create({
			name,
			departmentId: department.id,
			questions,
			serviceStep,
		});

		await this.serviceTreeRepository.create(serviceTree);

		return { serviceTree };
	}
}

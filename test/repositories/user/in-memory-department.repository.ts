import { Department } from "@/domain/user/entities/department.entity";
import { DepartmentRepository } from "@/domain/user/repositories";

export class InMemoryDepartmentRepository implements DepartmentRepository {
	items: Department[] = [];

	async create(department: Department): Promise<void> {
		this.items.push(department);
	}

	async findById(id: string): Promise<Department | null> {
		const department = this.items.find(
			(department) => department.id.toString() === id,
		);

		if (!department) {
			return null;
		}

		return department;
	}
}

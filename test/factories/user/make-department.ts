import { Department } from "@/domain/user/entities/department.entity";
import { faker } from "@faker-js/faker";

export function makeDepartment(overrides?: Partial<Department>) {
	const department = Department.create({
		name: faker.person.jobArea(),
		...overrides,
	});

	return department;
}

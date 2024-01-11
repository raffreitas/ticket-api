import { Department } from "../entities/department.entity";

export interface DepartmentRepository {
	create(department: Department): Promise<void>;
	findById(id: string): Promise<Department | null>;
}

import { User } from "@/domain/user/entities/user.entity";
import { faker } from "@faker-js/faker";
import { makeDepartment } from "./make-department";
import { makePosition } from "./make-position";

export function makeUser(overrides?: Partial<User>) {
	const department = makeDepartment();
	const position = makePosition();

	const user = User.create({
		name: faker.person.fullName(),
		department,
		position,
		...overrides,
	});
	return user;
}

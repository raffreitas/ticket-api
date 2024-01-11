import { Position } from "@/domain/user/entities/position.entity";
import { faker } from "@faker-js/faker";

export function makePosition(overrides?: Partial<Position>) {
	const position = Position.create({
		name: faker.person.jobTitle(),
		...overrides,
	});

	return position;
}

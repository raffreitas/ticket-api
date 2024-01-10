import { randomUUID } from "node:crypto";

export class UniqueEntityID {
	private readonly value: string;

	constructor(id?: string) {
		this.value = id ?? randomUUID();
	}

	toString() {
		return this.value.toString();
	}

	toValue() {
		return this.value;
	}

	equals(id: UniqueEntityID) {
		return this.value === id.toValue();
	}
}

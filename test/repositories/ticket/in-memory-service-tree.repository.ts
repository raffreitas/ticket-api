import { ServiceTree } from "@/domain/ticket/entities/service-tree.entity";
import { ServiceTreeRepository } from "@/domain/ticket/repositories";

export class InMemoryServiceTreeRepository implements ServiceTreeRepository {
	items: ServiceTree[] = [];
	async create(serviceTree: ServiceTree) {
		this.items.push(serviceTree);
	}
}

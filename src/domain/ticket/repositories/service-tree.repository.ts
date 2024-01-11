import { ServiceTree } from "../entities/service-tree.entity";

export interface ServiceTreeRepository {
	create(serviceTree: ServiceTree): Promise<void>;
}

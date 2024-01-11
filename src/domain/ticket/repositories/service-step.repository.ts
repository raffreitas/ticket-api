import { ServiceStep } from "../entities/service-step";

export interface ServiceStepRepository {
  findById(id: string): Promise<ServiceStep | null>;
  create(serviceStep: ServiceStep): Promise<void>;
}

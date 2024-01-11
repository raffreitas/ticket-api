import { ServiceStep } from "@/domain/ticket/entities/service-step";
import { ServiceStepRepository } from "@/domain/ticket/repositories";

export class InMemoryServiceStepRepository implements ServiceStepRepository {
  items: ServiceStep[] = [];

  async create(serviceStep: ServiceStep): Promise<void> {
    this.items.push(serviceStep);
  }

  async findById(id: string): Promise<ServiceStep | null> {
    const serviceStep = this.items.find(
      (serviceStep) => serviceStep.id.toString() === id,
    );

    if (!serviceStep) {
      return null;
    }

    return serviceStep;
  }
}

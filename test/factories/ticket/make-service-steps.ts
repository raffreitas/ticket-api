import { ServiceStep } from "@/domain/ticket/entities/service-step";

export function makeServiceStep(override?: Partial<ServiceStep>) {
  const serviceStep = ServiceStep.create({
    raw: ["1", "2", "3", "4"],
    ...override,
  });

  return serviceStep;
}

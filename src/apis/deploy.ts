import { deployInstance } from './instance';

export async function createNamespace({ namespace }: { namespace: string }) {
  return deployInstance.get(`/start/${namespace}`);
}

export async function getNamespaces() {
  return deployInstance.get('/list');
}

export async function deleteService({ namespace }: { namespace: string }) {
  return deployInstance.delete(`/stop/${namespace}`);
}

import { deployInstance } from './instance';

interface CreatePodParams {
  namespace: string;
  name: string;
  port: number;
}

export async function createNamespace({ namespace }: { namespace: string }) {
  return deployInstance.get(`/${namespace}/init`);
}

export async function getNamespaces() {
  return deployInstance.get('/list');
}

export async function getPods({ namespace }: { namespace: string }) {
  return deployInstance.get(`/${namespace}/pods`);
}

export async function createPod({ namespace, name, port }: CreatePodParams) {
  return deployInstance.post(`/${namespace}/start`, {
    deploymentName: name,
    serviceName: name,
    nodePort: port,
  });
}

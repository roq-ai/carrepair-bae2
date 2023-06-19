const mapping: Record<string, string> = {
  appointments: 'appointment',
  garages: 'garage',
  services: 'service',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

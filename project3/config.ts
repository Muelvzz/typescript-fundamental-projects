export const validStatuses = ['attack', 'heal'] as const;
export type status = typeof validStatuses[number]
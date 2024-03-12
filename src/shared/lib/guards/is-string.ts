export function isString(value: unknown): value is string {
  return value && typeof value === 'string';
}

export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

export function isString(value: unknown): value is string {
  return value && typeof value === 'string';
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

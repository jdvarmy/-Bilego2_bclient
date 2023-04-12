import { Indexed } from 'frontend/app/types';

export function merge(lhs: Indexed | undefined, rhs: Indexed | undefined): Indexed | undefined {
  if (!lhs && !rhs) {
    return undefined;
  }
  if (lhs && !rhs) {
    return lhs;
  }
  if (!lhs && rhs) {
    return rhs;
  }

  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export const ProjectName = 'Bilego' as const;

export const timingFunction = 'cubic-bezier(0, .9, .57, 1)' as const;

export type Indexed<T = unknown> = Record<string | symbol, T>;

export type PagePropsType = {
  params: Record<string, string | string[] | undefined>;
  searchParams: Record<string, string | string[] | undefined>;
};

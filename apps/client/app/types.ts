export const ProjectName = 'Bilego' as const;

export type Indexed<T = unknown> = Record<string | symbol, T>;

export type PagePropsType = {
  params: Record<string, string | string[] | undefined>;
  searchParams: Record<string, string | string[] | undefined>;
};

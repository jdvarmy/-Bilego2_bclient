export interface EventDate {
  uid: string;
  dateFrom?: string;
  dateTo?: string;
  closeDateTime?: string;
}

export enum ImageSizes {
  origin = 'origin',
  // xs = '200x278',
  s = '430x366',
  m = '660x470',
  // l = '1340x560',
  xl = '1920x1080',
}

export interface MediaDto {
  id: number;
  name: string;
  originalName: string;
  path: string[];
  mimetype: string;
  size: number;
}

export type PostType<T> = { items: T[]; props: { total: number; offset?: number } };

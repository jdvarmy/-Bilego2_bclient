export interface ISlide {
  slug: string;
  title: string;
  ageRestriction: number;
  eventDate: { dateFrom: string; dateTo: string; closeDateTime?: string };
  item: { slug: string; title: string };
  image: {
    name: string;
    originalName: string;
    path: string[];
    mimetype: string;
  };
  taxonomy?: {
    slug: string;
    name: string;
    type: 'genre' | 'category' | 'selection' | 'feeling' | 'type';
  }[];
  fragment?: string | null;
}

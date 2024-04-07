import {
  AcademicCapIcon,
  FilmIcon,
  HeartIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  SparklesIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

export const menu = {
  format: [
    { name: 'Концерты', slug: '/events?category=concerts', Icon: TicketIcon },
    { name: 'Лекции', slug: '/events?category=lectures', Icon: MicrophoneIcon },
    { name: 'Фестивали', slug: '/events?category=festivals', Icon: FilmIcon },
    { name: 'Выставки', slug: '/events?category=exhibitions', Icon: PuzzlePieceIcon },
  ],
  selection: [
    { name: 'Выходные', slug: '/events?weekends=1', Icon: SparklesIcon },
    { name: 'Ближайшие', slug: '/events', Icon: RocketLaunchIcon },
    { name: 'Детям', slug: '/events?category=kids', Icon: AcademicCapIcon },
    { name: 'Bilego', slug: '/events?category=bilego', Icon: HeartIcon },
  ],
} as const;

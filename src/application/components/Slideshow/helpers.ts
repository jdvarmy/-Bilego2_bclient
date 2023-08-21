const slideshowDateFormatter = new Intl.DateTimeFormat('ru', {
  month: 'long',
  day: 'numeric',
});
const slideshowWeekFormatter = new Intl.DateTimeFormat('ru', {
  weekday: 'short',
});
const slideshowTimeFormatter = new Intl.DateTimeFormat('ru', {
  hour: '2-digit',
  minute: '2-digit',
});

export const slideshowFormatter = (dateStr?: string): string => {
  if (!dateStr) {
    return '';
  }

  const date = new Date(dateStr);

  const day = slideshowDateFormatter.format(date);
  const week = slideshowWeekFormatter.format(date);
  const time = slideshowTimeFormatter.format(date);

  return `${day}, ${week.toUpperCase()} / ${time}`;
};

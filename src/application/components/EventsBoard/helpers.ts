const boardDateFormatter = new Intl.DateTimeFormat('ru', {
  month: 'short',
  day: 'numeric',
});
const boardTimeFormatter = new Intl.DateTimeFormat('ru', {
  hour: '2-digit',
  minute: '2-digit',
});

export const eventBoardDateFormatter = (dateStr?: string): string => {
  if (!dateStr) {
    return '';
  }

  const date = new Date(dateStr);

  const day = boardDateFormatter.format(date);
  const time = boardTimeFormatter.format(date);

  return `${day.at(-1) === '.' ? day.slice(0, -1) : day}, ${time}`;
};

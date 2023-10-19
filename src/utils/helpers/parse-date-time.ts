export const parseDateTime = (date: Date) => {
  if (!date) return null
  return {
    day: date.toLocaleDateString('en-GB', { weekday: 'long' }),
    date: date.getDate(),
    month: date.toLocaleDateString('en-GB', { month: 'short' }),
    year: date.getFullYear(),
    hours: date.getHours(),
    minutes:
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes(),
    display: date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }),
  }
}

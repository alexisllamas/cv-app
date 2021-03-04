export const getYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en', { year: 'numeric' });
};

export const toShortDate = (dateString: string, locale) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' });
};

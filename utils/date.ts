export const getYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en", { year: "numeric" });
};

export const toShortDate = (dateString: string, locale) => {
  console.log(dateString);

  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { month: "long", year: "numeric" });
};

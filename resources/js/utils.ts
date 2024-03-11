export const includesIgnoreCase = (str: string, search: string) =>
  (str ?? '').toLowerCase().includes(search.toLowerCase());

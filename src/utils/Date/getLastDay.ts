export const getLastDay = function (date: Date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();

  return new Date(year, month + 1, 0).getDate();
};

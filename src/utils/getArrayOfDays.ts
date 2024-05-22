export function getArrayOfDays(amountOfDays: number) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const dayOfWeek = new Date(year, month, 1).getDay() - 2;

  const lastDaysOfMonth = new Array(dayOfWeek).fill(0);
  const currentDaysOfMonth = [...Array(amountOfDays).keys()];
  currentDaysOfMonth.push(amountOfDays);

  return [...lastDaysOfMonth, ...currentDaysOfMonth];
}

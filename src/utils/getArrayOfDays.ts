import { getDaysInMonth } from 'date-fns';

export function getArrayOfDays(m: Date) {
  const daysInMonth = getDaysInMonth(m);

  const year = new Date(m).getFullYear();
  const month = new Date(m).getMonth();
  const dayOfWeek = new Date(year, month, 1).getDay();

  const lastMonthDays = new Array(dayOfWeek).fill(0);
  const currentMonthDays = [...Array(daysInMonth).keys()];
  currentMonthDays.shift();
  currentMonthDays.push(daysInMonth);

  const arrayOfDays = [...lastMonthDays, ...currentMonthDays];
  arrayOfDays.shift();

  return arrayOfDays;
}

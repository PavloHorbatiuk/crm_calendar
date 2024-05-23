import { getDaysInMonth } from 'date-fns';

export function getArrayOfDays(_month: Date) {
  const amountOfDays = getDaysInMonth(_month);
  const year = new Date(_month).getFullYear();
  const month = new Date(_month).getMonth();
  const dayOfWeek = new Date(year, month, 1).getDay();

  const lastDaysOfMonth = new Array(dayOfWeek).fill(0);
  const currentDaysOfMonth = [...Array(amountOfDays).keys()];
  currentDaysOfMonth.shift();
  currentDaysOfMonth.push(amountOfDays);
  const arr = [...lastDaysOfMonth, ...currentDaysOfMonth];
  arr.shift();

  return arr;
}

import { Periods } from '@/common/const/periods';

export const getPeriod = (periods: string[], value: string) => {
  const period = periods.find((index) => index === value);

  switch (period) {
    case Periods.TWO_WEEKS:
      return 0;
    case Periods.ONE_MONTH:
      return 1;
    case Periods.SIX_MONTHS:
      return 6;
    case Periods.YEAR:
      return 12;
  }
};

import { daysNames, monthNames } from '@/common/const/fullDateNames';
import { getLastDay } from '@/utils/Date';

function Grid() {
  const month = monthNames[new Date().getMonth()];
  const amountOfDays = getLastDay(new Date());
  const days = [...Array(amountOfDays).keys()];

  return (
    <div className="h-1/2 mt-1 w-full p-4 bg-white rounded-3xl shadow">
      <div className="flex justify-center items-center text-md mb-1">
        {month}
      </div>
      <div className="flex gap-28 px-20">
        {daysNames.map((dayName, i) => (
          <div key={i}>{dayName.slice(0, 3)}</div>
        ))}
      </div>
      <div className="h-48 bg-slate-400 grid grid-cols-7 p-2 gap-1">
        {days.map((day) => (
          <div key={day} className="flex justify-center bg-white"></div>
        ))}
      </div>
    </div>
  );
}

export default Grid;

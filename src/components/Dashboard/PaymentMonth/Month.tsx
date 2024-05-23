import { useState } from 'react';
import { monthNames } from '@/common/const/fullDateNames';

const getPrevMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() - 1);
const getNextMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1);

function Month() {
  const [month, setMonth] = useState(new Date());

  //TODO: type event
  const onClick = (e: any) => {
    const prev = e.target.dataset['prev'];
    prev ? setMonth(getPrevMonth(month)) : setMonth(getNextMonth(month));
  };

  return (
    <div className="flex w-40">
      <button className="mr-2 bg-slate-400" data-prev="prev" onClick={onClick}>
        left
      </button>
      <button className="ml-2 bg-slate-400" data-next="next" onClick={onClick}>
        right
      </button>
      <div>
        <div className="w-22 ml-4">{monthNames[month.getMonth()]}</div>
      </div>
    </div>
  );
}

export default Month;

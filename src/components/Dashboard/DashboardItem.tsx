import { useEffect, useState } from 'react';
import { useEventStore } from '@/store/eventStore';
import { Event } from '@/store/eventStore/types';
// import { getFullDay } from '@/utils/getFullDay';
// const day = getFullDay(new Date(date).getDay());

interface DashboardItemProps {
  event: Event;
}

function DashboardItem({ event }: DashboardItemProps) {
  const { name, date, isDone } = event;
  const [isCheck, setIsCheck] = useState<boolean>(isDone);
  const { updateEvent } = useEventStore((store) => store);

  const hours = new Date(date).getHours();

  useEffect(() => {
    (async () => {
      await updateEvent({ ...event, isDone: isCheck });
    })();
    //eslint-disable-next-line
  }, [isCheck]);

  const onChange = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-blueMoon shadow rounded-3xl mt-4">
      <div
        className={`${isCheck ? 'bg-lime-400' : 'bg-red300'}
          inline-block rounded min-h-[1em] w-2 self-stretch `}
      ></div>
      <span className="text-sm">
        {name} {hours}-00
      </span>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isCheck}
          onChange={onChange}
          className="w-5 h-5 bg-white shadow"
        />
        <label className="ms-1 text-sm  text-black dark:text-gray capitalize">
          Done
        </label>
      </div>
    </div>
  );
}

export default DashboardItem;

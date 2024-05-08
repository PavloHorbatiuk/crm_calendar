import { useEventStore } from '@/store/eventStore';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import { useShallow } from 'zustand/react/shallow';
import EventChart from '../EventsChart/EventsChart';

function Dashboard() {
  const events = useEventStore(useShallow((state) => state.events));
  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <div className="h-full">
        <div className="h-1/2 flex-auto flex gap-1 ">
          <div className="max-w-[18rem] shadow min-w-44 w-full p-4 bg-white rounded-3xl">
            <div className="flex justify-between p-2  underline">
              <span>Angelina 13-00</span>
              <div className="flex items-center">
                <input type="checkbox" className="w-5 h-5" />
                <label className="ms-2  text-gray dark:text-gray capitalize">
                  Done
                </label>
              </div>
            </div>
          </div>
          <div className="h-full w-full p-4 bg-white rounded-3xl shadow">
            <EventChart events={events} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

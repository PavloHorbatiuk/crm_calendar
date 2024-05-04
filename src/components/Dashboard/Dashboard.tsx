import { useEventStore } from '@/store/eventStore';
import { CardTitle } from '../ui/CardTitle/CardTitle';
import { CardWrapper } from '../ui/CardWrapper/CardWrapper';
import { useShallow } from 'zustand/react/shallow';
import EventChart from '../EventsChart/EventsChart';

function Dashboard() {
  const events = useEventStore(useShallow((state) => state.events));
  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <CardWrapper>
        <div className="h-1/2 flex">
          <div className="max-w-[18rem] w-full p-4">To day</div>
          <div className="h-full flex-1">
            <EventChart events={events} />
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default Dashboard;

// import { useEventStore } from '@/store/eventStore';
// import { useShallow } from 'zustand/react/shallow';

import DashboardList from './DashboardList';
// import EventChart from '../EventsChart/EventsChart';
import { CardTitle } from '../ui/CardTitle/CardTitle';

function Dashboard() {
  // const events = useEventStore(useShallow((state) => state.events));
  // console.log('Dashboard ~ events:', events);

  return (
    <>
      <CardTitle>
        <h4>Dashboard</h4>
      </CardTitle>
      <div className="h-full">
        <div className="h-1/2 flex-auto flex gap-1 ">
          <div className="max-w-[18rem] shadow min-w-44 w-full p-4 bg-white rounded-3xl">
            <DashboardList />
          </div>
          <div className="h-full w-full p-4 bg-white rounded-3xl shadow">
            {/* <EventChart events={events} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

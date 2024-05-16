import { type Event } from '@/store/eventStore/types';
import DashboardSelect from './Select';
import EventChart from '@/components/EventsChart/EventsChart';

const SelectContainer: React.FC<{ events: Event[] }> = ({ events }) => {
  // const isDoneSorted = [];
  return (
    <div className="h-[15.625rem]">
      <DashboardSelect />
      <EventChart events={events} coc={1} />
    </div>
  );
};

export default SelectContainer;

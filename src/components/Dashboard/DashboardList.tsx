import { useEventStore } from '@/store/eventStore';
import { useShallow } from 'zustand/react/shallow';

import DashboardItem from './DashboardItem';

function DashboardList() {
  //TODO: fix this?
  const { events } = useEventStore(useShallow((state) => state));

  return events.map((event) => <DashboardItem key={event.id} event={event} />);
}

export default DashboardList;

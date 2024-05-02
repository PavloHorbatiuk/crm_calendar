import { RouterProvider } from '@tanstack/react-router';
import { useAuth } from './common/hooks/useAuth';
import { router } from './routes/___route.config';
import { useEventStore } from './store/eventStore';
import { useEffect } from 'react';

function App() {
  const authentication = useAuth();
  const { getAllEvents } = useEventStore();

  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

  return (
    <div className="bg-lightBlue h-screen p-5 max-sm:p-1">
      <RouterProvider router={router} context={{ authentication }} />
    </div>
  );
}

export default App;

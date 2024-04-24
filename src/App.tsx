import { RouterProvider } from '@tanstack/react-router';
import { useAuth } from './common/hooks/useAuth';
import { router } from './routes/___route.config';

function App() {
  const authentication = useAuth();
  return (
    <div className="bg-lightBlue h-screen p-5 max-sm:p-1">
      <RouterProvider router={router} context={{ authentication }} />
    </div>
  );
}

export default App;

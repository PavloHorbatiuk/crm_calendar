import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes/___route.config';

function App() {
  return (
    <div className="bg-lightBlue h-screen p-5 max-sm:p-1">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

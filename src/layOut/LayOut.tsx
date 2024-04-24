import { useAuth } from '@/common/hooks/useAuth';
import SideBar from '@/components/SideBar/SideBar';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { Outlet, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

function LayOut() {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  if (!isLogged()) {
    navigate({ to: '/login' });
    return (
      <>
        <LoginPage />
        <TanStackRouterDevtools />
      </>
    );
  }
  return (
    <>
      {isLogged() && (
        <div className="flex gap-2  h-full ">
          <SideBar />
          <div className=" flex p-2 flex-col flex-1 rounded-3xl bg-blueMoon">
            <Outlet />
            <TanStackRouterDevtools />
          </div>
        </div>
      )}
    </>
  );
}

export default LayOut;

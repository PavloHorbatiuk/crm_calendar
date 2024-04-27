import { useAuth } from '@/common/hooks/useAuth';
import SideBar from '@/components/SideBar/SideBar';
import LoginPage from '@/pages/LoginPage/LoginPage';
import { Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useEffect } from 'react';

function LayOut() {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const matchWithTitle = [...router.state.matches]
      .reverse()
      .find((d) => d.context.getTitle);

    const title = matchWithTitle?.context.getTitle() || 'Work space';
    document.title = title;
  }, [router.state.matches]);

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

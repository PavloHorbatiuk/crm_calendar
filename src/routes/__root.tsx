import LayOut from '@/layOut/LayOut';
import { AuthContext } from '@/common/hooks/useAuth';
import { createRootRouteWithContext } from '@tanstack/react-router';

type RouteContext = {
  authentication: AuthContext;
  getTitle?: () => string | Promise<string>;
};

export const Route = createRootRouteWithContext<RouteContext>()({
  beforeLoad: () => ({ getTitle: () => 'Work space' }),
  component: () => <LayOut />,
});

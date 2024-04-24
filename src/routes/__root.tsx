import LayOut from '@/LayOut/LayOut';
import { AuthContext } from '@/common/hooks/useAuth';
import { createRootRouteWithContext } from '@tanstack/react-router';

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <LayOut />,
});

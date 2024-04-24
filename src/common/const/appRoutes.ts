export enum AppRoutes {
  PROFILE = 'Profile',
  CALENDAR = 'Calendar',
  DASHBOARD = 'Dashboard',
  LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.DASHBOARD]: '/',
  [AppRoutes.LOGIN]: '/login',

  // [AppRoutes.NOT_FOUND]: "*",
};

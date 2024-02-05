import { getRout, getRoutPath, getRoutTitle } from '../functions';
import { IMuiNavigationItem, IMuiRout, ISidebarItem } from '../interfaces';

export const ROUTS: IMuiRout = {
  AUTHENTICATION: {
    path: 'auth',
    children: {
      REGISTRATION: {
        path: 'register',
        title: 'MAIN_NAVIGATION.REGISTER'
      },
      LOGIN: {
        path: 'login',
        title: 'MAIN_NAVIGATION.LOGIN'
      }
    }
  },
  DASHBOARD: {
    path: 'dashboard',
    children: {
      MAIN: {
        path: 'main',
        title: 'DASHBOARD.SIDEBAR.MAIN'
      },
      MEETINGS: {
        path: 'meetings',
        title: 'DASHBOARD.SIDEBAR.MEETINGS'
      },
      NEW_MEETING: {
        path: 'new-meeting',
        title: 'DASHBOARD.SIDEBAR.NEW_MEETING'
      },
      SIGN_OUT: {
        path: 'sing-out',
        title: 'MAIN_NAVIGATION.SING_OUT'
      }
    }
  }
};

export const MAIN_NAVIGATION_ITEMS: IMuiNavigationItem[] = [
  getRout('HOME', ROUTS),
  getRout('ABOUT_US', ROUTS),
  getRout('HOW_IT_WORKS', ROUTS),
  getRout('FOR_DEVELOPERS', ROUTS),
  getRout('AUTHENTICATION.LOGIN', ROUTS)
];

export const DASHBOARD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    path: getRoutPath('DASHBOARD.MAIN', ROUTS),
    title: getRoutTitle('DASHBOARD.MAIN', ROUTS),
    icon: 'home'
  },
  {
    path: getRoutPath('DASHBOARD.NEW_MEETING', ROUTS),
    title: getRoutTitle('DASHBOARD.NEW_MEETING', ROUTS),
    icon: 'team'
  },
  {
    path: getRoutPath('DASHBOARD.SIGN_OUT', ROUTS),
    title: getRoutTitle('DASHBOARD.SIGN_OUT', ROUTS),
    icon: 'sign-out'
  }
];

import { IMuiNavigationItem, IMuiRout } from '../interfaces';

export const getAbsolutePath = (path) => {
  return !!path ? `/${path}` : '';
};

export const getRout = (routPath: string, routs: IMuiRout): IMuiNavigationItem => {
  const steps = routPath.split('.');
  let absolutePath = '/';
  let rout;

  if (steps.length === 1) {
    return routs[steps[0]];
  }

  steps.reduce((prevValue, currentStep, index) => {
    if (index === 1) {
      rout = routs[prevValue];
      absolutePath = absolutePath === '/' ? getAbsolutePath(rout.path) : absolutePath + getAbsolutePath(rout.path);
    }

    rout = rout.children[currentStep];
    absolutePath = absolutePath === '/' ? getAbsolutePath(rout.path) : absolutePath + getAbsolutePath(rout.path);

    return rout;
  });

  return {
    ...rout,
    path: absolutePath
  };
};

export const getRoutPath = (routPath: string, routs: IMuiRout): string => {
  return getRout(routPath, routs).path;
};

export const getRoutTitle = (routPath: string, routs: IMuiRout): string => {
  return getRout(routPath, routs).title;
};

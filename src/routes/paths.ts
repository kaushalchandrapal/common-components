function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/demo';

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  demoPageMore: path(ROOTS_DASHBOARD, '/more'),
};
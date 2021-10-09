import { OVERALL_YILED, BEST_YILED, WORST_YILED } from '@assets/string';

export const isHome = (pathname) => (pathname === '/home' ? true : false);

export const yieldArr = (all, best, worst) => [
  { type: 'ALL', title: OVERALL_YILED, number: all },
  { type: 'BEST', title: BEST_YILED, number: best },
  { type: 'WORST', title: WORST_YILED, number: worst },
];

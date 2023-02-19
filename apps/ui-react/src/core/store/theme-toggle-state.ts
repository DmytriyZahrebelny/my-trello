import { atom } from 'recoil';

export const themeToggleState = atom<'light' | 'dark'>({
  key: 'themeToggle',
  default: 'light',
});

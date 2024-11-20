import { atom } from 'jotai'

export const panelSizeAtom = atom({width: 300, height: 200 });
export const panelCssSizeAtom = atom({width: 0, height: 0 });
export const sectionNumberAtom = atom({number: 1 });
export const outletSizeAtom = atom({width: 20, height: 20 });
export const outletPositionAtom = atom({left: 20, top: 20 });
export const sectionCssWidthAtom = atom(0);
export const realSectionWidthAtom = atom(0);
export const panelWrapperCssWideAtom = atom(0);

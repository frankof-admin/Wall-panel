import { atom } from "jotai";

export const panelSizeAtom = atom({ width: 10000, height: 5000 });
export const panelCssSizeAtom = atom({ width: 0, height: 0 });
export const sectionNumberAtom = atom({ number: 1 });
export const outletSizeAtom = atom({ width: 200, height: 200 });
export const outletPositionAtom = atom({ left: 200, top: 200 });
export const sectionCssWidthAtom = atom(0);
export const sectionRealWidthAtom = atom(0);
export const panelWrapperCssWideAtom = atom(0);
export const scaleAtom = atom(1);

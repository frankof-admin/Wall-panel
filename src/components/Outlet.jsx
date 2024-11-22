import React from "react";
import { useAtomValue } from "jotai";
import {
  outletSizeAtom,
  outletPositionAtom,
  panelWrapperCssWideAtom,
} from "./../atoms";
import { convertSize } from "./../utils";

export default function Outlet() {
  const panelWrapperCssWide = useAtomValue(panelWrapperCssWideAtom);
  const outletSize = useAtomValue(outletSizeAtom);
  const outletPosition = useAtomValue(outletPositionAtom);
  const outletCssSize = convertSize(outletSize, panelWrapperCssWide);
  const outletCssPosition = convertSize(outletPosition, panelWrapperCssWide);

  return (
    <div
      className="panel-outlet"
      style={{ ...outletCssSize, ...outletCssPosition }}
    ></div>
  );
}
